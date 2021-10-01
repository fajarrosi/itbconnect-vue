<template>
  <q-page >
    <q-card flat>
      <q-card-section class="q-pb-none">
        <div class="text-h5 text-bold text-primary">E-mail Anda</div>
        <div class="text-subtitle2 q-my-md text-justify">
            Masukan alamat e-mail Anda
        </div>
            <q-input
                outlined
                v-model="email"
                label="Alamat E-mail"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
            />
        </q-card-section>
        <q-card-section class="q-py-none">
                <q-btn
                label="Submit"
                color="primary"
                :loading="load"
                :disabled="btndisabled"
                no-caps
                style="width: 100%; border-radius: 8px;" 
                padding="sm"
                @click="cekemail"
                >
                <template v-slot:loading>
                    <div class="row items-center">
                        <p class="text-subtitle2 text-bold q-mb-none q-mr-sm">Loading...</p>
                        <q-spinner-facebook />  
                    </div>
                </template>
                </q-btn>
        </q-card-section>
        <q-card-actions align="center" class="q-pt-none">
            <span>Sudah memiliki akun? </span>
            <q-btn flat no-caps class="text-primary text-bold" @click="$router.push('/auth')">
                Login Sekarang
            </q-btn>
        </q-card-actions>
        </q-card>
        <q-dialog v-model="loads" persistent>
            <q-card>
                <q-card-actions align="center">
                        <q-spinner-facebook
                        color="primary"
                        size="100px"
                        />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
export default {
    data(){
        return{
            email:'fajarilhamrosi@gmail.com',
            load:false,
            btndisabled: false,
        }
    },
    methods:{
        cekemail(){
            this.load = true
            this.btndisabled = true
            setTimeout(() => {
                this.$store.dispatch('auth/cekEmail',this.email)
                .then(() => {
                    this.$router.push('/register')
                    this.load = false
                    this.btndisabled = false
                })
                .catch(() => {
                    this.$router.push('/register')
                    // console.log("error",error)
                    this.load = false
                    this.btndisabled = false
                })
            }, 1000);
        }
    }
};
</script>
<style>
.q-field--outlined .q-field__control{
    border-radius: 8px;
}
</style>