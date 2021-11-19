<template>
    <q-page class="q-pb-lg">

        <div v-if="valid">
            <q-img :src="headerphoto ? headerphoto : require('assets/bg-akun.png')" alt="background-account" width="428px" height="153px"/>
            <q-card flat class="q-mb-md q-mx-md card-radius" style="margin-top:-40px;" >
                <q-card-section>
                    <bio v-model:dbio="dbio"/>
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
                    <profil v-model:dprofil="dprofil" :dataprofil="dataprofil" />
                </q-card-section>
                <q-card-section class="q-py-none">
                    <pengalaman v-model:dpengalaman="dpengalaman" :datapengalaman="datapengalaman" :databio="databio"/>
                </q-card-section>
                <q-card-section class="q-py-none">
                    <pendidikan v-model:dpend="dpend" :datapendidikan="datapendidikan" :databio="databio"/>
                </q-card-section>
                <q-card-section class="q-py-none">
                    <organisasi v-model:dminat="dminat" :dataorganisasi="dataorganisasi" :databio="databio" :datapengda="datapengda"/>
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <bisnis v-model:dbisnis="dbisnis" :databisnis="databisnis" :databio="databio"/>
                </q-card-section>
            </q-card>
        </div>
        <div v-else>
            <profilload />
        </div>
            <Dintro v-model:intro="intro" v-model:dbio="dbio" v-if="intro"/>
            <Dbio v-model:dbio="dbio" v-model:dprofil="dprofil" v-model:userbaru="userbaru" :databio="databio" :dataorganisasi="dataorganisasi" v-if="dbio"/>
            <Dprofil v-model:dprofil="dprofil" v-model:userbaru="userbaru" v-model:dpengalaman="dpengalaman" :dataprofil="dataprofil" v-if="dprofil" :pnegara="negara" :pprov="prov" :pagama="agama"/>
            <Dpengalaman v-model:dpengalaman="dpengalaman" v-model:dpend="dpend" v-model:userbaru="userbaru" :datapengalaman="datapengalaman" v-if="dpengalaman"/>
            <Dpend v-model:dpend="dpend" v-model:dminat="dminat" v-model:userbaru="userbaru" :datapendidikan="datapendidikan" v-if="dpend" :jenjang="jenjang" :prodi="prodi"/>
            <Dminat v-model:dminat="dminat" v-model:dbisnis="dbisnis" v-model:userbaru="userbaru" :dataorganisasi="dataorganisasi" v-if="dminat" :organization="organization" :pengda="pengda" :iaprodi="iaprodi" :datapengda="datapengda"/>
            <Dbisnis v-model:dbisnis="dbisnis" v-model:userbaru="userbaru" v-if="dbisnis" :bisnisfield="bisnisfield"/>
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
        'bisnis' : require('components/profil/Bisnis.vue').default,
        'profilload': require('components/profil/Profilload.vue').default
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
        }
    },

    methods:{
        ...mapActions("myprofil", ["getProfil","getOrg","getPengda","getIaprodi",'getJenjang','getProdi','getNegara','getProv','getAgama','getBisnisField']),
        async getData(){
            this.getNegara()
            this.getProv()
            this.getAgama()
            this.getJenjang()
            this.getProdi()
            this.getOrg()
            this.getPengda()
            this.getIaprodi()
            this.getBisnisField()
        }
    },
    computed:{
        ...mapState('myprofil',['databio','dataprofil','datapengalaman','datapendidikan','dataorganisasi','databisnis','organization','pengda','iaprodi','jenjang','prodi','negara','prov','agama','datapengda','bisnisfield']),
        userVerified(){
            return this.$store.state.auth.user.is_verified
        },
        headerphoto(){
            if(this.$store.state.myprofil.databio.headerprofil){
                return this.header + this.$store.state.myprofil.databio.headerprofil
            }else{
                return ''
            }
        },
        valid(){
            if(Object.keys(this.databio).length > 0){
                return true
            }else {
                return false
            }
        },
    },
    watch:{
        databio: function(){
            if(Object.keys(this.databio).length > 0){
                if(!this.userVerified){
                    this.intro = true
                    this.userbaru = true
                }
            }
        }
    },
    created(){
        if(!this.negara && !this.prov && !this.agama && !this.jenjang && !this.prodi && !this.organization && !this.pengda && !this.iaprodi && !this.bisnisfield){
            this.getData()
        }
    },
}
</script>

<style>

</style>