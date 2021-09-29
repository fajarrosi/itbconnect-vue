<template>
  <div class="row bg-grey-2 justify-center">
    <div class="base-container shadow-2 flex items-center">
      <q-layout view="hHh Lpr fFf" container>

        <q-page-container>
            <div class="row justify-center logo">
              <q-img
                src="~assets/logo_header.png"
                spinner-color="white"
                style="width: 260px; height: 70px"
                spinner-size="30px"
                alt="ia-itb-logo"
              />
            </div>

          <router-view></router-view>

           <div class="row justify-center items-center">
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
        <!-- <q-footer>
          <div class="row justify-center items-center">
            <p class="q-mb-none q-mr-md copyright">ITBCONNECT @2021 by</p>
            <q-img
              src="~assets/ia-itb.png"
              spinner-color="white"
              style="width: 77px; height: 51px"
              spinner-size="30px"
              alt="ia-itb-logo"
            />
          </div>

        </q-footer> -->
      </q-layout>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
// .q-header{
//   background-color: transparent;
//   padding-top: 40px;
// }

.q-page-container {
  .logo{
    margin-top: 40px;
  }
  .q-card{
    border-radius: 15px;
    background-color: #EBEDED;
  }

  .copyright {
      color: #05386b;
    }
}

// .q-footer{
//   background-color: transparent;
//   .copyright {
//       color: #05386b;
//     }
// }

</style>
