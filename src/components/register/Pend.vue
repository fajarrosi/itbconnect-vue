<template>
    <div>
        <div class="text-h5 text-bold text-primary">JENJANG PENDIDIKAN</div>
        <div class="text-subtitle2 q-mt-md text-justify">
        Mohon isikan jenjang pendidikan Anda di ITB
        </div>
        <hr class="line-cards q-my-md">
        <q-form @submit.prevent.stop="onSave" ref="dform" class="q-gutter-md q-mt-sm">
            <div class="row items-center justify-between">
            <q-select  outlined dense  :modelValue="jenjang" 
            @update:modelValue="event => $emit('update:jenjang', event)"  :options="optjenjang" emit-value  map-options label="Jenjang Pendidikan Pertama di ITB" bg-color="white" 
            lazy-rules
            :rules="[
                val => val !== null && val !== '' || 'Jenjang Pendidikan tidak boleh kosong',
            ]"
            hide-bottom-space
            class="col-12"
            />
            <q-select  outlined dense  :modelValue="prodi" 
            @update:modelValue="event => $emit('update:prodi', event)"  :options="optprodi" label="Program Studi" bg-color="white" class="q-my-sm col-12" 
            lazy-rules
            :rules="[
                val => val !== null && val !== '' || 'Program Studi tidak boleh kosong',
            ]"
            hide-bottom-space
            />
            <q-input
            outlined
            dense
            :modelValue="thnmasuk"
            @update:modelValue="event => $emit('update:thnmasuk', event)" 
            mask="####"
            label="Tahun Masuk"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Tahun masuk tidak boleh kosong', val => val.length >= 4 || 'Tahun masuk harus 4 digit', val=> minimal(val), val => maksimal(val)
            ]"
            bg-color="white"
            class="col-5"
            hide-bottom-space
            bottom-slots
            />
            
            <q-input
            outlined
            dense
            :modelValue="thnkeluar"
            mask="####"
            @update:modelValue="event => $emit('update:thnkeluar', event)" 
            label="Tahun Keluar"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Tahun keluar tidak boleh kosong',val => val.length >= 4  || 'Tahun keluar harus 4 digit',val=> minimal(val),val => minimalAkhir(val), val=>maksimal(val)
            ]"
            bg-color="white"
            class="col-6"
            hide-bottom-space
            bottom-slots
            />
            
            <span class="col-12 q-mt-sm" style="padding-left:10px;">*) Rentang tahun 1920 - {{sekarang}}</span>
            <div class="col-12 row q-mt-md" style="margin-bottom:-20px;">
                <q-btn outline label="Sebelumnya" @click="$emit('update:step',1)" class="col q-mr-md btn-radius" style=" color:#707070;"
                        size="12px" 
                        no-caps/>
                <q-btn color="primary" label="Berikutnya" type="submit" class="col btn-radius"
                size="12px" 
                        no-caps
                />
            </div>
            </div>
        </q-form>
    </div>
</template>

<script>
import { date } from 'quasar'
// import { api } from 'boot/axios'
export default {
    // setup(){
  //   const options = []
  //   return {
  //     options,
  //     filterProdi(val, update){
  //       if (val === '') {
  //         update(() => {
  //           api.get('complex/prodi')
  //           .then((response)=>{
  //             console.log("response",response.data.data)
  //             response.data.data.forEach(element => {
  //               options.value = element.id

  //               // options.label = element.name
  //             });
  //           })

  //         })
  //         return
  //       }
  //       update(() => {
  //         const needle = val.toLowerCase()
  //         options.value = options.value.filter(v => v.toLowerCase().indexOf(needle) > -1)
  //       })
  //     }
  //   }
  // },
    
    props:[
        'jenjang',
        'prodi',
        'thnmasuk',
        'thnkeluar',
        'optjenjang',
        'optprodi',
        'step'
    ],
    data(){
        return{
            sekarang:''
        }
    },
    mounted(){
        this.sekarang = date.formatDate(new Date(),'YYYY')
    },
    methods:{
        onSave(){
            this.$refs.dform.validate()
            .then(valid=>{
                if(valid){
                    this.$emit('update:step',3)
                }
            })
        },
        minimal(val){
            if(val >= 1920){
                return true
            }else{
                return 'Minimal tahun 1920'
            }
        },
        maksimal(val){
            if(val <= this.sekarang){
                return true
            }else{
                return 'Maksimal tahun ' + this.sekarang
            }
        },
        minimalAkhir(val){
            if(val > this.thnmasuk){
                return true
            }else{
                return 'Tahun Akhir tidak boleh rendah dari tahun masuk'
            }
        }
    }
}
</script>

<style scoped>
.q-btn--outline::before{
  border: 2px solid currentColor;
}
</style>