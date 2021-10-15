<template>
  <q-page >
    <q-card flat class="auth-card">
      <q-card-section class="q-pb-none">
        <div class="text-h5 text-bold text-primary">SIGN IN</div>
        <div class="text-subtitle2 q-my-md text-justify" style="font-size: 15px;line-height: 20px;">
          Isilah form username dan password dibawah ini untuk mengakses aplikasi
          ITBConnect Ikatan Alumni ITB
        </div>
            <q-form @submit="onSubmit">
            <q-input
            dense
                outlined
                v-model="user.email"
                label="Email"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
                (val) => validEmail(val),
                ]"
                class="q-mb-md"
                bg-color="white"
                hide-bottom-space
            />
            <q-input
            dense
                outlined
                v-model="user.password"
                :type="visibility ? 'password' : 'text'"
                label="Password"
                lazy-rules
                :rules="[(val) => val.length > 6 || 'Password minimal 6 karakter']"
                bg-color="white"
                hide-bottom-space
            >
                <template v-slot:append>
                <q-icon
                    :name="visibility ? 'visibility' : 'visibility_off'"
                    @click="visibility = !visibility"
                    class="cursor-pointer"
                />
                </template>
            </q-input>
            </q-form>
        </q-card-section>
        <q-card-actions align="between" class="q-py-none" style="margin-bottom:10px; margin-top:10px;">
            <q-btn label="Remember me" flat no-caps style="color:#30A3A9;" />
            <q-btn  label="Forgot Your Password?" flat  no-caps style="text-decoration: underline; color:#888888;"/>
        </q-card-actions>
        <q-card-section class="q-py-none">
            <q-btn
                label="LOG IN"
                type="submit"
                color="primary"
                :loading="load"
                :disabled="btndisabled"
                no-caps
                style="width: 100%;"
                class="btn-radius" 
                padding="sm"
                
                >
                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
                </q-btn>
        </q-card-section>
        <q-card-actions align="center" class=" q-pb-md q-pt-none" style="margin-top:11px;">
            <span>belum bergabung? </span>
            <q-btn flat no-caps class="text-primary text-bold" @click="$router.push('/cekemail')">
                Daftar Sekarang
            </q-btn>
        </q-card-actions>
        </q-card>
    </q-page>
</template>

<script>
export default {
    data(){
        return{
            data:null,
            user:{
                email:'',
                password:'',
            },
            visibility: true,
            load:false,
            btndisabled: false,
            errors:{}
        }
    },
    methods: {
        onSubmit(){
            this.load = true
            this.btndisabled = true
            setTimeout(()=>{
                this.data = this.user
                this.$store.dispatch('auth/register',this.user)
                .then(()=>{
                    this.load = false
                    this.btndisabled = false
                    this.$router.push("/otp")
                })
                .catch((error)=>{
                    this.errors = error
                    console.log("error",error)
                    this.load = false
                    this.btndisabled = false
                })
            },1000)
        },
        validEmail(val){
            if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true;
            }else{
                return 'Email tidak valid';
            }
        },
    },
};
</script>
<style>
</style>