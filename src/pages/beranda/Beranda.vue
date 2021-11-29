<template>
    <q-page >
      <slider-news />

      <slider-agenda />
      
      <slider-rekomendasi :detail="false" :location="false"/>

      <slider-rekomendasi :detail="false" :location="true"/>
    
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
          slider:1,
      }
  },
  components:{
    'slider-rekomendasi' : require('components/rekomendasi/SliderRekomendasi.vue').default,
    'topberitas' : require('components/berita/TopNews.vue').default,
    'slider-news' : require('components/berita/SliderNews.vue').default,
    'slider-agenda': require('./SliderAgenda.vue').default
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