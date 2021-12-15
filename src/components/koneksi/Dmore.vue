<template>
    <div>
        <q-dialog :model-value="dmore" @click="$emit('update:dmore', $event.target.value)" position="bottom" @hide="$emit('update:dmore',false)">
            <q-card class="hide-scrollbar">
                <q-card-section>
                    <div class="text-17 text-bold">{{detail.complete_name}}</div>
                    <div class="text-15">{{detail.univercity[0].program_study}} '{{tahun()}}</div>
                    <!-- <q-btn no-caps class="text-left q-pl-none" flat>
                        <img src="~assets/email.png" alt="pesan">
                        <div class="text-13 q-ml-md">Kirim Pesan</div>
                    </q-btn> -->
                    <br>
                    <q-btn no-caps class="text-left q-pl-none" flat @click="onDelete">
                        <img src="~assets/remove-user.png" alt="hapus">
                        <div class="text-13 q-ml-md">Hapus dari Koneksi</div>
                    </q-btn>
                </q-card-section>
            </q-card>
        </q-dialog>
        <dialogdelete v-model:ddelete="ddelete" v-if="ddelete" v-model:dload="dload" v-model:ddisabled="ddisabled"/>
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
export default {
     setup(){
        const $q = useQuasar()
        return {
            showNotif () {
                $q.notify({
                message: 'Koneksi Berhasil Dihapus',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'dmore','detail'
    ],
    components:{
        'dialogdelete' : require('components/DialogDelete.vue').default,
    },
    data(){
        return {
            ddelete:false,
            dload:false,
            ddisabled:false
        }
    },
    methods:{
        onDelete(){
            this.ddelete = true
        },
        tahun(){
            return this.detail.univercity[0].entry_year.substring(2,4)
        },
        onDeleting(){
            this.dload = true
            this.ddisabled = true
            this.$store.dispatch('koneksi/DeleteConnection',{friend_id : this.detail.id})
            .then(()=>{
                this.dload = false
                this.ddisabled = false
                this.ddelete = false
                this.showNotif()
            })
        }
    }
}
</script>

<style scoped>

.q-card{
    width: 418px;
    border-radius:10px;
}

</style>