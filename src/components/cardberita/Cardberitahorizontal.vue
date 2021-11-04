<template>
    <div class="row q-mb-md items-center cursor-pointer q-hoverable relative-position" style="border:1px solid #dcdcdc;border-radius:10px;" @click="$router.push('/berita/detail')">
    <span class="q-focus-helper"></span>
        <div class="col-3">
            <q-img
                src="~assets/berita.png"
                spinner-color="primary"
                spinner-size="82px"
                alt="berita"
                style="width:100%;border-top-left-radius:10px;border-bottom-left-radius:10px;margin-bottom:-5px;margin-top:-5px;"
            />
        </div>
        <!-- <div class="col-3">
            <img src="~assets/berita.png" alt="berita" style="width:100%;border-top-left-radius:10px;border-bottom-left-radius:10px;margin-bottom:-5px;">
        </div> -->
        <div class="col-9 row q-px-sm">
            <div class="col-12 text-bold">Luke Pearce - Jurusan Matematika dan Ilmu Pengetahuan Alam</div>
            <div class="text-grey-8 text-13 col-8">21 April 2021</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>