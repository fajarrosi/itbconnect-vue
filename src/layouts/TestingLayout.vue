<template>
    <div class="row bg-grey-2 justify-center">
        <div class="base-container shadow-2 flex items-center">
            <q-layout view="lHh lpr lFf" container  class="shadow-2 rounded-borders">
                <q-header elevated class="q-pa-sm">
                    <q-toolbar>
                        <q-img
                        src="~assets/logo_header.png"
                        spinner-color="white"
                        fit="fill"
                        @click="$router.push({name:'home'})"
                        class="logo-itb q-mr-md "
                        v-if="tab == 'Beranda'"
                        />
                        <q-btn color="white" icon-right="search" label="Search" class="text-black q-mr-xs" no-caps align="between" style="width:400px" v-if="tab == 'Beranda'" @click="$router.push('/search')"/>
                        <q-btn icon="notifications" flat v-if="tab == 'Beranda'">
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
                            {{tab}}
                        </q-toolbar-title>
                    </q-toolbar>
                </q-header>

                <q-footer elevated>
                    <q-toolbar class="bg-white text-black">
                    <q-tabs
                        v-model="tab"
                        dense
                        align="justify"
                        narrow-indicator
                        indicator-color="white"
                        active-color="primary"
                        class="full-width"
                        >
                            <q-tab name="Beranda" icon="home" />
                            <q-tab name="Network" icon="groups" />
                            <q-tab name="Berita" icon="feed" />
                            <q-tab name="Akun" icon="account_circle" />
                        </q-tabs>
                    </q-toolbar>
                </q-footer>

                <q-page-container>
                    <q-page class="bg-white">
                            <q-tab-panels v-model="tab" animated>
                                <q-tab-panel name="Beranda">
                                    <div class="text-h6">Network</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </q-tab-panel>

                                <q-tab-panel name="Network">
                                    <div class="text-h6">Network</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </q-tab-panel>

                                <q-tab-panel name="Berita">
                                    <div class="text-h6">News</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <p v-for="n in 50" :key="n">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, consectetur architecto omnis sed natus tenetur vitae dolorem facilis voluptate inventore!
                                    </p>
                                </q-tab-panel>
                                <q-tab-panel name="Akun" class="q-pa-none">
                                    <div class="text-h6">News</div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    <p v-for="n in 50" :key="n">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, consectetur architecto omnis sed natus tenetur vitae dolorem facilis voluptate inventore!
                                    </p>
                                </q-tab-panel>
                            </q-tab-panels>
                    </q-page>
                </q-page-container>
            </q-layout>

            
            <q-dialog v-model="search" full-height >
            <q-card style="width:480px;">
                <q-card-section>
                <div class="text-h6">Alert</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                </q-card-section>

                <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
            </q-dialog>
        </div>
    </div>
</template>
<script>

import { ref } from 'vue'
export default {
    setup () {
        return {
        tab: ref('Beranda')
        }
    },
    data(){
        return{
            search:false
        }
    },
   
}

</script>
<style lang="scss">
    .base-container{
        width: 480px;
        height:100vh;
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