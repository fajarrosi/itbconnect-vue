<template>
    <div>
            <q-carousel
            animated
            v-model="slide"
            :control-type="controlType"
            control-color="grey-7"
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            height="100vh"
            :autoplay="autoplay"
            >
            <q-carousel-slide :name="1" img-src="images/ITB Connect_Web-alt size.png">
                <div class="custom-caption gt-xs">
                    <div class="text-h4">Bangun Jejaring Baru, Bangun Hubungan baik, Ciptakan Peluang. Dari dan Untuk Alumnin ITB</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" img-src="images/ITB Connect2_Web-alt size.png">
            <div class="custom-caption gt-xs">
                    <div class="text-h5">Connect Everyone Dots! Bertemu, Berideasi, Rencanakan Kegiatan, Buat Pergerakan. Berbagi dan Dapatkan Informasi Loker, Project dan Beasiswa.</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" img-src="images/ITB Connect3_Web-alt size.png" >
                <div class="custom-caption gt-xs">
                    <div class="text-h4">Connect All The Dots! Menghubungkan Semua Alumni ITB Lintas Jurusan, Angkatan dan Profesi.</div>
                </div>
            </q-carousel-slide>
            </q-carousel>
            <div class="connectby q-px-md">
                    <h6 class="by text-white q-mr-md">ITBCONNECT@2021 by 
                    </h6>
                    <q-img
                    src="~assets/logo-ia.png"
                    loading="lazy"
                    spinner-color="white"
                    height="50px"
                    width="100px"
                    />
            </div>
                <q-card flat bordered class="card-login" >
                <q-card-section>
                    <div class="text-h3">Masuk</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. <br>
                    dummy akun 
                    email : guest@gmail.com
                    password : testing
                </q-card-section>
                <q-card-section class="q-pt-none">
                    <q-form
                        @submit="onSubmit"
                    >
                    <q-banner inline-actions class="text-white bg-red q-mb-md" v-if="Object.keys(this.errors).length">
                        {{errors.error}} <br>
                    </q-banner>
                    <label for="email">Email</label>
                    <q-input filled v-model="user.email" :dense="true" id="email" 
                    lazy-rules="ondemand"
                    :rules="[ val => val && val.length > 0 || 'Email masih kosong']"
                    />
                    <label for="password">Password</label>
                    <q-input filled v-model="user.password" :dense="true" id="password" type="password"
                    lazy-rules = "ondemand"
                    :rules="[ val => val && val.length > 0 || 'Password masih kosong']"
                    />
                    <label > Daftar flow 1 ?  <router-link to="/register" class="q-ml-sm">Daftar Sekarang</router-link></label>
                    <label > Daftar flow terbaru ?  <router-link to="/registrasi?email=fajarilhamrosi@gmail.com" class="q-ml-sm">Daftar Sekarang</router-link></label>
                    <q-btn class="q-mt-lg" align="around" color="primary" label="Masuk" size="lg" style="width: 100%;" type="submit" :loading="load" :disabled="btndisabled">
                        <template v-slot:loading>
                            <q-spinner-facebook />
                        </template>
                    </q-btn>
                    </q-form>
                </q-card-section>

                </q-card>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup () {
    return {
        controlType: ref('regular'),
        slide: ref(1),
        autoplay: ref(true)
    }
    },
    data(){
        return {
            user:{},
            load:false,
            btndisabled: false,
            errors: {},
            em : ''
        }
    },
    methods:{
        onSubmit(){
            this.errors = {}
            this.load = true
            this.btndisabled = true
            setTimeout(()=>{
                // let email = this.$store.getters['auth/Login'](this.user.email)
                // if (!email){
                    // this.errors.email = 'Email tidak ditemukan'
                // }else if (email.password !== this.user.password){
                    // this.errors.password = 'Password yang Anda masukkan Salah'
                // }else{
                //     this.$store.dispatch('auth/login',email)
                //     this.$router.push("/home")
                // }
                this.$store.dispatch('auth/login',this.user)
                .then(()=>{

                    this.$router.push({name : 'home'})
                    this.load = false
                    this.btndisabled = false
                })
                .catch((error)=>{
                    this.errors = error
                    console.log(error)
                    this.load = false
                    this.btndisabled = false
                    console.log("this error",error)
                })

            },1000)
        },
        validEmails(val){
            let email = this.$store.getters['auth/Login'](val)
            this.em = email
            return email || 'Email tidak ditemukan'
        },
        cekPass(val){
            return val === this.em.password || 'password salah'
        }
    },
    mounted(){
        if(this.$store.getters['auth/isAuthenticated']){
            this.$router.push({name : 'home'})
        }
    }
}
</script>
<style lang="scss">
.custom-caption{
padding: 12px;
color: white;
background-color: rgba(0, 0, 0, .7);
top: 35%;
left: 70px;
position: absolute;
border-radius: 10px;
width: 390px;
}

.connectby{
    position:absolute;
    bottom:0;
    left: 20px;
    display: flex;
    align-items: center;
}
.card-login{
    position:absolute;
    right: 70px;
    top: 15%;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.9);
}
</style>