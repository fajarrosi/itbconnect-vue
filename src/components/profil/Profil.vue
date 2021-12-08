<template>
    <div class="relative-position">
        <div class="row justify-between">
            <div class="title-section">PROFIL</div>
            
        <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah" >
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <div class="row ">
            <div class="col-4">Nama Panggilan</div>
            <div class="col-6">: {{dataprofil.nick}}</div>
        </div>
            <div class="row " >
                <div class="col-4">Jenis Kelamin</div>
                <div class="col-3" v-if="dataprofil.gender === 'male'">: Laki-laki</div>
                <div class="col-3" v-else>: Perempuan</div>
                <div class="col-3">Gol. Darah</div>
                <div class="col-2">: {{dataprofil.blood.toUpperCase()}}</div>
            </div>
            <div class="row ">
                <div class="col-4">Status</div>
                <div class="col-3" v-if="dataprofil.status === 'yes'">: Menikah</div>
                <div class="col-3" v-else>: Lajang</div>
                <div class="col-3">Agama</div>
                <div class="col-2">: {{dataprofil.religion}}</div>
            </div>
            <div class="row ">
                <div class="col-4">Kewarganegaraan</div>
                <div class="col-6">: {{dataprofil.citizenship}}</div>
            </div>
            <div class="row ">
                <div class="col-4" v-if="dataprofil.negara === 78">Alamat Dalam Negeri</div>
                <div class="col-4" v-else>Alamat Luar Negeri</div>
                <div class="col-8 text-justify">: {{dataprofil.domisili}}</div>
            </div>
            <div class="row ">
                <div class="col-4">Email</div>
                <div class="col-6">: {{dataprofil.email}}</div>
            </div>
            <div class="row ">
                <div class="col-4">No. Telepon</div>
                <div class="col-6">: {{dataprofil.telephone}}</div>
            </div>
            <svg class="Line_85" viewBox="0 0 396 1">
                <path id="Line_85" d="M 0 0 L 396 0">
                </path>
            </svg>
    </div>
</template>

<script>
export default {
    props:[
        'dprofil',
    ],
    computed:{
        dataprofil(){
            return this.$store.state.myprofil.dataprofil
        }
    },
    methods:{
        ubah(){
            this.$emit('update:dprofil',true)
        },
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