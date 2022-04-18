<template>
    <div>
         <q-dialog :model-value="dpengalaman" @click="$emit('update:dpengalaman', $event.target.value)" persistent full-height>
            <q-card class="hide-scrollbar">
                    <q-form @submit.prevent.stop="onSave" ref="dform" class="q-gutter-md" style="height:100%;">
                    <div class="card-grid">
                        <q-scroll-area class="fit">
                             <q-card-section class="row justify-center items-center" style="margin-top:300px;" v-if="!loadApi">
                                <q-spinner-grid class="col-4 text-primary"/>
                                <span class="col-12 text-primary text-center q-mt-md">Memuat Data</span>
                            </q-card-section>
                            <q-card-section v-else>
                                <div class="q-mb-md text-edit" style="font-size:17px;">PENGALAMAN</div>
                            <div class="row q-mb-lg" v-for="(peng,k) in pengalaman" :key="k">
                                
                                <div class="col-4 text-edit">Perusahaan<span class="text-negative">*</span> </div>
                                <q-input
                                dense
                                outlined
                                v-model="peng.company_name"
                                placeholder="Perusahaan"
                                class="q-mb-sm col-8"
                                bg-color="white"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                (val) => (val && val.length > 0) || 'Perusahaan tidak boleh kosong',
                                ]"
                                />
                                
                                <div class="col-4 text-edit">Alamat (Kota)</div>
                                <q-input
                                dense
                                outlined
                                v-model="peng.location"
                                placeholder="Alamat perusahaan"
                                class="q-mb-sm col-8"
                                bg-color="white"
                                hide-bottom-space
                                
                                />
                                <div class="col-4 text-edit">Tahun Aktif </div>
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
                                <div class="col-4 text-edit">Posisi<span class="text-negative">*</span></div>
                                <q-input
                                dense
                                outlined
                                v-model="peng.position"
                                placeholder="Posisi"
                                class="q-mb-sm col-8"
                                bg-color="white"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                (val) => (val && val.length > 0) || 'Posisi tidak boleh kosong',
                                ]"
                                />
                                <q-btn class="col-12" color="primary" icon="close" label="Hapus Pengalaman" flat dense @click="remove(k)" no-caps  v-if="k >0" style="font-style:italic;"/>
                            </div>
                
                            <div class="row q-mt-xs justify-center " >
                                <q-btn class="col-6" color="primary" icon="add" label="Tambah Pengalaman" flat dense @click="add" no-caps   style="font-style:italic;"/>
                            </div>
                        </q-card-section>
                        </q-scroll-area>
                        <q-card-actions align="center" class="q-mb-md">
                            <q-btn  no-caps label="Kembali" outline
                            style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dpengalaman', false)" class="col-5" :disabled="disabled"/>
                            <q-btn  no-caps label="Simpan" color="primary" type="submit"  class="col-5 btn-radius" :loading="load"
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
import { useQuasar } from 'quasar'
export default {
    setup(){
        const $q = useQuasar()
        return {
            successNotif () {
                $q.notify({
                message: 'Pengalaman berhasil diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failedNotif () {
                $q.notify({
                message: 'Pengalaman gagal diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'dpengalaman',
        'dpend',
        'userbaru',
        'datapengalaman',
        'intro'
    ],
    data(){
        return{
            pengalaman:[],
            load:false,
            disabled:false,
            loadApi:false
        }
    },
    mounted(){
        setTimeout(() => {
            this.loadApi = true
        }, 500);
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
            this.$refs.dform.validate()
            .then(valid=>{
                if(valid){
                    this.load = true
                    this.disabled = true
                    this.$store.dispatch('myprofil/updExp',this.pengalaman)
                    .then(()=>{
                        this.load = false
                        this.disabled = false
                        if (this.userbaru) {
                            this.$emit('update:dpengalaman', false)
                            this.$emit('update:intro', false)
                            this.$emit('update:dpend', true)
                        }else{
                            this.$emit('update:dpengalaman', false)
                            this.$emit('update:intro', false)
                        } 
                        this.successNotif()  
                    })
                    .catch(()=>{
                        this.load = false
                        this.disabled = false
                        this.$emit('update:dpengalaman', false)
                        this.$emit('update:intro', false)
                        this.failedNotif()
                    })
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