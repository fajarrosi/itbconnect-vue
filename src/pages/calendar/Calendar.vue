<template>
    <q-page class="q-py-md q-px-lg">
        <div v-if="valid">
            <div class="row justify-center header-calendar">
                <div class="col-9 row items-center">
                    <q-btn color="white" icon="arrow_back_ios" class="text-black col-2 arrow-btn-left" @click="prevMonth()"/>
                    <span class="text-primary q-mx-md col-6" style="font-size:18px;">{{tampil}}</span>
                    <q-btn color="white" icon="arrow_forward_ios" class="text-black col-2 arrow-btn-right" @click="nextMonth()"/>
                </div>
            </div>
            <q-card flat>
                <q-card-section class="q-pa-none bg-secondary" >
                    <!-- <q-scroll-area style="height: 65vh;"> -->
                    <div class="row" v-if="Object.keys(onShows).length === 0">
                        <div class="col text-center text-primary q-pa-sm left-even" style="font-size:20px;">Belum ada agenda</div>
                    </div>
                    <div class="row justify-between container" v-for="(n,key) in onShows" :key="key">
                        <div class="col-2 text-center text-primary q-pa-sm left-side" style="font-size:20px;">
                            {{eventTgl(n)}}
                        </div >
                        <div class="col-10 text-primary q-pa-sm right-side" >
                            <div v-for="(item, i) in onShow(n)" :key="i"  class="row">
                                <div v-for="(x,ind) in item" :key="ind" class="row items-center col-12" :class="ind > 0  ? 'q-mt-md' : ''">
                                    <div class="col-12">{{x.dari[0]}} - {{x.sampai[0]}}</div>
                                    <div class="col-12">{{x.title}}</div>
                                    <div class="col-12 ellipsis-2-lines">{{x.description}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- </q-scroll-area> -->
                </q-card-section>
            </q-card>
        </div>
        <div v-else>
            <div class="row justify-center">
                <div class="col-7 row items-center justify-between">
                    <q-skeleton class="col-2 q-mb-sm" height="25px"/>
                    <q-skeleton class="col-6 q-mb-sm" height="25px"/>
                    <q-skeleton class="col-2 q-mb-sm" height="25px"/>
                </div>
            </div>
            <q-card class="q-mt-lg" flat>
                <q-card-section class="q-pa-none bg-secondary" >
                    <q-scroll-area style="height: 65vh;">
                    <div class="row justify-between container" v-for="n in 6" :key="n">
                        <div class="col-2 text-center text-primary q-pa-sm left-side" style="font-size:20px;">
                            <q-skeleton class="q-mb-sm" height="80px"/>
                        </div >
                        <div class="col-10 text-primary q-pa-sm right-side" >
                            <div v-for="i in n" :key="i" :class="i > 0  ? 'q-mt-md' : ''" class="row">
                                <q-skeleton class="q-mb-sm col-12" height="12px"/>
                                <q-skeleton class="q-mb-sm col-12" height="12px"/>
                                <q-skeleton class="q-mb-sm col-12" height="12px"/>
                            </div>
                        </div>
                    </div>
                    </q-scroll-area>
                </q-card-section>
            </q-card>
        </div>
        
    </q-page>
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
            sekarang:'',
            // events:[
            //     {
            //         evdate:'2021/10/01',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem1',
            //         evspeaker:'Dr.Lorem1'
            //     },
            //     {
            //         evdate:'2021/10/03',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem2',
            //         evspeaker:'Dr.Lorem2'
            //     },
            //     {
            //         evdate:'2021/10/12',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem5',
            //         evspeaker:'Dr.Lorem5'
            //     },
            //     {
            //         evdate:'2021/10/12',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem3',
            //         evspeaker:'Dr.Lorem3'
            //     },
            //     {
            //         evdate:'2021/10/12',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem99',
            //         evspeaker:'Dr.Lorem99'
            //     },
            //     {
            //         evdate:'2021/09/12',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem6',
            //         evspeaker:'Dr.Lorem6'
            //     },
            //     {
            //         evdate:'2021/10/15',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem7',
            //         evspeaker:'Dr.Lorem7'
            //     },
            //     {
            //         evdate:'2021/10/15',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem7',
            //         evspeaker:'Dr.Lorem7'
            //     },
            //     {
            //         evdate:'2021/10/15',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem7',
            //         evspeaker:'Dr.Lorem7'
            //     },
            //     {
            //         evdate:'2021/10/01',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem1',
            //         evspeaker:'Dr.Lorem1'
            //     },
            //     {
            //         evdate:'2021/10/03',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem2',
            //         evspeaker:'Dr.Lorem2'
            //     },
            //     {
            //         evdate:'2021/10/12',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem5',
            //         evspeaker:'Dr.Lorem5'
            //     },
            //     {
            //         evdate:'2021/10/12',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem3',
            //         evspeaker:'Dr.Lorem3'
            //     },
            //     {
            //         evdate:'2021/10/12',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem99',
            //         evspeaker:'Dr.Lorem99'
            //     },
            //     {
            //         evdate:'2021/09/12',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem6',
            //         evspeaker:'Dr.Lorem6'
            //     },
            //     {
            //         evdate:'2021/10/15',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem7',
            //         evspeaker:'Dr.Lorem7'
            //     },
            //     {
            //         evdate:'2021/10/15',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem7',
            //         evspeaker:'Dr.Lorem7'
            //     },
            //     {
            //         evdate:'2021/10/15',
            //         evtime:'13:00 - 15:00',
            //         evtitle:'Seminar lorem7',
            //         evspeaker:'Dr.Lorem7'
            //     },
            // ],
            // eventschange:'',
            agenda:'',
            agendagroup:'',
            valid:false
        }
    },
    mounted(){
        this.sekarang = new Date()
        // this.eventschange = groupBy(this.events,'evdate')
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
        tampil(){
            let formatNow = date.formatDate(this.sekarang,'MMMM YYYY',{
                months: ['Januari', 'Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
            })
            return formatNow
        },
        onShows(){
            let terbaru = {}
            let tgl1 = date.formatDate(this.sekarang,'YYYY-MM')
            Object.keys(this.agendagroup).forEach(key=>{
                let a = date.formatDate(key,'YYYY-MM')
                if(a === tgl1){
                    terbaru[key] = this.agendagroup[key]
                }
            })
            return Object.keys(terbaru).sort()
        },
    },
    methods:{
        prevMonth(){
            this.sekarang = date.subtractFromDate(this.sekarang,{months:1})
        },
        nextMonth(){
            this.sekarang = date.addToDate(this.sekarang,{month:1})
        },
        eventTgl(val){
            return date.formatDate(val,'DD')
        },
        onShow(val){
            let terbaru = {}
            let tgl1 = date.formatDate(val,'DD MM')
            Object.keys(this.agendagroup).forEach(key=>{
                let a = date.formatDate(key,'DD MM')
                if(a === tgl1){
                    terbaru[key] = this.agendagroup[key]
                }
            })
            return terbaru
        },
    }
}
</script>

<style scoped>
.arrow-btn-right{
    padding-right:5px; 
    padding-left:5px; 
    font-size:8px;
}
.arrow-btn-left{
    padding-left:10px; 
    padding-right:0; 
    font-size:8px;
}
.q-btn::before{
    box-shadow:none;
}
.left-even{
    background-color:#b0c7e4;
}
.right-even{
    background-color:#dae3ef;
}
.right-odd{
    background-color:#f2f2f2;
}

.container:nth-child(even) .left-side{
    background-color:#b0c7e4;
}
.container:nth-child(even) .right-side{
    background-color:#dae3ef;
}
.container:nth-child(odd) .left-side{
    background-color:white;
}
.container:nth-child(odd) .right-side{
    background-color:#f2f2f2;
}
.header-calendar{
    position:sticky;
    position:-webkit-sticky;
    top:40px;
    background:#ccdbdc;
    z-index:2;
    padding-top:20px;
    padding-bottom:20px;
}
</style>