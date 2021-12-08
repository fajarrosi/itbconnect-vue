<template>
    <q-page padding class="bg-white">
        <div class="text-primary text-h6 q-pl-md">Akun Anda</div>
        <q-btn color="black" label="Ganti Username" flat no-caps @click="openUser"/> <br> 
        <!-- <q-btn color="black" label="Ganti Alamat Email" flat no-caps/> <br> -->
        <q-btn color="black" label="Ganti Password" flat no-caps @click="openPass"/> <br>
        <!-- <div class="text-primary text-h6 q-pl-md">Keamanan</div>
        <q-btn color="black" label="Blok Kontak" flat no-caps/> <br>
        <div class="text-primary text-h6 q-pl-md">Privasi</div>
        <q-btn color="black" label="Sembunyikan Informasi Pribadi" flat no-caps/> <br> -->
        
        <q-dialog v-model="dusername" v-if="dusername" persistent>
            <q-card>
                <q-card-section class="row ">
                    <div class="q-mb-md text-edit col-12" style="font-size:17px;">Ganti Username</div>
                    <div class="col-4 text-edit">Username Baru </div>
                    <div class="col-8 row">
                        <q-input
                            dense
                            outlined
                            v-model="username"
                            placeholder="Username Baru"
                            class="q-mb-sm col-12"
                            bg-color="white"
                            hide-bottom-space
                            :loading="uload"
                            :rules="[ val => val && val.length >= 5 || 'username minimal 5 karakter']"
                            input-class="username"
                        >
                        <template v-slot:append >
                            <q-avatar color="positive" text-color="white" icon="done"  v-if="usuccess"/>
                            <q-icon name="error"  v-if="uerror" class="text-negative"/>
                        </template>
                        </q-input>
                        <span style="font-size:11px;padding-left:10px;" class="col-12 text-positive" v-if="usuccess">Username dapat digunakan</span>
                        <span style="font-size:11px;padding-left:10px;" class="col-12 text-negative" v-if="uerror">Username tidak dapat digunakan</span>
                    </div>
                </q-card-section>
                <q-card-actions align="right">
                    <q-btn flat label="Submit" :color="usuccess ? 'primary' : 'grey'" no-caps :disabled="udisabled" @click="changeUser" :loading="load2">
                        <template v-slot:loading>
                            <div class="row items-center">
                                <q-spinner-facebook />  
                            </div>
                        </template>
                    </q-btn>
                    <q-btn flat label="Batal" color="primary" v-close-popup no-caps />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <change-pass v-model:dpassword="dpassword" v-if="dpassword"/>
    </q-page>
</template>

<script>
import { useQuasar,debounce } from 'quasar'
import { api } from 'boot/axios'
export default {
    components:{
        'change-pass' : require('./ChangePass.vue').default
    },
    setup(){
        const $q = useQuasar()
        return {
            showNotif () {
                $q.notify({
                message: 'Password lama salah. Silahkan coba lagi',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
            successNotif () {
                $q.notify({
                message: 'Password berhasil diganti',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            usuccessNotif () {
                $q.notify({
                message: 'Username berhasil diganti',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
        }
    },
    data(){
        return{
            dpassword:false,
            dusername:false,
            oldpw:'',
            newpw:'',
            confirmpw:'',
            visibility: true,
            visibility2: true,
            visibility3: true,
            load:false,
            load2:false,
            btndisabled:false,
            ubtndisabled:false,
            username:'',
            uload:false,
            usuccess:false,
            uerror:false
        }
    },
    watch:{
        username(val){
            this.usuccess = false
            this.uerror = false
            if(val.length >= 5){
                this.uload = true
                this.debouncedGetAnswer()
            }else{
                this.usuccess = false
            this.uerror = false
            }
        },
        usuccess(val){
            let x = document.getElementsByClassName('username')
            Array.from(x).forEach(function(n,index){
                let m = n.parentNode.parentNode
                if(val){
                    m.classList.add("text-positive")
                }else{
                    m.classList.remove("text-positive")
                }
            })
        },
        uerror(val){
            let x = document.getElementsByClassName('username')
            Array.from(x).forEach(function(n,index){
                let m = n.parentNode.parentNode
                if(val){
                    m.classList.add("text-negative")
                }else{
                    m.classList.remove("text-negative")
                }
            })
        }
    },
    created(){
        this.debouncedGetAnswer = debounce(this.getAnswer, 1000)
    },  
    computed:{
        valid(){
            return this.oldpw && this.newpw && this.confirmpw ? true : false
        },
        disabled(){
            if(this.valid){
                if (this.btndisabled){
                    return true
                }
                return false
            }
            return true
        },
        udisabled(){
            if(this.usuccess){
                if (this.ubtndisabled){
                    return true
                }
                return false
            }
            return true
        }
    },
    methods:{
        konfirmasipw(val){
            if(val === this.newpw){
                return true;
            }else{
                return 'Password tidak sama';
            }
        },
        onSubmit(){
            this.load = true
            this.btndisabled = true
            this.$store.dispatch('changePassword',{
                password : this.newpw,
                old_password : this.oldpw,
                password_confirmation : this.confirmpw
            })
            .then(()=>{
                this.successNotif()
                this.dpassword = false
                this.oldpw = '' 
                this.newpw = '' 
                this.confirmpw =''
            })
            .catch(error=>{
                if(error.response.status === 404){
                    this.showNotif()
                }else{
                    console.log("er",error)
                }
                this.load = false
                this.btndisabled = false
                // this.dpassword = false
            })
        },
        getAnswer(){
            api.post('auth/check-username',{
                username:this.username
            })
            .then(response=>{
                this.uload = false
                this.usuccess = true
            })
            .catch(error=>{
                console.log('err',error)
                this.uload = false
                this.uerror = true
            })
        },
        changeUser(){
            this.load2 = true
            this.ubtndisabled = true
            this.$store.dispatch('changeUsername',{
                username : this.username
            })
            .then(()=>{
                this.load2 = false
                this.ubtndisabled = false
                this.usuccessNotif()
                this.dusername = false
                this.username = ''
                // console.log("resp",response)
            })
            .catch(error=>{
                this.load2 = false
                this.ubtndisabled = false
                console.log("err",error)
            })
        },
        openUser(){
            this.dusername = true
            this.username = ''
            this.usuccess = false
            this.uerror = false
        },
        openPass(){
            this.dpassword = true
            this.oldpw = '' 
            this.newpw = '' 
            this.confirmpw =''
        }
    }
}
</script>

<style scoped>
.q-card{
    width: 418px;
    border-radius:10px;
}
</style>