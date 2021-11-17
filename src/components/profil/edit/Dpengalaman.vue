<template>
    <div>
         <q-dialog :model-value="dpengalaman" @click="$emit('update:dpengalaman', $event.target.value)" @hide="$emit('update:dpengalaman',false)">
            <q-card class="hide-scrollbar">
                <q-card-section>
                    <div class="q-mb-md text-edit" style="font-size:17px;">PENGALAMAN</div>
                <div class="row q-mb-lg" v-for="(peng,k) in pengalaman" :key="k">
                    
                    <div class="col-4 text-edit">Perusahaan*</div>
                    <q-input
                    dense
                    outlined
                    v-model="peng.company_name"
                    placeholder="Perusahaan"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    
                    <div class="col-4 text-edit">Alamat (Kota)*</div>
                    <q-input
                    dense
                    outlined
                    v-model="peng.location"
                    placeholder="Alamat perusahaan"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <div class="col-4 text-edit">Tahun Aktif*</div>
                    <q-input
                        outlined
                        dense
                        lazy-rules
                        v-model="peng.starting_year" mask="####" 
                        class="q-mb-sm col-4"
                        bg-color="white"
                        hide-bottom-space
                        hide-hint
                        placeholder="Thn Masuk"
                        bottom-slots
                        >
                    <template v-slot:after>
                        <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="tahunmasuk" transition-show="scale" transition-hide="scale">
                            <q-date v-model="peng.starting_year" minimal default-view="Years" emit-immediately mask="YYYY"
                            @update:model-value="checkValue"
                            >
                            <!-- <div class="row items-center justify-end">
                                <q-btn v-close-popup label="OK" color="primary" flat />
                            </div> -->
                            </q-date>
                        </q-popup-proxy>
                        </q-icon>
                    </template>
                    </q-input>
                    <div class="col-4 row">
                        <q-input
                        outlined
                        dense
                        lazy-rules
                        v-model="peng.end_year" mask="####" 
                        class="q-mb-none col-12"
                        bg-color="white"
                        hide-bottom-space
                        hide-hint
                        placeholder="Thn Keluar"
                        bottom-slots
                        :disable="peng.is_work"
                        >
                        <template v-slot:after>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="tahunkeluar" transition-show="scale" transition-hide="scale">
                                <q-date v-model="peng.end_year" minimal default-view="Years" emit-immediately mask="YYYY"
                                @update:model-value="checkValue2" :disable="peng.is_work"
                                >
                                <!-- <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="OK" color="primary" flat />
                                </div> -->
                                </q-date>
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                        </q-input>
                        <q-checkbox v-model="peng.is_work" label="Sampai Sekarang" class="col-12" size="xs" style="font-size:11px;" @click="sekarang(k)"/>
                    </div>
                    <div class="col-4 text-edit">Posisi*</div>
                    <q-input
                    dense
                    outlined
                    v-model="peng.position"
                    placeholder="Posisi"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <q-btn class="col-12" color="primary" icon="close" label="Hapus Pengalaman" flat dense @click="remove(k)" no-caps  v-if="k >0" style="font-style:italic;"/>
                </div>
                
                    <div class="row q-mt-xs justify-center " >
                        <q-btn class="col-6" color="primary" icon="add" label="Tambah Pengalaman" flat dense @click="add" no-caps   style="font-style:italic;"/>
                    </div>
                </q-card-section>
                <q-card-actions align="center" class="q-mb-md">
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dpengalaman', false)" class="col-5"/>
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
        'dpengalaman',
        'dpend',
        'userbaru',
        'datapengalaman'
    ],
    emits:['update:dpend','update:dpengalaman'],
    data(){
        return{
            pengalaman:[],
            load:false,
            disabled:false,
        }
    },
    mounted(){
        this.datapengalaman.forEach(el => {
            this.pengalaman.push({
                company_name: el.company_name,
                position : el.position,
                location : el.location,
                starting_year : el.starting_year,
                end_year : el.end_year,
                is_work : el.is_work
            })
        });
    },
    methods:{
        add(){
            this.pengalaman.push({
                company_name: '',
                position : '',
                location : '',
                starting_year : '',
                end_year : '',
                is_work : false,
            })
        },
        remove(val){
            this.pengalaman.splice(val,1)
        },
        sekarang(val){
            this.pengalaman[val].end_year = ''
        },
        onSave(){
            this.load = true
            this.disabled = true
            this.$store.dispatch('myprofil/updExp',this.pengalaman)
            .then(()=>{
                this.load = false
                this.disabled = false
                if (this.userbaru) {
                    this.$emit('update:dpengalaman', false)
                    this.$emit('update:dpend', true)
                }else{
                    this.$emit('update:dpengalaman', false)
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