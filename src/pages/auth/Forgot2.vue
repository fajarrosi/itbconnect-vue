<template>
  <q-page >
    <q-card flat class="auth-card">
        <q-card-section class="q-pb-none">
            
            <div class="row justify-center">
                <q-img
                    src="~assets/otp-icon.png"
                    spinner-color="primary"
                    style="width: 150px; height: 140px;"
                    spinner-size="82px"
                />
            </div>
            <div class="text-h5 text-bold text-primary text-center">Cek Email Anda</div>
        <div class="text-13 q-my-md text-center">
            Kami Sudah mengirimkan instruksi selanjutnya melalui e-mail Anda.
        </div>
        </q-card-section>
        <q-card-section class="q-px-lg">
            <div class="row justify-center">
                <q-btn no-caps label="Buka Aplikasi Email" style="border-radius: 8px;" class="col-8" color="primary" :loading="load" :disabled="btndisabled" type="a" target="_blank" href="https://mail.google.com">
                    <template v-slot:loading>
                        <q-spinner-facebook />
                    </template>
                </q-btn>
                <q-btn color="grey" label="Skip, lain kali" flat dense class="col-8" no-caps @click="$router.push('/login')"/>
            </div>
        </q-card-section>
        <q-card-actions align="center" class=" q-pb-md q-pt-none" >
            <span>Tidak menerima email? Cek di folder spam Anda </span>
            <q-btn flat no-caps class="text-primary text-bold" @click="$router.push('/forgot')">
                Coba Alamat Email yang Lain
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