<template>
    <div>
        <q-dialog :model-value="dminat" @click="$emit('update:dminat', $event.target.value)" @hide="$emit('update:dminat',false)">
            <q-card class="hide-scrollbar">
                <q-card-section>
                        <div class="q-mb-md text-edit" style="font-size:17px;">MINAT & ORGANISASI*</div>
                        <q-select  outlined dense v-for="(inp,k) in minat" :key="k" v-model="inp.selectedorg" emit-value map-options :options="optorganisasi" label="Minat & Organisasi" bg-color="white" class="q-mb-sm">
                            <template v-slot:after>
                                <q-btn round dense flat icon="close" v-if="k >0" @click="remove(k)"/>
                            </template>
                        </q-select>
                        <div class="row q-mt-xs justify-center " >
                            <q-btn class="col-7" color="primary" icon="add" label="Tambah Minat & Organisasi" flat dense @click="add" no-caps   style="font-style:italic;"/>
                        </div>
                    <div class="q-mb-md q-mt-lg text-edit" style="font-size:17px;" >PENGURUS DAERAH & IA PRODI</div>
                    <q-select  outlined dense v-model="selectedpengda" emit-value map-options :options="optpengda" label="IA Pengurus Daerah" bg-color="white" class="q-mb-sm" />
                    <q-select  outlined dense v-model="selectediaprodi" emit-value map-options :options="optprodi" label="IA Prodi" bg-color="white" class="q-mb-sm" />
                </q-card-section>
                <q-card-actions align="center" class="q-mb-md" >
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dminat', false)" class="col-5"/>
                    <q-btn  no-caps label="Simpan" color="primary" @click="onSave" class="col-5" :loading="load"
                :disabled="disabled">
                        <template v-slot:loading>
                            <div class="row items-center">
                                <q-spinner-facebook />  
                            </div>
                        </template>
                    </q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'dminat',
        'dbisnis',
        'userbaru',
        'dataorganisasi',
        'organization',
        'pengda',
        'iaprodi',
        'datapengda'
    ],
    emits:[
        'update:dminat',
        'update:dbisnis'
    ],
    created(){
        this.organization.forEach(el=>{
            let opt ={}
            opt.label = el.name
            opt.value = el.id
            this.optorganisasi.push(opt)
        })
        this.pengda.forEach(el=>{
            let opt ={}
            opt.label = el.name
            opt.value = el.id
            this.optpengda.push(opt)
        })
        this.iaprodi.forEach(el=>{
            let opt ={}
            opt.label = el.name
            opt.value = el.id
            this.optprodi.push(opt)
        })
    },
    mounted(){
        this.dataorganisasi.forEach(el=>{
            this.minat.push({
                selectedorg : el.organization_id
            })
        })
        if(this.datapengda){
            this.selectedpengda = this.datapengda.commisariat.id
            this.selectediaprodi = this.datapengda.iaprodi.id
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
            disabled:false,
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
            this.disabled = true
            let org = this.minat.map(a=> a.selectedorg)
            this.$store.dispatch('myprofil/updOrg',{
                commisariat_id : this.selectedpengda,
                ia_prodi_id : this.selectediaprodi,
                organization_id : org
            })
            .then(()=>{
                this.load = false
                this.disabled = false
                if (this.userbaru) {
                    this.$emit('update:dminat', false)
                    this.$router.push({name:'editbisnis'})
                }else{
                    this.$emit('update:dminat', false)
                }   
            })
        },
    }
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