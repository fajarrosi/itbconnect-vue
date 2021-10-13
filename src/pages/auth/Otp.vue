<template>
  <q-page >
    <q-card flat>
        <q-card-section class="q-pb-none">
            <div class="row justify-center">
                <q-img
                    src="~assets/otp-icon.png"
                    spinner-color="primary"
                    style="width: 118px; height: 112px;"
                    spinner-size="82px"
                />
            </div>
        <div class="text-subtitle2 q-my-md text-center">
            Masukan kode OTP yang dikirim
        </div>
        <div class="row justify-center" >
                <q-input outlined bg-color="orange-2"  v-model="otp1" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 60px; color:#F37128; font-weight:700;" class="q-pr-xs"/>
                <q-input outlined bg-color="orange-2"  v-model="otp2" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 60px; color:#F37128; font-weight:700;" class="q-pr-xs"/>
                <q-input outlined bg-color="orange-2"  v-model="otp3" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 60px; color:#F37128; font-weight:700;" class="q-pr-xs"/>
                <q-input outlined bg-color="orange-2"  v-model="otp4" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 60px; color:#F37128; font-weight:700;" class="q-pr-xs"/>
        </div>
        <div class="row">
                <span class="col-12 q-mt-sm text-center">Tidak menerima kode? <q-btn color="orange-7" label="Kirim Ulang" flat no-caps style="text-decoration: underline;" @click="showNotif()"/></span>
        </div>
        </q-card-section>
        <q-card-actions align="center" class="q-pb-lg">
            <q-btn no-caps label="Verifikasi & Lanjutkan" class="col" style="border-radius: 8px;" color="primary" :loading="load" :disabled="btndisabled" @click="onSend">
                <template v-slot:loading>
                    <div class="row items-center">
                        <p class="text-bold q-mb-none q-mr-sm">Loading...</p>
                        <q-spinner-facebook />  
                    </div>
                </template>
            </q-btn>
        </q-card-actions>
        </q-card>
    </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
export default {
    setup(){
        const $q = useQuasar()
        return {
            showNotif () {
                $q.notify({
                message: 'OTP Berhasil Dikirim',
                type: 'positive',
                position: 'top',
                progress: true
                })
            }
        }
    },
    data(){
        return{
            otp1:'',
            otp2:'',
            otp3:'',
            otp4:'',
            otp:'',
            load:false,
            btndisabled: false,
            errors:{}
        }
    },
    mounted(){
        this.nextSiblings();
    },
    methods:{
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
        },
        onSend(){
            this.load = true
            this.btndisabled = true
            setTimeout(() => {
                this.load = false
                this.btndisabled = false
                this.$router.push('/registered')
            }, 1000);
        }
    }
};
</script>
<style scoped>
.q-field--outlined :deep() .q-field__control{
    border-radius: 8px;
    width:72px;
    height:82px;
}
</style>
