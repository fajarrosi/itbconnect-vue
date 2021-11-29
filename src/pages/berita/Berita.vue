<template>
    <q-page >
      <slider-news />

      <div class="row justify-between q-mx-md q-mt-md items-center">
          <div class="text-17 text-bold" style="color:#505050;">Berita Terkini</div>
          <!-- <div class="text-primary text-caption text-bold">Selengkapnya</div> -->
          <q-btn color="primary" label="Selengkapnya" no-caps flat dense class="text-caption text-bold" @click="$router.push({name:'Daftar Berita',query: { type: 'alumni' }})"/>
      </div>

      <top-berita :alumni="true"/>
      
      <div class="row justify-between q-mx-md q-mt-none items-center">
          <div class="text-17 text-bold" style="color:#505050;">Lowongan Kerja</div>
          <q-btn color="primary" label="Selengkapnya" no-caps flat dense class="text-caption text-bold" @click="$router.push({name:'Daftar Berita',query: { type: 'lowker' }})"/>
          <!-- <div class="text-primary text-caption text-bold">Selengkapnya</div> -->
      </div>
      
      <top-lowker />

      <div class="row justify-between q-mx-md q-mt-none items-center">
          <div class="text-17 text-bold" style="color:#505050;">Seputar Pengurus Pusat IA-ITB</div>
          <!-- <div class="text-primary text-caption text-bold">Selengkapnya</div> -->
          <q-btn color="primary" label="Selengkapnya" no-caps flat dense class="text-caption text-bold" @click="$router.push({name:'Daftar Berita',query: { type: 'ppia' }})"/>
      </div>
      <top-berita :alumni="false" />
    
    </q-page>
</template>

<script>
export default {
  components:{
    'top-berita' : require('components/berita/TopNews.vue').default,
    'top-lowker' : require('components/berita/TopLowker.vue').default,
    'slider-news' : require('components/berita/SliderNews.vue').default
  },
}

</script>
<style lang="scss" scoped>
.title-berita:hover{
  color:$primary;
  cursor:pointer;
}
</style>