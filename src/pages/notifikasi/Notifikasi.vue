<template>
    <q-page>
        <q-card class="my-card" flat>
            <q-card-section>
                <div class="text-primary text-h6 text-bold q-mb-sm">Permintaan</div>
                <div class="row q-mt-sm items-center" v-for="n in 10" :key="n">
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
                <div class="row">
                    <q-btn color="primary" label="Lihat Semua" no-caps flat dense class="col-12 text-center q-mt-sm"/>
                </div>
            </q-card-section>
        </q-card>
        <q-card class="q-mt-md" flat>
            <q-card-section>
                <div class="text-primary text-h6 text-bold q-mb-sm">Permintaan</div>
                <div class="row q-mt-sm items-center" v-for="n in 10" :key="n">
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
                <div class="text-primary text-h6 text-bold q-mb-sm">Terbaru</div>
                <div class="row" v-for="n in 10" :key="n">
                    <div class="col-10">
                        <div class="text-black text-13">Alumni ITB. Bangun Platorm agar Siap hadapi dunia kerja</div>
                        <div class="text-grey" style="font-size:10px;">20 April 2021</div>
                    </div>
                    <div class="col-2">
                        <q-img
                            src="~assets/berita.png"
                            spinner-color="primary"
                            spinner-size="82px"
                        />
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
.btnclose.q-btn::before{
    box-shadow: none;
    border:1px solid rgba(122,114,114,1);
    color:rgba(122,114,114,1);
}
.btncek.q-btn::before{
    box-shadow: none;
}
</style>