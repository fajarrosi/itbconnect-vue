<template>
    <div>
        <q-dialog :model-value="intro" @click="$emit('update:intro', $event.target.value)" persistent transition-show="scale" transition-hide="scale" full-height>
                <q-carousel
                    v-model="slide"
                    transition-prev="jump-right"
                    transition-next="jump-left"
                    swipeable
                    animated
                    control-color="primary"
                    navigation
                    padding
                    class=" text-black shadow-1 rounded-borders"
                >
                <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                <q-btn v-if="active" size="md" :icon="btnProps.icon" color="primary" flat round dense @click="onClick" />
                <q-btn v-else size="sm" :icon="btnProps.icon" color="grey" flat round dense @click="onClick" />
                </template>
                    <q-carousel-slide :name="1" class="bg-white text-black column no-wrap items-center justify-center">
                    <div class="text-h5 text-bold text-primary q-my-lg text-center">Apa itu ITBconnect?</div>
                    <q-img
                        src="~assets/question.png"
                        spinner-color="primary"
                        style="width: 118px; height: 112px;"
                        spinner-size="82px"
                    />
                    <div class="q-mt-md text-center text-h6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid quisquam dignissimos iure exercitationem natus explicabo corrupti tempora sunt odit.
                    </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" class="bg-white column no-wrap flex-center">
                    <div class="text-h5 text-bold text-primary q-my-lg text-center">Apa itu ITBconnect2?</div>
                    <q-img
                        src="~assets/question.png"
                        spinner-color="primary"
                        style="width: 118px; height: 112px;"
                        spinner-size="82px"
                    />
                    <div class="q-mt-md text-center text-h6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid quisquam dignissimos iure exercitationem natus explicabo corrupti tempora sunt odit.
                    </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="3" class="bg-white column no-wrap flex-center">
                <div class="text-h5 text-bold text-primary q-my-lg text-center">Apa itu ITBconnect3?</div>
                    <q-img
                        src="~assets/question.png"
                        spinner-color="primary"
                        style="width: 118px; height: 112px;"
                        spinner-size="82px"
                    />
                    <div class="q-mt-md text-center text-h6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid quisquam dignissimos iure exercitationem natus explicabo corrupti tempora sunt odit.
                    </div>
                    </q-carousel-slide>
                    <template v-slot:control>
                        <q-carousel-control
                        position="top-right"
                        :offset="[18, 18]"
                        class="q-gutter-xs"
                        >
                            <q-btn color="white" text-color="black" flat dense @click="$emit('update:intro', false)" no-caps icon="close"/>
                        </q-carousel-control>
                    </template>
                </q-carousel>
        </q-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            slide:1,
        }
    },
    props:[
        'intro'
    ]
}
</script>

<style>

</style>