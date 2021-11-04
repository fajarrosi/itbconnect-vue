<template>
    <q-card class="rekomen-card card-radius cursor-pointer" @click="$router.push(`/rekomendasi/${id}`)">
        <!-- <div v-ripple class="cursor-pointer q-hoverable relative-position" > -->
            <q-img
                src="~assets/akun23.png"
                spinner-color="primary"
                spinner-size="82px"
                height="130px"
                :draggable="false"
            />
            <!-- <img src="" style="height:130px;" > -->
            <q-card-section class="q-pt-sm q-pb-none" >
            <div class="row">
                <div class="col-12 text-caption text-justify ellipsis " style="font-weight:600;" >{{name}}</div>
                <div class="col-10 ellipsis text-caption" style="font-weight:600;">- {{prodi}}</div>
                <div class="col-2 text-caption ellipsis" style="font-weight:600;">'{{tahun()}}</div>
            </div>
            </q-card-section>
            <q-card-section class="q-pb-md q-pt-none row">
            <div class="text-13 ellipsis-2-lines text-primary col-12">
                {{jabatan}} {{perusahaan}}
            </div>
            <q-btn :color="wait ? 'grey-8' : 'primary'"  no-caps style="margin-top:8px;" class="col-12 btn-radius" @click.stop="onSubmit">
                <div class="row">
                    <q-icon name="done" v-if="wait" class="col-2" size="15px"/>
                    <div class="text-white col-10" >{{wait ? 'Menunggu' : 'Connect'}}</div>
                </div>
            </q-btn>
            </q-card-section>
        <!-- </div> -->
    </q-card>
</template>

<script>
export default {
    props:['name','pp','prodi','tahunmasuk','jabatan','perusahaan','id'],
    data(){
        return{
            wait:false,
            user:''
        }
    },
    methods:{
        tahun(){
            return this.$props.tahunmasuk.substring(2,4)
        },
        onSubmit(){
            if(!this.wait){
                this.user = {
                    name: this.$props.name,
                    id:this.$props.id,
                }
                // push ke api add koneksi
                this.wait = true
            }else{
                this.user = ''
                // push ke api remove koneksi
                this.wait = false
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