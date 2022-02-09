<template>
  <q-header bordered class="bg-primary text-white q-pa-sm" height-hint="98">
      <div class="row justify-center">
        <div class="mobile">
          <div class="row justify-between" v-if="$route.name.includes('beranda')">
            <q-btn flat round dense icon="menu" class="q-mr-sm" @click="openDrawer"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="38" viewBox="0 0 56 38">
              <text id="CTD" transform="translate(0 30)" fill="#fff" font-size="29" font-family="Roboto-Bold, Roboto" font-weight="700"><tspan x="0" y="0">CTD</tspan></text>
            </svg>
            <q-btn flat round dense icon="search" class="q-mr-xs" @click="$router.push({name:'cari'})"/>
          </div>
          <div class="row justify-between" v-else-if="$route.meta.pesan">
            <q-btn flat icon="arrow_back" class="text-white" no-caps dense @click="$router.back()"/>
            <p class="text-h6 q-mb-none">
              {{titlePage}}
            </p>
              <q-btn flat round dense icon="search" class="q-mr-xs" @click="$router.push({name:'cari'})"/>
          </div>
          <div class="row" v-else-if="$route.meta.detailpesan">
            <q-btn flat icon="arrow_back" class="text-white col-1" no-caps dense @click="$router.back()"/>
            <div class="col-1">
              <q-avatar size="30px">
                  <img :src="$route.query.img ? $route.query.img : require('assets/account_circle.svg')">
              </q-avatar>
            </div>
            <div class="row justify-between col-10">
              <p class="text-h6 q-mb-none">
                {{$route.query.name}}
              </p>
                <q-btn flat round dense icon="more_vert" class="q-mr-xs"/>
            </div>
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
            <q-btn flat round dense icon="menu" class="q-mr-sm" @click="openDrawer"/>
            <p class="text-h6 q-mb-none">
              {{titlePage}}
            </p>
          </div>
        </div>
      </div>
    </q-header>
</template>

<script>
export default {
    props:[
        'drawer'
    ],
    computed:{
        titlePage(){
            let val = this.$route.name
            if (!val) {
            return ''
            }
            return val.replace(/^./, val[0].toUpperCase())
        },
    },
    methods:{
        openDrawer(){
            this.$emit('update:drawer',!this.drawer)
        }
    }
}
</script>

<style>

</style>