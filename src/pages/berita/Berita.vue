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
          <q-btn color="primary" label="Selengkapnya" no-caps flat dense class="text-caption text-bold" @click="$router.push({name:'Daftar Berita'})"/>
      </div>

        <q-carousel
            v-model="slider2"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            style="background-color:transparent;"
            class="text-black"
            height="350px"
        >
            <q-carousel-slide :name="1" style="overflow:hidden;">
              <div class="container" style="display:flex;width:700px;">
                <cardberita v-for="(berita,i) in getBerita(1)" :key="i" :databerita="berita" :detail="false"/>            
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" style="overflow:hidden;">
              <div class="container" style="display:flex;width:700px;">
                <cardberita v-for="(berita,i) in getBeritas(2)" :key="i" :databerita="berita" :detail="false"/>            
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" style="overflow:hidden;">
              <div class="container" style="display:flex;width:700px;">
                <cardberita v-for="(berita,i) in getBeritas(3)" :key="i" :databerita="berita" :detail="false"/>            
              </div>
            </q-carousel-slide>
        </q-carousel>

      <div class="row justify-between q-mx-md q-mt-none items-center">
          <div class="text-17 text-bold" style="color:#505050;">Lowongan Kerja</div>
          <q-btn color="primary" label="Selengkapnya" no-caps flat dense class="text-caption text-bold" />
          <!-- <div class="text-primary text-caption text-bold">Selengkapnya</div> -->
      </div>

      <q-carousel
            v-model="slider4"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            style="background-color:transparent;"
            class="text-black"
            height="120px"
        >
            <q-carousel-slide :name="x" style="overflow:hidden;" v-for="x in 3" :key="x">
              <div class="container" style="display:flex;width:700px;">
                <cardlowongan v-for="n in 2" :key="n"/>
              </div>
            </q-carousel-slide>
        </q-carousel>

      <div class="row justify-between q-mx-md q-mt-none items-center">
          <div class="text-17 text-bold" style="color:#505050;">Seputar Pengurus Pusat IA-ITB</div>
          <!-- <div class="text-primary text-caption text-bold">Selengkapnya</div> -->
          <q-btn color="primary" label="Selengkapnya" no-caps flat dense class="text-caption text-bold" />
      </div>

      <q-carousel
            v-model="slider3"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            style="background-color:transparent;"
            class="text-black q-mb-md"
            height="350px"
        >
            <q-carousel-slide :name="1" style="overflow:hidden;" >
              <div class="container" style="display:flex;width:700px;">
                <cardberita v-for="(seputar,i) in getSeputar(1)" :key="i" :databerita="seputar" :detail="false"/>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" style="overflow:hidden;" >
              <div class="container" style="display:flex;width:700px;">
                <cardberita v-for="(seputar,i) in getSeputars(2)" :key="i" :databerita="seputar" :detail="false"/>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" style="overflow:hidden;" >
              <div class="container" style="display:flex;width:700px;">
                <cardberita v-for="(seputar,i) in getSeputars(3)" :key="i" :databerita="seputar" :detail="false"/>
              </div>
            </q-carousel-slide>
        </q-carousel>
    </q-page>
</template>

<script>

export default {
  data(){
      return{
          slider1:1,
          slider2:1,
          slider3:1,
          slider4:1,
          berita:[
            {
              title:'Kabar ALumni ke-1',
              desk:'Kabar ALumni ke- ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.',
              date:'19 April 2021',
              kabar:true
            },
            {
              title:'Kabar ALumni ke-2',
              desk:'Kabar ALumni ke- ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.',
              date:'19 April 2021',
              kabar:true
            },
            {
              title:'Kabar ALumni ke-3',
              desk:'Kabar ALumni ke- ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.',
              date:'19 April 2021',
              kabar:true
            },
            {
              title:'Kabar ALumni ke-4',
              desk:'Kabar ALumni ke- ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.',
              date:'19 April 2021',
              kabar:true
            }
          ],
          seputar:[
            {
              title:'Seputar PP-IA 1',
              desk:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.',
              date:'19 April 2021',
              kabar:false
            },
            {
              title:'Seputar PP-IA 2',
              desk:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.',
              date:'19 April 2021',
              kabar:false
            },
            {
              title:'Seputar PP-IA 3',
              desk:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.',
              date:'19 April 2021',
              kabar:false
            },
            {
              title:'Seputar PP-IA 4',
              desk:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.',
              date:'19 April 2021',
              kabar:false
            }
          ],
          perPages:2
      }
  },
  components:{
    'cardberita' : require('components/cardberita/Cardberita.vue').default,
    'cardlowongan': require('components/cardberita/Cardlowongan.vue').default
  },
  computed:{
    getBerita(){
      return val => this.berita.slice((val-1)*this.perPages,(val-1)*this.perPages+this.perPages)
    },
    getBeritas(){
      return val => this.berita.slice(val-1,(val-1)*this.perPages+1)
    },
    getSeputar(){
      return val => this.seputar.slice((val-1)*this.perPages,(val-1)*this.perPages+this.perPages)
    },
    getSeputars(){
      return val => this.seputar.slice(val-1,(val-1)*this.perPages+1)
    },
  },
}

</script>
<style lang="scss" scoped>
.title-berita:hover{
  color:$primary;
  cursor:pointer;
}
</style>