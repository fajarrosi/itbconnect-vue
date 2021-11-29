<template>
    <div>
        <div class="row justify-between">
            <q-avatar size="92px" style="margin-top:-70px;">
                <q-img :src="photoprofil ? photoprofil : require('assets/akun23.png')" width="92px" height="92px" />
            </q-avatar>
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <div class="row">
            <div class="col-9  text-primary text-h6" style="font-weight:600;">{{databio.name}}</div>
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
            if(this.$store.state.myprofil.databio.photoprofil){
                return this.profil + this.$store.state.myprofil.databio.photoprofil
            }else{
                return ''
            }
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