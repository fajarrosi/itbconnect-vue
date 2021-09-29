<template>
    <q-layout view="hHh lpR fFf">

        <q-header reveal elevated class="bg-primary text-white">
        <q-toolbar>
            <q-btn flat round dense icon="menu" text-color="white"  @click="drawerLeft = !drawerLeft"/>
            <q-toolbar-title>
            ITB Connect
            </q-toolbar-title>
            <q-space />
            <q-btn round class="bg-white q-mr-lg q-my-md">
                <q-avatar size="32px">
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                </q-avatar>
                <q-menu class="q-mt-md"
                >
                    <q-list style="min-width: 100px">
                        <q-item >
                            <q-item-section>Manage Account</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="Logout">
                            <q-item-section>Logout</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>
            
        </q-toolbar>
        </q-header>

        <q-drawer
        v-model="drawerLeft"
        :width="200"
        :breakpoint="700"
        elevated
        class="bg-white text-black"
        
        >
            <q-scroll-area class="fit">
                <div class="q-pa-md ">
                    <q-tabs class="text-black martop" no-caps vertical inline-label 
                    indicator-color="white"
                    >
                        <q-route-tab 
                        v-for="t in tabs" :key="t"
                        :label="t.label"
                        :to="t.route"
                        icon="mail"
                        
                        exact
                        active-class="custom-active"
                        @click="drawerLeft = !drawerLeft"
                        class="q-mb-md"
                        />
                    </q-tabs>
                </div>
            </q-scroll-area>
        </q-drawer>


        <q-page-container>
        <router-view />
        </q-page-container>

    </q-layout>
</template>s
<script>
const tabs = [
    {
        label : 'Profil Saya',
        route : { name: 'profil' },
    },
    {
        label : 'Bisnis Saya',
        route : { name: 'bisnis' },
    },
    {
        label : 'Chat Saya',
        route : { name: 'chat' },
    },
]
export default {
    data(){
        return {
            drawerLeft: false,
            tabs
        }
    },
    methods:{
        Logout(){
            console.log("logout")
            this.$store.dispatch('auth/logout')
                .then(()=>{
                    this.$router.push("/")
                })
                .catch((error)=>{
                    console.log("error",error)
            })
        }
    }
}
</script>
<style lang="scss">
  .custom-active{
    color: white !important;
    background-color: $primary;
    border-radius: 10px;
  }
  .martop{
    margin-top: 60px;
  }
    
  
 
</style>
