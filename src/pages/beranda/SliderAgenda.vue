<template>
<div class="slider-agenda">
    <div v-if="valid">
        <div v-if="onkeys.length > 0">
            <q-carousel
            v-model="slider"
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            arrows
            control-color="black"
            height="80px"
            class="bg-white text-black no-shadow rounded-borders q-ma-md"
            style="border-radius:10px;"
        >
                <q-carousel-slide :name="index+1" v-for="(n,index) in onkeys" :key="index" class="q-py-sm q-px-lg">
                <div class="row q-mx-md items-center justify-between">
                    <div class="col-2 q-px-md ">
                    <div class="text-caption text-primary">{{eventDay(n)}}</div>
                    <div class="text-primary text-bold" style="font-size:32px;line-height:26px;">{{eventTgl(n)}}</div>
                    </div>
                    <div class="col-10 q-px-md row items-center" v-for="(show,key) in onShow(n)" :key="key">
                        <div v-for="(i,ind) in show.slice(0,3)" :key="ind" class="row items-center col-12">
                            <div class="text-caption text-grey-8 ellipsis col-12" >
                                {{i.title}} : {{i.dari[0]}} - {{i.sampai[0]}}
                            </div>
                        </div>
                    </div>
                </div>
                </q-carousel-slide>
        </q-carousel>
        </div>
        <div v-else>
            <div class="row q-ma-md bg-white text-black no-shadow items-center justify-center " style="border-radius:10px;height:80px;">
                <span class="q-ma-md text-17 col-5">Tidak Ada Agenda</span>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="row q-ma-md bg-white text-black no-shadow items-center justify-center " style="border-radius:10px;height:80px;" >
            <q-skeleton class="col-12 q-mb-sm" height="80px"/>
        </div>
    </div>
        
        
</div>
</template>

<script>
import { date } from 'quasar'

const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};
export default {
    data(){
        return{
            slider:1,
            sekarang:'',
            agenda:'',
            agendagroup:'',
            valid:false
        }
    },
    mounted(){
        this.sekarang = new Date()
        // this.slider = date.formatDate(this.sekarang,'YYYY-MM-DD')
        this.$store.dispatch('getAgenda')
        .then(response=>{
            this.agenda = response
            this.agenda.forEach(el=>{
                el.tgl = el.start_time.replace(/\s\d{2}:\d{2}:\d{2}/,'')
                el.dari = el.start_time.match(/\d{2}:\d{2}/)
                el.sampai = el.end_time.match(/\d{2}:\d{2}/)
            })
            this.agendagroup = groupBy(this.agenda,'tgl')
            this.valid = true
        })
        .catch(error=>{
            console.log("error",error)
        })
    },
    computed:{
        
        onkeys(){
            return Object.keys(this.agendagroup)
        }
    },
    methods:{
        eventTgl(val){
            return date.formatDate(val,'DD')
        },
        eventDay(val){
            return date.formatDate(val,'dddd',{
                days:['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
            })
        },
        tampil(){
            let formatNow = date.formatDate(this.sekarang,'MMMM YYYY',{
                months: ['Januari', 'Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
            })
            return formatNow
        },
        onShow(val){
            let terbaru = {}
            let tgl1 = date.formatDate(val,'DD')
            Object.keys(this.agendagroup).forEach(key=>{
                let a = date.formatDate(key,'DD')
                if(a === tgl1){
                    terbaru[key] = this.agendagroup[key]
                }
            })
            return terbaru
        },
        
    }
}
</script>

<style>

</style>