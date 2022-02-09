<template>
    <q-footer v-if="!$route.meta.nofooter">
      <div class="row justify-center bg-grey-2">
        <div class="mobile bg-white row text-center text-black" style="box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.25);">
            <div class="col q-py-sm footer-menu "  @click="onVerified('beranda')">
                <img src="~assets/beranda-on.png" alt="beranda-on" v-if="$route.name.includes('beranda')">
                <img src="~assets/beranda-off.png" alt="beranda-off" v-else>
                <div class="text-caption" :class="$route.name.includes('beranda') ? 'text-primary' : 'text-black'">Beranda</div>
            </div>
            <div class="col q-py-sm footer-menu "  @click="onVerified('koneksi')">
                <img src="~assets/koneksi-on.png" alt="koneksi-on" v-if="$route.fullPath.includes('/koneksi')">
              <img src="~assets/koneksi-off.png" alt="koneksi-off" v-else>
                <div class="text-caption" :class="$route.fullPath.includes('/koneksi') ? 'text-primary' : 'text-black'">Koneksi</div>
            </div>
            <div class="col q-py-sm footer-menu "  @click="onVerified('berita')">
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
</template>

<script>
export default {
    props:[
        'unverified'
    ],
    methods:{
        onVerified(routerName){
          this.$parent.$parent.onVerified(routerName)
    }
    }
}
</script>

<style>

</style>