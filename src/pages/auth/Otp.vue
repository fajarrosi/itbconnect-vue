<template>
  <q-page padding>
    <q-card flat>
        <q-card-section class="q-pb-none">
            <div class="row justify-center">
                <q-img
                    src="~assets/question.png"
                    spinner-color="primary"
                    style="width: 118px; height: 112px;"
                    spinner-size="82px"
                />
            </div>
        <div class="text-subtitle2 q-my-md text-center">
            Masukan kode OTP yang dikirim melalui loremipsum@email.com
        </div>
        <div class="row" >
                <q-input outlined bg-color="orange-2"  v-model="otp1" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px; color:#F37128; font-weight:700;" class="testing col q-mr-sm "/>
                <q-input outlined bg-color="orange-2"  v-model="otp2" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px; color:#F37128; font-weight:700;" class="testing col q-mr-sm "/>
                <q-input outlined bg-color="orange-2"  v-model="otp3" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px; color:#F37128; font-weight:700;" class="testing col q-mr-sm "/>
                <q-input outlined bg-color="orange-2"  v-model="otp4" maxlength="1" mask="#" input-class="otp" input-style="text-align: center; font-size: 34px; color:#F37128; font-weight:700;" class="testing col q-mr-sm "/>
        </div>
        <div class="row">
                <span class="col-12 q-mt-sm text-center">Tidak menerima kode? <q-btn color="orange-7" label="Kirim Ulang" flat no-caps style="text-decoration: underline;"/></span>
        </div>
        </q-card-section>
        <q-card-actions align="center" class="q-pb-lg q-mt-lg">
            <q-btn no-caps label="Verifikasi dan Lanjutkan" style="border-radius: 8px; margin-top:50px;" color="primary" :loading="load" :disabled="btndisabled" @click="$router.push('/registered')">
                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
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
        }
    }
};
</script>
<style lang="scss">
.q-field--outlined .q-field__control{
    border-radius: 8px;
}
</style>