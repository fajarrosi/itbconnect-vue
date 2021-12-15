<template>
    <div>
        <div class="row justify-between" >
            <div class="title-section">ORGANISASI</div>
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <div v-if="dataorganisasi.length > 0">
            <div v-if="dataorganisasi[0].organization_id !== null">
                <ul style="padding-left:0;list-style:none;" class="q-my-none ">
                    <li v-for="organisasi in dataorganisasi" :key="organisasi.id">
                        {{organisasi.organization.name}}
                    </li>
                </ul>
            </div>
            <div v-else>
                <div class="grey">Belum ada organisasi </div>
            </div>
        </div>
        <div v-else>
            <div class="grey">Belum ada organisasi </div>
        </div>
            <div class="title-section q-mt-md">Pengurus Daerah & IA Prodi</div>
            <div v-if="datapengda">
                <div v-if="(datapengda.commisariat_id === null) && (datapengda.ia_prodi_id === null)">
                    <div class="grey">Belum ada pengurus daerah & IA prodi </div>
                </div>
                <div v-else>
                    <div v-if="datapengda.commisariat_id !== null">{{datapengda.commisariat.name}}</div>
                    <div v-else>
                        <div class="grey">Belum ada pengurus daerah </div>
                    </div>
                    <div v-if="datapengda.ia_prodi_id !== null">{{datapengda.iaprodi.name}}</div>
                    <div v-else>
                        <div class="grey">Belum ada IA prodi</div>
                    </div>
                </div>

            </div>
            <div v-else>
                <div class="grey">Belum ada pengurus daerah & IA prodi</div>
            </div>
        
    </div>
</template>

<script>
import {  mapActions } from "vuex"
export default {
    props:[
        'dminat',
    ],
    computed:{
        datapengda(){
            return this.$store.state.myprofil.datapengda
        },
        dataorganisasi(){
            return this.$store.state.myprofil.dataorganisasi
        },
        valid(){
            if(this.organisasi && this.iaprodi && this.pengda){
                return true
            }else{
                return false
            }
        }
    },
    data(){
        return{
            organisasi: false,
            pengda: false,
            iaprodi:false
        }
    },
    methods:{
        ...mapActions("myprofil", ['getOrg','getPengda','getIaprodi']),
        async getData(){
            let a = this.getOrg()
            let b = this.getPengda()
            let c = this.getIaprodi()
            Promise.all([a,b,c]).then(() =>{
                this.organisasi = true
                this.pengda = true
                this.iaprodi = true
                this.$emit('update:dminat',true)
            })
        },
        ubah(){
            if(this.valid){
                this.$emit('update:dminat',true)
            }else{
                this.getData()
            }
        }
    }
}
</script>

<style>


</style>