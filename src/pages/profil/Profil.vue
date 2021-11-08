<template>
    <q-page class="q-pb-lg">
        <!-- <div class="row">
            <q-skeleton type="QBtn" height="120px" class="col"/>
        </div>
        <q-card flat class="q-mb-md q-mx-md card-radius" style="margin-top:-40px;" >
            <q-card-section>
                <bio v-model:dbio="dbio" :databio="databio"/>
            </q-card-section>
        </q-card> -->
        <div v-if="load">
            <img src="~assets/bg-akun.png" alt="background-account">
            <q-card flat class="q-mb-md q-mx-md card-radius" style="margin-top:-40px;" >
                <q-card-section>
                    <bio v-model:dbio="dbio" :databio="databio"/>
                </q-card-section>
            </q-card>
            <div class="row q-mx-md justify-between items-center">
                <p class="text-bold q-mb-sm text-17" style="color:#155897;">Informasi Pribadi</p>
                <div class="row">
                    <q-btn round flat dense type="a" target="_blank" :href="databio.linkedin">
                        <img src="images/linkedin-bluee.png" alt="linkedin">
                    </q-btn>
                    <q-btn round flat dense type="a" target="_blank" :href="databio.ig">
                        <img src="images/instagram-bluee.png" alt="ig">
                    </q-btn>
                    <q-btn round flat dense type="a" target="_blank" :href="databio.fb">
                        <img src="images/facebook-bluee.png" alt="fb">
                    </q-btn>
                    <q-btn round flat dense type="a" target="_blank" :href="databio.twit">
                        <img src="images/twitter-bluee.png" alt="twt">
                    </q-btn>
                </div>
            </div>
            <q-card flat class="q-mx-md card-radius">
                <q-card-section class="q-pb-none">
                    <profil v-model:dprofil="dprofil" :dataprofil="dataprofil"/>
                </q-card-section>
                <q-card-section class="q-py-none">
                    <pengalaman v-model:dpengalaman="dpengalaman" :datapengalaman="datapengalaman"/>
                </q-card-section>
                <q-card-section class="q-py-none">
                    <pendidikan v-model:dpend="dpend" :datapendidikan="datapendidikan"/>
                </q-card-section>
                <q-card-section class="q-py-none">
                    <organisasi v-model:dminat="dminat" :dataorganisasi="dataorganisasi"/>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <bisnis v-model:dbisnis="dbisnis" :databisnis="databisnis"/>
                </q-card-section>
            </q-card>
        </div>
        <div v-else>
            <span>Memuat Data</span>
        </div>
            <Dintro v-model:intro="intro" v-model:dbio="dbio"/>
            <Dbio v-model:dbio="dbio" v-model:dprofil="dprofil" v-model:userbaru="userbaru" :databio="databio"/>
            <Dprofil v-model:dprofil="dprofil" v-model:userbaru="userbaru" v-model:dpengalaman="dpengalaman" :dataprofil="dataprofil"/>
            <Dpengalaman v-model:dpengalaman="dpengalaman" v-model:dpend="dpend" v-model:userbaru="userbaru"/>
            <Dpend v-model:dpend="dpend" v-model:dminat="dminat" v-model:userbaru="userbaru"/>
            <Dminat v-model:dminat="dminat" v-model:dbisnis="dbisnis" v-model:userbaru="userbaru"/>
            <Dbisnis v-model:dbisnis="dbisnis" v-model:userbaru="userbaru"/>
    </q-page>
</template>

<script>
// import store from 'src/store'
// import { api } from 'boot/axios'
import Dintro from 'src/components/profil/Dintro.vue'
import Dbio from 'components/profil/edit/Dbio.vue'
import Dprofil from 'src/components/profil/edit/DProfile.vue'
import Dpengalaman from 'components/profil/edit/Dpengalaman.vue'
import Dminat from 'components/profil/edit/Dminat.vue'
import Dbisnis from 'components/profil/edit/Dbisnis.vue'
import Dpend from 'components/profil/edit/Dpend.vue'
import {  mapState, mapActions } from "vuex";

export default {
    components:{
        Dintro,
        Dbio,
        Dprofil,
        Dpengalaman,
        Dminat,
        Dbisnis,
        Dpend,
        'bio' : require('components/profil/Bio.vue').default,
        'profil':require('components/profil/Profil.vue').default,
        'pengalaman': require('components/profil/Pengalaman.vue').default,
        'pendidikan' : require('components/profil/Pendidikan.vue').default,
        'organisasi' : require('components/profil/Organisasi.vue').default,
        'bisnis' : require('components/profil/Bisnis.vue').default
    },
    data(){
        return{
            intro:false,
            dbio:false,
            dprofil:false,
            dpengalaman:false,
            dminat:false,
            dbisnis:false,
            dpend:false,
            userbaru:false,
            load:false
        }
    },
    // beforeRouteEnter (to, from, next) {
    //     let config = {
    //         headers: {
    //             Authorization : `Bearer ${store().state.auth.token}`
    //         }
    //     }
    //     api.get('user/profile',config)
    //     .then((response)=>{
    //         console.log("response data data",response.data.data)
    //         store().commit('myprofil/setBio',response.data.data)
    //         store().commit('myprofil/setProfil',response.data.data)
    //         store().commit('myprofil/setPengalaman',response.data.data)
    //         store().commit('myprofil/setPendidikan',response.data.data)
    //         store().commit('myprofil/setOrganisasi',response.data.data)
    //         // store().dispatch('myprofil/getProfil',response.data.data)
    //         setTimeout(()=>{
    //             next()
    //         },3000)
    //     })
    // },

    methods:{
        ...mapActions('myprofil', ['getProfil']),
    },
    computed:{
        ...mapState('myprofil',['databio','dataprofil','datapengalaman','datapendidikan','dataorganisasi','databisnis']),
        userVerified(){
            return this.$store.state.auth.user.is_verified
        }
    },
    created(){
        if(Object.keys(this.databio).length > 0){
            this.load = true
        }else{
            this.getProfil()
            .then(()=>{
                this.load =true
                if(!this.userVerified){
                    this.intro = true
                    this.userbaru = true
                }
            })
        }
    },
}
</script>

<style>

</style>