<template>
    <div>
        <q-dialog :model-value="intro" @click="$emit('update:intro', $event.target.value)" persistent transition-show="scale" transition-hide="scale" full-height>
                <q-carousel
                    v-model="slide"
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    swipeable
                    animated
                    control-color="primary"
                    navigation
                    padding
                    class=" text-black shadow-1 rounded-borders"
                >
                <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                <q-btn v-if="active" size="7px" :icon="btnProps.icon" color="primary" flat round dense @click="onClick" />
                <q-btn v-else size="7px" :icon="btnProps.icon" color="grey" flat round dense @click="onClick" />
                </template>
                    <q-carousel-slide :name="1" class="bg-white text-black column no-wrap items-center justify-center">
                    <div class="text-h5 text-bold text-primary q-my-lg text-center">Apa Manfaat Connecting the Dots?</div>
                    <q-img
                        src="~assets/question.png"
                        spinner-color="primary"
                        style="width: 118px; height: 112px;"
                        spinner-size="82px"
                    />
                    <div class="q-mt-md text-center text-h6 text-desk">
                        Ada banyak temen-temen alumni disini yang menunggu untuk terhubung dengan kamu.
                    </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" class="bg-white column no-wrap flex-center">
                    <div class="text-h5 text-bold text-primary q-my-lg text-center">Apa Manfaat Connecting the Dots?</div>
                    <q-img
                        src="~assets/registered-2.png"
                        spinner-color="primary"
                        style="width: 118px; height: 112px;"
                        spinner-size="82px"
                    />
                    <div class="q-mt-md text-center text-h6 text-desk">
                        Kamu bisa cari mereka yang memiliki kesamaan dengan kamu, mulai dari hobi, pekerjaan dan bisnis kamu.
                    </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="3" class="bg-white column no-wrap flex-center">
                <div class="text-h5 text-bold text-primary q-my-lg text-center">Apa Manfaat Connecting the Dots?</div>
                    <q-img
                        src="~assets/registered-3.png"
                        spinner-color="primary"
                        style="width: 118px; height: 112px;"
                        spinner-size="82px"
                    />
                    <div class="q-mt-md text-center text-h6 text-desk">
                        Yuk kembangkan diri kamu dengan bertemu orang yang tepat. Ketahui kabar terbaru dari alumni dan kegiatan yang bisa kamu ikuti bersama mereka.
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

<style scoped>
.q-carousel{
    width:418px;
    border-radius:20px;
}
.text-desk{
    color:rgba(40,122,118,1);
    font-size:18px;
}
</style>