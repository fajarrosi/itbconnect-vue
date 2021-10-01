<template>
  <!-- <div class="row bg-grey-2 justify-center"> -->
    <!-- <div class="base-container shadow-2 flex items-center"> -->
      <q-layout view="hHh lpR lfr" >
        <q-header  >
            <div class="row justify-center logo">
              <q-img
                src="~assets/logo_header.png"
                spinner-color="white"
                style="width: 260px; height: 70px"
                spinner-size="30px"
                alt="ia-itb-logo"
              />
            </div>
        </q-header>
        <q-page-container>
          <div class="row bg-grey-2 justify-center">
            <div class="base-container ">
              <router-view></router-view>
            </div>
          </div>

          <!-- <div class="row justify-center items-center">
            <p class="q-mb-none q-mr-md copyright">ITBCONNECT @2021 by</p>
            <q-img
              src="~assets/ia-itb.png"
              spinner-color="white"
              style="width: 77px; height: 51px"
              spinner-size="30px"
              alt="ia-itb-logo"
            />
          </div> -->

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
        <q-footer >
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
        </q-footer>
      </q-layout>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
export default {};
</script>
<style lang="scss">
.q-header{
  background-color: $secondary;
}

.q-page-container {
  .logo{
    margin-top: 40px;
  }
  .q-card{
    border-radius: 15px;
    background-color: #EBEDED;
  }
}

.q-footer{
  .copyright {
      color: #05386b;
    }
}

</style>
