<template>
    <div class="lowongan">
        
        <div v-if="valid">
            <div v-if="lowker.length > 0">
                <q-carousel
                v-model="slider"
                swipeable
                animated
                infinite
                transition-prev="slide-right"
                transition-next="slide-left"
                style="background-color:transparent;"
                class="text-black"
                height="120px"
                >
                    <q-carousel-slide :name="index" style="overflow:hidden;" v-for="index in totalPage" :key="index">
                        <div class="container" style="display:flex;width:700px;">
                            <div class="q-pr-md cursor-pointer "  style="width:260px;" v-for="(berita,i) in getNews(index)" :key="i">
                                <q-card class="card-radius q-hoverable relative-position" v-ripple @click="$router.push(`/berita/${berita.slug}`)">
                                <span class="q-focus-helper"></span>
                                    <q-card-section>
                                        <div class="row justify-between">
                                            <q-img
                                                :src="getImage(berita) ? getImage(berita) : require('assets/berita.png')"
                                                spinner-color="primary"
                                                spinner-size="20px"
                                                :draggable="false" 
                                                class="col-4 card-radius"
                                                height="58px"
                                            />
                                        <div class="col-7">
                                            <div class="row">
                                            <div class="col-12 text-13 text-primary ellipsis">{{berita.title}}</div>
                                            <div class="col-12 text-13 ellipsis-2-lines">{{berita.description}}</div>
                                            <!-- <div class="col-12 text-13">Jakarta</div> -->
                                            </div>
                                        </div>  
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div>
                            <!-- <div class="q-pr-md cursor-pointer "  style="width:260px;" v-for="(berita,i) in getNews(index)" :key="i">
                                <q-card class="card-radius q-hoverable relative-position" v-ripple >
                                <span class="q-focus-helper"></span>
                                    <q-card-section>
                                        <div class="row justify-between">
                                            <q-img
                                                src="~assets/berita.png"
                                                spinner-color="primary"
                                                spinner-size="20px"
                                                :draggable="false" class="col-4 card-radius"
                                            />
                                        <div class="col-7">
                                            <div class="row">
                                            <div class="col-12 text-13 text-primary">PT. Lorem ipsum</div>
                                            <div class="col-12 text-13">Web Developer</div>
                                            <div class="col-12 text-13">Jakarta</div>
                                            </div>
                                        </div>  
                                        </div>
                                    </q-card-section>
                                </q-card>
                            </div> -->
                        </div>
                    </q-carousel-slide>
                </q-carousel>
            </div>
            <div v-else class="q-my-md">
                <span class="q-mx-md text-17 text-bold " style="color:#505050;">Belum Ada Lowongan Kerja</span>
            </div>
        </div>
        
        <div v-else>
            <q-carousel
            v-model="slider2"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            style="background-color:transparent;"
            class="text-black"
            height="120px"
            >
            <q-carousel-slide :name="1" style="overflow:hidden;">
                <div class="container" style="display:flex;width:700px;">
                    <div class="q-pr-md cursor-pointer "  style="width:260px;" v-for="i in 2" :key="i">
                        <q-card class="card-radius q-hoverable relative-position" v-ripple >
                        <span class="q-focus-helper"></span>
                            <q-card-section>
                                <div class="row justify-between items-center">
                                    <q-skeleton type="QBtn" height="58px" class="col-4 card-radius" />
                                    <div class="col-7">
                                        <div class="row ">
                                            <q-skeleton class="col-12 q-mb-sm" height="12px"/>
                                            <q-skeleton class="col-12 q-mb-sm" height="12px"/>
                                            <q-skeleton class="col-12 q-mb-sm" height="12px"/>
                                        </div>
                                    </div>  
                                </div>
                            </q-card-section>
                        </q-card>
                    </div>
                </div>
            </q-carousel-slide>
        </q-carousel>
        </div>
        
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            slider:1,
            valid:false,
            lowker:'',
            slider2:1
        }
    },
    computed:{
        getImage(){
            return val => val.image ? this.newsimg + val.image : ''
        },
        getNews(){
            return val => this.lowker.slice(val-1,val+1)
        },
        totalPage(){
            if(this.lowker.length > 0 ){
                if(this.lowker.length === 1){
                    return this.lowker.length
                }else{
                    return this.lowker.length - 1
                }
            }
                return 0
            
        }   
    },
    created(){
        this.$store.dispatch('news/getLatestNews','job-vacancies')
        .then(response=>{
            if(response.length > 0){
                this.lowker = response
                this.valid = true
            }else{
                this.loker = ''
                this.valid = true
            }
        })
    }
}
</script>

<style>

</style>