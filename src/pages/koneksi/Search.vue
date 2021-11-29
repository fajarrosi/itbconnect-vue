<template>
    <q-page class="bg-white">
        <div v-if="firstload">
            <q-card flat >
            <q-card-section>
                <div class="row items-center">
                    <div class="col-5">Nama</div>
                    <q-input
                    dense
                    outlined
                    v-model="search.nama"
                    placeholder="Masukkan Nama Alumni"
                    class="q-mb-sm col-7"
                    bg-color="white"
                    hide-bottom-space
                    bottom-slots
                    autofocus
                    />
                    <div v-if="optprodi" class="col-12 row">
                        <div class="col-5">Jurusan</div>
                        <q-select clearable  outlined dense v-model="search.prodi" emit-value map-options :options="optprodi" label="Select Jurusan" bg-color="white" class="q-mb-sm col-7" />
                    </div>
                    <div v-if="optprofesi" class="col-12 row">
                        <div class="col-5">Profesi</div>
                        <q-select clearable  outlined dense v-model="search.profesi" emit-value map-options :options="optprofesi" label="Select Profesi" bg-color="white" class="q-mb-sm col-7" />
                    </div>
                    <div v-if="optbisnis" class="col-12 row">
                        <div class="col-5">Bidang Bisnis</div>
                        <q-select clearable  outlined dense v-model="search.bisnis" emit-value map-options :options="optbisnis" label="Select Bisnis" bg-color="white" class="q-mb-sm col-7" />
                    </div>
                    <div v-if="optminat" class="col-12 row">
                        <div class="col-5">Minat & Organisasi</div>
                        <q-select clearable  outlined dense v-model="search.minat" emit-value map-options :options="optminat" label="Select Minat & Organisasi" bg-color="white" class="q-mb-sm col-7" />
                    </div>
                    <div v-if="optpengda" class="col-12 row">
                        <div class="col-5">Pengda/Komisariat</div>
                        <q-select clearable  outlined dense v-model="search.pengda" emit-value map-options :options="optpengda" label="Select Pengda" bg-color="white" class="q-mb-sm col-7" />
                    </div>
                    <div v-if="optiaprodi" class="col-12 row">
                        <div class="col-5">IA Prodi</div>
                        <q-select clearable  outlined dense v-model="search.iaprodi" emit-value map-options :options="optiaprodi" label="Select IA Prodi" bg-color="white" class="q-mb-sm col-7" />
                    </div>
                    <q-btn color="primary" label="Tampilkan Hasil" no-caps class="col-12 q-mt-md" @click="onSearch" />
                </div>
                </q-card-section>
            </q-card>

            <div v-if="load" class="bg-white q-py-md" ref="loading">
                <div class="row q-ma-md items-center card-radius bg-white" style="border:1px solid #dcdcdc;" v-for="n in 5" :key="n" >
                    <div class="col-3 ">
                        <q-skeleton height="115px" square />
                    </div>
                    <div class="col-9 row q-pa-sm">
                        <q-skeleton  height="42px" class="col-12"/>
                        <q-skeleton  height="20px" class="col-12 q-my-sm"/>
                        <q-skeleton type="QBtn" height="34px" width="80px" class="col-2" style="margin-left:auto;border-radius:20px;"/>

                    </div>
                </div>
            </div>

            <div class="row q-px-md bg-white" v-show="result" ref="hasil">
                <div class="text-17 text-bold col-12 q-mb-md" style="color:#505050;">Hasil Pencarian</div>
                <div v-if="dataresult.length > 0">
                    <rekomendasihorizontal v-for="(res,index) in dataresult" :key="index" :rekomendasi="res"/>
                </div>
                <div v-else>
                    <div class="text-15 q-mb-sm">
                        Alumni tidak ditemukan
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <q-card flat>
                <q-card-section>
                    <div class="row justify-between items-center">
                        <q-skeleton  height="20px" class="col-4 q-mb-sm"/>
                        <q-skeleton  height="30px" class="col-7 q-mb-sm"/>
                        <q-skeleton  height="20px" class="col-4 q-mb-sm"/>
                        <q-skeleton  height="30px" class="col-7 q-mb-sm"/>
                        <q-skeleton  height="20px" class="col-4 q-mb-sm"/>
                        <q-skeleton  height="30px" class="col-7 q-mb-sm"/>
                        <q-skeleton  height="20px" class="col-4 q-mb-sm"/>
                        <q-skeleton  height="30px" class="col-7 q-mb-sm"/>
                        <q-skeleton  height="20px" class="col-4 q-mb-sm"/>
                        <q-skeleton  height="30px" class="col-7 q-mb-sm"/>
                        <q-skeleton  height="20px" class="col-4 q-mb-sm"/>
                        <q-skeleton  height="30px" class="col-7 q-mb-sm"/>
                        <q-skeleton  height="20px" class="col-4 q-mb-sm"/>
                        <q-skeleton  height="30px" class="col-7 q-mb-sm"/>
                        <q-skeleton type="QBtn" height="36px"  class="col-12"/>
                    </div>
                    <rekomendasi-load v-for="n in 3" :key="n" class="q-my-sm"/>
                </q-card-section>
            </q-card>
        </div>
        
    </q-page>
</template>

<script>
import {  mapState, mapActions } from "vuex";
export default {
    data(){
        return{
            search:{
                nama:'',
                prodi:'',
                profesi:'',
                bisnis:'',
                minat:'',
                pengda:'',
                iaprodi:''
            },
            load:false,
            result:false,
            dataresult:''
        }
    },
    components:{
        'rekomendasihorizontal' : require('components/rekomendasi/Rekomendasihorizontal.vue').default,
        'rekomendasi-load' : require('components/rekomendasi/RekomendasiLoad.vue').default,
    },
    methods:{
        onSearch(){
            this.load = true
            this.result = false
            this.$store.dispatch('koneksi/searchConnect',{
                name : this.search.nama,
                jurusan : this.search.prodi,
                id_business: this.search.bisnis,
                profession: this.search.profesi,
                interest: this.search.minat,
                commisariat: this.search.pengda,
                prodi: this.search.iaprodi
            })
            .then(response=>{
                this.dataresult = response
                this.load = false
                this.result = true
                setTimeout(()=>{
                    let element = this.$refs.hasil.offsetTop
                    window.scrollTo(0,element)
                },300)
                
            })
            .catch(error=>{
                console.log("error",error)
            })
        },
        ...mapActions("myprofil", ["getOrg","getPengda","getIaprodi",'getProdi','getBisnisField','getProfesi']),
        async getData(){
            this.getProdi()
            this.getProfesi()
            this.getBisnisField()
            this.getOrg()
            this.getPengda()
            this.getIaprodi()
        },
    },
    computed:{
        ...mapState('myprofil',['organization','pengda','iaprodi','prodi','bisnisfield','profesi']),
        optprodi(){
            let opt = []
            if(this.prodi){
                this.prodi.forEach(element => {
                        opt.push(element.name)
                })
            }
            return opt.length > 0 ? opt : ''
        },
        optprofesi(){
            let opt = []
            if(this.profesi){
                this.profesi.forEach(element => {
                    opt.push({
                        label : element.name,
                        value :  element.id
                    })
                })
            }
            return opt.length > 0 ? opt : ''
        },
        optbisnis(){
            let opt = []
            if(this.bisnisfield){
                this.bisnisfield.forEach(element => {
                    opt.push({
                        label : element.name,
                        value :  element.id
                    })
                })
            }
            return opt.length > 0 ? opt : ''
        },
        optminat(){
            let opt = []
            if(this.organization){

                this.organization.forEach(element=>{
                opt.push({
                    label : element.name,
                    value :  element.id
                })
                })
            }
            return opt.length > 0 ? opt : ''
        },
        optpengda(){
            let opt = []
            if(this.pengda){

                this.pengda.forEach(element=>{
                    opt.push({
                        label : element.name,
                        value :  element.id
                    })
                })
            }
            return opt.length > 0 ? opt : ''
        },
        optiaprodi(){
            let opt = []
            if(this.iaprodi){
                this.iaprodi.forEach(element=>{
                    opt.push({
                        label : element.name,
                        value :  element.id
                    })
                })
            }
            return opt.length > 0 ? opt : ''
        },
        firstload(){
            if(this.optprodi && this.optminat && this.optpengda && this.optiaprodi && this.optbisnis && this.optprofesi){
                return true
            }else{
                return false
            }
        }
    },
    mounted(){
        if(!this.optprofesi){
            this.getData()
        }
    },
}
</script>

<style>

</style>