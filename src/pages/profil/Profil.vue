<template>
    <q-page>
        <img src="~assets/bg-akun.png" alt="background-account">
        <q-card flat class="q-mb-md " style="margin-top:-40px;" >
            <q-card-section>
                <Bio v-model:dbio="dbio"/>
            </q-card-section>
        </q-card>
        <div class="row title-personal q-mx-auto justify-between items-center">
            <p class="text-bold q-mb-sm" style="font-size:17px;color:#155897;">Informasi Pribadi</p>
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
            <q-card flat>
            <q-card-section class="q-pb-none">
                <Profil v-model:dprofil="dprofil" v-model:userbaru="userbaru"/>
            </q-card-section>
            <q-card-section class="q-pb-none">
                <Pengalaman v-model:dpengalaman="dpengalaman" v-model:userbaru="userbaru"/>
            </q-card-section>
            <q-card-section class="q-pb-none">
                <Pendidikan v-model:dpend="dpend" v-model:userbaru="userbaru"/>
            </q-card-section>
            <q-card-section class="q-pb-none">
                <Organisasi v-model:dminat="dminat" v-model:userbaru="userbaru"/>
            </q-card-section>
            <q-card-section>
                <Bisnis v-model:dbisnis="dbisnis" />
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
import Profil from 'src/components/profil/Profil.vue'
import Pendidikan from 'src/components/profil/Pendidikan.vue'
import Organisasi from 'src/components/profil/Organisasi.vue'
import Pengalaman from 'src/components/profil/Pengalaman.vue'
import Dintro from 'src/components/profil/Dintro.vue'
import Bisnis from 'components/profil/Bisnis.vue'
import Bio from 'components/profil/Bio.vue'
import Dbio from 'components/profil/edit/Dbio.vue'
import Dprofil from 'src/components/profil/edit/DProfile.vue'
import Dpengalaman from 'components/profil/edit/Dpengalaman.vue'
import Dminat from 'components/profil/edit/Dminat.vue'
import Dbisnis from 'components/profil/edit/Dbisnis.vue'
import Dpend from 'components/profil/edit/Dpend.vue'
export default {
    components:{
        Profil,
        Pendidikan,
        Organisasi,
        Dintro,
        Pengalaman,
        Bisnis,
        Bio,
        Dbio,
        Dprofil,
        Dpengalaman,
        Dminat,
        Dbisnis,
        Dpend
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
    mounted(){
        if(this.userbaru){
            this.intro = true
        }
    }
}
</script>

<style scoped>
.q-page{
    padding-bottom:20px;
}
.q-card{
    /* width: 396px; */
    margin-left:16px;
    margin-right:16px;
    border-radius:10px;
}
.title-personal{
    width: 396px;
}
.sosmed{
    margin-left:16px;
}

</style>