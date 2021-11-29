<template>
    <div class="row q-mb-md items-center card-radius cursor-pointer q-hoverable relative-position bg-white" v-ripple  style="border:1px solid #dcdcdc;" @click="$router.push(`/detail-user/${rekomendasi.id}`)">
        <span class="q-focus-helper"></span>
        <q-img
            :src="profilimage ? profilimage : require('assets/akun23.png')"
            spinner-color="primary"
            spinner-size="82px"
            height="115px"
            width="98px"
            :draggable="false"
            class="col-3"
            style="border-top-left-radius:10px;border-bottom-left-radius:10px;"
        />
        <div class="col-9 row q-px-sm">
            <div class="col-12 ">{{rekomendasi.complete_name}} - Jurusan {{rekomendasi.univercity[0].program_study}}</div>
            <div class="text-primary text-13 col-12">{{rekomendasi.experience[0].position}} {{rekomendasi.experience[0].company_name}}</div>
            <div v-if="rekomendasi.is_friend" style="margin-left:auto;">
                <q-btn color="primary" label="Lihat Profil" no-caps  @click.stop="$router.push(`/detail-user/${rekomendasi.id}`)" rounded />
            </div>
            <div v-else style="margin-left:auto;">
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
    </div>
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