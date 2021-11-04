<template>
  <q-layout view="hHh lpr LFR">

    <q-header bordered class="bg-primary text-white q-pa-sm" height-hint="98">
      <div class="row justify-center">
        <div class="mobile">
          <div class="row justify-between" v-if="$route.name.includes('beranda')">
            <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer = !drawer"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="38" viewBox="0 0 56 38">
              <text id="CTD" transform="translate(0 30)" fill="#fff" font-size="29" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">CTD</tspan></text>
            </svg>
            <q-btn flat round dense icon="search" class="q-mr-xs" @click="$router.push({name:'cari'})"/>
          </div>
          <div class="row" v-else-if="$route.meta.headerback">
            <q-btn flat icon="arrow_back" class="text-white" no-caps dense @click="$router.back()"/>
            <p class="text-h6 q-mb-none">
              {{titlePage}}
            </p>
          </div>
          <div class="row" v-else-if="$route.meta.detail">
            <q-btn flat icon="arrow_back" class="text-white" no-caps dense @click="$router.back()"/>
            <p class="text-h6 q-mb-none">
              Kembali
            </p>
          </div>
          <div class="row" v-else>
            <p class="text-h6 q-mb-none">
              {{titlePage}}
            </p>
          </div>
        </div>
      </div>
    </q-header>
        <q-drawer
          v-model="drawer"
          :width="250"
          behavior="mobile"
        >
          <q-scroll-area style="height: calc(100% - 170px); margin-top: 170px; border-right: 1px solid #ddd">
            <q-list padding>
              <q-item clickable v-ripple @click="$router.push({name:'notifikasi'})">
                <q-item-section>
                  <div class="row items-center">
                    <img src="~assets/notifikasi.png" alt="notifikasi">
                    <div class="text-black q-ml-sm">Notifikasi</div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="$router.push({name:'calendar'})">
                <q-item-section>
                  <div class="row items-center">
                    <img src="~assets/calendar.png" alt="calendar">
                    <div class="text-black q-ml-sm">Calendar</div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="$router.push({name:'pesan'})">
                <q-item-section>
                  <div class="row items-center">
                    <img src="~assets/pesan.png" alt="pesan">
                    <div class="text-black q-ml-sm">Pesan</div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="$router.push({name:'setting&Privasi'})">
                <q-item-section>
                  <div class="row items-center">
                    <img src="~assets/privasi.png" alt="privasi">
                    <div class="text-black q-ml-sm">Pengaturan & Privasi</div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item v-ripple tag="a" href="https://wa.me/6287888000015" target="_blank">
                <q-item-section>
                  <div class="row items-center">
                    <img src="~assets/support.png" alt="support">
                    <div class="text-black q-ml-sm">Bantuan & Feedback</div>
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
          <div class="bg-primary absolute-top" style="height:170px;">
            <div class="row justify-center">

              <q-avatar size="70px" class="q-mb-sm q-mt-md">
                <img src="~assets/akun.png">
              </q-avatar>
              <div class="text-weight-bold col-12 text-white text-center">Gembong Primadjaya</div>
              <div class="col-12 text-white text-center">@gembongpri</div>
              <div class="col-5 text-white text-center row items-center justify-center">
                    <img src="~assets/link.png" alt="place" style="display:inline-block;filter: brightness(0) invert(1);">
                    <p class="q-my-none q-ml-sm">225</p>
              </div>

            </div>
          </div>
          <div class="absolute-bottom">
            <q-separator spaced />
            <q-list padding>
              <q-item clickable v-ripple>
                 <q-item-section>
                  <div class="row items-center">
                      <img src="~assets/logout.png" alt="Logout">
                    <div class="text-black q-ml-sm">Logout</div>
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-drawer>

<!-- <div class="row justify-center container-drawer">
  <div class="mobile text-black">
    <div  class="content-drawer">
        <q-list padding>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section>
                  Notifikasi
                </q-item-section>
              </q-item>

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>

                <q-item-section>
                  Calendar
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>

                <q-item-section>
                  Pesan
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>

                <q-item-section>
                  Pengaturan & Privasi
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>

                <q-item-section>
                  Bantuan & Feedback
                </q-item-section>
              </q-item>
            </q-list>
    </div>
  </div>
</div> -->

    <q-page-container >
      <div class="row justify-center bg-grey-2">
        <div class="mobile bg-secondary">
          <router-view></router-view>
        </div>
      </div>
      <!-- <div class="row justify-center bg-grey-3">
        <div class="mobile2 bg-white">
          <q-tabs class="text-black foot" no-caps  
              indicator-color="white"
              >
                  <q-route-tab 
                  v-for="t in tabs" :key="t"
                  :to="t.route"
                  :icon="t.icon"
                  :label="t.label"
                  
                  exact
                  active-class="custom-active"
                  @click="drawerLeft = !drawerLeft"
                  />
              </q-tabs>
        </div>
      </div> -->
    </q-page-container>
    <q-footer v-if="!$route.meta.nofooter">
      <div class="row justify-center bg-grey-2">
        <div class="mobile bg-white row text-center text-black" style="box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25);">
            <div class="col q-py-sm footer-menu "  @click="$router.replace({name:'beranda'})">
                <img src="~assets/beranda-on.png" alt="beranda-on" v-if="$route.name.includes('beranda')">
                <img src="~assets/beranda-off.png" alt="beranda-off" v-else>
                <div class="text-caption" :class="$route.name.includes('beranda') ? 'text-primary' : 'text-black'">Beranda</div>
            </div>
            <div class="col q-py-sm footer-menu "  @click="$router.replace({name:'koneksi'})">
                <img src="~assets/koneksi-on.png" alt="koneksi-on" v-if="$route.fullPath.includes('/koneksi')">
              <img src="~assets/koneksi-off.png" alt="koneksi-off" v-else>
                <div class="text-caption" :class="$route.fullPath.includes('/koneksi') ? 'text-primary' : 'text-black'">Koneksi</div>
            </div>
            <div class="col q-py-sm footer-menu "  @click="$router.replace({name:'berita'})">
              <img src="~assets/berita-on.png" alt="berita-on" v-if="$route.fullPath.includes('/berita')">
              <img src="~assets/berita-off.png" alt="berita-off" v-else>
              <div class="text-caption" :class="$route.fullPath.includes('/berita') ? 'text-primary' : 'text-black'">Berita</div>
            </div>
            <div class="col q-py-sm footer-menu "  @click="$router.replace({name:'profil'})">
              <img src="~assets/profil-on.png" alt="profil-on" v-if="$route.fullPath.includes('/profil')">
              <img src="~assets/profil-off.png" alt="profil-off" v-else>
              <div class="text-caption" :class="$route.fullPath.includes('/profil') ? 'text-primary' : 'text-black'">Profil</div>
            </div>
        </div>
      </div>
    </q-footer>
    
        <search v-model:search="searchs"></search>
  </q-layout>
</template>

<script>

import { ref } from 'vue'
export default {
  setup () {
    const drawer = ref(false)
    // const search = ref(false)

    return {
      drawer,
      // search
    }
  },
  computed:{
      titlePage(){
        let val = this.$route.name
        if (!val) {
          return ''
        }
        return val.replace(/^./, val[0].toUpperCase())
      }
  },
  data(){
    return{
      searchs: false,
      keyword:''
    }
  },
  components:{
    'search' : require('components/Search.vue').default
  }
}
</script>
<style lang="scss">
.footer-menu:hover{
  cursor:pointer;
}
.custom-active{
  color: $primary;
}

.q-tab__label{
  font-size:10px;
}
.container-drawer{
  background-color:rgba(0, 0, 0, 0.4);
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  z-index:9999;
  .content-drawer{
    background-color:white;
    width:250px;
    height:100vh;
  }
}
</style>