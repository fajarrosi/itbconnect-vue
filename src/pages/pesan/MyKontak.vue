<template>
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
</template>

<script>
import CardFriend from 'components/koneksi/Cardfriend'
export default {
    components:{
        CardFriend,
        'my-connection-load' : require('components/koneksi/MyConnectionLoad.vue').default,
    },
    computed:{
        koneksi(){
            let konek = this.$store.state.koneksi.myconnection
            return konek !== undefined ? konek : undefined
        }
    },
    created(){
        this.$store.dispatch('koneksi/deleteMyConnection')
        this.$store.dispatch('koneksi/MyConnection')
    },
}
</script>

<style>

</style>