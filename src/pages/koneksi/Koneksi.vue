<template>
    <q-page>
        <q-card flat style="border-radius:0;">
            <q-card-section>
                <div class="row text-center items-center">
                    <div class="col-6">
                        <q-btn color="black" flat no-caps @click="goto('koneksianda')">
                            <div class="row column items-center">
                                <div style="font-size:36px;">120</div>
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
                    <div class="q-mr-sm">
                        <div class="text-h6" style="color:#225FAA; font-weight:500;">Cari Koneksi Baru</div>
                        <div class="text-subtitle2" style="color:#2E4766;">Klik Untuk Memulai</div>
                    </div>
                    <img src="~assets/new-koneksi.png" alt="new">
                </div>
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md" flat>
            <q-card-section>
            <div class="text-primary text-h6 text-bold q-mb-sm">Ajakan</div>
                <div class="row q-mt-sm items-center" v-for="n in 3" :key="n">
                    <div class="col-2 text-center">
                        <q-avatar size="60px">
                            <img src="~assets/akun.png" >
                        </q-avatar>
                    </div>
                    <div class="col-7 q-pl-sm">
                        <div>Luke Pearce - Jurusan Matematika dan Ilmu Pengetahuan Alam</div>
                        <div class="text-primary text-13">Art Director Studio Themis</div>
                    </div>
                    <div class="col-3 text-right">
                        <q-btn class="bg-white btnclose q-mr-sm" icon="close" round size="sm"/>
                        <q-btn color="primary" icon="done" round size="sm" class="btncek"/>
                    </div>
                </div>
            </q-card-section>

        </q-card>
        <q-card class="q-mt-md" flat ref="koneksianda">
            <q-card-section>
                <div class="row">
                    <div class="text-primary text-h6 text-bold q-mb-sm col-5">Koneksi Anda</div>
                    <q-btn icon="search" rounded dense label="Cari Koneksi" class="col-7 q-pa-sm cari-btn" no-caps align="left" style="color:#9F9E9E;background:#e6e6e6;" @click="$router.push('/cari-koneksi')"/>
                </div>
                <div class="row q-my-md">
                    <q-btn label="Semua" dense no-caps class="col q-mr-sm pil-btn" @click="key = 'all'" :class="{active : key == 'all'}"  style="border-radius: 8px;" />
                                    <q-btn label="Jurusan" dense no-caps class="col q-mr-sm pil-btn" @click="key = 'jurusan'" :class="{active : key == 'jurusan'}"  style="border-radius: 8px;" />
                                    <q-btn label="Profesi" dense no-caps class="col q-mr-sm pil-btn" @click="key = 'profesi'" :class="{active : key == 'profesi'}" style="border-radius: 8px;" />
                                    <q-btn label="Angkatan" dense no-caps class="col q-mr-sm pil-btn" @click="key = 'angkatan'" :class="{active : key == 'angkatan'}" style="border-radius: 8px;" />
                </div>
                <CardFriend v-for="n in koneksiFilter" :key="n" v-model:dmore="dmore" :koneksi="n"/>
                <div class="row">
                    <q-btn color="primary" label="Lihat Semua" no-caps flat dense class="col-12 text-center" @click="$router.push('/cari-koneksi')"/>
                </div>
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md" flat>
            <q-card-section>
                <div class="text-primary text-h6 text-bold q-mb-sm">Rekomendasi</div>
                <rekomendasihorizontal v-for="n in 3" :key="n"/>
            </q-card-section>
        </q-card>
        <d-more v-model:dmore="dmore"/>
        <d-invite v-model:dinvite="dinvite" />
    </q-page>
</template>

<script>
import CardFriend from 'components/koneksi/Cardfriend'
export default {
    components:{
        'd-more': require('components/koneksi/Dmore.vue').default,
        'd-invite': require('components/koneksi/Dinvite.vue').default,
        'rekomendasihorizontal' : require('src/components/rekomendasi/Rekomendasihorizontal.vue').default,
        CardFriend
    },
    data(){
        return{
            key:'all',
            load:false,
            result:true,
            dmore:false,
            dinvite:false,
            koneksi:[
                {
                    name:'Budi2',
                    jurusan:'Teknik Informatika',
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
    computed:{
        koneksiFilter(){
            return this[this.key]
        },
        all(){
            return this.koneksi
        },
        jurusan(){
            return this.koneksi.filter((k)=> k.jurusan == 'Teknik Informatika')
        },
        profesi(){
            return this.koneksi.filter((k)=> k.profesi == 'CEO')
        },
        angkatan(){
            return this.koneksi.filter((k)=> k.tahunmasuk.includes('98'))
        },
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
        }
    }

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