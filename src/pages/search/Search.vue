<template>
    <q-layout view="hHh lpr LFR">
        <q-header bordered class="bg-white ">
            <div class="row justify-center">
                <div class="mobile">
                    <div class="row">
                        <q-btn flat icon="arrow_back" class="text-black col-1" no-caps dense @click="$router.back()"/>
                        <q-input  id="email" class="col-11" v-model="keyword" color="white" bg-color="white" input-style="font-size: 17px;"  placeholder="Masukkan Kata Kunci" ref="focusKey" autofocus
                        />
                    </div>
                </div>
            </div>
        </q-header>
        <q-page-container>
            <div class="row justify-center bg-grey-2">
                <div class="mobile bg-white">
                    <q-page class="q-px-md ">
                        <div v-if="load">
                            <div class="row q-my-md items-center card-radius" style="border:1px solid #dcdcdc;" v-for="n in 5" :key="n" >
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
                        <div v-if="result">
                            <div class="text-17 text-bold q-my-sm">Alumni</div>
                            <rekomendasihorizontal v-for="n in 3" :key="n"/>
                            
                            <div class="row">
                                <q-btn color="primary" label="Selengkapnya" flat dense  class="col-12" no-caps/>
                            </div>
                            <div class="text-17 text-bold q-mb-sm">Kabar Alumni</div>
                            <beritahorizontal v-for="n in 3" :key="n"/>
                            <div class="row">
                                <q-btn color="primary" label="Selengkapnya" flat dense  class="col-12 q-mb-md" no-caps/>
                            </div>
                        </div>
                    </q-page>
                </div>
            </div>
        </q-page-container>
    </q-layout>
    
</template>

<script>
import { debounce } from 'quasar'
export default {
    components:{
        'rekomendasihorizontal' : require('src/components/rekomendasi/Rekomendasihorizontal.vue').default,
        'beritahorizontal' : require('src/components/cardberita/Cardberitahorizontal.vue').default
    },
    data(){
        return{
            keyword:'',
            load:false,
            result:false,
        }
    },
    watch:{
        keyword: function(){
            this.load = true
            this.result = false
            this.debouncedGetAnswer()
        }
    },
    created: function () {
    
        this.debouncedGetAnswer = debounce(this.getAnswer, 1000)
    },
    methods:{
        movePage(){
            this.$router.push('/rekomendasi/3')
        },
        getAnswer(){
            this.load = false
            this.result = true
        }
    }
}
</script>

<style>

</style>