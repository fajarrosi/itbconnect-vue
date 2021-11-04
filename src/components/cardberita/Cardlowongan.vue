<template>
    <div class="q-pr-md cursor-pointer "  style="width:260px;" >
        <q-card class="card-radius q-hoverable relative-position" v-ripple @click="$router.push('/profil')">
        <span class="q-focus-helper"></span>
            <q-card-section>
                <div class="row justify-between">
                    <q-img
                        src="~assets/berita.png"
                        spinner-color="primary"
                        spinner-size="82px"
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
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>