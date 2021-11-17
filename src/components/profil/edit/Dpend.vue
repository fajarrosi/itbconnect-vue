<template>
    <div>
         <q-dialog :model-value="dpend" @click="$emit('update:dpend', $event.target.value)" @hide="$emit('update:dpend',false)">
            <q-card class="hide-scrollbar">
                <q-card-section>
                    <div class="q-mb-md text-edit" style="font-size:17px;">PENDIDIKAN</div>
                <div class="row q-mb-lg" v-for="(pend,k) in pendidikan" :key="k">
                        <div class="col-4 text-edit">Jenjang*</div>
                        <q-select  outlined dense v-model="pend.jenjang" emit-value map-options :options="optjenjang" label="Select     Jenjang Pendidikan" bg-color="white" class="q-mb-sm col-8" />
                    <div class="col-4 text-edit">Universitas*</div>
                    <q-select  outlined dense v-model="pend.univ" emit-value map-options :options="optuniv" label="Select Universitas" bg-color="white" class="q-mb-sm col-8" />
                    <div class="col-11 q-ml-auto row" v-if="pend.univ === 2">
                        <div class="col-4 text-edit">Univ Lainnya</div>
                        <q-input
                        dense
                        outlined
                        v-model="pend.univlain"
                        placeholder="universitas lainnya"
                        class="q-mb-sm col-8"
                        bg-color="white"
                        hide-bottom-space
                        />
                        <div class="col-4 text-edit">Prodi </div>
                        <q-input
                        dense
                        outlined
                        v-model="pend.prodilain"
                        placeholder="Prodi"
                        class="q-mb-sm col-8"
                        bg-color="white"
                        hide-bottom-space
                        />
                    </div>
                    <div class="col-12 row" v-if="pend.univ === 1 ">
                        <div class="col-4 text-edit">Prodi </div>
                        <q-select  outlined dense v-model="pend.prodi" emit-value map-options :options="optprodi" label="Select Prodi" bg-color="white" class="q-mb-sm col-8" />
                    </div>
                    <div class="col-4 text-edit">Tahun Masuk </div>
                    <q-input
                        outlined
                        dense
                        lazy-rules
                        v-model="pend.tahunmasuk" mask="####" 
                        class="q-mb-sm col-8"
                        bg-color="white"
                        hide-bottom-space
                        hide-hint
                        placeholder="Tahun Masuk"
                        bottom-slots
                        >
                        <template v-slot:after>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="tahunmasuk" transition-show="scale" transition-hide="scale">
                                <q-date v-model="pend.tahunmasuk" minimal default-view="Years" emit-immediately mask="YYYY"
                                @update:model-value="checkValue"
                                >
                                <!-- <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="OK" color="primary" flat />
                                </div> -->
                                </q-date>
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                        <template v-slot:hint>
                        *) Pilih tanggal dengan mengklik icon disebelah kanan
                        </template>
                        </q-input>
                    <div class="col-4 text-edit">Tahun Keluar </div>
                    <q-input
                        outlined
                        dense
                        lazy-rules
                        v-model="pend.tahunkeluar" mask="####" 
                        class="q-mb-sm col-8"
                        bg-color="white"
                        hide-bottom-space
                        hide-hint
                        placeholder="Tahun Masuk"
                        bottom-slots
                        >
                        <template v-slot:after>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="tahunkeluar" transition-show="scale" transition-hide="scale">
                                <q-date v-model="pend.tahunkeluar" minimal default-view="Years" emit-immediately mask="YYYY"
                                @update:model-value="checkValue2"
                                >
                                <!-- <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="OK" color="primary" flat />
                                </div> -->
                                </q-date>
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                        <template v-slot:hint>
                        *) Pilih tanggal dengan mengklik icon disebelah kanan
                        </template>
                        </q-input>
                    <q-btn class="col-12" color="primary" icon="close" label="Hapus Pendidikan" flat dense @click="remove(k)" no-caps  v-if="k >0" style="font-style:italic;"/>
                </div>
                
                    <div class="row q-mt-xs justify-center " >
                        <q-btn class="col-6" color="primary" icon="add" label="Tambah Pendidikan" flat dense @click="add" no-caps   style="font-style:italic;"/>
                    </div>
                </q-card-section>
                <q-card-actions align="center" class="q-mb-md">
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dpend', false)" class="col-5"/>
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
        'dpend',
        'userbaru',
        'dminat',
        'datapendidikan',
        'jenjang',
        'prodi'
    ],
    emits:['update:dminat','update:dpend'],
    data(){
        return{
            optjenjang:[],
            optuniv:[
                {
                    label:'ITB',
                    value:1
                },
                {
                    label:'Lainnya',
                    value:2
                }
            ],
            optprodi:[],
            pendidikan:[],
            load:false,
            disabled:false,
            send:[]
        }
    },
    created(){
        this.jenjang.forEach(element => {
        let opt ={}
        opt.label = element.name
        opt.value = element.id
        this.optjenjang.push(opt)
        })
        this.prodi.forEach(element => {
            this.optprodi.push(element.name)
        })
    },
    mounted(){
        this.datapendidikan.forEach(el=>{
            if(el.is_itb){
                this.pendidikan.push({
                    jenjang:el.education_id,
                    univ:1,
                    prodilain:'',
                    univlain:'',
                    prodi:el.program_study,
                    tahunmasuk:el.entry_year,
                    tahunkeluar:el.graduated_year,
                })
            }else{
                this.pendidikan.push({
                    jenjang:el.education_id,
                    univ:2,
                    prodilain:el.program_study,
                    univlain:el.campus_name,
                    prodi:'',
                    tahunmasuk:el.entry_year,
                    tahunkeluar:el.graduated_year,
                })
            }
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
            this.load = true
            this.disabled = true
            this.pendidikan.forEach(el=>{
                if(el.univ === 1){
                    this.send.push({
                        campus_name: 'ITB',
                        education_id: el.jenjang,
                        program_study: el.prodi,
                        entry_year: el.tahunmasuk,
                        graduated_year: el.tahunkeluar,
                        is_itb: true
                    })
                }else{
                    this.send.push({
                        campus_name: el.univlain,
                        education_id: el.jenjang,
                        program_study: el.prodilain,
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
                    this.$emit('update:dminat', true)
                }else{
                    this.$emit('update:dpend', false)
                }   
            })

        },
        checkValue (val, reason, details) {
            if (reason === 'year') {
                this.$refs.tahunmasuk.hide()
            }
        },
        checkValue2 (val, reason, details) {
            if (reason === 'year') {
                this.$refs.tahunkeluar.hide()
            }
        }
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