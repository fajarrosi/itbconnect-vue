<template>
    <div>
        <div class="row justify-between">
            <q-avatar size="92px" style="margin-top:-70px;">
                <q-img :src="photoprofil ? photoprofil : require('assets/akun23.png')" width="92px" height="92px" />
            </q-avatar>
            <q-btn color="primary" label="Kirim Pesan" v-if="databio.connect" dense no-caps class="btn-radius text-13 q-px-md"/>
        </div>
        <div class="row">
            <div class="col-9  text-primary text-h6" style="font-weight:600;">{{databio.name}}</div>
            <div class="col-9 q-mb-sm text-primary">Jurusan {{databio.prodi}}, {{databio.tahunmasuk}}</div>
            <div class="col-9 ">{{databio.jabatan}} {{databio.perusahaan}}</div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row items-center">
                    <img src="~assets/pin.png" alt="domisiliikon">
                    <p class="place q-my-none q-ml-sm">{{databio.domisili}}</p>
                </div>
            </div>
            <div class="col">
                <div class="row items-center">
                    <img src="~assets/link.png" alt="orangikon">
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
                <span v-if="databio.bio">{{databio.bio}} </span>
                <span v-else class="text-grey">Belum Ada Bio  </span>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    computed:{
        photoprofil(){
            if(this.$store.state.rekomendasi.databio.photoprofil){
                return this.profil + this.$store.state.rekomendasi.databio.photoprofil
            }else{
                return ''
            }
        },
        databio(){
            return this.$store.state.rekomendasi.databio
        }
    },
}
</script>

<style>

</style>