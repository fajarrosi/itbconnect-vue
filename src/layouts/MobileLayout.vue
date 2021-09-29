<template>
  <q-layout view="hHh lpr lFr">

    <q-header elevated class="bg-primary text-white q-pa-sm" height-hint="98">
      <q-toolbar>
        <q-space class="gt-sm" />
            <q-img
              src="~assets/logo_header.png"
              spinner-color="white"
              fit="fill"
              @click="$router.push({name:'home'})"
              class="logo-itb q-mr-md"
            v-if="$route.fullPath.includes('/home')"
            />
        <q-btn color="white" icon-right="search" label="Search" class="text-black q-mr-xs" no-caps align="between" style="width:400px" v-if="$route.fullPath.includes('/home')" @click="searchs = true"/>
        <q-btn icon="notifications" flat v-if="$route.fullPath.includes('/home')">
          <q-badge floating color="red" rounded>99</q-badge>
          <q-menu class="q-mt-md ">
          <q-list>
              <q-item clickable  v-ripple>
                <q-item-section avatar>
                  <q-avatar rounded>
                      <img src="icons/favicon-32x32.png">
                  </q-avatar>

                </q-item-section>
                <q-item-section>
                  <q-item-label>Single line item</q-item-label>
                  <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </q-item-section>

                <q-item-section side top>
                  <q-item-label caption>5 min ago</q-item-label>
                </q-item-section>
              </q-item>
          </q-list>
          </q-menu>
        </q-btn>
          <q-toolbar-title v-else >
            {{$route.name}}
          </q-toolbar-title>
        <q-space />

      </q-toolbar>
    
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered   :breakpoint="1000" class="bg-grey-2">
      <!-- drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered   :breakpoint="1000" class="bg-grey-2">
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>
        <search v-model:search="searchs"></search>

    <q-footer elevated class="bg-white">
        <q-tabs class="text-black" no-caps  
        indicator-color="white"
        >
            <q-route-tab 
            v-for="t in tabs" :key="t"
            :to="t.route"
            :icon="t.icon"
            
            exact
            active-class="custom-active"
            @click="drawerLeft = !drawerLeft"
            />
        </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
const tabs = [
    {
        route : { name: 'home' },
        icon :'home'
    },
    {
        route : { name: 'network' },
        icon :'groups'
    },
    {
        route : { name: 'news' },
        icon :'feed'
    },
    {
        route : { name: 'account' },
        icon :'account_circle'
    },
]
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    // const search = ref(false)

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      // search
    }
  },
  data(){
    return{
      tabs,
      searchs: false
    }
  },
  components:{
    'search' : require('components/Search.vue').default
  }
}
</script>
<style lang="scss">
.custom-active{
  color: $primary;
}
.logo-itb{
  height: 50px;
  max-width: 200px;
  background-color:white; 
  border-radius:4px;
  &:hover{
    cursor:pointer;
  }
}
</style>