<template>
    <q-layout view="hHh lpR lfr" >
        <q-page-container class="bg-secondary">
            <q-page>
                <div class="row justify-center hide-scrollbar" style="max-height:100vh;
    overflow:auto;">
                    <div class="auth-container ">
                        <div class="row justify-center logo text-center">
                            <div class="text-bold col-12" style="font-size:75px;color:#1368c2;margin-bottom:-25px;">CTD</div>
                            <div class="text-grey col-12">Connecting The Dots</div>
                        </div>
                        <div class="d ">
                            <div class="row justify-center" >
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
                                            (val) => (val && val.length > 0) || 'Email tidak boleh kosong'
                                            ]"
                                            type="email"
                                            class="q-mb-sm"
                                            bg-color="white"
                                            hide-bottom-space
                                        />
                                        <q-input
                                            outlined
                                            dense
                                            v-model="email"
                                            label="Alamat E-mail"
                                            lazy-rules
                                            :rules="[
                                            (val) => (val && val.length > 0) || 'Email tidak boleh kosong'
                                            ]"
                                            type="email"
                                            class="q-mb-sm"
                                            bg-color="white"
                                            hide-bottom-space
                                        />
                                        <q-input
                                            outlined
                                            dense
                                            v-model="email"
                                            label="Alamat E-mail"
                                            lazy-rules
                                            :rules="[
                                            (val) => (val && val.length > 0) || 'Email tidak boleh kosong'
                                            ]"
                                            type="email"
                                            class="q-mb-sm"
                                            bg-color="white"
                                            hide-bottom-space
                                        />
                                        <q-input
                                            outlined
                                            dense
                                            v-model="email"
                                            label="Alamat E-mail"
                                            lazy-rules
                                            :rules="[
                                            (val) => (val && val.length > 0) || 'Email tidak boleh kosong'
                                            ]"
                                            type="email"
                                            class="q-mb-sm"
                                            bg-color="white"
                                            hide-bottom-space
                                        />
                                        <q-input
                                            outlined
                                            dense
                                            v-model="email"
                                            label="Alamat E-mail"
                                            lazy-rules
                                            :rules="[
                                            (val) => (val && val.length > 0) || 'Email tidak boleh kosong'
                                            ]"
                                            type="email"
                                            class="q-mb-sm"
                                            bg-color="white"
                                            hide-bottom-space
                                        />
                                        <q-input
                                            outlined
                                            dense
                                            v-model="email"
                                            label="Alamat E-mail"
                                            lazy-rules
                                            :rules="[
                                            (val) => (val && val.length > 0) || 'Email tidak boleh kosong'
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
                                            color="primary"
                                            no-caps
                                            style="padding-left:24px;padding-right:24px;" 
                                            class="btn-radius"
                                            />
                                    </q-card-section>
                                    <q-card-actions align="center" class=" q-pb-md q-pt-none" style="margin-top:11px;">
                                        <span>Sudah memiliki akun? </span>
                                        <q-btn flat no-caps class="text-primary text-bold" @click="$router.push('/login')">
                                            Login Sekarang
                                        </q-btn>
                                    </q-card-actions>
                                </q-card>
                            </div>
                        </div>
                        
                        <div class="row justify-center items-center ">
                            <p class="q-mb-none q-mr-md copyright">ITBCONNECT @2021 by</p>
                            <q-img
                            src="~assets/ia-itb.png"
                            spinner-color="white"
                            style="width: 77px; height: 51px"
                            spinner-size="30px"
                            alt="ia-itb-logo"
                            />
                        </div>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    data(){
        return{
            email:''
        }
    }
};
</script>
<style scoped>
.auth-container{
    width:100vw;
    height:100vh;
    
    display:grid;
    grid-template-rows:130px auto 60px;
    padding: 16px;
}
@media(min-width: 768px){
    .auth-container{
        width:428px;
        grid-template-rows:130px auto 80px;
        padding:0;
    }
}
.copyright {
    color: #05386b;
}

</style>
