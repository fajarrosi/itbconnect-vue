<template>
    <q-page>
        <q-card flat style="border-radius:0;">
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
        <q-card class="q-mt-md q-mx-md btn-radius" flat style="background:#9FC1EC;">
            <q-card-section>
                <div class="row">
                    <div class="q-mr-sm">
                        <div class="text-h6" style="color:#225FAA; font-weight:500;">Cari Koneksi Baru</div>
                        <div class="text-subtitle2" style="color:#2E4766;">Klik Untuk Memulai</div>
                    </div>
                    <img src="~assets/new-koneksi.png" alt="new">
                </div>
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md" flat>
            <q-card-section>
            <div class="text-primary text-h6 text-bold q-mb-sm">Ajakan</div>
                <div class="row q-mt-sm items-center" v-for="n in 3" :key="n">
                    <div class="col-2 text-center">
                        <q-avatar size="60px">
                            <img src="~assets/akun.png" >
                        </q-avatar>
                    </div>
                    <div class="col-7 q-pl-sm">
                        <div>Luke Pearce - Jurusan Matematika dan Ilmu Pengetahuan Alam</div>
                        <div class="text-primary text-13">Art Director Studio Themis</div>
                    </div>
                    <div class="col-3 text-right">
                        <q-btn class="bg-white btnclose q-mr-sm" icon="close" round size="sm"/>
                        <q-btn color="primary" icon="done" round size="sm" class="btncek"/>
                    </div>
                </div>
            </q-card-section>

        </q-card>
        <q-card class="q-mt-md" flat id="kartu4">
            <q-card-section>
                <div class="text-primary text-h6 text-bold q-mb-sm">Koneksi Anda</div>
                <q-btn icon="search" rounded label="Cari Koneksi" class="q-mr-xs bg-grey-7" no-caps align="left" style="width:400px;color:#9F9E9E;" @click="$router.push('/search')"/>
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
.btnclose.q-btn::before{
    box-shadow: none;
    border:1px solid rgba(122,114,114,1);
    color:rgba(122,114,114,1);
}
.btncek.q-btn::before{
    box-shadow: none;
}
</style>