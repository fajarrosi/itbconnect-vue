<template>
    <q-layout view="hHh lpr LFR">
        <q-header bordered class="bg-primary text-white q-pa-sm">
            <div class="row justify-center">
                <div class="mobile">
                    <div class="row">
                        <q-btn flat icon="arrow_back" class="text-white col-1" no-caps dense @click="$router.back()"/>
                        <q-input  outlined id="email" class="col-11" v-model="keyword" color="white" bg-color="white" input-style="font-size: 20px;"  placeholder="Masukkan Kata Kunci" ref="focusKey" autofocus
                        />
                    </div>
                </div>
            </div>
        </q-header>
        <q-page-container>
            <div class="row justify-center bg-grey-2">
                <div class="mobile bg-white">
                    <q-page class="q-px-md ">
                        <div class="text-17 text-bold q-my-sm">Alumni</div>
                        <div class="row q-mb-md items-center" v-for="n in 3" :key="n" style="border:3px solid #dcdcdc;border-radius:10px;">
                            <div class="col-3">
                                <img src="~assets/akun23.png" alt="akun" style="width:100%;border-top-left-radius:10px;border-bottom-left-radius:10px;margin-bottom:-5px;">
                            </div>
                            <div class="col-9 row q-px-sm">
                                <div class="col-12 ">Luke Pearce - Jurusan Matematika dan Ilmu Pengetahuan Alam</div>
                                <div class="text-primary text-13 col-8">Art Director Studio Themis</div>
                                <q-btn color="primary" label="Connect" no-caps class="col-4 text-13" rounded />
                            </div>
                        </div>
                        <div class="row">
                            <q-btn color="primary" label="Selengkapnya" flat dense  class="col-12"/>
                        </div>
                        <div class="text-17 text-bold q-mb-sm">Kabar Alumni</div>
                        <div class="row q-mb-md items-center" v-for="n in 3" :key="n" style="border:3px solid #dcdcdc;border-radius:10px;">
                            <div class="col-3">
                                <img src="~assets/berita.png" alt="berita" style="width:100%;border-top-left-radius:10px;border-bottom-left-radius:10px;margin-bottom:-5px;">
                            </div>
                            <div class="col-9 row q-px-sm">
                                <div class="col-12 text-bold">Luke Pearce - Jurusan Matematika dan Ilmu Pengetahuan Alam</div>
                                <div class="text-grey-8 text-13 col-8">21 April 2021</div>
                            </div>
                        </div>
                        <div class="row">
                            <q-btn color="primary" label="Selengkapnya" flat dense  class="col-12 q-mb-md"/>
                        </div>
                    </q-page>
                </div>
            </div>
        </q-page-container>
    </q-layout>
    
</template>

<script>
export default {
    data(){
        return{
            keyword:''
        }
    }
}
</script>

<style>

</style>