<template>
    <div class="row">
            <q-skeleton type="QBtn" height="239px" class="card-radius col-12" />
            <div class="col-12 row q-mt-sm justify-between">
              <q-skeleton class="col-3 q-mb-sm" height="12px"/> 
              <q-skeleton class="col-3 q-mb-sm" height="12px"/> 
              <q-skeleton class="col-3 q-mb-sm" height="12px"/> 
            </div>
              <q-skeleton class="col-12 q-mb-sm" height="24px"/> 
            <div class="col-12 row justify-between">
              <q-skeleton class="col-4 q-mb-sm" height="12px"/> 
              <q-skeleton class="col-4 q-mb-sm" height="12px"/> 
            </div>
            <q-separator spaced class="col-12" style="border:2px solid #e6e6e6;margin-bottom:16px;"/>
            <q-skeleton class="col-12 q-mb-sm" height="300px"/> 
            <q-skeleton class="col-4 q-mb-sm" height="14px"/> 
            <q-separator spaced class="col-12" style="border:2px solid #e6e6e6;margin-bottom:16px;"/>
            <q-carousel
              v-model="slider"
              swipeable
              animated
              infinite
              transition-prev="slide-right"
              transition-next="slide-left"
              style="background-color:transparent;"
              class="text-black q-mb-md"
              height="270px"
              >
                <q-carousel-slide :name="1" style="overflow:hidden;">
                  <div class="container" style="display:flex;width:700px;">
                    <div class="content q-mr-md cursor-pointer" style="width:200px;" v-for="n in 2" :key="n">
                        <q-card class="card-radius">
                            <div class="row">
                                <q-skeleton type="QBtn" height="132px" class="card-radius col-12" />
                            </div>
                            <q-card-section class="q-pb-sm ">
                                <div class="row">
                                    <q-skeleton class="col-12 q-mb-sm" height="12px"/>
                                    <q-skeleton class="col-12 q-mb-sm" height="36px"/>
                                    <q-skeleton class="col-4 q-mb-sm" height="12px"/>
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
        return{
            slider:1
        }
    }
}
</script>

<style>

</style>