<template>
    <q-page class="bg-white">
      
      <div v-if="valid">
        <q-img :src="newsimage ? newsimage : require('assets/berita-detail.png')" alt="berita-detail-gambar" width="430px" height="239px" />
        <div class="row q-px-md bg-white">
            <q-breadcrumbs class="text-black q-my-sm">
                <template v-slot:separator>
                    <q-icon
                    size="1.5em"
                    name="chevron_right"
                    color="primary"
                    />
                </template>

                <q-breadcrumbs-el label="Berita" />
                <q-breadcrumbs-el label="Kabar Alumni" v-if="news.type_news === 'alumni-news'"/>
                <q-breadcrumbs-el label="Seputar PP-IA" v-else-if="news.type_news === 'pp-ia'"/>
                <q-breadcrumbs-el label="Lowongan Kerja" v-else-if="news.type_news === 'job-vacancies'"/>
                <q-breadcrumbs-el label="Info Projek" v-else-if="news.type_news === 'project-info'"/>
                <q-breadcrumbs-el label="Beasiswa" v-else-if="news.type_news === 'beasiswa'"/>
                <q-breadcrumbs-el label="Lainnya" v-else/>
                <q-breadcrumbs-el :label="news.title" />
            </q-breadcrumbs>
            <div class="text-h6 text-bold text-center q-mb-sm col-12">{{news.title}}</div>
            <div class="col-12 row justify-between">
                <div class="text-13 text-bold  " style="color:#a2a2a2;">{{tampil}}</div>
                <div class="text-primary text-caption text-bold ">
                  <span v-if="news.type_news === 'alumni-news'">Kabar Alumni</span> 
                  <span v-else-if="news.type_news === 'pp-ia'">Seputar PP-IA</span> 
                  <span v-else-if="news.type_news === 'job-vacancies'">Lowongan Kerja</span> 
                  <span v-else-if="news.type_news === 'project-info'">Info Projek</span> 
                  <span v-else-if="news.type_news === 'beasiswa'">Beasiswa</span> 
                  <span v-else>Lainnya</span> 
                </div>
            </div>
            <q-separator spaced class="col-12" style="border:2px solid #e6e6e6;margin-bottom:16px;"/>
            <div class="text-caption text-justify q-pb-md" v-html="news.description"></div>
            <div class="col-12 row" v-if="othernews.length > 0">
                <div class="text-17 text-bold" style="color:#505050;">Baca Juga</div>
                <q-separator spaced class="col-12 q-mb-none" style="border:2px solid #e6e6e6;"/>
                <q-carousel
                v-model="slider"
                swipeable
                animated
                infinite
                transition-prev="slide-right"
                transition-next="slide-left"
                style="background-color:transparent;"
                class="text-black q-mb-md"
                height="270px"
                >
                  <q-carousel-slide :name="index" style="overflow:hidden;" v-for="index in totalPage" :key="index">
                    <div class="container" style="display:flex;width:700px;">
                      <cardberita v-for="(berita,i) in getBerita(index)" :key="i" :databerita="berita" detail="true"/>            
                    </div>
                  </q-carousel-slide>
                </q-carousel>
            </div>
        </div>
      </div>
      <div v-else>
        <detailload />
      </div>
        
    </q-page>
</template>

<script>
import {  mapActions } from "vuex"
import { date } from 'quasar'
export default {
  data(){
    return{
      slider:1,
      slider2:1,
      perPages:2,
      news:'',
      othernews:''
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.news = ''
    this.othernews = ''
    this.getNewsBySlug(to.params.slug)
    .then(response=>{
    this.news = response
    if(this.news.type_news === 'alumni-news'){
      this.getNewsRandom({
            slug : to.params.slug,
            type : this.news.type_news
      })
      .then(response=>{
        this.othernews = response
      })
    }else if(this.news.type_news === 'pp-ia'){
      this.getNewsRandom({
        slug : to.params.slug,
        type : this.news.type_news
      })
      .then(response=>{
        this.othernews = response
      })
    }else if(this.news.type_news === 'job-vacancies'){
      this.getNewsRandom({
        slug : to.params.slug,
        type : this.news.type_news
      })
      .then(response=>{
        this.othernews = response
      })
    }else if(this.news.type_news === 'project-info'){
      this.getNewsRandom({
        slug : to.params.slug,
        type : this.news.type_news
      })
      .then(response=>{
        this.othernews = response
      })
    }else if(this.news.type_news === 'beasiswa'){
      this.getNewsRandom({
        slug : to.params.slug,
        type : this.news.type_news
      })
      .then(response=>{
        this.othernews = response
      })
    }else if(this.news.type_news === 'etc'){
      this.getNewsRandom({
        slug : to.params.slug,
        type : this.news.type_news
      })
      .then(response=>{
        this.othernews = response
      })
    }



  })
    next()
  },
  components:{
    'cardberita' : require('components/cardberita/Cardberita.vue').default,
    'detailload' : require('components/berita/DetailLoad.vue').default
  },
  computed:{
    getBerita(){
      return val => this.othernews.slice((val-1)*this.perPages,(val-1)*this.perPages+this.perPages)
    },
    valid(){
      if(this.news && this.othernews){
        return true
      }else{
        return false
      }
    },
    tampil(){
        let formatNow = date.formatDate(this.news.updated_at,'DD MMMM YYYY',{
            months: ['Januari', 'Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
        })
        return formatNow
    },
    newsimage(){
        if(this.news.image){
            return this.newsimg + this.news.image
        }else{
            return ''
        }
    },
    totalPage(){
      if(this.othernews.length > 0 ){
          if(this.othernews.length < 3){
              return 1
          }else{
              return this.othernews.length - 2
          }
      }
      return 0
    }  
  },
  created(){
      this.news = ''
      this.othernews = ''
      this.getNewsBySlug(this.$route.params.slug)
      .then(response=>{
        this.news = response
        if(this.news.type_news === 'alumni-news'){
        this.getNewsRandom({
          slug : this.$route.params.slug,
          type : this.news.type_news
        })
        .then(response=>{
          this.othernews = response
        })
        }else if(this.news.type_news === 'pp-ia'){
          this.getNewsRandom({
            slug : this.$route.params.slug,
            type : this.news.type_news
          })
          .then(response=>{
            this.othernews = response
          })
        }else if(this.news.type_news === 'job-vacancies'){
          this.getNewsRandom({
            slug : this.$route.params.slug,
            type : this.news.type_news
          })
          .then(response=>{
            this.othernews = response
          })
        }else if(this.news.type_news === 'project-info'){
          this.getNewsRandom({
            slug : this.$route.params.slug,
            type : this.news.type_news
          })
          .then(response=>{
            this.othernews = response
          })
        }else if(this.news.type_news === 'beasiswa'){
          this.getNewsRandom({
            slug : this.$route.params.slug,
            type : this.news.type_news
          })
          .then(response=>{
            this.othernews = response
          })
        }else if(this.news.type_news === 'etc'){
          this.getNewsRandom({
            slug : this.$route.params.slug,
            type : this.news.type_news
          })
          .then(response=>{
            this.othernews = response
          })
        }
        // type_news('alumni-news','pp-ia','job-vacancies','project-info','beasiswa','etc')
      })
      
  },
  methods:{
    ...mapActions('news',['getNewsBySlug','getNewsRandom']),
  }
}
</script>

<style>

</style>