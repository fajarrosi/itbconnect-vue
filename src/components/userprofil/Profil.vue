<template>
    <div class="relative-position">
        <div class="row justify-between">
            <div class="title-section">PROFIL</div>
        </div>
        <div class="row ">
            <div class="col-4">Nama Panggilan</div>
            <div class="col-6">: {{dataprofil.nick}}</div>
        </div>
        <div class="locked" v-if="!isfriend">
            <div class="row justify-center"  style="padding-top:5%;">
                <div class="col-12 text-center">
                    <img src="~assets/padlock.png" alt="lock">
                </div>
                <div class="col-10 text-15 text-center" style="font-weight:600;"><span class="text-primary">Connect</span> dengan alumni lainnya agar dapat melihat profil lebih lengkap </div>
                <div v-if="request" class="q-mt-sm">
                    <div class="text-15 text-bold" v-if="acc">Permintaan Telah Diterima</div>
                    <div class="text-15 text-bold" v-else-if="dcc">Permintaan Telah Ditolak</div>
                    <div class="text-15" v-else>
                        <q-btn class="bg-white btnclose q-mr-sm" label="Tolak Permintaan" no-caps size="md" :disabled="accdisable" @click="onDcc"/>
                        <q-btn color="primary" label="Terima Permintaan" no-caps size="md" class="btncek" :disabled="accdisable"  @click="onAcc"/>
                    </div>
                </div>
                <div v-else>
                    <q-btn :color="wait ? 'grey-8' : 'primary'"  no-caps class="q-px-md col-4 btn-radius q-mt-sm" dense @click="onSubmit" :disable="btndisable" :loading="load">
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
        <div v-if="isfriend">
            <div class="row " >
                <div class="col-4">Jenis Kelamin</div>
                <div class="col-3" v-if="dataprofil.gender === 'male'">: Laki-laki</div>
                <div class="col-3" v-else>: Perempuan</div>
                <div v-if="dataprofil.blood" class="col-5 row">
                    <div class="col-6">Gol. Darah</div>
                    <div class="col-6">: {{dataprofil.blood.toUpperCase()}}</div>
                </div>
            </div>
            <div class="row">
                <div class="col-7 row" v-if="dataprofil.status">
                    <div class="col-7">Status</div>
                    <div class="col-5" v-if="dataprofil.status === 'yes'">: Menikah</div>
                    <div class="col-5" v-else>: Lajang</div>
                </div>
                <div class="row" v-if="dataprofil.religion" :class="dataprofil.status ? 'col-5' : 'col-7'">
                    <div :class="dataprofil.status ? 'col-6' : 'col-7'">Agama</div>
                    <div :class="dataprofil.status ? 'col-6' : 'col-5'">: {{dataprofil.religion}}</div>
                </div>
            </div>
            <div class="row ">
                <div class="col-4" style="overflow-wrap: break-word;
  word-wrap: break-word;">Kewarganegaraan</div>
                <div class="col-6">: {{dataprofil.citizenship}}</div>
            </div>
            <div class="row " v-if="dataprofil.domisili">
                <div class="col-4" v-if="dataprofil.negara === 78">Alamat Dalam Negeri</div>
                <div class="col-4" v-else>Alamat Luar Negeri</div>
                <div class="col-8 text-justify">: {{dataprofil.domisili}}</div>
            </div>
            <div class="row " v-if="dataprofil.email">
                <div class="col-4">Email</div>
                <div class="col-6">: {{dataprofil.email}}</div>
            </div>
            <div class="row " v-if="dataprofil.telephone">
                <div class="col-4">No. Telepon</div>
                <div class="col-6">: {{dataprofil.telephone}}</div>
            </div>
            
        </div>
        <div class="blur" v-else>
            <div class="row " >
                <div class="col-4">Jenis Kelamin</div>
                <div class="col-3">: Laki-laki</div>
                <div class="col-3">Gol. Darah</div>
                <div class="col-2">: O</div>
            </div>
            <div class="row ">
                <div class="col-4">Status</div>
                <div class="col-3">: Menikah</div>
                <div class="col-3">Agama</div>
                <div class="col-2">: Islam</div>
            </div>
            <div class="row ">
                <div class="col-4" style="overflow-wrap: break-word;
  word-wrap: break-word;">Kewarganegaraan</div>
                <div class="col-6">: Indonesia</div>
            </div>
            <div class="row ">
                <div class="col-4" >Alamat Dalam Negeri</div>
                <div class="col-8 text-justify">: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quod? </div>
            </div>
            <div class="row ">
                <div class="col-4">Email</div>
                <div class="col-6">: lorem</div>
            </div>
            <div class="row ">
                <div class="col-4">No. Telepon</div>
                <div class="col-6">: lorewr</div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'request'
    ],
    computed:{
        dataprofil(){
            return this.$store.state.rekomendasi.dataprofil
        },
        isfriend(){
            return this.$store.state.rekomendasi.is_friend
        }
    },
    data(){
        return{
            wait:false,
            btndisable:false,
            load:false,
            accdisable:false,
            acc:false,
            dcc:false
        }
    },
    created(){
        if(this.dataprofil.connect_stat === 'pending'){
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
                    friend_id : this.dataprofil.id
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
        onAcc(){
            this.accdisable = true
            this.$store.dispatch('koneksi/AcceptConnection',{
                friend_id : this.$route.params.id
            })
            .then(()=>{
                this.$store.dispatch('rekomendasi/userDetail',{
                    id_user :this.$route.params.id
                })
                .then(()=>{
                    this.acc = true
                })
            })
            .catch(error=>{
                console.log("error",error)
            })
        },
        onDcc(){
            this.accdisable = true
            this.$store.dispatch('koneksi/RejectConnection',{
                friend_id : this.$route.params.id
            })
            .then(()=>{
                this.$emit('update:request',false)
                this.btndisable = false
                this.wait = false
                
            })
            .catch(error=>{
                console.log("error",error)
            })
        }
    }
}
</script>
<style >
.locked{
    position:absolute;
    top:46px;
    bottom:20px;
    z-index:99;
}
.blur{
    filter:blur(4px);
}
</style>