<template>
    <q-page class="bg-white">
        <q-card class="my-card" flat>
            <q-card-section>
                <div class="text-primary text-h6 text-bold q-mb-sm">Permintaan</div>
                    <div v-if="requestvalid">
                        <div v-if="request.length > 0">
                            <connect-request v-model:datarequest="request"/>
                        </div>
                        <div v-else>
                            <div class="text-15 q-mb-sm">Tidak Ada Permintaan </div>
                        </div>
                    </div>
                    <div v-else>
                        <request-load v-for="n in 3" :key="n" />
                    </div>
                <div class="row">
                    <q-btn color="primary" label="Lihat Semua" no-caps flat dense class="col-12 text-center q-mt-sm" @click="$router.push('permintaan')"/>
                </div>
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md" flat>
            <q-card-section>
                <div class="text-primary text-h6 text-bold q-mb-sm">Terbaru</div>
                <div v-if="newsvalid">
                    <div v-if="news.length > 0">
                        <q-list>
                            <item-news v-for="(list,index) in news" :key="index" :news="list" :badge="true" :time="true"/>
                        </q-list>
                    </div>
                    <div v-else>
                        Tidak Ada Berita Terbaru
                    </div>
                </div>
                <div v-else>
                    <list-load v-for="n in 3" :key="n"/>
                </div>
                
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
export default {
    components:{
        'connect-request' : require('components/koneksi/ConnectRequest.vue').default,
        'request-load' : require('components/koneksi/RequestLoad.vue').default,
        'list-load' : require('components/berita/ListLoad.vue').default,
        'item-news' : require('components/berita/ItemNews.vue').default
    },
    created(){
        this.getRequest()
        this.getNews()
    },
    data(){
        return{
            request:[],
            requestvalid:false,
            newsvalid:false,
            news:[]
        }
    },
    methods:{
        
        getRequest(){
            this.$store.dispatch('koneksi/getConnectRequest')
            .then(response=>{
                if(response.length > 10){
                    this.request = response.slice(0,10)
                }else{
                    this.request = response
                }
                this.requestvalid = true
            })
        },
        getNews(){
            this.$store.dispatch('news/getNews')
            .then(response=>{
                if(response.length > 10){
                    this.news = response.slice(0,10)
                }else{
                    this.news = response
                }
                this.newsvalid = true
            })
        },
    },
}
</script>

<style>
.btnclose.q-btn::before{
    box-shadow: none;
    border:1px solid rgba(122,114,114,1);
    color:rgba(122,114,114,1);
}
.btncek.q-btn::before{
    box-shadow: none;
}
</style>