<template>
    <q-page >
        <q-card flat>
            <q-card-section>
                <div class="row q-mb-md items-center" v-for="n in 3" :key="n" style="border:3px solid #dcdcdc;border-radius:10px;">
                    <div class="col-3">
                        <img src="~assets/akun23.png" alt="akun" style="width:100%;border-top-left-radius:10px;border-bottom-left-radius:10px;margin-bottom:-5px;">
                    </div>
                    <div class="col-9 row q-px-sm">
                        <div class="col-12 ">Luke Pearce - Jurusan Matematika dan Ilmu Pengetahuan Alam</div>
                        <div class="text-primary text-13 col-8">Art Director Studio Themis</div>
                        <q-btn color="primary" label="Connect" no-caps class="col-4 text-13" rounded />
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