<template>
    <q-page >
        <q-card flat >
            <q-card-section>
                <div class="row items-center">
                    <q-input
                    dense
                    outlined
                    v-model="keyword"
                    placeholder="Cari Berita"
                    class="q-mb-sm col-12"
                    bg-color="white"
                    hide-bottom-space
                    bottom-slots
                    autofocus
                    >
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                    </q-input>
                    
                </div>
                <div class="row q-mt-sm">
                    <q-btn label="Semua" dense no-caps class="col q-mr-sm pil-btn bg-primary text-white"   style="border-radius: 8px;" />
                    <q-btn label="Kabar Alumni" dense no-caps class="col q-mr-sm pil-btn"  style="border-radius: 8px;" />
                    <q-btn label="Seputar PP-IA" dense no-caps class="col q-mr-sm pil-btn" style="border-radius: 8px;" />
                    <q-btn label="Lainnya" dense no-caps class="col q-mr-sm pil-btn"   style="border-radius: 8px;" />
                </div>
            </q-card-section>
        </q-card>
        <q-card class="my-card  card-radius q-ma-md " v-for="n in 5" :key="n">
            <q-card-section>
                <div class="row">
                    <img src="~assets/berita.png" draggable="false" class="col-6">
                    <div class="col-6 q-pl-sm">
                        <div class="text-15 text-bold " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.</div>
                        <div class=" text-13 ellipsis-3-lines">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                        </div>
                        <div class="text-13 text-bold q-mt-sm " style="color:#a2a2a2;">19 April 2021</div>
                        <q-chip class="text-white q-ml-none text-bold bg-primary" label="Kabar Alumni" style="border-radius:0;" />
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
export default {

}
</script>

<style>

</style>