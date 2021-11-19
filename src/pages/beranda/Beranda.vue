<template>
    <q-page >
        <q-carousel
        v-model="slider1"
        swipeable
        animated
        navigation
        height="150px"
        style="background-color:#efefef;color:#5b5b5b;"
        class="no-shadow"
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn v-if="active" size="5px" :icon="btnProps.icon" color="white" flat round dense @click="onClick"/>
            <q-btn v-else size="5px" :icon="btnProps.icon" color="grey-8" flat round dense @click="onClick" />
        </template>
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="text-bold text-15 ellipsis-2-lines text-justify">
            first slide : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto deserunt velit quaerat modi excepturi at ullam ducimus sint. Voluptates!
          </div>
          <div class="row q-mt-sm" style="margin-bottom:25px;">
            <q-btn color="primary" label="Undang teman" no-caps style="font-size:13px; padding-left:24px; padding-right:24px;"/>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="text-bold text-15 ellipsis-3-lines text-justify">
            second slide : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, non.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, dolorem?
          </div>
          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="text-bold text-15 ellipsis-3-lines text-justify">
            three slide : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus aliquid magnam, dolores odio eos.
          </div>
          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
        </q-carousel-slide>
      </q-carousel>

      <q-carousel
        v-model="slider5"
        infinite
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="black"
        arrows
        height="80px"
        class="bg-white text-black no-shadow rounded-borders q-ma-md"
        style="border-radius:10px;"
      >
        <q-carousel-slide :name="1">
          <div class="row q-mx-md">
            <div class="col-2">
              <div class="text-caption text-primary">Minggu</div>
              <div class="text-primary text-bold" style="font-size:32px;line-height:26px;">25</div>
            </div>
            <div class="col-10 q-px-md">
              <div class="text-caption text-grey-8" style="line-height:9px;">Meeting</div>
              <div class="text-caption text-grey-8" style="line-height:21px;">Indonesianisme</div>
              <q-separator spaced style="border:1px solid grey;background-color:grey; margin-top:0;margin-bottom:0;"/>
              <div class="text-caption text-primary" style="line-height:21px;">Meeting ITB Connect</div>
            </div>
          </div>
          
        </q-carousel-slide>
        <q-carousel-slide :name="2" >
          <div class="row q-mx-md">
            <div class="col-2">
              <div class="text-caption text-primary">Rabu</div>
              <div class="text-primary text-bold" style="font-size:32px;line-height:26px;">10</div>
            </div>
            <div class="col-10 q-px-md">
              <div class="text-caption text-grey-8" style="line-height:9px;">Meeting</div>
              <div class="text-caption text-grey-8" style="line-height:21px;">Indonesianisme</div>
              <q-separator spaced style="border:1px solid grey;background-color:grey; margin-top:0;margin-bottom:0;"/>
              <div class="text-caption text-primary" style="line-height:21px;">Meeting ITB Connect</div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      
      <div class="row justify-between q-mx-md q-mt-md">
          <div class="text-17 text-bold" style="color:#505050;">Rekomendasi</div>
      </div>
         <q-carousel
            v-model="slider2"
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


      <div class="row justify-between q-mx-md q-mt-sm">
          <div class="text-17 text-bold" style="color:#505050;">Rekomendasi Berdasarkan Lokasi</div>
      </div>
        <q-carousel
            v-model="slider3"
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
                  <rekomendasi :name="rekom.name" :id="rekom.id" :prodi="rekom.prodi" :tahunmasuk="rekom.tahunmasuk" :jabatan="rekom.jabatan" :perusahaan="rekom.perusahaan"/>
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
      <div class="row justify-between q-mx-md q-mt-sm">
          <div class="text-17 text-bold" style="color:#505050;">Kabar Alumni</div>
      </div>

      <topberitas :alumni="true"/>

    </q-page>
</template>

<script>
export default {
  data(){
      return{
          slider1:1,
          slider2:1,
          slider3:1,
          slider5:1,
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
  },
  computed:{
    getRekomen(){
      return val => this.rekomen.slice((val-1)*this.perPages,(val-1)*this.perPages+this.perPages)
    },
   
  },
  components:{
    'rekomendasi' : require('components/rekomendasi/Rekomendasi.vue').default,
    'topberitas' : require('components/berita/TopNews.vue').default,

  }
}

</script>
<style scoped>
/*  .title-berita:hover{
  color:$primary;
   cursor:pointer;
 } */
.q-carousel :deep() .q-carousel__prev-arrow--horizontal{
  left:0;
}
.q-carousel :deep() .q-carousel__next-arrow--horizontal{
  right:0;
}
</style>