<template>
    <div>
        <div class="row justify-between">
            <div class="title-section">BISNIS DAN PEKERJAAN</div>
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <div v-for="n in 3" :key="n">
            <div class="row">
                <img src="~assets/blogo.png" alt="bisnislogo" class="col-3" style="width:97px;">
                <div class="col-8">
                    <div class="row q-pl-sm">
                        <div class="text-bold col-12" style="font-size:15px;">Nama Jabatan</div>
                        <p class="text-caption q-my-none col-12">Nama Perusahaan</p>
                        <p class="text-caption q-my-none">1 Januari 2021 - Sekarang</p>
                        <p class="text-caption q-my-none">Bandung, Jawa Barat</p>
                        <p class="text-caption q-my-none">http://Loremipsumdolorsitamet.com </p>
                    </div>
                </div>
            </div>
            <div class="row q-mt-md">
                <p class="text-caption text-justify">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis asperiores optio earum, non error mollitia ipsum fugiat laborum autem. Dolore pariatur porro debitis delectus iste aliquid quidem numquam esse unde alias, temporibus officiis aspernatur nam quasi voluptatem molestiae! Nostrum non atque voluptatem dicta delectus quam voluptatum repellendus facilis, dolore velit iusto laboriosam autem corrupti eligendi unde quas architecto? Iusto sed ut nemo quos temporibus error, at dolores maiores officia soluta unde quisquam rerum sit tempora perferendis? Voluptatibus neque odio ad, modi accusamus doloremque possimus alias numquam delectus voluptatem ipsa quaerat. Sed rem odio dolorem atque magnam assumenda autem eius vel.
                </p>
            </div>
            <div class="row ">
                <div class="col-4 text-center">
                    <img src="~assets/bisnisket.png" alt="bisnis keterangan" >
                    <span>Keterangan 1</span>
                </div>
                <div class="col-4 text-center">
                    <img src="~assets/bisnisket.png" alt="bisnis keterangan" >
                    <span>Keterangan 1</span>
                </div>
                <div class="col-4 text-center">
                    <img src="~assets/bisnisket.png" alt="bisnis keterangan" >
                    <span>Keterangan 1</span>
                </div>
            </div>
            <q-separator spaced style="border:1px solid #CCDBDC; background:#CCDBDC;" v-if="n !== 3"/>
        </div>

        <q-dialog v-model="previmg" persistent transition-show="scale" transition-hide="scale">
            <q-card>
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">Close icon</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'dbisnis'
    ],
    emits:['update:dbisnis'],
    methods:{
        ubah(){
            this.$emit('update:dbisnis',true)
        }
    }
}
</script>

<style>

</style>