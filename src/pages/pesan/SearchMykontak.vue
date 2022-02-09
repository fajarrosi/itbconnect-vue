<template>
    <q-layout view="hHh lpr LFR" 
    >
        <q-header bordered class="bg-white ">
            <div class="row justify-center">
                <div class="mobile">
                    <div class="row">
                        <q-btn flat icon="arrow_back" class="text-black col-1" no-caps dense @click="$router.back()"/>
                        <q-input  id="email" class="col-11" v-model="keyword" color="white" bg-color="white" input-style="font-size: 17px;"  placeholder="Masukkan Kata Kunci" ref="focusKey" autofocus
                        />
                    </div>
                </div>
            </div>
        </q-header>
            <q-page-container >
            <div class="row justify-center bg-grey-2">
                <div class="mobile bg-secondary">
                    <q-page class="bg-white">
                        <q-card flat>
                            <q-card-section v-if="koneksi !== undefined">
                                <div v-if="koneksi.length > 0">
                                        <CardFriend v-for="n in koneksi" :key="n" :koneksi="n" :addmsg="true"/>
                                </div>
                                <div v-else>
                                    <div class="text-15 q-mb-sm">Anda Belum Memiliki Koneksi 
                                    </div>
                                </div>
                            </q-card-section>
                            <q-card-section v-else>
                                <my-connection-load v-for="n in 10" :key="n"/>
                            </q-card-section>
                        </q-card>
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
            search:''
        }
    }
}
</script>

<style>

</style>