<template>
    <div class="q-pa-md">
    </div>
</template>
<script>
import { useQuasar, QSpinnerGears } from 'quasar'
import { onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const $q = useQuasar()
    const $store = useStore()
    const $router = useRouter()
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

    return {
      showLoading (val) {
        $q.loading.show({
          message: `Checking Your Email.... ${val}`
        })
        // let email = $store.getters['auth/cekEmail'](val)
        

        timer = setTimeout(() => {
          $q.loading.show({
            spinner: QSpinnerGears,
            spinnerColor: 'red',
            messageColor: 'black',
            backgroundColor: 'yellow',
            message: 'Redirect to register page'
          })

          timer = setTimeout(() => {
            $q.loading.hide()
            // if(email){
                $store.dispatch('auth/userReg',val)
                .then(()=>{
                    $router.push('/register')
                })
                .catch((error)=>{
                  console.log("error",error)
                    $router.push('/register')
                    // console.log("tidak ada email",e)
                })
            // }else{
            //     $router.push('/register')
            //     console.log("tidak ada email")
            // }
            timer = void 0
          }, 2000)
        }, 3000)
      }
    }
  },
  mounted(){
      this.showLoading(this.$route.query.email)
  }
}
</script>
<style>
    
</style>