<template>
<div style="height: calc(100% - 170px); margin-top: 170px;">
          <q-scroll-area style="border-right: 1px solid #ddd;" class="fit">
            <q-list padding>
              <q-item clickable v-ripple @click="onVerified('notifikasi')">
                <q-item-section>
                  <div class="row items-center">
                    <img src="~assets/notifikasi.png" alt="notifikasi">
                    <div class="text-black q-ml-sm">Notifikasi</div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="onVerified('kalender')">
                <q-item-section>
                  <div class="row items-center">
                    <img src="~assets/calendar.png" alt="calendar">
                    <div class="text-black q-ml-sm">Kalender</div>
                  </div>
                </q-item-section>
              </q-item>
              <!-- <q-item clickable v-ripple @click="onVerified('pesan')">
                <q-item-section>
                  <div class="row items-center">
                    <img src="~assets/pesan.png" alt="pesan">
                    <div class="text-black q-ml-sm">Pesan</div>
                  </div>
                </q-item-section>
              </q-item> -->
              <q-item clickable v-ripple @click="onVerified('Pengaturan & Privasi')">
                <q-item-section>
                  <div class="row items-center">
                    <img src="~assets/privasi.png" alt="privasi">
                    <div class="text-black q-ml-sm">Pengaturan & Privasi</div>
                  </div>
                </q-item-section>
              </q-item>
              <q-item v-ripple tag="a" href="https://wa.me/6281112125522" target="_blank">
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
                <q-img :src="photoprofil ? photoprofil : require('assets/account_circle.svg')" alt="photoprofilakun" width="70px" height="70px"/>
              </q-avatar>
              <div class="text-weight-bold col-12 text-white text-center">{{user.complete_name}}</div>
              <div class="col-12 text-white text-center">@{{user.username}}</div>
              <div class="col-5 text-white text-center row items-center justify-center">
                    <img src="~assets/link.png" alt="place" style="display:inline-block;filter: brightness(0) invert(1);">
                    <p class="q-my-none q-ml-sm">{{user.total_connect}}</p>
              </div>

            </div>
          </div>
          <div class="absolute-bottom">
            <q-separator spaced />
            <q-list padding>
              <q-item clickable v-ripple @click="Logout">
                 <q-item-section>
                  <div class="row items-center">
                      <img src="~assets/logout.png" alt="Logout">
                    <div class="text-black q-ml-sm">Logout</div>
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
</div>
</template>

<script>
export default {
    computed:{
        user(){
            return this.$store.state.auth.user
        },
        photoprofil(){
          return this.user?.profile?.photo_profile ? this.profil + this.user?.profile?.photo_profile : ''
        },
    },
    methods:{
        Logout(){
            this.$store.dispatch('auth/logout')
            this.$router.push({name: 'login'})
        },
        onVerified(routerName){
            this.$parent.$parent.$parent.onVerified(routerName)
        }
    },
}
</script>

<style>

</style>