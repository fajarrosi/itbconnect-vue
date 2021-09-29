<template >
    <div>
        <div class="row justify-center q-mt-lg">
            <q-card class="my-card col-md-4 col-8">
                <q-card-section>
                    <q-banner inline-actions class="text-white bg-red q-mb-md" v-if="Object.keys(errors).length">
                        OTP yang Anda Masukkan Salah <br>
                    </q-banner>
                    Masukkan 6 digit kode verifikasi yang dikirimkan ke <b>{{user.email}}</b>
                    
                    <br>
                        <q-form
                        @submit="onSubmit"
                        >
                    <div class="row">
                            <q-input  v-model="otp1" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px;" class="testing col q-mr-lg q-mt-lg"/>
                            <q-input v-model="otp2" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px;" class="testing col q-mr-lg q-mt-lg"/>
                            <q-input v-model="otp3" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px;" class="testing col q-mr-lg q-mt-lg"/>
                            <q-input v-model="otp4" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px;" class="testing col q-mr-lg q-mt-lg"/>
                            <q-input v-model="otp5" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px;" class="testing col q-mr-lg q-mt-lg"/>
                            <q-input v-model="otp6" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px;" class="testing col q-mr-lg q-mt-lg"/>
                            <span class="col-12 q-mt-lg" v-if="totalTime >= -1">Kirim Ulang : {{minute}}:{{second}}</span>
                    </div>
                    <div class="row">
                            <q-btn label="Kirim Ulang"  color="primary"  :loading="load2" :disabled="btndisabled2" class="col-md-4 q-mt-lg" no-caps v-if="totalTime < -1" @click="onKirimUlang">
                                <template v-slot:loading>
                                    <q-spinner-facebook />
                                </template>
                            </q-btn>
                    </div>
                    <q-btn label="Verifikasi" type="submit" :color="valid ? 'grey' : 'primary'" style="width: 100%;" :loading="load" :disabled="btn" class="q-mt-lg">
                            <template v-slot:loading>
                                <q-spinner-facebook />
                            </template>
                        </q-btn>
                    </q-form>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<script>
import { useQuasar } from 'quasar'
import { mapState } from 'vuex'
export default {
    setup(){
        const $q = useQuasar()
        return {
            showNotif () {
                $q.notify({
                message: 'OTP Berhasil Dikirim',
                type: 'info',
                position: 'top',
                progress: true
                })
            }
        }
    },
    mounted(){
        this.nextSiblings();
    },
    data(){
        return {
            otp1:'',
            otp2:'',
            otp3:'',
            otp4:'',
            otp5:'',
            otp6:'',
            load:false,
            btndisabled:true,
            otp:'',
            second:null,
            minute:null,
            totalTime:null,
            btndisabled2:false,
            load2:false,
            errors:{}
        }
    },
    computed:{
        ...mapState({
            user : state => state.auth.useractive
        }),
        valid(){
            if(this.otp1 && this.otp2 && this.otp3 && this.otp4 && this.otp5 && this.otp6){
                return false
            }else{
                return true
            }
        },
        btn(){
            if(!this.valid){
                if (this.btndisabled) {
                    return false
                }else{
                    return true
                }
            }else{
                return true
            }
        }
    },
    created(){
        this.timer(120)
    },
    methods: {
        timer(time){
            this.totalTime = time
            this.second = '00'
            this.minute = '00'
            let mulai = setInterval(() => {
            this.minute = parseInt(this.totalTime /60,10)
            this.second = parseInt(this.totalTime  % 60,10)
            this.minute = this.minute < 10 ? '0' + this.minute : this.minute
            this.second = this.second < 10 ? '0' + this.second : this.second
            this.totalTime -=1
                if(this.totalTime === -1){
                    this.second = '00' 
                }
                if(this.totalTime < -1) {
                    clearInterval(mulai)
                }
            },1000)
        },
        onKirimUlang(){
            this.load2 = true
            this.btndisabled2 = true
            setTimeout(()=>{
                this.timer(120)
                this.showNotif()
                this.load2=false
                this.btndisabled2 = false
            },500)
        },
        onSubmit(){
            this.load = true
            this.btndisabled = false
            this.errors ={}
            setTimeout(()=>{
                this.otp = this.otp1 + this.otp2 + this.otp3 + this.otp4 + this.otp5 + this.otp6
                this.$store.dispatch('auth/otp',{
                    email : this.user.email,
                    otp : this.otp
                })
                .then(()=>{
                    this.load = false
                    this.btndisabled = true
                    this.$router.push({name: 'account'})
                })
                .catch((error)=>{
                    this.errors = error
                    this.load = false
                    this.btndisabled = true
                })
                // if(this.otp === this.user.verification_code){
                //     console.log("true")
                //     this.load = false
                //     this.btndisabled = true
                //     this.$router.push({name: 'profil'})
                // }else{
                //     this.load = false
                //     this.btndisabled = true
                //     console.log("otp dari input",this.otp)
                //     console.log("otp dari otp",this.user.otp)
                //     console.log("false")
                // }    
            },1000)
        },
        nextSiblings(){
            let otps = document.getElementsByClassName('otp');
            Array.from(otps).forEach(function(otp,index){
                otp.addEventListener("keyup",function(e){
                    let grandparent = otp.parentNode.parentNode.parentNode.parentNode
                    if(otp.value.length === 1 && index !== 5){
                        let ns = grandparent.nextElementSibling
                        let next = ns.children[0].children[0].children[0].children[0]
                        next.focus()
                    }
                    if(index !== 0 && e.keyCode === 8){
                        let ps = grandparent.previousElementSibling
                        let prev = ps.children[0].children[0].children[0].children[0]
                        prev.focus()
                    }
                });
            })
        }
    },
}
</script>

