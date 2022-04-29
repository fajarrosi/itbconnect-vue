<template>
    <div class="col-4 text-edit">Tahun Masuk<span class="text-negative">*</span> </div>
        <q-input
            outlined
            dense
            :modelValue="tahunmasuk" 
            @update:modelValue="event=> $emit('update:tahunmasuk',event)"
            mask="####" 
            class="q-mb-sm col-8"
            bg-color="white"
            hide-bottom-space
            hide-hint
            placeholder="Tahun Masuk"
            bottom-slots
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Tahun Masuk tidak boleh kosong', val => val.length >= 4 || 'Tahun masuk harus 4 digit', val=> minimal(val), val => maksimal(val)
            ]"
            >
            <template v-slot:after>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="tahunmasuk" transition-show="scale" transition-hide="scale">
                    <q-date :modelValue="tahunmasuk" minimal default-view="Years" emit-immediately mask="YYYY"
                    @update:model-value="checkValue"
                    >
                    </q-date>
                </q-popup-proxy>
                </q-icon>
            </template>
            <template v-slot:hint>
            *)Minimal tahun 1920, pilih tanggal dengan mengklik icon disebelah kanan
            </template>
        </q-input>
    <div class="col-4 text-edit">Tahun Keluar<span class="text-negative">*</span> </div>
        <q-input
        outlined
        dense
        :modelValue="tahunkeluar" 
        @update:modelValue="event=> $emit('update:tahunkeluar',event)"
        mask="####" 
        class="q-mb-sm col-8"
        bg-color="white"
        hide-bottom-space
        hide-hint
        placeholder="Tahun Masuk"
        bottom-slots
        lazy-rules
        :rules="[
        (val) => (val && val.length > 0) || 'Tahun Keluar tidak boleh kosong',val => val.length >= 4  || 'Tahun keluar harus 4 digit',val=> minimal(val),val => minimalAkhir(val), val=>maksimal(val)
        ]"
        >
        <template v-slot:after>
            <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="tahunkeluar" transition-show="scale" transition-hide="scale">
                <q-date :modelValue="tahunkeluar" minimal default-view="Years" emit-immediately mask="YYYY"
                @update:model-value="checkValue2"
                />
            </q-popup-proxy>
            </q-icon>
        </template>
        <template v-slot:hint>
        *) Maksimal tahun {{sekarang}}, pilih tanggal dengan mengklik icon disebelah kanan
        </template>
    </q-input>
</template>

<script>
import { date } from 'quasar'
export default {
    props:['tahunmasuk','tahunkeluar'],
    data(){
        return{
            sekarang:''
        }
    },
    mounted(){
        this.sekarang = date.formatDate(new Date(),'YYYY')
    },
    methods:{
        minimal(val){
            if(val >= 1920){
                return true
            }else{
                return 'Minimal tahun 1920'
            }
        },
        maksimal(val){
            if(parseInt(val) <= parseInt(this.sekarang)){
                return true
            }else{
                return 'Maksimal tahun ' + this.sekarang
            }
        },
        minimalAkhir(val){
            if(parseInt(val) > parseInt(this.tahunmasuk)){
                return true
            }else{
                return 'Tahun Akhir tidak boleh rendah dari tahun masuk'
            }
        },
        checkValue (val, reason, details) {
            this.$emit('update:tahunmasuk',val)
            console.log('val',val)
            if (reason === 'year') {
                this.$refs.tahunmasuk.hide()
            }
        },
        checkValue2 (val, reason, details) {
            this.$emit('update:tahunkeluar',val)
            console.log('val',val)
            if (reason === 'year') {
                this.$refs.tahunkeluar.hide()
            }
        }
    }
}
</script>

<style>

</style>