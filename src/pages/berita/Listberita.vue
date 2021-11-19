<template>
    <q-page class="bg-white">
        <div v-if="valid">
            <q-card flat style="margin-bottom:-10px;">
                <q-card-section>
                    <div class="row items-center">
                        <q-input
                        dense
                        outlined
                        v-model="keyword"
                        placeholder="Cari Berita"
                        class="q-mb-sm col-12"
                        bg-color="white"
                        hide-bottom-space
                        bottom-slots
                        autofocus
                        >
                        <template v-slot:prepend>
                            <q-icon name="search" />
                        </template>
                        </q-input>
                        
                    </div>
                    <q-tabs
                        v-model="tab"
                        inline-label
                        mobile-arrows
                        class="bg-white text-black shadow-none"
                    >
                        <q-tab name="all" no-caps>
                            <span class="text-15">Semua</span>
                        </q-tab>
                        <q-tab name="alumni" no-caps>
                            <span class="text-15">Kabar Alumni</span>
                        </q-tab>
                        <q-tab name="ppia" no-caps>
                            <span class="text-15">PP-IA</span>
                        </q-tab>
                        <q-tab name="lowker" no-caps>
                            <span class="text-15">Lowker</span>
                        </q-tab>
                        <q-tab name="project" no-caps>
                            <span class="text-15">Info Projek</span>
                        </q-tab>
                        <q-tab name="beasiswa"  no-caps>
                            <span class="text-15">Beasiswa</span>
                        </q-tab>
                        <q-tab name="etc" no-caps>
                            <span class="text-15">Lainnya</span>
                        </q-tab>
                    </q-tabs>
                </q-card-section>
            </q-card>
            <div v-if="search" class="row q-mx-md q-pt-sm">
                <q-separator spaced class="col-12" style="border:1px solid #e6e6e6;margin-bottom:16px;"/>
                <listload />
            </div>
            <div v-else>

                <q-scroll-area style="height: 55vh;">
                    <q-list  padding class="q-mx-md">
                        <q-separator spaced />
                        <div v-if="newsFilter.length > 0">
                            <div v-for="(list,n) in newsFilter" :key="n">
                                
                                <q-item clickable v-ripple @click="$router.push(`/berita/${list.slug}`)" >
                                    <q-item-section top thumbnail class="q-ml-none">
                                        <img :src="newsimage(list) ? newsimage(list) : require('assets/berita.png')" >
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label class="ellipsis-2-lines">{{list.title}}</q-item-label>
                                        <q-item-label caption class="ellipsis-2-lines">
                                            {{list.description}}
                                        </q-item-label>
                                        <q-item-label caption>{{tampil(list)}}</q-item-label>
                                        <q-item-label caption >
                                            <q-badge color="primary" label="Kabar Alumni" v-if="list.type_news === 'alumni-news'"/>
                                            <q-badge color="primary" label="PP-IA" v-else-if="list.type_news === 'pp-ia'"/>
                                            <q-badge color="primary" label="Lowongan Kerja" v-else-if="list.type_news === 'job-vacancies'"/>
                                            <q-badge color="primary" label="Info Projek" v-else-if="list.type_news === 'project-info'"/>
                                            <q-badge color="primary" label="Beasiswa" v-else-if="list.type_news === 'beasiswa'"/>
                                            <q-badge color="primary" label="Lainnya" v-else/>
                                        </q-item-label>
                                    </q-item-section>

                                </q-item>

                                <q-separator spaced />
                            </div>
                        </div>
                        <div v-else>
                            <q-item>
                                <q-item-section top avatar>
                                    <q-avatar color="primary" text-color="white" icon="report_gmailerrorred" />
                                </q-item-section>
                                <q-item-section>
                                    <q-item-label>Tidak Ada Data</q-item-label>
                                </q-item-section>
                            </q-item>
                        </div>
                        

                    </q-list>
                </q-scroll-area>
            
            </div>
        </div>
        <div class="load row q-mx-md q-pt-md" v-else>
            <q-skeleton type="QBtn" height="40px" class="col-12 q-mb-md" />
            <div class="col-12 row justify-between">
                <q-skeleton class="col-3 q-mb-sm" height="20px"/>
                <q-skeleton class="col-2 q-mb-sm" height="20px"/>
                <q-skeleton class="col-2 q-mb-sm" height="20px"/>
                <q-skeleton class="col-3 q-mb-sm" height="20px"/>
            </div>
            <q-separator spaced class="col-12" style="border:1px solid #e6e6e6;margin-bottom:16px;"/>
            <listload />
        </div>
        
        
    </q-page>
</template>

<script>
import { ref } from 'vue'
import { date } from 'quasar'
import { debounce } from 'quasar'
export default {
    components:{
        'listload' : require('components/berita/ListLoad.vue').default
    },
    setup () {
        return {
            tab: ref('all')
        }
    },
    data(){
        return{
            valid:false,
            search:false,
            news:'',
            keyword:''
        }
    },

    created(){
        if(this.$route.query.type){
            this.tab = this.$route.query.type
        }
        this.$store.dispatch('news/getNews')
        .then(response=>{
            if(response.length > 0){
                this.news = response
                this.valid = true
            }else{
                this.news = ''
                this.valid = true
            }
        })
        this.debouncedGetAnswer = debounce(this.onSearch, 1000)
    },
    computed:{
        newsFilter(){
            return this[this.tab]
        },
        all(){
            return this.news
        },
        alumni(){
            return this.news ? this.news.filter((k)=> k.type_news == 'alumni-news') : ''
        },
        ppia(){
            return this.news ? this.news.filter((k)=> k.type_news == 'pp-ia') : ''
        },
        lowker(){
            return this.news ? this.news.filter((k)=> k.type_news == 'job-vacancies') : ''
        },
        project(){
            return this.news ? this.news.filter((k)=> k.type_news == 'project-info') : ''
        },
        beasiswa(){
            return this.news ? this.news.filter((k)=> k.type_news == 'beasiswa') : ''
        },
        etc(){
            return this.news ? this.news.filter((k)=> k.type_news == 'etc') : ''
        },
       
        tampil(){
            return val => date.formatDate(val.updated_at,'DD MMMM YYYY',{
                months: ['Januari', 'Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
            })
        },
        newsimage(){
            return val => val.image ? this.newsimg + val.image : ''
        }
    },
    watch:{
        keyword(){
            this.search = true
            this.debouncedGetAnswer()
        }
    },
    methods:{
        onSearch(){
            this.$store.dispatch('news/getNewsByTitle',{
                keyword : this.keyword
            })
            .then(response=>{
                if(response.length > 0){
                    this.news = response
                    this.search = false
                }else{
                    this.news = ''
                    this.search = false
                }
            })
            .catch(error=>{
                console.log("error",error)
            })
        }
    }
}
</script>

<style>

</style>