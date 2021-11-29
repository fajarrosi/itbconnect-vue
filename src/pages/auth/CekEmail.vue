<template>
  <q-page >
    <q-card flat class="auth-card">
      <q-card-section class="q-pb-none">
        <div class="text-h5 text-bold text-primary">E-mail Anda</div>
        <div class="text-subtitle2 q-mt-md text-justify">
            Masukan alamat e-mail Anda
        </div>
        <hr class="line-cards q-my-md">
            <q-input
                outlined
                dense
                v-model="email"
                label="Alamat E-mail"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
            />
        </q-card-section>
        <q-card-section class="q-py-none text-right">
                <q-btn
                label="Submit"
                color="primary"
                :loading="load"
                :disabled="btndisabled"
                no-caps
                style="padding-left:24px;padding-right:24px;" 
                class="btn-radius"
                @click="cekemail"
                >
                <template v-slot:loading>
                    <div class="row items-center">
                        <q-spinner-facebook />  
                    </div>
                </template>
                </q-btn>
        </q-card-section>
        <q-card-actions align="center" class=" q-pb-md q-pt-none" style="margin-top:11px;">
            <span>Sudah memiliki akun? </span>
            <q-btn flat no-caps class="text-primary text-bold" @click="$router.push('/login')">
                Login Sekarang
            </q-btn>
        </q-card-actions>
        </q-card>
      
    </q-page>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            load:false,
            btndisabled: false,
        }
    },
    methods:{
        cekemail(){
            this.load = true
            this.btndisabled = true
            this.$store.dispatch('auth/cekEmail',this.email)
            .then(() => {
                this.load = false
                this.btndisabled = false
                this.$router.push('/register')
            })
            .catch(() => {
                this.load = false
                this.btndisabled = false
                this.$router.push('/register')
            })
        }
    }
};
</script>
