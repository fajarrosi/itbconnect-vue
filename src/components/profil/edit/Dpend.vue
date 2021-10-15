<template>
    <div>
         <q-dialog :model-value="dpend" @click="$emit('update:dpend', $event.target.value)" persistent>
            <q-card class="hide-scrollbar">
                <q-card-section>
                    <div class="q-mb-md text-edit" style="font-size:17px;">PENDIDIKAN</div>
                <div class="row q-mb-lg" v-for="(pend,k) in pendidikan" :key="k">
                    
                    <div class="col-4 text-edit">Jenjang*</div>
                    <q-select  outlined dense v-model="pend.jenjang" emit-value map-options :options="optjenjang" label="Select Jenjang Pendidikan" bg-color="white" class="q-mb-sm col-8" />
                    <div class="col-4 text-edit">Universitas*</div>
                    <q-select  outlined dense v-model="pend.univ" emit-value map-options :options="optuniv" label="Select Universitas" bg-color="white" class="q-mb-sm col-8" />
                    <div class="col-11 q-ml-auto row" v-if="pend.univ === '2'">
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
                    <div class="col-12 row" v-if="pend.univ === '1'">
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
                    <q-btn  no-caps label="Simpan" color="primary" @click="onSave" class="col-5"/>
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
        'dminat'
    ],
    emits:['update:dminat','update:dpend'],
    data(){
        return{
            optjenjang:[
                {
                    label:'S1',
                    value:'1'
                },
                {
                    label:'S2',
                    value:'2'
                }
            ],
            optuniv:[
                {
                    label:'ITB',
                    value:'1'
                },
                {
                    label:'Lainnya',
                    value:'2'
                }
            ],
            optprodi:[
                {
                    label:'Prodi1',
                    value:'1'
                },
                {
                    label:'Prodi2',
                    value:'2'
                }
            ],
            pendidikan:[
                {
                    jenjang:'',
                    univ:'',
                    prodilain:'',
                    univlain:'',
                    prodi:'',
                    tahunmasuk:'',
                    tahunkeluar:'',
                }
            ]
        }
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
            if (this.userbaru) {
                this.$emit('update:dpend', false)
                this.$emit('update:dminat', true)
            }else{
                this.$emit('update:dpend', false)
            }   

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