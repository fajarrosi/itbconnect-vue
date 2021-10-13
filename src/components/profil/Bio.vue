<template>
    <div>
        <div class="row justify-between">
            <q-avatar size="92px" style="margin-top:-70px;">
                <img src="~assets/akun.png" >
            </q-avatar>
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <div class="row">
            <div class="col-9  text-primary text-h6" style="font-weight:600;">Gembong Primadjaya</div>
            <div class="col-9 q-mb-sm text-primary">Jurusan Teknik Mesin, 1998</div>
            <div class="col-9 ">Direktur Pelindo Energi Listrik</div>
            <div class="col-4">
                <div class="row items-center">
                    <img src="~assets/pin.png" alt="place">
                    <p class="place q-my-none q-ml-sm">Bandung</p>
                </div>
            </div>
            <div class="col-5">
                <div class="row items-center">
                    <img src="~assets/link.png" alt="place">
                    <p class="place q-my-none q-ml-sm">225 Orang</p>
                </div>
            </div>
            <div class="col-7 q-my-sm">
                Bergabung sejak Oktober 2021
            </div>
            <div class="col-12 text-justify ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur aliquid impedit saepe et. Assumenda delectus ipsum vero. Tenetur aliquid laudantium debitis eveniet dolores quam, cupiditate nulla sint iste, modi pariatur dolorem. Voluptatum tenetur vel facere modi cupiditate praesentium iste soluta. Voluptates sed animi maiores fugiat, ullam placeat esse vero expedita maxime eaque corrupti optio quos aliquid nam tenetur! Est possimus volu
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'dbio'
    ],
    emits:['update:dbio'],
    methods:{
        ubah(){
            this.$emit('update:dbio',true)
        }
    }
}
</script>

<style>

</style>