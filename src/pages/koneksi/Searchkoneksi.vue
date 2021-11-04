<template>
    <q-page>
        <q-card flat >
            <q-card-section class="q-pb-none">
                <div class="row items-center">
                    <q-input
                    dense
                    outlined
                    v-model="keyword"
                    placeholder="Cari Koneksi Anda"
                    class="q-mb-sm col-12"
                    bg-color="white"
                    hide-bottom-space
                    bottom-slots
                    autofocus
                    >
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                    </q-input>
                    
                </div>
                <div class="row q-mt-sm">
                    <q-btn label="Semua" dense no-caps class="col q-mr-sm pil-btn" @click="onCategory('all')" :class="{active : key == 'all'}"  style="border-radius: 8px;" />
                    <q-btn label="Jurusan" dense no-caps class="col q-mr-sm pil-btn" @click="onCategory('jurusan')" :class="{active : key == 'jurusan'}"  style="border-radius: 8px;" />
                    <q-btn label="Profesi" dense no-caps class="col q-mr-sm pil-btn" @click="onCategory('profesi')" :class="{active : key == 'profesi'}" style="border-radius: 8px;" />
                    <q-btn label="Angkatan" dense no-caps class="col q-mr-sm pil-btn" @click="onCategory('angkatan')" :class="{active : key == 'angkatan'}" style="border-radius: 8px;" />
                </div>
            </q-card-section>
        </q-card>

        <div v-if="load" class="bg-white q-py-md" >
            <div v-for="n in 5" :key="n">
            <div class="row q-ma-md items-center card-radius bg-white"  >
                <div class="col-2 q-px-sm">
                    <q-skeleton type="circle" size="60px"/>
                </div>
                <div class="col-9 row q-pa-sm">
                    <q-skeleton  height="20px" class="col-12"/>
                    <q-skeleton  height="20px" class="col-12 q-my-sm"/>
                </div>
                <div class="col-1">
                    <q-skeleton type="QBtn" height="34px" width="30px" class="col-2"/>
                </div>
            </div>
                <q-separator spaced inset />
            </div>
        </div>
        <q-card flat>
            <q-card-section>
                <CardFriend v-for="n in koneksiFilter" :key="n" v-model:dmore="dmore" :koneksi="n"/>
            </q-card-section>
        </q-card>
        <Dmore v-model:dmore="dmore"/>
    </q-page>
</template>

<script>
import Dmore from 'components/koneksi/Dmore'
import CardFriend from 'components/koneksi/Cardfriend'
import { debounce } from 'quasar'
export default {
    data(){
        return{
            keyword:'',
            key:'all',
            load:false,
            result:true,
            dmore:false,
            koneksi:[
                {
                    name:'Lorem1',
                    jurusan:'Teknik Mesin',
                    profesi:'Direktur',
                    perusahaan:'PT lorem1',
                    tahunmasuk:'1990'
                },
                {
                    name:'Budi2',
                    jurusan:'Teknik Informatika',
                    profesi:'Karyawan',
                    perusahaan:'PT lorem2',
                    tahunmasuk:'1991'
                },
                {
                    name:'Lorem6',
                    jurusan:'Teknik Industri',
                    profesi:'Karyawan',
                    perusahaan:'PT lorem2',
                    tahunmasuk:'1991'
                },
                {
                    name:'Budi3',
                    jurusan:'Teknik Mesin',
                    profesi:'CEO',
                    perusahaan:'PT lorem3',
                    tahunmasuk:'1992'
                },
                {
                    name:'Lorem4',
                    jurusan:'Teknik Elektro',
                    profesi:'Staff',
                    perusahaan:'PT lorem4',
                    tahunmasuk:'1998'
                },
            ],
        }
    },
    components:{
        Dmore,
        CardFriend
    },
    computed:{
        koneksiFilter(){
            return this[this.key]
        },
        all(){
            return this.onHasil
        },
        jurusan(){
            return this.onHasil.filter((k)=> k.jurusan == 'Teknik Informatika')
        },
        profesi(){
            return this.onHasil.filter((k)=> k.profesi == 'CEO')
        },
        angkatan(){
            return this.onHasil.filter((k)=> k.tahunmasuk.includes('98'))
        },
        onHasil(){
            return this.koneksi.filter((k)=> k.name.toLowerCase().includes(this.keyword.toLowerCase()))
        }
    },
    watch:{
        keyword: function(){
            this.load = true
            this.result = false
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        this.debouncedGetAnswer = debounce(this.onSearch, 1000)
    },
    methods:{
        onSearch(){
            this.load = false
            this.result = true
        },
        onCategory(ctgName){
            this.load = true
            this.result = false
            this.key = ctgName
            setTimeout(()=>{
                this.load = false
                this.result = true
            },500)
        }
    }
}
</script>

<style lang="scss">

.pil-btn{
    color:#b7b7b7;
}
.pil-btn.active{
    background:$primary;
    color:white;
}
.pil-btn:not(.active)::before{
    border:2px solid #b7b7b7;
}
.pil-btn.q-btn::before
{
    box-shadow: none;
}
</style>