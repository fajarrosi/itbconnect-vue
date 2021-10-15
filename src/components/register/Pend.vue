<template>
    <div>
        <div class="text-h5 text-bold text-primary">JENJANG PENDIDIKAN</div>
        <div class="text-subtitle2 q-mt-md text-justify">
        Mohon isikan jenjang pendidikan Anda di ITB
        </div>
        <hr class="line-cards q-my-md">
        <q-select  outlined dense  :modelValue="jenjang" 
        @update:modelValue="event => $emit('update:jenjang', event)"  :options="optjenjang" label="Jenjang Pendidikan Pertama di ITB" bg-color="white" />
        <q-select  outlined dense  :modelValue="prodi" 
        @update:modelValue="event => $emit('update:prodi', event)"  :options="optprodi" label="Program Studi" bg-color="white" class="q-my-sm" />
        <!-- <q-select  outlined dense v-model="user.selectedprodi" :options="options" label="Program Studi" bg-color="white" class="q-my-sm"  @filter="filterProdi" use-input
        input-debounce="0" /> -->
        <div class="row items-center justify-between">
        <q-input
        outlined
        dense
        :modelValue="thnmasuk"
        @update:modelValue="event => $emit('update:thnmasuk', event)" 
        
        label="Tahun Masuk"
        lazy-rules
        :rules="[
        (val) => (val && val.length > 0) || 'Tahun masuk tidak boleh kosong',
        ]"
        bg-color="white"
        class="col-6"
        hide-bottom-space
        />
        <q-input
        outlined
        dense
        :modelValue="thnkeluar"
        @update:modelValue="event => $emit('update:thnkeluar', event)" 
        label="Tahun Keluar"
        lazy-rules
        :rules="[
        (val) => (val && val.length > 0) || 'Tahun keluar tidak boleh kosong',
        ]"
        bg-color="white"
        class="col-5"
        hide-bottom-space
        />
        </div>
    </div>
</template>

<script>
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
        'optprodi'
    ],
    methods:{
            // filterProdi(val, update){
    //     if (val === '') {
    //       update(() => {
    //         this.getProdi()
    //         // options.value = stringOptions

    //         // here you have access to "ref" which
    //         // is the Vue reference of the QSelect
    //       })
    //       return
    //     }
    //     update(() => {
    //       const needle = val.toLowerCase()
    //       this.optprodi.value = this.optprodi.value.filter(v => v.toLowerCase().indexOf(needle) > -1)
    //     })
    // },
 

    }
}
</script>

<style>

</style>