<template>
    <q-page class="q-pb-lg">
        <img src="~assets/bg-akun.png" alt="background-account">
        <q-card flat class="q-mb-md q-mx-md card-radius" style="margin-top:-40px;" >
            <q-card-section>
                <bio/>
            </q-card-section>
        </q-card>
        <div class="row q-mx-md justify-between items-center">
            <p class="text-bold q-mb-sm text-17" style="color:#155897;">Informasi Pribadi</p>
            <div class="row" v-if="userrekomen.connect">
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
                    <profil/>
                </q-card-section>
                <q-card-section class="q-pb-none" v-if="userrekomen.connect">
                    <pengalaman />
                </q-card-section>
                <q-card-section class="q-pb-none" v-if="userrekomen.connect">
                    <pendidikan />
                </q-card-section>
                <q-card-section class="q-pb-none" v-if="userrekomen.connect">
                    <organisasi />
                </q-card-section>
                <q-card-section v-if="userrekomen.connect">
                    <bisnis/>
                </q-card-section>
        </q-card>
        <p class="text-bold q-mt-md q-mx-md text-17 q-mb-none" style="color:#155897;">Rekomendasi</p>
         <q-carousel
            v-model="slider"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            control-color="black"
            style="background-color:transparent;"
            class="text-black"
            height="300px"
        >
            <q-carousel-slide :name="1" style="overflow:hidden;" >
              <div class="container" style="width:470px;display:flex;">
                <div class="q-pr-sm" style="width:150px;height:322px;" v-for="(rekom,i) in getRekomen(1)" :key="i">
                  <rekomendasi :name="rekom.name" :id="rekom.id" :prodi="rekom.prodi" :tahunmasuk="rekom.tahunmasuk" :jabatan="rekom.jabatan" :perusahaan="rekom.perusahaan" />
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" style="overflow:hidden;">
              <div class="container" style="width:470px;display:flex;">
                <div class="q-pr-sm" style="width:150px;height:322px;" v-for="(rekom,i) in getRekomen(2)" :key="i">
                  <rekomendasi :name="rekom.name" :id="rekom.id" :prodi="rekom.prodi" :tahunmasuk="rekom.tahunmasuk" :jabatan="rekom.jabatan" :perusahaan="rekom.perusahaan"/>
                </div>
              </div>
            </q-carousel-slide>
        </q-carousel>
    </q-page>
</template>

<script>
import {  mapState } from "vuex";
export default {
    components:{
        'bio' : require('components/userprofil/Bio.vue').default,
        'profil':require('components/userprofil/Profil.vue').default,
        'pengalaman': require('components/userprofil/Pengalaman.vue').default,
        'pendidikan' : require('components/userprofil/Pendidikan.vue').default,
        'organisasi' : require('components/userprofil/Organisasi.vue').default,
        'bisnis' : require('components/userprofil/Bisnis.vue').default,
        'rekomendasi' : require('components/rekomendasi/Rekomendasi.vue').default
    },
    computed:{
        ...mapState(['userrekomen']),
        getRekomen(){
           return val => this.rekomen.slice((val-1)*this.perPages,(val-1)*this.perPages+this.perPages)
        }
    },
    data(){
        return{
            slider:1,
          rekomen:[
            {
              id:1,
              name:'Fajar Ilham Rosi Ilham Rosi1',
              prodi:'Teknik Mesin',
              tahunmasuk:'1995',
              jabatan:'Direktur',
              perusahaan:'Pelindo Energi Logistik Energi Logistik',
              pp:'gambar.png'
            },
            {
              id:2,
              name:'Budi2',
              prodi:'Teknik Industri',
              tahunmasuk:'1998',
              jabatan:'Karyawan',
              perusahaan:'Pelindo Energi Logistik',
              pp:'gambar2.png'
            },
            {
              id:3,
              name:'John Doe3',
              prodi:'Teknik Mesin',
              tahunmasuk:'1995',
              jabatan:'Direktur',
              perusahaan:'Pelindo Energi Logistik',
              pp:'gambar.png'
            },
            {
              id:4,
              name:'Budi4',
              prodi:'Teknik Industri',
              tahunmasuk:'1998',
              jabatan:'Karyawan',
              perusahaan:'Pelindo Energi Logistik',
              pp:'gambar2.png'
            },
            {
              id:5,
              name:'John Doe5',
              prodi:'Teknik Mesin',
              tahunmasuk:'1995',
              jabatan:'Direktur',
              perusahaan:'Pelindo Energi Logistik',
              pp:'gambar.png'
            },
            {
              id:6,
              name:'Budi6',
              prodi:'Teknik Industri',
              tahunmasuk:'1998',
              jabatan:'Karyawan',
              perusahaan:'Pelindo Energi Logistik',
              pp:'gambar2.png'
            },
          ],
          perPages:3
        }
    }
}
</script>

<style >
</style>