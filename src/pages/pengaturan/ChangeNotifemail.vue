<template>
<q-dialog :model-value="dnotif" persistent>
    <q-card>
        <q-card-section>
            <div class="q-mb-md text-edit" style="font-size:17px;">Setelan Notifikasi Email</div>
            <q-list>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Request Teman Baru</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-toggle color="primary" icon="lock" v-model="friend" val="Status" />
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Berita</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-toggle color="primary" icon="lock" v-model="news" val="Gol.Darah" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="Batal" color="primary" @click="$emit('update:dnotif',false)" no-caps :disabled="btndisabled"/>
            <q-btn flat label="Simpan" color="primary" no-caps :disabled="btndisabled" :loading="load" @click="onSave">
                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>
        </q-card-actions>
    </q-card>
</q-dialog>
</template>

<script>
// import { api } from 'boot/axios'
import { useQuasar} from 'quasar'
export default {
    setup(){
        const $q = useQuasar()
        return {
            successNotif () {
                $q.notify({
                message: 'Setelan Notifikasi Email berhasil diganti',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failNotif () {
                $q.notify({
                message: 'Setelan Notifikasi Email gagal diganti. Silahkan coba lagi',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:['dnotif','dataNotif'],
    data(){
        return{
            friend:false,
            news:false,
            load:false,
            btndisabled:false
        }
    },
    mounted(){
        // if(Object.keys(this.dataNotif).length > 0 ){
        //     this.friend = this.dataNotif.friend
        //     this.news = this.dataNotif.news
        // }
    },
    methods:{
        onSave(){
            // this.load = true
            // this.btndisabled = true
            // let config = {
            //     headers: {
            //         Authorization : `Bearer ${this.$store.state.auth.token}`
            //     },
            // }
            // let sendData = {
            //     user_id: this.$store.state.auth.user.id,
            //     status : this.status,
            //     blood : this.blood,
            //     religion:this.religion,
            //     email:this.email,
            //     phone : this.phone,
            //     address: this.address
            // }
            // api.post('user/update-myprivacy',sendData,config)
            // .then(()=>{
            //     this.$emit('update:dprivacy',false)
            //     this.successNotif()
            // })
            // .catch(error=>{
            //     console.log("error",error)
            //     this.failNotif()
            // })
        }
    }
}
</script>

<style scoped>
.q-card{
    width:100vw;
    max-width:418px;
    border-radius:10px;
}
@media(min-width:428px){
    .q-card{
        width:418px;
        max-width:418px;
        border-radius:10px;
    }
}
</style>