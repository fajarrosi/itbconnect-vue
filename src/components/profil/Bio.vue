<template>
    <div>
        <div class="row justify-between">
            <q-avatar size="92px" style="margin-top:-70px;">
                <img src="~assets/akun.png" >
            </q-avatar>
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah" v-if="databio.name === name">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
            <q-btn color="primary" label="Kirim Pesan" v-else-if="databio.connect" dense no-caps class="btn-radius text-13 q-px-md"/>
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
                    <p class="place q-my-none q-ml-sm">225 Orang</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 q-my-sm">
                Bergabung sejak {{databio.created}}
            </div>
            <div class="col-12 text-justify ">
                {{databio.bio}}
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:[
        'dbio',
        'databio'
    ],
    emits:['update:dbio'],
    computed:{
        name(){
            return this.$store.state.auth.user.complete_name
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