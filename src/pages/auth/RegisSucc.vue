<template>
  <q-page >
    <q-card flat>
        <q-card-section class="q-pb-none">
            <div class="text-h5 text-bold text-primary text-center">BERHASIL</div>
            <div class="row justify-center">
                <q-img
                    src="~assets/personal-goals-pana.png"
                    spinner-color="primary"
                    style="width: 150px; height: 140px;"
                    spinner-size="82px"
                />
            </div>
        <div class="text-subtitle2 q-my-md text-center">
            Anda berhasil melakukan pendaftaran. Silahkan lanjutkan dengan proses verifikasi. Anda akan mendapatkan kode verifikasi melalui e-mail terdaftar.
        </div>
        </q-card-section>
        <q-card-actions align="center" class="q-pb-lg">
            <q-btn no-caps label="Lanjut Verifikasi" style="border-radius: 8px; " class="col " color="primary" :loading="load" :disabled="btndisabled" @click="$router.push('/otp')">
                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>
        </q-card-actions>
        </q-card>
    </q-page>
</template>

<script>
export default {
    
};
</script>
<style lang="scss">
.q-field--outlined .q-field__control{
    border-radius: 8px;
}
</style>