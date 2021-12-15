<template>
    <q-page class="q-pb-lg">
      <div v-if="valid">
          <q-img :src="headerphoto ? headerphoto : require('assets/bg-akun.png')" alt="background-account"  height="153px"/>
          <q-card flat class="q-mb-md q-mx-md card-radius" style="margin-top:-40px;" >
              <q-card-section>
                  <bio/>
              </q-card-section>
          </q-card>
          <div class="row q-mx-md justify-between items-center">
              <p class="text-bold q-mb-sm text-17" style="color:#155897;">Informasi Pribadi</p>
              <div class="row" v-if="is_friend">
                    <q-btn round flat dense type="a" target="_blank" :href="databio.linkedin" v-if="databio.linkedin">
                        <img src="images/linkedin-bluee.png" alt="linkedin">
                    </q-btn>
                    <q-btn round flat dense type="a" target="_blank" :href="databio.ig" v-if="databio.ig">
                        <img src="images/instagram-bluee.png" alt="ig">
                    </q-btn>
                    <q-btn round flat dense type="a" target="_blank" :href="databio.fb" v-if="databio.fb">
                        <img src="images/facebook-bluee.png" alt="fb">
                    </q-btn>
                    <q-btn round flat dense type="a" target="_blank" :href="databio.twit" v-if="databio.twit">
                        <img src="images/twitter-bluee.png" alt="twt">
                    </q-btn>
              </div>
          </div>
          <q-card flat class="q-mx-md card-radius">
                  
                  <q-card-section class="q-pb-none">
                      <profil v-model:request="request"/>
                  </q-card-section>
                  <q-separator spaced style=" background:#CCDBDC;" />
                  <div v-if="is_friend">
                    <q-card-section class="q-py-none" >
                        <pengalaman />
                    </q-card-section>
                    <q-separator spaced style=" background:#CCDBDC;" />
                    <q-card-section class="q-py-none" >
                        <pendidikan />
                    </q-card-section>
                    <q-separator spaced style=" background:#CCDBDC;" />
                    <q-card-section class="q-py-none" >
                        <organisasi />
                    </q-card-section>
                    <q-separator spaced style=" background:#CCDBDC;" />
                        <bisnis/>
                  </div>
          </q-card>
          <p class="text-bold q-mt-md q-mx-md text-17 q-mb-none" style="color:#155897;">Rekomendasi Lainnya</p>
          <slider-detailrekomendasi :detail="true"/>
      </div>
      <div v-else>
        <detail-load />
      </div>
     
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
        'detail-load' : require('components/userprofil/DetailLoad.vue').default,
        'slider-detailrekomendasi' : require('components/rekomendasi/SliderRekomendasi.vue').default,
    },
    computed:{
        ...mapState('rekomendasi',['databio','is_friend']),
        headerphoto(){
            if(this.$store.state.rekomendasi.databio.headerprofil){
                return this.header + this.$store.state.rekomendasi.databio.headerprofil
            }else{
                return ''
            }
        },
    },
    data(){
        return{
            valid:false,
            request:false
        }
    },
    created(){
        this.getData()
        if(this.$route.query.request){
            this.request = true
        }else{
            this.request = false
        }
    },
    beforeRouteUpdate(to, from, next){
      this.valid = false
      if(to.query.request){
            this.request = true
        }else{
            this.request = false
        }
      this.$store.dispatch('rekomendasi/userDetail',{
          id_user :to.params.id
          })
        .then(()=>{
            this.valid = true
        })
      next()
    },
    methods:{
      async getData(){
        this.$store.dispatch('rekomendasi/userDetail',{
          id_user :this.$route.params.id
          })
        .then(()=>{
            this.valid = true
        })
      }
    }
}
</script>

<style >
</style>