<template>
    <div class="topberita">
        
        <div v-if="valid">
            <div v-if="news.length > 0">
                <q-carousel
                v-model="slider"
                swipeable
                animated
                infinite
                transition-prev="slide-right"
                transition-next="slide-left"
                style="background-color:transparent;"
                class="text-black"
                height="350px"
                >
                    <q-carousel-slide :name="n" style="overflow:hidden;" v-for="n in totalPage" :key="n">
                        <div class="container" style="display:flex;width:700px;">
                            <cardberitas v-for="(berita,i) in getNews(n)" :key="i" :databerita="berita" :detail="false"/>            
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
            <div v-else class="q-my-md">
                <span class="q-mx-md text-15 text-bold " style="color:#505050;" v-if="alumni">Belum Ada Berita Alumni</span>
                <span class="q-mx-md text-15 text-bold " style="color:#505050;" v-else>Belum Ada Berita Seputar PP-IA</span>
            </div>
            
        </div>
        <div v-else>
            <topload/>
        </div>
        
    </div>
</template>

<script>
import {  mapActions } from "vuex"
export default {
    props:[
        'alumni'
    ],
    components:{
        'cardberitas' : require('components/cardberita/Cardberita.vue').default,
        'topload' : require('components/berita/TopLoad.vue').default
    },
    data(){
        return{
            slider:1,
            valid:false,
            news:'',
        }
    },
    computed:{
        getNews(){
            return val => this.news.slice(val-1,val+1)
        },
        totalPage(){
            if(this.news.length > 0){
                if(this.news.length === 1){
                    return this.news.length
                }else{
                    return this.news.length - 1
                }
            }
            return 0
        },
      
    },
    created(){
        if(this.alumni){
            this.getLatestNews('alumni-news')
            .then(response=>{
                if(response.length > 0){
                    this.news = response
                    this.valid = true
                }else{
                    this.news = ''
                    this.valid = true
                }
            })
        }else{
            this.getLatestNews('pp-ia')
            .then(response=>{
                if(response.length > 0){
                    this.news = response
                    this.valid = true
                }else{
                    this.news = ''
                    this.valid = true
                }
            })
        }
    },
    methods:{
        ...mapActions('news',['getLatestNews'])
    }
}
</script>

<style>

</style>