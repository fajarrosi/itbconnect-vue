<template>
    <q-page>
        <q-card flat style="border-radius:0;">
            <q-card-section>
                <div class="row text-center items-center">
                    <div class="col-6">
                        <q-btn color="black" flat no-caps @click="goto('koneksianda')">
                            <div class="row column items-center">
                                <div style="font-size:36px;">{{totalFriend}}</div>
                                <div class="text-13">Koneksi</div>
                            </div>
                        </q-btn>
                    </div>
                    <q-separator spaced vertical style="width:2px;"/>
                    <div class="col-5">
                        <q-btn color="black" flat no-caps @click="dinvite = true">
                            <div class="row column items-center">
                                <img src="~assets/koneksi-off.png" alt="koneksi-off" style="filter: brightness(1000%) invert(1);">
                                <div class="text-13">Ajak Teman</div>
                            </div>
                        </q-btn>
                    </div>
                </div>
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md q-mx-md btn-radius cursor-pointer q-hoverable relative-position" flat style="background:#9FC1EC;" @click="movePage" v-ripple>
            <q-card-section>
                <div class="row ">
                    <div class="q-mr-sm col">
                        <div class="text-h6" style="color:#225FAA; font-weight:500;">Cari Koneksi Baru</div>
                        <div class="text-subtitle2" style="color:#2E4766;">Klik Untuk Memulai</div>
                    </div>
                    <img src="~assets/new-koneksi.png" alt="new" class="col">
                </div>
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md" flat style="border-radius:0;">
            <q-card-section>
                <div class="text-primary text-h6 text-bold q-mb-sm">Ajakan</div>

                <div v-if="requestvalid">
                    <div v-if="request.length > 0">
                        <connect-request v-model:datarequest="request"/>
                    </div>
                    <div v-else>
                        <div class="text-15 q-mb-sm">Tidak Ada Permintaan </div>
                    </div>
                </div>
                <div v-else>
                    <request-load v-for="n in 3" :key="n" />
                </div>
                <div class="row">
                    <q-btn color="primary" label="Lihat Semua" no-caps flat dense class="col-12 text-center q-mt-sm" @click="$router.push('permintaan')"/>
                </div> 
            </q-card-section>

        </q-card>
        <q-card class="q-mt-md" flat ref="koneksianda" style="border-radius:0;">
            <q-card-section>
                <div class="row">
                    <div class="text-primary text-h6 text-bold q-mb-sm col-5">Koneksi Anda</div>
                    <q-btn icon="search" rounded dense label="Cari Koneksi" class="col-7 q-pa-sm cari-btn" no-caps align="left" style="color:#9F9E9E;background:#e6e6e6;" @click="$router.push('/cari-koneksi')"/>
                </div>
                <div v-if="koneksi !== undefined">
                        <div class="row q-my-md">
                            <q-btn label="Semua" dense no-caps class="col q-mr-sm pil-btn" @click="key = 'all'" :class="{active : key == 'all'}"  style="border-radius: 8px;" />
                            <q-btn label="Jurusan" dense no-caps class="col q-mr-sm pil-btn" @click="key = 'jurusan'" :class="{active : key == 'jurusan'}"  style="border-radius: 8px;" />
                            <q-btn label="Profesi" dense no-caps class="col q-mr-sm pil-btn" @click="key = 'profesi'" :class="{active : key == 'profesi'}" style="border-radius: 8px;" />
                            <q-btn label="Angkatan" dense no-caps class="col q-mr-sm pil-btn" @click="key = 'angkatan'" :class="{active : key == 'angkatan'}" style="border-radius: 8px;" />
                        </div>
                    <div v-if="koneksiFilter.length > 0">
                        <CardFriend v-for="n in koneksiFilter" :key="n" :koneksi="n" :addmsg="false"/>
                    </div>
                    <div v-else>
                        <div class="text-15 q-mb-sm">Anda Belum Memiliki Koneksi, 
                            <q-btn color="primary" label="Klik untuk mencari Koneksi" @click="movePage" no-caps flat dense/>
                        </div>
                    </div>
                    
                </div>
                <div v-else>
                    <div class="row justify-between q-mt-sm">
                        <q-skeleton type="QBtn" height="31px" class="card-radius col-2" />
                        <q-skeleton type="QBtn" height="31px" class="card-radius col-2" />
                        <q-skeleton type="QBtn" height="31px" class="card-radius col-2" />
                        <q-skeleton type="QBtn" height="31px" class="card-radius col-2" />
                    </div>
                    <my-connection-load />
                </div>
                <div class="row">
                    <q-btn color="primary" label="Lihat Semua" no-caps flat dense class="col-12 text-center" @click="$router.push('/cari-koneksi')"/>
                </div>
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md" flat style="border-radius:0;">
            <q-card-section>
                <div class="text-primary text-h6 text-bold q-mb-sm">Rekomendasi</div>
                <div v-if="rekomvalid">
                    <div v-if="rekomendasi.length > 0">
                        <rekomendasihorizontal v-for="(rekom,n) in rekomendasi" :key="n" :rekomendasi="rekom"/>
                    </div>
                    <div v-else>
                        <div class="text-15 q-mb-sm">
                            Belum Ada Rekomendasi Untuk Anda
                        </div>
                    </div>
                </div>
                <div v-else>
                    <rekomendasi-load v-for="n in 3" :key="n" class="q-mb-md"/>
                </div>
            </q-card-section>
        </q-card>
        <d-invite v-model:dinvite="dinvite" v-if="dinvite"/>
    </q-page>
</template>

<script>
import CardFriend from 'components/koneksi/Cardfriend'
export default {
    components:{
        'd-invite': require('components/koneksi/Dinvite.vue').default,
        'rekomendasihorizontal' : require('src/components/rekomendasi/Rekomendasihorizontal.vue').default,
        'connect-request' : require('components/koneksi/ConnectRequest.vue').default,
        'my-connection-load' : require('components/koneksi/MyConnectionLoad.vue').default,
        'rekomendasi-load' : require('components/rekomendasi/RekomendasiLoad.vue').default,
        'request-load' : require('components/koneksi/RequestLoad.vue').default,
        CardFriend
    },
    data(){
        return{
            key:'all',
            load:false,
            result:true,
            dinvite:false,
            connectionvalid:false,
            rekomvalid:false,
            requestvalid:false,
            rekomendasi:'',
            request:[]
        }
    },
    computed:{
        koneksiFilter(){
            return this[this.key]
        },
        all(){
            return this.koneksi !== undefined ? this.$store.state.koneksi.myconnection.slice(0,3) : ''
        },
        jurusan(){
            return this.koneksi !== undefined ? this.$store.state.koneksi.myconnection.filter((k)=> k.univercity[0].program_study.includes(this.myprodi)).slice(0,3) : ''
        },
        profesi(){
            return this.koneksi !== undefined ? this.$store.state.koneksi.myconnection.filter((k)=> k.experience[0].position.toLowerCase().includes(this.profesiku.toLowerCase())).slice(0,3) : ''
        },
        angkatan(){
            return this.koneksi !== undefined ? this.$store.state.koneksi.myconnection.filter((k)=> k.univercity[0].entry_year.includes(this.angkatanku)).slice(0,3) :''
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
        totalFriend(){
            return this.$store.state.myprofil.databio.friend
        },
        koneksi(){
            return this.$store.state.koneksi.myconnection
        }
    },
    methods:{
        movePage(){
            setTimeout(()=>{
                this.$router.push({name:'Cari Alumni'})
            },400)
        },
        goto(refName){
            let element = this.$refs[refName].$el
            let top = element.offsetTop
            window.scrollTo(0,top)
        },
        getRekomendasi(){
            this.$store.dispatch('rekomendasi/getAllUser')
            .then(response=>{
                if(response.length > 3){
                    let res = response.slice(0,3)
                    this.rekomendasi = res
                }else{
                    this.rekomendasi = response
                }
                this.rekomvalid = true
            })
            .catch(error=>{
                console.log("error",error)
            })
        },
        getMyConnect(){
            this.$store.dispatch('koneksi/MyConnection')
            .then(()=>{
                this.connectionvalid = true
            })
        },
        getRequest(){
            this.$store.dispatch('koneksi/getConnectRequest')
            .then(response=>{
                if(response.length > 3){
                    this.request = response.slice(0,3)
                }else{
                    this.request = response
                }
                this.requestvalid = true
            })
        },
        async getData(){
            this.getRequest()
            this.getMyConnect()
            this.getRekomendasi()
        }
    },
    created(){
        this.$store.dispatch('koneksi/deleteMyConnection')
        this.getData()
        this.$store.dispatch('myprofil/getProfil')
        this.$store.dispatch('myprofil/deleteall')
    },
}
</script>

<style lang="scss">
.btnclose.q-btn::before{
    box-shadow: none;
    border:1px solid rgba(122,114,114,1);
    color:rgba(122,114,114,1);
}
.pil-btn.active{
    background:$primary;
    color:white;
}
.pil-btn{
    color:#b7b7b7;
}
.pil-btn:not(.active)::before{
    border:2px solid #b7b7b7;
}
.btncek.q-btn::before, 
.cari-btn.q-btn::before,
.pil-btn.q-btn::before
{
    box-shadow: none;
}



</style>