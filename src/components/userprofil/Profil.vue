<template>
    <div class="relative-position">
        <div class="row justify-between">
            <div class="title-section">PROFIL</div>
            
        <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah" v-if="dataprofil.nick === nick">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <div class="row profil-color">
            <div class="col-4">Nama Panggilan</div>
            <div class="col-6">: {{dataprofil.nick}}</div>
        </div>
        <div class="locked" v-if="dataprofil.nick !== nick && !dataprofil.connect">
            <div class="row justify-center"  style="padding-top:13%;">
                <div class="col-12 text-center">
                    <img src="~assets/padlock.png" alt="lock">
                </div>
                <div class="col-10 text-15 text-center" style="font-weight:600;"><span class="text-primary">Connect</span> dengan alumni lainnya agar dapat melihat profil lebih lengkap </div>
                <q-btn :color="wait ? 'grey-8' : 'primary'"  no-caps class="q-px-md col-4 btn-radius q-mt-sm" dense @click="onConnect">
                    <div class="row">
                        <q-icon name="done" v-if="wait" class="col-2" size="15px"/>
                        <div class="text-white col-10" >{{wait ? 'Menunggu' : 'Connect'}}</div>
                    </div>
                </q-btn>
            </div>
            
        </div>
        <div :class="dataprofil.nick !== nick && !dataprofil.connect ? 'blur' : ''">
            <div class="row profil-color" >
                <div class="col-4">Jenis Kelamin</div>
                <div class="col-3" v-if="dataprofil.gender === 'male'">: Laki-laki</div>
                <div class="col-3" v-else>: Perempuan</div>
                <div class="col-3">Gol. Darah</div>
                <div class="col-2">: {{dataprofil.blood}}</div>
            </div>
            <div class="row profil-color">
                <div class="col-4">Status</div>
                <div class="col-3" v-if="dataprofil.status === 'yes'">: Menikah</div>
                <div class="col-3" v-else>: Lajang</div>
                <div class="col-3">Agama</div>
                <div class="col-2">: {{dataprofil.religion}}</div>
            </div>
            <div class="row profil-color">
                <div class="col-4">Kewarganegaraan</div>
                <div class="col-6">: {{dataprofil.citizenship}}</div>
            </div>
            <div class="row profil-color">
                <div class="col-4" v-if="dataprofil.negara === 78">Alamat Dalam Negeri</div>
                <div class="col-4" v-else>Alamat Luar Negeri</div>
                <div class="col-8 text-justify">: {{dataprofil.domisili}}</div>
            </div>
            <div class="row profil-color">
                <div class="col-4">Email</div>
                <div class="col-6">: {{dataprofil.email}}</div>
            </div>
            <div class="row profil-color">
                <div class="col-4">No. Telepon</div>
                <div class="col-6">: {{dataprofil.telephone}}</div>
            </div>
            <svg class="Line_85" viewBox="0 0 396 1">
                <path id="Line_85" d="M 0 0 L 396 0">
                </path>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            wait:false
        }
    },
    props:[
        'dprofil',
        'dataprofil'
    ],
    emits:['update:dprofil'],
    computed:{
        nick(){
            return this.$store.state.auth.user.nickname
        }
    },
    methods:{
        ubah(){
            this.$emit('update:dprofil',true)
        },
        onConnect(){
            if(!this.wait){
                // this.user = {
                //     name: this.$props.name,
                //     id:this.$props.id,
                // }
                // push ke api add koneksi
                this.wait = true
            }else{
                // this.user = ''
                // push ke api remove koneksi
                this.wait = false
            }
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