<template>
    <q-page class="bg-white">
        <q-card flat class="header-card bg-white">
            <q-card-section >
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
        <div v-if="search">
            <q-card flat>
                <q-card-section>
                    <my-connection-load v-for="n in 10" :key="n"/>
                </q-card-section>
            </q-card>
        </div>
        <div v-else>
            <!-- <q-scroll-area style="height: 55vh;"> -->
                <q-card flat>
                    <q-card-section>
                        <div v-if="koneksi !== undefined">
                            <div v-if="koneksiFilter.length > 0">
                                    <CardFriend v-for="n in koneksiFilter" :key="n" :koneksi="n"/>
                            </div>
                            <div v-else>
                                <div class="text-15 q-mb-sm">Anda Belum Memiliki Koneksi, 
                                    <q-btn color="primary" label="Klik untuk mencari Koneksi" @click="movePage" no-caps flat dense/>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <my-connection-load v-for="n in 10" :key="n"/>
                        </div>

                    </q-card-section>
                </q-card>
            <!-- </q-scroll-area> -->
        </div>
       
    </q-page>
</template>

<script>

import CardFriend from 'components/koneksi/Cardfriend'
import { debounce } from 'quasar'
export default {
    data(){
        return{
            keyword:'',
            key:'all',
            search:false,
        }
    },
    components:{
        CardFriend,
        'my-connection-load' : require('components/koneksi/MyConnectionLoad.vue').default,
    },
    computed:{
        koneksiFilter(){
            return this[this.key]
        },
        all(){
            return this.onHasil
        },
        jurusan(){
            return this.onHasil.filter((k)=> k.univercity[0].program_study.includes(this.myprodi))
        },
        profesi(){
            return this.onHasil.filter((k)=> k.experience[0].position.toLowerCase().includes(this.profesiku.toLowerCase()))
        },
        angkatan(){
            return this.onHasil.filter((k)=> k.univercity[0].entry_year.includes(this.angkatanku))
        },
        onHasil(){
            return this.koneksi !== undefined ? this.koneksi.filter((k)=> k.complete_name.toLowerCase().includes(this.keyword.toLowerCase())) : ''
        },
        myprodi(){
            return this.$store.state.myprofil.datapendidikan[0].program_study
        },
        angkatanku(){
            return this.$store.state.myprofil.datapendidikan[0].entry_year
        },
        profesiku(){
            return this.$store.state.myprofil.datapengalaman[0].position
        },
        koneksi(){
            return this.$store.state.koneksi.myconnection
        }
    },
    watch:{
        keyword: function(){
            this.search = true
            this.debouncedGetAnswer()
        }
    },
    created(){
        this.$store.dispatch('koneksi/deleteMyConnection')
        this.$store.dispatch('koneksi/MyConnection')
        this.debouncedGetAnswer = debounce(this.onSearch, 1000)
    },
    methods:{
        onSearch(){
            this.search = false
        },
        onCategory(ctgName){
            this.key = ctgName
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
.header-card{
    position:sticky;
    position: -webkit-sticky;
    top:49px;
    z-index:2;
    
}
</style>