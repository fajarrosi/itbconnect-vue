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
        infinite
        autoplay
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn v-if="active" size="5px" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
            <q-btn v-else size="5px" :icon="btnProps.icon" color="grey-8" flat round dense @click="onClick" />
        </template>
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="text-bold text-15 ellipsis-3-lines text-justify">
            first slide : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto deserunt velit quaerat modi excepturi at ullam ducimus sint. Voluptates!
          </div>
          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
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

      <div class="row justify-between q-mx-md q-mt-md items-center">
          <div class="text-17 text-bold" style="color:#505050;">Berita Terkini</div>
          <!-- <div class="text-primary text-caption text-bold">Selengkapnya</div> -->
          <q-btn color="primary" label="Selengkapnya" no-caps flat dense class="text-caption text-bold" @click="$router.push({name:'Daftar Berita',query: { type: 'alumni' }})"/>
      </div>

      <topberita :alumni="true"/>
      
      <div class="row justify-between q-mx-md q-mt-none items-center">
          <div class="text-17 text-bold" style="color:#505050;">Lowongan Kerja</div>
          <q-btn color="primary" label="Selengkapnya" no-caps flat dense class="text-caption text-bold" @click="$router.push({name:'Daftar Berita',query: { type: 'lowker' }})"/>
          <!-- <div class="text-primary text-caption text-bold">Selengkapnya</div> -->
      </div>
      
      <cardlowongan />

      <div class="row justify-between q-mx-md q-mt-none items-center">
          <div class="text-17 text-bold" style="color:#505050;">Seputar Pengurus Pusat IA-ITB</div>
          <!-- <div class="text-primary text-caption text-bold">Selengkapnya</div> -->
          <q-btn color="primary" label="Selengkapnya" no-caps flat dense class="text-caption text-bold" @click="$router.push({name:'Daftar Berita',query: { type: 'ppia' }})"/>
      </div>
      <topberita :alumni="false" class="q-mb-md"/>
    
    </q-page>
</template>

<script>
export default {
  data(){
      return{
          slider1:1,
      }
  },
  components:{
    'cardlowongan': require('components/cardberita/Cardlowongan.vue').default,
    'topberita' : require('components/berita/TopNews.vue').default,
  },
}

</script>
<style lang="scss" scoped>
.title-berita:hover{
  color:$primary;
  cursor:pointer;
}
</style>