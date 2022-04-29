<template>
    <div>
         <q-dialog :model-value="dpend" @click="$emit('update:dpend', $event.target.value)" persistent full-height>
            <q-card class="hide-scrollbar">
                <q-form @submit.prevent.stop="onSave" ref="dform" class="q-gutter-md" style="height:100%;">
                   <div class="card-grid">
                        <q-scroll-area class="fit">
                            <q-card-section class="row justify-center items-center" style="margin-top:300px;" v-if="!loadApi">
                                <q-spinner-grid class="col-4 text-primary"/>
                                <span class="col-12 text-primary text-center q-mt-md">Memuat Data</span>
                            </q-card-section>
                    <q-card-section v-else>
                        <div class="q-mb-md text-edit" style="font-size:17px;">PENDIDIKAN</div>
                    <div class="row q-mb-sm" v-for="(pend,k) in pendidikan" :key="k">
                        <q-separator style="background:#CCDBDC;height:5px;margin-top:0;margin-bottom:16px;" class="col-12" v-if="k > 0" />
                            <div class="col-4 text-edit">Jenjang<span class="text-negative">*</span></div>
                            <q-select  outlined dense v-model="pend.jenjang" emit-value map-options :options="optjenjang" label="Select     Jenjang Pendidikan" bg-color="white" class="q-mb-sm col-8" lazy-rules hide-bottom-space
                        :rules="[
                            val => val !== null && val !== '' || 'Jenjang Pendidikan tidak boleh kosong',
                        ]"/>
                        <div class="col-4 text-edit">Universitas<span class="text-negative">*</span></div>
                        <q-select  outlined dense v-model="pend.univ" :options="optuniv" label="Select Universitas" bg-color="white" class="q-mb-sm col-8" 
                        lazy-rules
                        :rules="[
                            val => val !== null && val !== '' || 'Universitas tidak boleh kosong',
                        ]"
                        hide-bottom-space
                        />
                        <div class="col-11 q-ml-auto row" v-if="pend.univ === 'Lainnya'">
                            <div class="col-4 text-edit">Universitas Lainnya<span class="text-negative">*</span></div>
                            <q-input
                            
                            dense
                            outlined
                            v-model="pend.univlain"
                            placeholder="universitas lainnya"
                            class="q-mb-sm col-8"
                            bg-color="white"
                            hide-bottom-space
                            lazy-rules
                            :rules="[
                                (val) => (val && val.length > 0) || 'Universitas lainnya tidak boleh kosong',
                            ]"
                            />
                            <div class="col-4 text-edit">Prodi<span class="text-negative">*</span> </div>
                            <q-input
                            
                            dense
                            outlined
                            v-model="pend.prodilain"
                            placeholder="Prodi"
                            class="q-mb-sm col-8"
                            bg-color="white"
                            hide-bottom-space
                            lazy-rules
                            :rules="[
                                (val) => (val && val.length > 0) || 'Prodi tidak boleh kosong',
                            ]"
                            />
                        </div>
                        <div class="col-12 row" v-if="pend.univ !== 'Lainnya' && pend.univ !== ''">
                            <div class="col-4 text-edit">Prodi<span class="text-negative">*</span> </div>
                            <q-select
                            outlined dense v-model="pend.prodi" emit-value map-options :options="optprodi" label="Select Prodi" bg-color="white" class="q-mb-sm col-8" 
                            lazy-rules
                            :rules="[
                                val => val !== null && val !== '' || 'Prodi tidak boleh kosong',
                            ]"
                            hide-bottom-space
                        />
                        </div>
                        <date-pend v-model:tahunmasuk="pend.tahunmasuk" v-model:tahunkeluar="pend.tahunkeluar" />
                        <q-btn class="col-12" color="primary" icon="close" label="Hapus Pendidikan" flat dense @click="remove(k)" no-caps  v-if="k >0" style="font-style:italic;"/>
                    </div>
                    
                        <div class="row q-mt-xs justify-center " >
                            <q-btn class="col-6" color="primary" icon="add" label="Tambah Pendidikan" flat dense @click="add" no-caps   style="font-style:italic;"/>
                        </div>
                    </q-card-section>
                    </q-scroll-area>
                    <q-card-actions align="center" class="q-mb-md">
                        <q-btn  no-caps label="Kembali" outline
                        style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dpend', false)" class="col-5" :disabled="disabled"/>
                        <q-btn  no-caps label="Simpan" color="primary" type="submit" class="col-5 btn-radius" :loading="load"
                    :disabled="disabled">
                            <template v-slot:loading>
                                <div class="row items-center">
                                    <q-spinner-facebook />  
                                </div>
                            </template>
                        </q-btn>
                    </q-card-actions>
                    </div>
                </q-form>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { useQuasar,date } from 'quasar'
import { useConnect } from 'src/composeables/useConnect'
import { defineAsyncComponent } from 'vue'
export default {
    setup(){
        const $q = useQuasar()
        const { getData } = useConnect()
        return {
            getData,
            successNotif () {
                $q.notify({
                message: 'Pendidikan berhasil diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failedNotif () {
                $q.notify({
                message: 'Pendidikan gagal diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'dpend',
        'userbaru',
        'dminat',
        'datapendidikan',
        'intro',
    ],
    data(){
        return{
            optjenjang:[],
            optuniv:['ITB'],
            optprodi:[],
            pendidikan:[],
            load:false,
            disabled:false,
            send:[],
            loadApi:false
        }
    },

    mounted(){
        this.optjenjang = []
        this.optprodi = []
        this.optuniv = ['ITB']
        this.getData('complex/education')
        .then(result=>{
            this.optjenjang = result.data.data.map(({id,name})=>({label: name,value:id}))
            this.getData('complex/prodi')
            .then(result=>{
                result.data.data.forEach(element => {
                    this.optprodi.push(element.name)
                })
                this.getData('user/university')
                .then(result=>{
                    result.data.data.forEach(element=>{
                        this.optuniv.push(element.name)
                    })
                    this.optuniv.push('Lainnya')
                    this.datapendidikan.forEach(el=>{
                        if(this.optuniv.some(opt => opt.includes(el.campus_name))){
                            this.pendidikan.push({
                                jenjang:el.education_id,
                                univ:el.campus_name,
                                prodilain:'',
                                univlain:'',
                                prodi:el.program_study,
                                tahunmasuk:el.entry_year,
                                tahunkeluar:el.graduated_year,
                            })
                        }else {
                            this.pendidikan.push({
                                jenjang:el.education_id,
                                univ:'Lainnya',
                                prodilain:el.program_study,
                                univlain:el.campus_name,
                                prodi:'',
                                tahunmasuk:el.entry_year,
                                tahunkeluar:el.graduated_year,
                            })
                        }

                    })
                    this.loadApi= true
                })
            })
        })
    },
    methods:{
        add(){
            this.pendidikan.push({
                jenjang:'',
                univ:'',
                lainnya:'',
                prodi:'',
                tahunmasuk:'',
                tahunkeluar:'',
            })
        },
        remove(val){
            this.pendidikan.splice(val,1)
        },
        onSave(){
            this.$refs.dform.validate()
            .then(valid=>{
                if(valid){

                    this.load = true
                    this.disabled = true
                    this.pendidikan.forEach(el=>{
                        if(el.univ === 'ITB'){
                            this.send.push({
                                campus_name: 'ITB',
                                education_id: el.jenjang,
                                program_study: el.prodi,
                                entry_year: el.tahunmasuk,
                                graduated_year: el.tahunkeluar,
                                is_itb: true
                            })
                        }else if(el.univ === 'Lainnya'){
                            this.send.push({
                                campus_name: el.univlain,
                                education_id: el.jenjang,
                                program_study: el.prodilain,
                                entry_year: el.tahunmasuk,
                                graduated_year: el.tahunkeluar,
                                is_itb: false
                            })
                        }else {
                            this.send.push({
                                campus_name: el.univ,
                                education_id: el.jenjang,
                                program_study: el.prodi,
                                entry_year: el.tahunmasuk,
                                graduated_year: el.tahunkeluar,
                                is_itb: false
                            })
                        }
                    })
                    this.$store.dispatch('myprofil/updEdu',this.send)
                    .then(()=>{
                        this.load = false
                        this.disabled = false
                        if (this.userbaru) {
                            this.$emit('update:dpend', false)
                            this.$emit('update:intro', false)
                            this.$emit('update:dminat', true)
                        }else{
                            this.$emit('update:dpend', false)
                            this.$emit('update:intro', false)
                        }   
                        this.successNotif()
                    })
                    .catch(()=>{
                        this.load = false
                        this.disabled = false
                        this.$emit('update:dpend', false)
                        this.$emit('update:intro', false)
                        this.failedNotif()
                    })
                }
            })

        },
    },
    components:{
        'date-pend': defineAsyncComponent(() => import('./DatePend')),
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