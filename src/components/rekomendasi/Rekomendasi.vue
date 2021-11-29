<template>
<div class="q-pr-sm" style="width:150px;height:322px;" >
    <q-card class="rekomen-card card-radius cursor-pointer" @click="$router.push(`/detail-user/${rekomendasi.id}`)">
        <!-- <div v-ripple class="cursor-pointer q-hoverable relative-position" > -->
            <q-img
                :src="profilimage ? profilimage : require('assets/akun23.png')"
                spinner-color="primary"
                spinner-size="82px"
                height="130px"
                width="142px"
                :draggable="false"
            />
            <!-- <img src="" style="height:130px;" > -->
            <q-card-section class="q-pt-sm q-pb-none" >
            <div class="row">
                <div class="col-12 text-caption text-justify ellipsis " style="font-weight:600;" >{{rekomendasi.complete_name}}</div>
                <div class="col-10 ellipsis text-caption" style="font-weight:600;">- {{rekomendasi.univercity[0].program_study}}</div>
                <div class="col-2 text-caption ellipsis" style="font-weight:600;">'{{tahun()}}</div>
            </div>
            </q-card-section>
            <q-card-section class="q-pb-md q-pt-none row">
            <div class="text-13 ellipsis text-primary col-12">
                {{rekomendasi.experience[0].position}} 
            </div>
            <div class="text-13 ellipsis text-primary col-12">
                {{rekomendasi.experience[0].company_name}}
            </div>
            <q-btn :color="wait ? 'grey-8' : 'primary'"  no-caps style="margin-top:8px;" class="col-12 btn-radius" @click.stop="onSubmit" :disable="btndisable" :loading="load">
                <div class="row">
                    <q-icon name="done" v-if="wait" class="col-2" size="15px"/>
                    <div class="text-white col-10" >{{wait ? 'Menunggu' : 'Connect'}}</div>
                </div>
                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>
            </q-card-section>
        <!-- </div> -->
    </q-card>
</div>
</template>

<script>
export default {
    props:['rekomendasi'],
    data(){
        return{
            wait:false,
            btndisable:false,
            load:false
        }
    },
    methods:{
        tahun(){
            return this.rekomendasi.univercity[0].entry_year.substring(2,4)
        },
        
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

<style lang="scss">
// .title:hover{
//     text-decoration: underline;
//     color:$primary;
// }
.rekomen-card.q-card{
    box-shadow:none;
    /* height:297px; */
}
.rekomen-card.q-card:hover{
    /* cursor:pointer; */
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
}
</style>