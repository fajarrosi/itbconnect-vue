<template>
    <div>
        <div class="text-h5 text-bold text-primary">ISI BIODATA</div>
        <div class="text-subtitle2 q-mt-md text-justify">
            Mohon isikan biodata Anda dengan benar
        </div>
        <hr class="line-cards q-my-md">
        <p class="text-caption text-bold">Alamat Domisili</p>
        <q-select  outlined dense :modelValue="dalam" @update:modelValue="event => $emit('update:dalam',event)" :options="optdomisili" label="Dalam Negeri / Luar Negeri" bg-color="white" class="q-mb-sm"/>
        <div v-if="dalam.value === '1'">
            <q-select  outlined dense :modelValue="prov" @update:modelValue="event => $emit('update:prov',event)" :options="optprovinsi" label="Provinsi" bg-color="white" class="q-mb-sm"/>
            <q-select  outlined dense :modelValue="kota" @update:modelValue="event => $emit('update:kota',event)" :options="optkota" label="Kota / Kabupaten" bg-color="white" class="q-mb-sm" v-if="kotashow"/>
            <q-input
            outlined
            dense
            :modelValue="alamat"
            @update:modelValue="event => $emit('update:alamat', event)"
            label="Alamat Domisili"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Alamat Domisili tidak boleh kosong',
            ]"
            class="q-mb-sm"
            bg-color="white"
            hide-bottom-space
            />
            </div>
        <div class="luar" v-if="dalam.value === '2'">
            <q-select  outlined dense :modelValue="negara" @update:modelValue="event => $emit('update:negara',event)" :options="optnegara" label="Negara" bg-color="white" class="q-mb-sm"/>
            <q-input
            outlined
            dense
            :modelValue="alamat"
            @update:modelValue="event => $emit('update:alamat', event)"
            label="Alamat Domisili"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Alamat Domisili tidak boleh kosong',
            ]"
            class="q-mb-sm"
            bg-color="white"
            hide-bottom-space
            />
        </div>
    </div>
</template>

<script>
// import { api } from 'boot/axios'
export default {
    data(){
        return{
        optdomisili:[
            {
                label:'Dalam Negeri',
                value:'1'
            },
            {
                label:'Luar Negeri',
                value:'2'
            }
        ],
        }
    },
    props:[
        'dalam',
        'prov',
        'kota',
        'negara',
        'alamat',
        'optprovinsi',
        'optkota',
        'optnegara',
        'kotashow'
    ],
    // watch:{
    //     prov: function(val){
    //         this.optkota = []
    //         this.kotashow = false
    //         api.get(`complex/city/${val.value}`)
    //         .then((response)=>{
    //         response.data.data.forEach(element => {
    //         let opt ={}
    //         opt.label = element.name
    //         opt.value = element.id
    //         this.optkota.push(opt)
    //         this.kotashow = true
    //         });
    //     })
    //     .catch((error)=> console.log("error",error))
    //         console.log("val",val.value)
    //     }
    // }
}
</script>

<style>

</style>