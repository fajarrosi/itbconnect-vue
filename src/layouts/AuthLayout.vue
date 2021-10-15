<template>
      <q-layout view="hHh lpR lfr" >
        <!-- <q-header  >
            <div class="row justify-center logo">
              <q-img
                src="~assets/logo_header.png"
                spinner-color="white"
                style="width: 260px; height: 70px"
                spinner-size="30px"
                alt="ia-itb-logo"
              />
            </div>
        </q-header> -->
        <q-page-container class="bg-secondary">
          <div class="row justify-center logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="146" height="70" viewBox="0 0 146 70">
              <g id="Group_765" data-name="Group 765" transform="translate(6275 -195)">
                <text id="CTD" transform="translate(-6247 245)" fill="#1368c2" font-size="47" font-family="OpenSans, Open Sans"><tspan x="0" y="0">CTD</tspan></text>
                <text id="Connecting_The_Dots" data-name="Connecting The Dots" transform="translate(-6202 261)" fill="#225faa" font-size="15" font-family="OpenSans, Open Sans"><tspan x="-72.583" y="0">Connecting The Dots</tspan></text>
              </g>
            </svg>
          </div>
          <div class="row justify-center">
            <div class="base-container ">
              <router-view></router-view>
            </div>
          </div>

          <div class="row justify-center items-center q-pb-lg">
            <p class="q-mb-none q-mr-md copyright">ITBCONNECT @2021 by</p>
            <q-img
              src="~assets/ia-itb.png"
              spinner-color="white"
              style="width: 77px; height: 51px"
              spinner-size="30px"
              alt="ia-itb-logo"
            />
          </div>

        </q-page-container>
        <!-- <q-footer elevated>
          <div class="row bg-grey-2 justify-center">
            <div class="base-container flex items-center justify-center">
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
        </q-footer> -->
      </q-layout>
</template>

<script>
export default {};
</script>
<style scoped>
/* .q-header{
   background-color: $secondary;
 } */

.q-page-container .logo{
  padding-top: 60px;
}

.copyright {
      color: #05386b;
}
/* .q-page-container {
  .logo{
    padding-top: 60px;
  }
  .q-card{
    border-radius: 15px;
    background-color: #EBEDED;
  }
  .copyright {
      color: #05386b;
    }
} */

 /* .q-footer{
   .copyright {
       color: #05386b;
     }
 } */
/* .q-card__section, .q-card__actions{
  padding-left: 20px;
  padding-right: 20px;
} */
</style>
