<template>
    <q-list bordered class="card-radius q-mb-md">
        <q-item clickable v-ripple class="q-py-none q-pl-none" @click="$router.push(`/detail-user/${rekomendasi.id}`)">
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
                    <q-item-label lines="2" class="text-primary text-13">
                        {{rekomendasi.experience[0].position}} {{rekomendasi.experience[0].company_name}}
                    </q-item-label>
                    <q-item-label style="margin-left:auto;" class="q-mt-md" v-if="rekomendasi.is_friend">
                        <q-btn color="primary" label="Lihat Profil" no-caps  @click.stop="$router.push(`/detail-user/${rekomendasi.id}`)" rounded />
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
export default {
    props:[
        'rekomendasi'
    ],
    data(){
        return{
            wait:false,
            btndisable:false,
            load:false
        }
    },
    created(){
        if(this.rekomendasi.request_friend_status === 'pending'){
            this.btndisable = true
            this.wait = true
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
                })
                .catch(error=>{
                    console.log("error dari addConnect",error)
                })
            }
        },
        tahun(){
            return this.rekomendasi.univercity[0].entry_year.substring(2,4)
        },
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