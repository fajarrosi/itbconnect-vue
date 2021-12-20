<template>
    <q-list bordered class="card-radius q-mb-md">
        <q-item clickable v-ripple class="q-py-none q-pl-none" @click="onDetail">
            <q-item-section style="max-width:98px;min-height:115px;">
                <q-img
                    spinner-color="primary"
                    spinner-size="30px"
                    height="115px"
                    style="border-top-left-radius:10px;border-bottom-left-radius:10px;max-width:98px;"
                    :src="profilimage ? profilimage : require('assets/account_circle.svg')"
                    :draggable="false"
                />
            </q-item-section>
            <q-item-section :class="$q.screen.lt.sm ? 'q-py-sm' : 'q-py-none'">
                    <q-item-label lines="2">
                        {{rekomendasi.complete_name}} - Jurusan {{rekomendasi.univercity[0].program_study}}
                    </q-item-label>
                    <q-item-label lines="1" class="text-primary text-13">
                        {{rekomendasi.experience[0].position}} {{rekomendasi.experience[0].company_name}}
                    </q-item-label>
                    <q-item-label style="margin-left:auto;" class="q-mt-md" v-if="rekomendasi.is_friend">
                        <q-btn color="primary" label="Lihat Profil" no-caps  @click.stop="$router.push(`/detail-user/${rekomendasi.id}`)" rounded />
                    </q-item-label>
                    <q-item-label style="margin-left:auto;" class="q-mt-md" v-else-if="rekomendasi.is_my_request">
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
                            <q-btn color="primary" label="Lihat Profil" no-caps  @click.stop="$router.push(`/detail-user/${rekomendasi.id}`)" rounded />
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
                    </q-item-label>
                    <q-item-label style="margin-left:auto;" class="q-mt-md" v-else>
                        <q-btn :color="wait ? 'grey-8' : 'primary'" no-caps class="text-13" rounded @click.stop="onSubmit"  :disable="btndisable" :loading="load">
                            <div class="row">
                                <q-icon name="done" v-if="wait" class="col-2" size="15px"/>
                                <div class="text-white col-10" >{{wait ? 'Menunggu' : 'Connect'}}</div>
                            </div>
                            <template v-slot:loading>
                                <q-spinner-facebook />
                            </template>
                        </q-btn>
                    </q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
    <!-- <div class="row q-mb-md items-center card-radius cursor-pointer q-hoverable relative-position bg-white" v-ripple  style="border:1px solid #dcdcdc;" @click="$router.push(`/detail-user/${rekomendasi.id}`)">
        <span class="q-focus-helper"></span>
        <q-img
            :src="profilimage ? profilimage : require('assets/akun23.png')"
            spinner-color="primary"
            spinner-size="82px"
            height="115px"
            :draggable="false"
            class="col-3"
            style="border-top-left-radius:10px;border-bottom-left-radius:10px;"
        />
        <div class="col-9 row q-px-sm">
            <div class="col-12 ">{{rekomendasi.complete_name}} - Jurusan {{rekomendasi.univercity[0].program_study}}</div>
            <div class="text-primary text-13 col-12">{{rekomendasi.experience[0].position}} {{rekomendasi.experience[0].company_name}}</div>
            <div v-if="rekomendasi.is_friend" style="margin-left:auto;" class="col-4">
                <q-btn color="primary" label="Lihat Profil" no-caps  @click.stop="$router.push(`/detail-user/${rekomendasi.id}`)" rounded />
            </div>
            <div v-else style="margin-left:auto;" class="col-4">
                <q-btn :color="wait ? 'grey-8' : 'primary'" no-caps class="text-13" rounded @click.stop="onSubmit"  :disable="btndisable" :loading="load">
                    <div class="row">
                        <q-icon name="done" v-if="wait" class="col-2" size="15px"/>
                        <div class="text-white col-10" >{{wait ? 'Menunggu' : 'Connect'}}</div>
                    </div>
                    <template v-slot:loading>
                        <q-spinner-facebook />
                    </template>
                </q-btn>
            </div>
        </div>
    </div> -->
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
        'rekomendasi'
    ],
    mounted(){
        if(this.rekomendasi.request_friend_status === 'pending' && !this.rekomendasi.is_my_request){
                this.btndisable = true
                this.wait = true
        }else{
            this.btndisable = false
            this.wait = false
        }
        if(this.rekomendasi.request_friend_status === 'pending' && this.rekomendasi.is_my_request){
            this.myrequest = true
            this.accept = false
            this.decline = false
        }
    },
    watch:{
        rekomendasi(val){
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
            btndisable:false,
            btndisable2:false,
            btndisabled:false,
            load:false,
            load2:false,
            load3:false,
            myrequest:false,
            accept:false,
            decline:false,
            wait2:false,

        }
    },
    methods:{
        onSubmit(){
            if(!this.wait){
                // console.log("waitnya false",this.wait)
                this.btndisable = true
                this.load = true
                this.$store.dispatch('rekomendasi/addConnect',{
                    friend_id : this.rekomendasi.id
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
                    friend_id : this.rekomendasi.id
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
        tahun(){
            return this.rekomendasi.univercity[0].entry_year.substring(2,4)
        },
        onDetail(){
            if(this.rekomendasi.is_my_request && !this.decline){
                this.$router.push(`/detail-user/${this.rekomendasi.id}?request=true`)
            }else{
                this.$router.push(`/detail-user/${this.rekomendasi.id}`)
            }
        },
        onAcc(){
            this.btndisabled = true
            this.load = true
            this.$store.dispatch('koneksi/AcceptConnection',{
                friend_id : this.rekomendasi.id
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
                friend_id : this.rekomendasi.id
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
            
        }
    },
    computed:{
        profilimage(){
            if(this.rekomendasi.profile.photo_profile){
                return this.profil + this.rekomendasi.profile.photo_profile
            }else{
                return ''
            }
        },
    }
}
</script>

<style>

</style>