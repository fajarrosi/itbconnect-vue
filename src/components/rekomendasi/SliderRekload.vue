<template>
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
</template>

<script>
export default {
    data(){
        return{
            slider:1
        }
    }
}
</script>

<style>

</style>