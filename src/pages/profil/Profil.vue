<template>
    <q-page class="q-pb-lg">
        <img src="~assets/bg-akun.png" alt="background-account">
        <q-card flat class="q-mb-md q-mx-md card-radius" style="margin-top:-40px;" >
            <q-card-section>
                <bio v-model:dbio="dbio" :databio="databio"/>
            </q-card-section>
        </q-card>
        <div class="row q-mx-md justify-between items-center">
            <p class="text-bold q-mb-sm text-17" style="color:#155897;">Informasi Pribadi</p>
            <div class="row">
                <q-btn round @click="onClick" flat dense >
                    <img src="images/linkedin-bluee.png" alt="linkedin">
                </q-btn>
                <q-btn round @click="onClick" flat dense >
                    <img src="images/instagram-bluee.png" alt="ig">
                </q-btn>
                <q-btn round @click="onClick" flat dense >
                    <img src="images/facebook-bluee.png" alt="fb">
                </q-btn>
                <q-btn round @click="onClick" flat dense >
                    <img src="images/twitter-bluee.png" alt="twt">
                </q-btn>
            </div>
        </div>
            <q-card flat class="q-mx-md card-radius">
                <q-card-section class="q-pb-none">
                    <profil v-model:dprofil="dprofil" v-model:userbaru="userbaru" :dataprofil="dataprofil"/>
                </q-card-section>
                <q-card-section class="q-pb-none">
                    <pengalaman v-model:dpengalaman="dpengalaman" v-model:userbaru="userbaru" :datapengalaman="datapengalaman"/>
                </q-card-section>
                <q-card-section class="q-pb-none">
                    <pendidikan v-model:dpend="dpend" v-model:userbaru="userbaru" :datapendidikan="datapendidikan"/>
                </q-card-section>
                <q-card-section class="q-pb-none">
                    <organisasi v-model:dminat="dminat" v-model:userbaru="userbaru" :dataorganisasi="dataorganisasi"/>
                </q-card-section>
                <q-card-section>
                    <bisnis v-model:dbisnis="dbisnis" :databisnis="databisnis"/>
                </q-card-section>
            </q-card>
            <Dintro v-model:intro="intro" v-model:dbio="dbio"/>
            <Dbio v-model:dbio="dbio" v-model:dprofil="dprofil" v-model:userbaru="userbaru"/>
            <Dprofil v-model:dprofil="dprofil" v-model:userbaru="userbaru" v-model:dpengalaman="dpengalaman"/>
            <Dpengalaman v-model:dpengalaman="dpengalaman" v-model:dpend="dpend" v-model:userbaru="userbaru"/>
            <Dpend v-model:dpend="dpend" v-model:dminat="dminat" v-model:userbaru="userbaru"/>
            <Dminat v-model:dminat="dminat" v-model:dbisnis="dbisnis" v-model:userbaru="userbaru"/>
            <Dbisnis v-model:dbisnis="dbisnis" v-model:userbaru="userbaru"/>
    </q-page>
</template>

<script>
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
            userbaru:true,
        }
    },
    methods:{
        ...mapActions('myprofil', ['getProfil']),
    },
    computed:{
        ...mapState('myprofil',['databio','dataprofil','datapengalaman','datapendidikan','dataorganisasi','databisnis']),
        
    },
    mounted(){
        this.getProfil()
        .then((response)=>{
            console.log("response", response.data)
        })
        .catch(error =>{
            console.log(error)
        })
        if(!this.bio){
            // this.getBio()
            // this.getProfile()
            // this.getPengalaman()
            // this.getPendidikan()
            // this.getOrganisasi()
            // this.getBisnis()
        }
    }
}
</script>

<style>

</style>