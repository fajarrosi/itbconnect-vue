<template>
    <div class="item-alumni">
        <q-item clickable v-ripple @click="onDetail">
            <q-item-section top avatar>
                <q-avatar>
                    <img :src="userimage(alumni) ? userimage(alumni) : require('assets/account_circle.svg')">
                </q-avatar>
            </q-item-section>

            <q-item-section>
                <q-item-label>{{alumni.complete_name}} - jurusan {{alumni.univercity[0].program_study}}</q-item-label>
                <q-item-label class="text-primary text-13" lines="2">{{alumni.experience[0].position}} {{alumni.experience[0].company_name}}</q-item-label>
            </q-item-section>

            <q-item-section side top>
                <q-btn color="primary" label="Lihat Profil" @click="$router.push(`/detail-user/${alumni.id}`)" rounded no-caps  v-if="alumni.is_friend" />
                <div v-else-if="alumni.is_my_request">
                    <div v-if="myrequest">
                        <q-btn color="grey-8" label="Tolak " no-caps  @click.stop="onDcc" rounded outline class="q-mr-sm" :loading="load2" :disable="btndisabled">
                            <template v-slot:loading>
                                <q-spinner-facebook />
                            </template>
                        </q-btn>
                        <q-btn color="primary" label="Terima " no-caps  @click.stop="onAcc" rounded :loading="load" :disable="btndisabled">
                            <template v-slot:loading>
                                <q-spinner-facebook />
                            </template>
                        </q-btn>
                    </div>
                    <div v-if="accept">
                        <q-btn color="primary" label="Lihat Profil" no-caps  @click.stop="$router.push(`/detail-user/${alumni.id}`)" rounded />
                    </div>
                    <div v-if="decline">
                        <q-btn :color="wait2 ? 'grey-8' : 'primary'"  no-caps  @click.stop="onConnect" rounded :disable="btndisable2" :loading="load3" >
                            <div class="row">
                            <q-icon name="done" v-if="wait2" class="col-2" size="15px"/>
                            <div class="text-white col-10" >{{wait2 ? 'Menunggu' : 'Connect'}}</div>
                        </div>
                        <template v-slot:loading>
                            <q-spinner-facebook />
                        </template>
                        </q-btn>
                    </div>
                </div>
                <q-btn :color="wait ? 'grey-8' : 'primary'"  rounded no-caps @click.stop="onSubmit" v-else :disable="btndisable" :loading="load">
                    <div class="row">
                        <q-icon name="done" v-if="wait" class="col-2" size="15px"/>
                        <div class="text-white col-10" >{{wait ? 'Menunggu' : 'Connect'}}</div>
                    </div>
                    <template v-slot:loading>
                        <q-spinner-facebook />
                    </template>
                </q-btn>
            </q-item-section>
        </q-item>
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
                message: 'Permintaan Berhasil Diterima',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            connectNotif () {
                $q.notify({
                message: 'Permintaan Koneksi Berhasil',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failNotif(){
                $q.notify({
                message: 'Permintaan Berhasil Ditolak. ',
                type: 'positive',
                position: 'top',
                progress: true
                })
            }
        }
    },
    props:[
        'alumni'
    ],
    mounted(){
        if(this.alumni.request_friend_status === 'pending' && !this.alumni.is_my_request){
                this.btndisable = true
                this.wait = true
        }else{
            this.btndisable = false
            this.wait = false
        }
        if(this.alumni.request_friend_status === 'pending' && this.alumni.is_my_request){
            this.myrequest = true
            this.accept = false
            this.decline = false
        }

    },
    watch:{
        alumni(val){
            if(val.request_friend_status === 'pending' && !val.is_my_request){
                this.btndisable = true
                this.wait = true
            }else{
                this.btndisable = false
                this.wait = false
            }
            if(val.request_friend_status === 'pending' && val.is_my_request){
                this.myrequest = true
                this.accept = false
                this.decline = false
            }
        }
    },
    data(){
        return{
            wait:false,
            wait2:false,
            btndisable:false,
            btndisabled:false,
            btndisable2:false,
            load:false,
            load2:false,
            load3:false,
            myrequest: false,
            accept:false,
            decline:false
        }  
    },
    methods:{
        onSubmit(){
            if(!this.wait){
                // console.log("waitnya false",this.wait)
                this.btndisable = true
                this.load = true
                this.$store.dispatch('rekomendasi/addConnect',{
                    friend_id : this.alumni.id
                })
                .then(()=>{
                    // console.log("response dari addConnect",response)
                    this.load = false
                    this.wait = true
                    this.connectNotif()
                })
                .catch(error=>{
                    console.log("error dari addConnect",error)
                })
            }
        },
        onConnect(){
                this.btndisable2 = true
                this.load3 = true
                this.$store.dispatch('rekomendasi/addConnect',{
                    friend_id : this.alumni.id
                })
                .then(()=>{
                    // console.log("response dari addConnect",response)
                    this.load3 = false
                    this.wait2 = true
                    this.connectNotif()

                })
                .catch(error=>{
                    console.log("error dari addConnect",error)
                })
        },
        userimage(val){
            return  val.profile.photo_profile ? this.profil + val.profile.photo_profile : ''
        },
        onAcc(){
            this.btndisabled = true
            this.load = true
            this.$store.dispatch('koneksi/AcceptConnection',{
                friend_id : this.alumni.id
            })
            .then(()=>{
                this.showNotif()
                this.btndisabled = false
                this.load = false
                this.myrequest = false
                this.accept = true
            })
            .catch(error=>{
                console.log("error",error)
            })
            
        },
        onDcc(){
            this.btndisabled = true
            this.load2 = true
            this.$store.dispatch('koneksi/RejectConnection',{
                friend_id : this.alumni.id
            })
            .then(()=>{
                this.failNotif()
                this.btndisabled = false
                this.myrequest = false
                this.decline = true
                this.load2 = false
            })
            .catch(error=>{
                console.log("error",error)
            })
            
        },
        onDetail(){
            if(this.alumni.is_my_request && !this.decline){
                this.$router.push(`/detail-user/${this.alumni.id}?request=true`)
            }else{
                this.$router.push(`/detail-user/${this.alumni.id}`)
            }
        },
    }
}
</script>

<style>

</style>