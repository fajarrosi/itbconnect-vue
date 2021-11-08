<template>
  <q-page >
    <q-card flat class="auth-card">
        <q-card-section class="q-pb-none">
            <div class="text-h5 text-bold text-primary">Cari Akun Anda</div>
            <div class="text-subtitle2 q-mt-md text-justify">
                Masukan alamat e-mail Anda yang terdaftar
            </div>
            <hr class="line-cards q-my-md">
            <div class="text-red text-15 q-mb-sm" v-if="Object.keys(errors).length>0"> Email yang Anda Masukkan tidak terdaftar di dalam Sistem</div>
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
        <q-card-actions align="center" class="q-px-lg">
            <q-btn no-caps label="Submit" style="border-radius: 8px; " class="col " color="primary" :loading="load" :disabled="btndisabled" @click="forgot">
                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>
        </q-card-actions>
        <q-card-actions align="center" class=" q-pb-md q-pt-none" >
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
            errors:'',
            load:false,
            btndisabled: false,
        }
    },
    methods:{
        forgot(){
            this.load = true
            this.btndisabled = true
            this.$store.dispatch('auth/forgot',{
                email:this.email
            })
            .then(()=>{

                this.$router.push('/forgot2')
                this.load = false
                this.btndisabled = false
            })
            .catch((error)=>{
                this.errors = error
                this.load = false
                this.btndisabled = false
            })
        }
    }
};
</script>
<style lang="scss">
.q-field--outlined .q-field__control{
    border-radius: 8px;
}
</style>