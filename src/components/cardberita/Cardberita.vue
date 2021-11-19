<template>
    <div class="content q-mr-md cursor-pointer" :style="detail ? 'width:200px;' : 'width:400px;'">
        <q-card class="card-radius q-hoverable relative-position" v-ripple @click="$router.push(`/berita/${databerita.slug}`)">
        <span class="q-focus-helper"></span>
            <q-chip class="text-white q-ml-none text-bold ppa" label="Seputar PP-IA" style="border-radius:0;z-index:99;" v-if="databerita.type_news !== 'alumni-news'"/>
            <q-img
                :src="newsimage ? newsimage : require('assets/berita.png')"
                spinner-color="primary"
                spinner-size="82px"
                :draggable="false"
                :width="detail ? '200px' :'334px'"
                :height="detail ? '117px' : '195px'"
                class="card-radius"
            />
            <q-chip class="text-white q-ml-none kabar text-bold" label="Kabar Alumni" v-if="databerita.type_news === 'alumni-news'"/>
            <q-card-section class="q-pb-sm" :class="databerita.type_news === 'alumni-news' ? 'mt-20' : ''">
                <div class="row">
                    <div class="text-15 text-bold col-12" >{{databerita.title}}</div>
                    <div class="col-12 text-13 ellipsis-3-lines">
                        {{databerita.description}}
                    </div>
                    <div class="text-13 text-bold q-mt-sm col-12" style="color:#a2a2a2;">{{tampil}}</div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import { date } from 'quasar'
export default {
    props:['databerita','detail'],
    computed:{
        tampil(){
            let formatNow = date.formatDate(this.databerita.updated_at,'DD MMMM YYYY',{
                months: ['Januari', 'Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
            })
            return formatNow
        },
        newsimage(){
            if(this.databerita.image){
                return this.newsimg + this.databerita.image
            }else{
                return ''
            }
        }
    }
}
</script>

<style lang="scss">
.mt-20{
    margin-top:-30px;
}
.kabar{
    margin-top:-50px;
    background:rgba(38,128,235,0.9);
}
.ppa{
    margin-top:20px;
    background:rgba(230,144,88,0.9);
    position:absolute;
}
.title-berita:hover{
    color:$primary;
    text-decoration:underline;
}
</style>