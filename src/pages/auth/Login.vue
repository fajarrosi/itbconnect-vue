<template>
  <!-- <q-page > -->
    <q-card flat class="auth-card col-12" style="max-width:354px;">
        <q-card-section class="q-pb-none">
        <div class="text-h5 text-bold text-primary">Masuk</div>
        <div class="text-subtitle2 q-mt-md text-justify" :class="Object.keys(errors).length > 0 ? 'q-mb-none' : 'q-mb-md'" style="font-size: 15px;line-height: 20px;">
            Isilah form email dan password di bawah ini untuk mengakses aplikasi
            Connecting The Dots Ikatan Alumni ITB
        </div>
        <div class="text-red text-15" v-if="Object.keys(errors).length>0"> Email/Password yang Anda Masukkan Salah, silahkan cek kembali Email/Password Anda</div>
            <q-input
            dense
                outlined
                v-model="user.email"
                label="Email"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',val => validEmail(val)
                ]"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
                type="email"
            />
            <q-input
            dense
                outlined
                v-model="user.password"
                :type="visibility ? 'password' : 'text'"
                label="Password"
                lazy-rules
                :rules="[(val) => val.length > 0 || 'Password tidak boleh kosong']"
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
        </q-card-section>
        <q-card-actions align="between" class="q-py-none" style="margin-bottom:10px; margin-top:10px;">
            <q-checkbox v-model="remember" label="Ingat Saya" style="color:#30A3A9;" @click="getAnswer"/>
            <!-- <q-btn label="Remember me" flat no-caps style="color:#30A3A9;" /> -->
            <q-btn  label="Lupa Kata Sandi?" flat  no-caps style="text-decoration: underline; color:#888888;" @click="$router.push('/forgot')"/>
        </q-card-actions>
        <q-card-section class="q-py-none">
            <q-btn
                label="LOG IN"
                type="submit"
                :color="valid ? 'primary' : 'grey'"
                :loading="load"
                :disabled="disabled"
                no-caps
                style="width: 100%;"
                class="btn-radius" 
                padding="sm"
                @click="onSubmit"
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
    <!-- </q-page> -->
</template>

<script>
export default {
    data(){
        return{
            user:{
                email:'',
                password:'',
            },
            visibility: true,
            load:false,
            btndisabled: false,
            errors:{},
            remember:false,
            emailvalid:false
        }
    },
    computed:{
        valid(){
            if(this.user.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && this.user.password){
                return true
            }
            return false
        },
        disabled(){
            if(this.valid){
                if (this.btndisabled){
                    return true
                }
                return false
            }
            return true
        }
    },
    mounted() {
        if(localStorage.getItem('userLogin')){
            this.user = JSON.parse(localStorage.getItem('userLogin'))
            // this.remember = JSON.parse(localStorage.getItem('remember'))
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            if(vm.$store.getters['auth/isAuthenticated']){
                console.log("true")
                vm.$router.push('/')
            }
        })
    },
    methods: {
        validEmail(val){
            if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true;
            }else{
                return 'Email tidak valid';
            }
        },
        getAnswer(){
            if(this.remember){
                localStorage.setItem('userLogin',JSON.stringify(this.user))
            }else{
                localStorage.setItem('userLogin','')
            }
        },
        onSubmit(){
            this.load = true
            this.btndisabled = true
            setTimeout(()=>{
                this.$store.dispatch('auth/login',this.user)
                .then(()=>{
                    this.$router.push("/")
                    this.load = false
                    this.btndisabled = false
                })
                .catch((error)=>{
                    this.errors = error
                    this.load = false
                    this.btndisabled = false
                })
            },1000)
        },
        // validEmail(val){
        //     if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        //         return true;
        //     }else{
        //         return 'Email tidak valid';
        //     }
        // },
    },
};
</script>
<style>
</style>