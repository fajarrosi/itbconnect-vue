<template>
    <q-layout view="hHh lpr LFR" 
    >
        <q-header bordered class="bg-primary text-white q-pa-sm" height-hint="98">
                <div class="row justify-center">
                    <div class="mobile">
                        <div class="row items-center">
                            <q-btn flat icon="arrow_back" class="text-white col-1" no-caps dense @click="$router.back()"/>
                            <p class="q-mb-none text-h6 col-4">
                                Pesan
                            </p>
                            <!-- <q-input dark dense standout v-model="search" input-class="col-7">
                                <template v-slot:append>
                                    <q-icon v-if="search === ''" name="search" />
                                    <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
                                </template>
                            </q-input> -->
                        </div>
                    </div>
                </div>
            </q-header>
            <q-page-container >
            <div class="row justify-center bg-grey-2">
                <div class="mobile bg-secondary">
                    <q-page padding class="bg-white">
                        <q-list>
                            <div v-if="koneksi !== undefined">
                                <div v-if="koneksi.length">
                                    <div v-for="(konek,index) in koneksi" :key="index">
                                        <q-item clickable v-ripple @click="$router.push(`/detail?name=${konek.complete_name}&&img=${profilimage(konek.profile)}&&id=${konek.id}`)" class="q-px-none">
                                            <q-item-section avatar>
                                                <q-avatar size="40px">
                                                    <img :src="profilimage(konek.profile) ? profilimage(konek.profile) : require('assets/account_circle.svg')">
                                                </q-avatar>
                                            </q-item-section>
                                            <q-item-section>
                                            <q-item-label >{{konek.complete_name}}</q-item-label>
                                            <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                                            </q-item-section>

                                            <q-item-section side top>
                                                <q-item-label caption class="text-primary">Baru Saja</q-item-label>
                                                <q-badge color="primary" label="9+" class="q-mt-sm" />
                                            </q-item-section>
                                        </q-item>
                                        <q-separator spaced inset />
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="text-15 q-mb-sm">Anda Belum Memiliki Pesan</div>
                                </div>
                            </div>
                            <div v-else>
                                <my-connection-load v-for="n in 10" :key="n"/>
                            </div>
                            <!-- <q-item clickable v-ripple @click="$router.push('/detail')" class="q-px-none">
                                <q-item-section avatar>
                                    <q-avatar size="40px">
                                        <img src="~assets/akun.png" >
                                    </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                <q-item-label >John Doe3</q-item-label>
                                <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                                </q-item-section>

                                <q-item-section side top>
                                <q-item-label caption>20/06/2021</q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-separator spaced inset /> -->

                            <!-- <q-item clickable v-ripple @click="$router.push('/detail')" class="q-px-none">
                                <q-item-section avatar>
                                    <q-avatar size="40px">
                                        <img src="~assets/akun.png" >
                                    </q-avatar>
                                </q-item-section>
                                <q-item-section>
                                <q-item-label >John Doe1</q-item-label>
                                <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                                </q-item-section>

                                <q-item-section side top>
                                <q-item-label caption class="text-primary">Baru Saja</q-item-label>
                                <q-badge color="primary" label="9+" class="q-mt-sm" />
                                </q-item-section>
                            </q-item>
                            <q-separator spaced inset /> -->
                        </q-list>
                        <div class="row justify-end fab-addchat">
                            <q-btn color="primary" round icon="edit" @click="test"/>
                        </div>
                        <!-- <div class="row justify-end fab-addchat">
                            <q-btn color="primary" round icon="edit" @click="$router.push({name:'tambah Pesan'})"/>
                        </div> -->
                </q-page>
                </div>
            </div>
            </q-page-container>
    </q-layout>
</template>

<script>
import {chatServices} from 'src/services/ChatServices'
export default {
    components:{
        'my-connection-load' : require('components/koneksi/MyConnectionLoad.vue').default,
    },
    data(){
        return{
            search:''
        }
    },
    computed:{
        userFirebase(){
            let result = ''
            chatServices.getMsg(this.$store.state.auth.user.id, data =>{
                result = data.val()
            })
            return result
        },
        koneksi(){
            let konek = this.$store.state.koneksi.myconnection
            return konek !== undefined ? konek : undefined
        },
        profilimage(){
            return val => val.photo_profile ? this.profil + val.photo_profile :''
        }
    },
    created(){
        this.$store.dispatch('koneksi/deleteMyConnection')
        this.$store.dispatch('koneksi/MyConnection')
    },
    methods:{
        test(){
            let sekarang = new Date()
            let testing = {
                members:{
                    "fajar":true,
                    "budi":true
                },
                message:{
                    "name":"fajar",
                    "message":"testing2",
                    "timestamp":sekarang.toString()
                },
                roomchat:{
                    "lastmessage" : "fajar:testing2",
                    "timestamp" : sekarang.toString()
                },
                userId:"7",
                otheruserId:"12"
            }
            chatServices.sendMessage(testing)
            let result =''
            chatServices.getMsg(this.$store.state.auth.user.id, data =>{
                result = data.val()
            })
            console.log("result",result)
        }
    }
}
</script>

<style>
.fab-addchat{
    position:sticky;
    bottom:10px;
    right:10px;
    z-index:2;
}

</style>