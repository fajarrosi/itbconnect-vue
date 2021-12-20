<template>
    <div class="sliderrekomendasi">
        <div class="row justify-between q-mx-md q-mt-md" v-if="!detail">
            <div class="text-17 text-bold" style="color:#505050;" v-if="location">Rekomendasi Berdasarkan Lokasi</div>
            <div class="text-17 text-bold" style="color:#505050;" v-else>Rekomendasi</div>
            <q-btn color="primary" label="Refresh" no-caps flat dense class="text-caption text-bold" @click="refresh"/>
        </div>
        <div v-if="valid">
            <div v-if="rekomendasi.length > 0">
                <q-carousel
                    v-model="slider"
                    swipeable
                    animated
                    infinite
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    control-color="black"
                    style="background-color:transparent;"
                    class="text-black"
                    height="300px"
                >
                    <q-carousel-slide :name="n" style="overflow:hidden;" v-for="n in totalPage" :key="n"> 
                        <div class="container" style="width:470px;display:flex;">
                            <rekom v-for="(datarekom,index) in getRekom(n)" :key="index" :rekomendasi="datarekom"/>
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
            <div v-else class="q-my-md">
                <span class="q-mx-md text-15 text-bold " style="color:#505050;">Tidak Ada Rekomendasi Untuk Anda</span>
            </div>
        </div>
        <div v-else>
            <slider-rekload />
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'location','detail'
    ],
    components:{
        'rekom' : require('./Rekomendasi.vue').default,
        'slider-rekload' : require('./SliderRekload.vue').default
    },
    data(){
        return{
            slider:1,
            rekomendasi:[],
            valid:false
        }
    },
    created(){
        if(this.detail){
            this.getRandom()
        }else{
            if(this.location){
                this.getUserByLocation()
            }else{
                this.getUser()
            }
        }
    },
    computed:{
        getRekom(){
            return val => this.rekomendasi.slice((val-1)*3, val*3)
        },
        totalPage(){
            if(this.rekomendasi.length > 0){
                if(this.rekomendasi.length <= 3){
                    return 1
                }else{
                    return Math.ceil(this.rekomendasi.length/3)
                }
            }
            return 0
        }
    },
    methods:{
        async getUser(){
            this.$store.dispatch('rekomendasi/getAllUser')
            .then(response=>{
                if(response.length > 0){
                    this.rekomendasi = response
                    this.valid = true
                }else{
                    this.rekomendasi = ''
                    this.valid = true
                }
            })
            .catch(error=>{
                console.log("error",error)
            })
        },
        async getUserByLocation(){
            this.$store.dispatch('rekomendasi/getAllUserByLocation')
            .then(response=>{
                if(response.length > 0){
                    this.rekomendasi = response
                    this.valid = true
                }else{
                    this.rekomendasi = ''
                    this.valid = true
                }
            })
            .catch(error=>{
                console.log("error",error)
            })
        },
        async getRandom(){
            if(this.$route.params.id){
                this.$store.dispatch('rekomendasi/getRandomUserById',this.$route.params.id)
                .then(response=>{
                    if(response.length > 0){
                        this.rekomendasi = response
                        this.valid = true
                    }else{
                        this.rekomendasi = ''
                        this.valid = true
                    }
                })
                .catch(error=>{
                    console.log("error",error)
                })
            }
        },
        refresh(){
            this.valid = false
            if(this.location){
                this.getUserByLocation()
            }else{
                this.getUser()
            }
        }
    }
}
</script>

<style>

</style>