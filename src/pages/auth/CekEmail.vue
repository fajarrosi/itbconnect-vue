<template>
  <!-- <q-page > -->
    <q-card flat class="auth-card col-12" style="max-width:354px;">
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
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',val => validEmail(val)
                ]"
                type="email"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
            />
        </q-card-section>
        <q-card-section class="q-py-none text-right">
                <q-btn
                label="Submit"
                :color="valid ? 'primary' : 'grey'"
                :loading="load"
                :disabled="disabled"
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
    <!-- </q-page> -->
</template>

<script>
import { useQuasar} from 'quasar'
export default {
    setup(){
        const $q = useQuasar()
        return {
            failNotif () {
                $q.notify({
                message: 'Email sudah terdaftar. Silahkan coba lagi',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
        }
    },
    data(){
        return{
            email:'',
            load:false,
            btndisabled: false,
        }
    },
    computed:{
        valid(){
            if(this.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
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
    methods:{
        validEmail(val){
            if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true;
            }else{
                return 'Email tidak valid';
            }
        },
        cekemail(){
            this.load = true
            this.btndisabled = true
            this.$store.dispatch('auth/cekEmail',this.email)
            .then(() => {
                this.load = false
                this.btndisabled = false
                this.$router.push({name:'register', params: {email: this.email}})
            })
            .catch(() => {
                this.load = false
                this.btndisabled = false
                // this.$router.push({name:'register', params: {email: this.email}})
                this.failNotif()
            })
        }
    }
};
</script>
