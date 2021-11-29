<template>
<div class="slider-news">
    
    <q-carousel
        v-model="slider"
        swipeable
        animated
        height="150px"
        class="no-shadow"
        infinite
        v-if="valid"
        autoplay
    >
    <!-- <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <q-btn v-if="active" size="5px" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        <q-btn v-else size="5px" :icon="btnProps.icon" color="grey-8" flat round dense @click="onClick" />
    </template> -->
    <!-- <q-carousel-slide :name="1" class="column no-wrap q-pa-none">
        <q-img src="~assets/registered-3.png">
            <div class="absolute-bottom text-subtitle1">
                <div class="row">
                    <div class="text-subtitle1 col-8">Undang Alumni yang lainnya</div>
                    <q-btn color="primary" label="Undang teman" no-caps style="font-size:13px;" class="col-4" @click="dinvite = true"/>
                </div>
            </div>
        </q-img>
    </q-carousel-slide> -->
        <q-carousel-slide :name="index+1" class="column no-wrap q-pa-none "  v-for="(n,index) in news" :key="index">
            <q-img :src="newsimage(n) ? newsimage(n) : require('assets/berita.png')" alt="berita-img">
                <div class="absolute-bottom text-subtitle1">
                    <div class="row">
                        <div class="text-subtitle1 ellipsis col-8" v-if="index === 0">{{n.title}}</div>
                        <div class="text-subtitle1 ellipsis-2-lines col-12" v-else>{{n.title}}</div>
                        <q-btn color="primary" label="Undang teman" no-caps style="font-size:13px;" class="col-4" @click="dinvite = true" v-if="index === 0"/>
                        <div class="text-subtitle2 ellipsis col-12" v-else>{{tampil(n)}}</div>
                    </div>
                </div>
            </q-img>
        </q-carousel-slide>
    </q-carousel>
    <div class="row" v-else>
        <q-skeleton type="QBtn" height="150px"  class="col-12"/>
    </div>
    <d-invite v-if="dinvite" v-model:dinvite="dinvite"/>
</div>
</template>

<script>
import { date } from 'quasar'
export default {
    components:{
        'd-invite': require('components/koneksi/Dinvite.vue').default,  
    },
    data(){
        return{
            slider:1,
            news:'',
            dinvite:false,
            valid : false
        }
    },
    mounted(){
        this.$store.dispatch('getCaraousel')
        .then(response=>{
            if(response.length > 0){
                this.news = response.slice(0,3)
            }else{
                this.news = ''
            }
            this.valid = true
        })
        .catch(error=>{
            console.log("error slider news",error)
        })
    },
    methods:{
        newsimage(val){
            return val.image ? this.caraouselimg + val.image : ''
        },
        tampil(val){
            let formatNow = date.formatDate(val.updated_at,'DD MMMM YYYY',{
                months: ['Januari', 'Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
            })
            return formatNow ? formatNow : ''
        },
    }
}
</script>

<style>

</style>