<template>
    <div class="lowongan">
        <div class="q-pr-md cursor-pointer "  style="width:260px;">
            <q-card class="card-radius q-hoverable relative-position" v-ripple @click="$router.push(`/berita/${lowker.slug}`)">
            <span class="q-focus-helper"></span>
                <q-card-section>
                    <div class="row justify-between">
                        <q-img
                            :src="getImage(lowker) ? getImage(lowker) : require('assets/berita.png')"
                            spinner-color="primary"
                            spinner-size="20px"
                            :draggable="false" 
                            class="col-4 card-radius"
                            height="58px"
                        />
                    <div class="col-7">
                        <div class="row">
                        <div class="col-12 text-13 text-primary ellipsis">{{lowker.title}}</div>
                        <div class="col-12 text-13 ellipsis-2-lines" ref="desc" v-html="lowker.description" style="display:none;" ></div>
                        <div class="col-12 text-13 ellipsis-2-lines">
                            {{description}}
                        </div>
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
    
</template>

<script>
export default {
    props:[
        'lowker'
    ],
    data(){
        return{
            description:''
        }
    },
    computed:{
        getImage(){
            return val => val.image ? this.newsimg + val.image : ''
        },
    },
    mounted(){
        this.description = this.$refs.desc.firstChild.innerText
    },
}
</script>

<style>

</style>