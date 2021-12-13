<template>
    <div>
        <div class="row justify-between" >
            <div class="title-section">PENDIDIKAN</div>
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <div v-if="datapendidikan.length > 0">
            <ul style="padding-left:15px;" class="q-my-none">
                    <li v-for="(pendidikan,index) in datapendidikan" :key="index">
                        <div class="row">
                            <div class="col-3">{{pendidikan.entry_year}} - {{pendidikan.graduated_year}}</div>
                            <div class="col-9">: <span v-if="pendidikan.is_itb">Institut Teknik Bandung</span> <span v-else>{{pendidikan.campus_name}}</span> , Jurusan {{pendidikan.program_study}}</div>
                        </div>
                    </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import {  mapActions } from "vuex"
export default {
    props:[
        'dpend',
    ],
    computed:{
        datapendidikan(){
            return this.$store.state.myprofil.datapendidikan
        }
    },
    methods:{
        ...mapActions("myprofil", ['getJenjang','getProdi']),
        async getData(){
            this.getJenjang()
            this.getProdi()
            .then(()=>{
                this.$emit('update:dpend',true)
            })
        },
        ubah(){
            this.getData()
        }
    }
}
</script>

<style>

</style>