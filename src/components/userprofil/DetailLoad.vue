<template>
    <div>
        <div class="row">
            <q-skeleton type="QBtn" height="157px" class="col" />
        </div>
        <q-card flat class="q-mb-md q-mx-md card-radius" style="margin-top:-40px;z-index:2;" >
            <q-card-section>
                <div class="row justify-between">
                    <q-skeleton type="circle" style="margin-top:-70px;" size="92px" />
                    <q-skeleton width="50px" />
                </div>
                <div class="row">
                    <q-skeleton class="col-5 q-mb-sm"/>
                    <q-skeleton class="col-8 q-mb-sm"/>
                    <q-skeleton class="col-5 q-mb-sm"/>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="row items-center">
                            <img src="~assets/pin.png" alt="place">
                            <q-skeleton width="30px" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="row items-center">
                            <img src="~assets/link.png" alt="place">
                            <q-skeleton width="30px" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <q-skeleton class="col-6 q-my-sm" />
                    <q-skeleton class="col-12" height="100px"/>
                </div>
            </q-card-section>
        </q-card>
        <div class="row q-mx-md justify-between items-center">
                <q-skeleton width="200px" />
                <div class="row">
                    <q-skeleton class="col q-mr-sm" width="30px"/>
                    <q-skeleton class="col q-mr-sm" width="30px" />
                    <q-skeleton class="col q-mr-sm" width="30px" />
                    <q-skeleton class="col q-mr-sm" width="30px" />
                    
                </div>
        </div>

        <q-card flat class="q-mx-md q-mt-sm card-radius">
            <q-card-section class="q-pb-none">
                <div class="row justify-between items-center">
                        <q-skeleton width="200px" />
                        <q-skeleton class="q-mr-sm" width="50px"/>
                </div>
                <div class="row justify-between items-center q-mt-md">
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                </div>
                <svg class="Line_85" viewBox="0 0 396 1">
                    <path id="Line_85" d="M 0 0 L 396 0">
                    </path>
                </svg>
            </q-card-section>
            <q-card-section class="q-py-none">
                <div class="row justify-between items-center">
                        <q-skeleton width="200px" />
                        <q-skeleton class="q-mr-sm" width="50px"/>
                </div>
                <div class="row justify-between items-center q-mt-md">
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                </div>
                <svg class="Line_85" viewBox="0 0 396 1">
                    <path id="Line_85" d="M 0 0 L 396 0">
                    </path>
                </svg>
            </q-card-section>
            <q-card-section class="q-py-none">
                <div class="row justify-between items-center">
                        <q-skeleton width="200px" />
                        <q-skeleton class="q-mr-sm" width="50px"/>
                </div>
                <div class="row justify-between items-center q-mt-md">
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                </div>
                <svg class="Line_85" viewBox="0 0 396 1">
                    <path id="Line_85" d="M 0 0 L 396 0">
                    </path>
                </svg>
            </q-card-section>
            <q-card-section class="q-py-none">
                <div class="row justify-between items-center">
                        <q-skeleton width="200px" />
                        <q-skeleton class="q-mr-sm" width="50px"/>
                </div>
                <div class="row justify-between items-center q-mt-md">
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                </div>
                <svg class="Line_85" viewBox="0 0 396 1">
                    <path id="Line_85" d="M 0 0 L 396 0">
                    </path>
                </svg>
            </q-card-section>
            <q-card-section class="q-pt-none">
                <div class="row justify-between items-center">
                        <q-skeleton width="200px" />
                        <q-skeleton class="q-mr-sm" width="50px"/>
                </div>
                <div class="row justify-between items-center q-mt-md">
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                        <q-skeleton  class="q-mt-sm col-6" />
                        <q-skeleton  class="q-mt-sm col-5" />
                </div>
                <svg class="Line_85" viewBox="0 0 396 1">
                    <path id="Line_85" d="M 0 0 L 396 0">
                    </path>
                </svg>
            </q-card-section>
        </q-card>

        <div class="row q-mx-md q-mt-md ">
                <q-skeleton width="200px" />
        </div>

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
            <q-carousel-slide :name="1" style="overflow:hidden;"> 
                <div class="container" style="width:470px;display:flex;">
                    <div class="content q-pr-sm cursor-pointer" style="width:150px;height:322px;" v-for="n in 3" :key="n">
                            <q-card class="card-radius">
                                <div class="row">
                                    <q-skeleton type="QBtn" height="130px" class="card-radius col-12" />
                                </div>
                                <q-card-section class="q-pb-sm ">
                                    <div class="row">
                                        <q-skeleton class="col-12 q-mb-sm" height="21px"/>
                                        <q-skeleton class="col-12 q-mb-sm" height="21px"/>
                                        <q-skeleton class="col-12 q-mb-sm" height="42px"/>
                                    </div>
                                </q-card-section>
                            </q-card>
                        </div>
                </div>
            </q-carousel-slide>
        </q-carousel>
     </div>
</template>

<script>
export default {
    data(){
        return {
            slider:1
        }
    }
}
</script>

<style>

</style>