<template>
    <div class="item-news">
        <q-item clickable v-ripple @click="$router.push(`/berita/${news.slug}`)" >
            <q-item-section top thumbnail class="q-ml-none">
                <img :src="newsimage(news) ? newsimage(news) : require('assets/berita.png')">
            </q-item-section>

            <q-item-section>
                <q-item-label lines="2">{{news.title}} </q-item-label>
                <q-item-label caption class="ellipsis-2-lines description" ref="desc" v-html="news.description" style="display:none;">
                </q-item-label>
                <q-item-label caption lines="2">{{description}}</q-item-label>
                <q-item-label caption>{{tampil(news)}}</q-item-label>
                <q-item-label caption v-if="badge">
                    <q-badge color="primary" label="Kabar Alumni" v-if="news.type_news === 'alumni-news'"/>
                    <q-badge color="primary" label="PP-IA" v-else-if="news.type_news === 'pp-ia'"/>
                    <q-badge color="primary" label="Lowongan Kerja" v-else-if="news.type_news === 'job-vacancies'"/>
                    <q-badge color="primary" label="Info Projek" v-else-if="news.type_news === 'project-info'"/>
                    <q-badge color="primary" label="Beasiswa" v-else-if="news.type_news === 'beasiswa'"/>
                    <q-badge color="primary" label="Lainnya" v-else/>
                </q-item-label>
            </q-item-section>

            <q-item-section side top v-if="time">
            <q-item-label caption>{{diff(news)}}</q-item-label>
            </q-item-section>
        </q-item>
        <q-separator spaced />
    </div>
</template>

<script>
import { date } from 'quasar'
export default {
    props:[
        'news',
        'badge',
        'time'
    ],
    methods:{
        diff(val){
            let now = new Date()
            let seconds = date.getDateDiff(now, val.created_at, 'seconds')
            let minutes = date.getDateDiff(now, val.created_at, 'minutes')
            let hours = date.getDateDiff(now, val.created_at, 'hours')
            let days = date.getDateDiff(now, val.created_at, 'days')
            let months = date.getDateDiff(now, val.created_at, 'months')
            let years = date.getDateDiff(now, val.created_at, 'years')
            if(seconds < 60) {
                return seconds + ' detil yang lalu'
            }else if (minutes < 60){
                return minutes + ' menit yang lalu'
            }else if(hours < 24){
                return hours + ' jam yang lalu'
            }else if (days <= 31){
                return days + ' hari yang lalu'
            }else if(months <= 12){
                return months + ' bulan yang lalu'
            }else{
                return years + ' tahun yang lalu'
            }
        },
        tampil(val){
            return date.formatDate(val.updated_at,'DD MMMM YYYY',{
                months: ['Januari', 'Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
            })
        },
        newsimage(val){
            return val.image ? this.newsimg + val.image : ''
        },
    },
    data(){
        return{
            description :''
        }
    },
    mounted(){
        this.description = this.$refs.desc.$el.firstChild.innerText
    },
}
</script>

<style>

</style>