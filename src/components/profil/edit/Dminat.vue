<template>
    <div>
        <q-dialog :model-value="dminat" @click="$emit('update:dminat', $event.target.value)" persistent full-height>
            <q-card class="hide-scrollbar">
                <div class="card-grid">
                        <q-scroll-area class="fit">
                            <q-card-section class="row justify-center items-center" style="margin-top:300px;" v-if="!loadApi">
                                <q-spinner-grid class="col-4 text-primary"/>
                                <span class="col-12 text-primary text-center q-mt-md">Memuat Data</span>
                            </q-card-section>
                <q-card-section v-else>
                        <div class="q-mb-md text-edit" style="font-size:17px;">MINAT & ORGANISASI*</div>
                        <q-select  outlined dense v-for="(inp,k) in minat" :key="k" v-model="inp.selectedorg" emit-value map-options :options="optorganisasi" label="Minat & Organisasi" bg-color="white" class="q-mb-sm">
                            <template v-slot:after>
                                <q-btn round dense flat icon="close"  @click="remove(k)"/>
                            </template>
                        </q-select>
                        <div class="row q-mt-xs justify-center " >
                            <q-btn class="col-7" color="primary" icon="add" label="Tambah Minat & Organisasi" flat dense @click="add" no-caps   style="font-style:italic;"/>
                        </div>
                    <div class="q-mb-md q-mt-lg text-edit" style="font-size:17px;" >PENGURUS DAERAH & IA PRODI</div>
                    <q-select  outlined dense v-model="selectedpengda" emit-value map-options :options="optpengda" label="IA Pengurus Daerah" bg-color="white" class="q-mb-sm" />
                    <q-select  outlined dense v-model="selectediaprodi" emit-value map-options :options="optprodi" label="IA Prodi" bg-color="white" class="q-mb-sm" />
                </q-card-section>
                </q-scroll-area>
                <q-card-actions align="center" class="q-mb-md" >
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dminat', false)" class="col-5" :disabled="btndisabled"/>
                    <q-btn  no-caps label="Simpan" color="primary" @click="onSave" class="col-5 btn-radius" :loading="load" :disabled="btndisabled"
                >
                        <template v-slot:loading>
                            <div class="row items-center">
                                <q-spinner-facebook />  
                            </div>
                        </template>
                    </q-btn>
                </q-card-actions>
                </div>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { useConnect } from 'src/composeables/useConnect'
export default {
    setup(){
        const $q = useQuasar()
        const { getData } = useConnect()
        return {
            getData,
            successNotif () {
                $q.notify({
                message: 'Organisasi berhasil diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failedNotif () {
                $q.notify({
                message: 'Organisasi gagal diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'dminat',
        'dbisnis',
        'userbaru',
        'dataorganisasi',
        'datapengda',
        'intro'
    ],
    emits:[
        'update:dminat',
        'update:dbisnis'
    ],
    created(){
        this.getData('complex/organization')
        .then(result=>{
            this.optorganisasi = result.data.data.map(({id,name})=>({label: name,value:id}))
            this.getData('complex/pengda')
            .then(result=>{
                this.optpengda = result.data.data.map(({id,name})=>({label: name,value:id}))
                this.getData('complex/iaprodi')
                .then(result=>{
                    this.optprodi = result.data.data.map(({id,name})=>({label: name,value:id}))
                    this.loadApi= true
                })
            })
        })
    },
    mounted(){
        if(this.dataorganisasi.length > 0 ){
            this.dataorganisasi.forEach(el=>{
                this.minat.push({
                    selectedorg : el.organization_id
                })
            })
        }else{
            this.minat.push({
                selectedorg:''
            })
        }
        if(this.datapengda){
            if(this.datapengda.commisariat_id !== null){
                this.selectedpengda = this.datapengda.commisariat.id
            }
            if(this.datapengda.ia_prodi_id !== null){
                this.selectediaprodi = this.datapengda.iaprodi.id
            }
        }
    },
    data(){
        return{
            minat:[],
            optorganisasi:[],
            optpengda:[],
            optprodi:[],
            selectedpengda:'',
            selectediaprodi:'',
            load:false,
            btndisabled:false,
            loadApi:false
        }
    },
    methods:{
        add(){
            this.minat.push({
                selectedorg:''
            })
        },
        remove(val){
            this.minat.splice(val,1)
        },
        onSave(){
            this.load = true
            this.btndisabled = true
            let org = ''
            if(this.minat.length > 0 ){
                org = this.minat.map(a=> a.selectedorg)
            }else{
                org =[''] 
            }
            this.$store.dispatch('myprofil/updOrg',{
                commisariat_id : this.selectedpengda,
                ia_prodi_id : this.selectediaprodi,
                organization_id : org
            })
            .then(()=>{
                this.load = false
                this.btndisabled = false
                if (this.userbaru) {
                    this.$emit('update:dminat', false)
                    this.$emit('update:intro', false)
                    this.$router.push({name:'editbisnis'})
                }else{
                    this.$emit('update:dminat', false)
                    this.$emit('update:intro', false)
                } 
                this.successNotif()  
            })
            .catch(()=>{
                this.load = false
                this.btndisabled = false
                this.$emit('update:dminat', false)
                this.$emit('update:intro', false)
                this.failedNotif()
            })
        },
    },
}
</script>

<style scoped>
.q-btn--outline::before{
    border: 2px solid currentColor;
}
.q-card{
    width: 418px;
    border-radius:10px;
}
.q-field--dense .q-field__bottom{
    padding:0;
}

</style>