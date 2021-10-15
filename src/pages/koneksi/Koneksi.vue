<template>
    <q-page>
        <q-card class="my-card" flat>
            <q-card-section>
                <div class="row text-center items-center">
                    <div class="col-6">
                        <q-btn color="black" flat no-caps type="a" href="https://www.google.com/" target="_blank">
                            <div class="row column items-center">
                                <div style="font-size:36px;">120</div>
                                <div class="text-13">Koneksi</div>
                            </div>
                        </q-btn>
                    </div>
                    <q-separator spaced vertical style="width:2px;"/>
                    <div class="col-5">
                        <q-btn color="black" flat no-caps>
                            <div class="row column items-center">
                                <img src="~assets/koneksi-off.png" alt="koneksi-off" style="filter: brightness(1000%) invert(1);">
                                <div class="text-13">Ajak Teman</div>
                            </div>
                        </q-btn>
                    </div>
                </div>
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md q-mx-md" flat>
            <q-card-section>
                <div class="text-h6">kartu 2</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md" flat>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
            <q-card-section>
                <div class="text-h6">kartu 3</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md" flat id="kartu4">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
            <q-card-section>
                <div class="text-h6">kartu 4</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
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