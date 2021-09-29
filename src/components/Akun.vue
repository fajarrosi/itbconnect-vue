<template >
    <div>
        <q-img  height="150px" src="https://cdn.quasar.dev/img/chicken-salad.jpg"/>
        <q-card class="my-card q-mx-lg relative-position" style="margin-top:-40px;">
            <q-card-section class="absolute" style="top:-60px;">
                <!-- <q-btn round class="bg-white q-pa-sm"> -->
                    <q-avatar size="80px" color="white">
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
                    </q-avatar>
                <!-- </q-btn> -->
            </q-card-section>
            <q-card-section class="absolute-right" style="z-index:999;">
                <q-btn color="primary" label="Connect" no-caps  />
            </q-card-section>
            <q-card-section >
                <p></p>
            </q-card-section>
            <q-card-section >
                <p class="text-primary ">John Doe</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus officiis doloribus libero cum iste numquam suscipit officia porro voluptatem?</p>
            </q-card-section>
            <q-card-section >
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus officiis doloribus libero cum iste numquam suscipit officia porro voluptatem?</p>
            </q-card-section>
        </q-card>

    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>