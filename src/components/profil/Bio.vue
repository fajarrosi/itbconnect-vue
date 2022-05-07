<template>
    <div>
        <div class="row justify-between">
            <q-avatar size="92px" style="margin-top:-70px;" >
                <q-img :src="photoprofil ? photoprofil : require('assets/account_circle.svg')" width="92px" height="92px" />
            </q-avatar>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z" fill="#d2d3d4"/></svg> -->
            <!-- <q-avatar color="grey" text-color="white" font-size="95px" icon="account_circle" size="92px" v-else style="margin-top:-70px;"/> -->
            <!-- <q-avatar size="92px" style="margin-top:-70px;">
                <q-img :src="photoprofil ? photoprofil : require('assets/akun23.png')" width="92px" height="92px" />
            </q-avatar> -->
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <q-icon name="edit" size="15px"/>
                <div>Ubah</div>
            </q-btn>
        </div>
        <div class="row">
            <div class="col-9  text-primary text-h6" style="font-weight:600;">{{databio.name}} <span style="font-size:9px;color:#F47226;" v-if="!$store.getters['auth/isVerifieduser']">(Dalam Verifikasi)</span> </div>
            <div class="col-9 q-mb-sm text-primary">Jurusan {{databio.prodi}}, {{databio.tahunmasuk}}</div>
            <div class="col-9 ">{{databio.jabatan}} {{databio.perusahaan}}</div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row items-center">
                    <img src="~assets/pin.png" alt="place">
                    <p class="place q-my-none q-ml-sm">{{databio.domisili}}</p>
                </div>
            </div>
            <div class="col">
                <div class="row items-center">
                    <img src="~assets/link.png" alt="place">
                    <p class="place q-my-none q-ml-sm">
                        <span >{{databio.friend}} orang</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 q-my-sm">
                Bergabung sejak {{databio.created}}
            </div>
            <div class="col-12 text-justify">
                <span v-if="databio.bio !== null">{{databio.bio}} </span>
                <span v-else-if="databio.bio === null" class="text-grey">Belum ada biodata  </span>
                <span v-else class="text-grey">Belum ada biodata  </span>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    computed:{
        photoprofil(){
            return this.$store.state.myprofil?.databio?.photoprofil ? this.profil + this.$store.state.myprofil.databio.photoprofil : ''
        },
        databio(){
            return this.$store.state.myprofil.databio
        }
    },
    methods:{
        ubah(){
            this.$emit('update:dbio',true)
        }
    }
}
</script>

<style>

</style>