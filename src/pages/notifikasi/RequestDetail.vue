<template>
    <q-page class="bg-white">
        <q-card class="my-card" flat>
            <q-card-section>
                <div v-if="requestvalid">
                    <div v-if="request.length > 0">
                        <connect-request v-model:datarequest="request"/>
                    </div>
                    <div v-else>
                        <div class="text-15 q-mb-sm">Tidak Ada Permintaan </div>
                    </div>
                </div>
                <div v-else>
                    <request-load v-for="n in 10" :key="n" />
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>

export default {
    components:{
        'connect-request' : require('components/koneksi/ConnectRequest.vue').default,
        'request-load' : require('components/koneksi/RequestLoad.vue').default,
    },
    created(){
        this.$store.dispatch('koneksi/getConnectRequest')
        .then(response=>{
            this.request = response
            this.requestvalid = true
        })
    },
    data(){
        return{
            request:[],
            requestvalid:false
        }
    }
}
</script>

<style>
.btnclose.q-btn::before{
    box-shadow: none;
    border:1px solid rgba(122,114,114,1);
    color:rgba(122,114,114,1);
}
.btncek.q-btn::before{
    box-shadow: none;
}
</style>