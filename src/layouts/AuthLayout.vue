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
                              <router-view></router-view>
                            </div>
                        </div>
                        
                        <div class="row justify-center items-center ">
                            <p class="q-mb-none q-mr-md copyright">Connecting The Dots @2021 by</p>
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
export default {};
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
