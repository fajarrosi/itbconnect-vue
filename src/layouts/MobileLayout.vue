<template>
  <q-layout view="hHh lpr LFR">
    <title-page v-model:drawer="drawer"/>
        <q-drawer
          v-model="drawer"
          :width="250"
          behavior="mobile"
        >
          <drawer />
        </q-drawer>

    <q-page-container >
      <div class="row justify-center bg-grey-2">
        <div class="mobile bg-secondary">
          <router-view></router-view>
        </div>
      </div>
    </q-page-container>

    <footer-user v-model:unverified="unverified"/>
    <d-unverified v-if="unverified" v-model:unverified="unverified" />
  </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
  components:{
    'd-unverified' : require('components/profil/Dunverified.vue').default,
    'title-page' : require('components/core/TitlePage.vue').default,
    'footer-user' : require('components/core/FooterUser.vue').default,
    'drawer' :require('components/core/Drawer.vue').default
  },
  data(){
    return{
      unverified:false
    }
  },
  setup () {
    const drawer = ref(false)

    return {
      drawer,
    }
  },
  computed:{
      user(){
        return this.$store.state.auth.user
      },
      photoprofil(){
        if(this.user){
          if(this.user.profile.photo_profile){
            return this.profil + this.user.profile.photo_profile
          }else{
            return ''
          }
        }
        return ''
      },

  },
  methods:{
    Logout(){
      this.$store.dispatch('auth/logout')
      this.$router.push({name: 'login'})
    },
    onVerified(routerName){
        if(this.$store.getters['auth/isVerifieduser']){
            this.$router.push({name:routerName})
        }else{
            this.unverified = true
        }
    }
  },
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