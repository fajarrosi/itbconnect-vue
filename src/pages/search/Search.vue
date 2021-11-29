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
                            <search-load/>
                        </div>
                        <div v-if="result">
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
                                    <span class="text-15">Alumni</span>
                                </q-tab>
                                <q-tab name="kabar" no-caps>
                                    <span class="text-15">Kabar Alumni</span>
                                </q-tab>
                            </q-tabs>
                            <q-tab-panels v-model="tab" animated>
                                <q-tab-panel name="all">
                                    <div class="text-17 text-bold q-my-sm">Alumni</div>
                                    <q-list bordered padding>
                                        <div v-if="user">
                                            <div v-for="(u,index) in user" :key="index">
                                                <q-item clickable v-ripple @click="$router.push(`/detail-user/${u.id}`)">
                                                    <q-item-section top avatar>
                                                    <q-avatar>
                                                        <img :src="userimage(u) ? userimage(u) : require('assets/akun23.png')">
                                                    </q-avatar>
                                                    </q-item-section>

                                                    <q-item-section>
                                                    <q-item-label>{{u.complete_name}} - jurusan {{u.univercity[0].program_study}}</q-item-label>
                                                    <q-item-label class="text-primary text-13" lines="2">{{u.experience[0].position}} {{u.experience[0].company_name}}</q-item-label>
                                                    </q-item-section>

                                                    <q-item-section side top>
                                                        <q-btn color="primary" label="Lihat Profil" @click="$router.push(`/detail-user/${u.id}`)" rounded no-caps  v-if="u.is_friend" />
                                                        <q-btn :color="u.wait ? 'grey-8' : 'primary'"  rounded no-caps @click.stop="onSubmit(u)" v-else :disable="u.btndisable" :loading="u.load">
                                                        <div class="row">
                                                            <q-icon name="done" v-if="u.wait" class="col-2" size="15px"/>
                                                            <div class="text-white col-10" >{{u.wait ? 'Menunggu' : 'Connect'}}</div>
                                                        </div>
                                                        <template v-slot:loading>
                                                            <q-spinner-facebook />
                                                        </template>
                                                        </q-btn>
                                                    </q-item-section>
                                                </q-item>

                                                <q-separator spaced inset="item" v-if="index !== user.length-1" />
                                            </div>
                                        </div>
                                        <div v-else>
                                            <q-item>
                                                <q-item-section>
                                                    <q-item-label>Alumni tidak ditemukan</q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </div>
                                        
                                        
                                        <q-separator spaced />
                                        <q-item clickable v-ripple class="q-py-none" @click="tab = 'alumni'">
                                            <q-item-section>
                                                <q-item-label class="text-primary text-center">Lihat Hasil Semua Alumni</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                    <div class="text-17 text-bold q-my-sm">Kabar Alumni</div>
                                    <q-list bordered padding>
                                        <div v-if="news">
                                            <item-news v-for="(n,index) in news" :key="index" :news="n" :badge="false" :time="false"/>
                                        </div>
                                        <div v-else>
                                            <q-item>
                                                <q-item-section>
                                                    <q-item-label>Kabar Alumni tidak ditemukan</q-item-label>
                                                </q-item-section>
                                            </q-item>
                                            <q-separator spaced />
                                        </div>
                                        <q-item clickable v-ripple class="q-py-none" @click="tab = 'kabar'">
                                            <q-item-section>
                                                <q-item-label class="text-primary text-center">Lihat Hasil Semua Kabar Alumni</q-item-label>
                                            </q-item-section>
                                        </q-item>
                                    </q-list>
                                    
                                </q-tab-panel>

                                <q-tab-panel name="alumni">
                                    <q-list bordered padding>
                                        <div v-if="alluser">
                                            <div v-for="(u,index) in alluser" :key="index">
                                                <q-item clickable v-ripple @click="$router.push(`/detail-user/${u.id}`)">
                                                    <q-item-section top avatar>
                                                    <q-avatar>
                                                        <img :src="userimage(u) ? userimage(u) : require('assets/akun23.png')">
                                                    </q-avatar>
                                                    </q-item-section>

                                                    <q-item-section>
                                                    <q-item-label>{{u.complete_name}} - jurusan {{u.univercity[0].program_study}}</q-item-label>
                                                    <q-item-label class="text-primary text-13" lines="2">{{u.experience[0].position}} {{u.experience[0].company_name}}</q-item-label>
                                                    </q-item-section>

                                                    <q-item-section side top>
                                                        <q-btn color="primary" label="Lihat Profil" @click="$router.push(`/detail-user/${u.id}`)" rounded no-caps  v-if="u.is_friend" />
                                                        <q-btn :color="u.wait ? 'grey-8' : 'primary'"  rounded no-caps @click.stop="onSubmit(u)" v-else :disable="u.btndisable" :loading="u.load">
                                                        <div class="row">
                                                            <q-icon name="done" v-if="u.wait" class="col-2" size="15px"/>
                                                            <div class="text-white col-10" >{{u.wait ? 'Menunggu' : 'Connect'}}</div>
                                                        </div>
                                                        <template v-slot:loading>
                                                            <q-spinner-facebook />
                                                        </template>
                                                        </q-btn>
                                                    </q-item-section>
                                                </q-item>

                                                <q-separator spaced inset="item" v-if="index !== alluser.length-1" />
                                            </div>
                                        </div>
                                        <div v-else>
                                            <q-item>
                                                <q-item-section>
                                                    <q-item-label>Alumni tidak ditemukan</q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </div>
                                    </q-list>
                                </q-tab-panel>

                                <q-tab-panel name="kabar">
                                    <q-list bordered padding>
                                        <div v-if="allnews">
                                            <item-news v-for="(n,index) in allnews" :key="index" :news="n" :badge="false" :time="false"/>
                                        </div>
                                        <div v-else>
                                            <q-item>
                                                <q-item-section>
                                                    <q-item-label>Kabar Alumni tidak ditemukan</q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </div>
                                    </q-list>
                                </q-tab-panel>
                            </q-tab-panels>
                        </div>
                    </q-page>
                </div>
            </div>
        </q-page-container>
    </q-layout>
    
</template>

<script>
import {ref} from 'vue'
import { debounce } from 'quasar'
export default {
    setup () {
        return {
            tab: ref('all')
        }
    },
    components:{
        'search-load' : require('./SearchLoad.vue').default,
        'item-news' :require ('components/berita/ItemNews.vue').default
    },
    data(){
        return{
            keyword:'',
            load:false,
            result:false,
            news:'',
            user:'',
            allnews:'',
            alluser:''
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
        getAnswer(){
            this.$store.dispatch('searchData',{
                keyword: this.keyword
            })
            .then(response=>{
                if(response.user.length > 0){
                    this.alluser = response.user
                    this.user = response.user.slice(0,3)
                    this.user.forEach(el=>{
                        el.wait = el.request_friend_status === 'pending' ? true : false
                        el.btndisable = el.request_friend_status === 'pending' ? true : false
                        el.load = false
                    })
                    this.alluser.forEach(el=>{
                        el.wait = el.request_friend_status === 'pending' ? true : false
                        el.btndisable = el.request_friend_status === 'pending' ? true : false
                        el.load = false
                    })
                }else{
                    this.alluser = ''
                    this.user = ''
                }
                if(response.news.length > 0){
                    this.allnews = response.news
                    this.news = response.news.slice(0,3)
                }else{
                    this.allnews =''
                    this.news = ''
                }
                this.load = false
                this.result = true
            })
            .catch(error=>{
                console.log("error",error)
                this.load = false
                this.result = true
            })
        },
        
        userimage(val){
            return  val.profile.photo_profile ? this.profil + val.profile.photo_profile : ''
        },
        onSubmit(val){
            val.load = true
            val.btndisable = true
            this.$store.dispatch('rekomendasi/addConnect',{
                friend_id : val.id
            })
            .then(()=>{
                val.load = false
                val.wait = true
            })
            .catch(error=>{
                console.log("error dari addConnect",error)
            })
        }
    },
}
</script>

<style>

</style>