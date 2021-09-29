<template lang="">
    <div>
        <q-dialog :model-value="search" @click="$emit('update:search', $event.target.value)" persistent maximized>
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
            <q-btn flat icon="arrow_back" class="text-white" no-caps dense @click="$emit('update:search', false)"/>
            <q-input rounded outlined id="email" class="full-width q-pa-md" v-model="keyword" color="black" bg-color="white" input-style="font-size: 20px;"  placeholder="Masukkan Kata Kunci"/>

          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page padding>
            <h1>Hasil Search</h1>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup(){
        const search2 = ref(false)
        return{
            search2
        }
    },
    data(){
      return{
        keyword:''
      }
    },
    props: ['search']
}
</script>
<style lang="">
    
</style>