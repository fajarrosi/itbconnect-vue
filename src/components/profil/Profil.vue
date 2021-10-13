<template>
    <div>
        <div class="row justify-between">
            <div class="title-section">PROFIL</div>
           <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <div class="row profil-table">
            <div class="col-4">Nama Lengkap</div>
            <div class="col-6">: Testing</div>
        </div>
        <div class="row profil-table">
            <div class="col-4">Jenis Kelamin</div>
            <div class="col-3">: Laki-laki</div>
            <div class="col-3">Gol. Darah</div>
            <div class="col-2">: O</div>
        </div>
        <div class="row profil-table">
            <div class="col-4">Status</div>
            <div class="col-3">: Menikah</div>
            <div class="col-3">Agama</div>
            <div class="col-2">: Islam</div>
        </div>
        <div class="row profil-table">
            <div class="col-4">Kewarganegaraan</div>
            <div class="col-6">: Indonesia</div>
        </div>
        <div class="row profil-table">
            <div class="col-4">Alamat Dalam Negeri</div>
            <div class="col-8 text-justify">: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea suscipit totam incidunt laudantium atque saepe quisquam, voluptas error consequatur ducimus!</div>
        </div>
        <div class="row profil-table">
            <div class="col-4">Email</div>
            <div class="col-6">: alamaemeial@gmail.com</div>
        </div>
        <div class="row profil-table">
            <div class="col-4">No. Telepon</div>
            <div class="col-6">: 0822-2333-3444</div>
        </div>
        <svg class="Line_85" viewBox="0 0 396 1">
            <path id="Line_85" d="M 0 0 L 396 0">
            </path>
        </svg>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                name:'John Doe',
                alamat:'sasldfksjfasldfj',
                email:'johndoe@gmail.com',
                phone:'0823-3994-6868'
            },
        }
    },
    props:[
        'dprofil'
    ],
    emits:['update:dprofil'],
    methods:{
        ubah(){
            this.$emit('update:dprofil',true)
        }
    }
}
</script>
<style scoped>

.profil-table{
    color:#7b7a7a;
}

</style>