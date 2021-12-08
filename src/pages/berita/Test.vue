<template>
    <q-page class="bg-white">
        <div v-if="valid">
            <q-card flat class="bg-white" style="margin-bottom:-10px;">
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

                <!-- <q-scroll-area style="height: 55vh;"> -->
                    <q-list  padding class="q-mx-md">
                        <q-separator spaced />
                        <q-item clickable v-ripple v-for="n in 20" :key="n">
                            <q-item-section top thumbnail class="q-ml-none">
                                <img src="~assets/berita.png">
                            </q-item-section>

                            <q-item-section>
                                <q-item-label lines="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora accusantium ipsa aut alias officia explicabo excepturi hic autem dignissimos?</q-item-label>
                                <q-item-label caption class="ellipsis-2-lines description" ref="desc" v-html="news.description" style="display:none;">
                                </q-item-label>
                                <q-item-label caption lines="2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab architecto nostrum rerum, optio ducimus. Aliquam expedita dolor unde ex.
                                </q-item-label>
                                <q-item-label caption>20 November 2021</q-item-label>
                                <q-item-label caption >
                                    <q-badge color="primary" label="Kabar Alumni"/>
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-separator spaced />
                        <q-item clickable v-ripple>
                            <q-item-section top thumbnail class="q-ml-none">
                                <img src="~assets/berita.png">
                            </q-item-section>

                            <q-item-section>
                                <q-item-label lines="2">Terakhir</q-item-label>
                                <q-item-label caption class="ellipsis-2-lines description" ref="desc" v-html="news.description" style="display:none;">
                                </q-item-label>
                                <q-item-label caption lines="2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ab architecto nostrum rerum, optio ducimus. Aliquam expedita dolor unde ex.
                                </q-item-label>
                                <q-item-label caption>20 November 2021</q-item-label>
                                <q-item-label caption >
                                    <q-badge color="primary" label="Kabar Alumni"/>
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                        <!-- <div v-if="newsFilter.length > 0">
                            <item-news v-for="(list,n) in newsFilter" :key="n" :news="list" :badge="true" :time="false"/>
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
                        </div> -->
                    </q-list>
                <!-- </q-scroll-area> -->
            
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
            <q-scroll-area style="height: 55vh;" class="col-12 row">
                <listload v-for="n in 10" :key="n"/>
            </q-scroll-area>
        </div>
        
        
    </q-page>
</template>

<script>
import { ref } from 'vue'
import { debounce } from 'quasar'
export default {
    components:{
        'listload' : require('components/berita/ListLoad.vue').default,
        // 'item-news' : require('components/berita/ItemNews.vue').default
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

<style scoped>
.q-card{
    position:sticky;
    position: -webkit-sticky;
    top:49px;
    z-index:2;
}

</style>