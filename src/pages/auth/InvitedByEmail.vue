<template>
    <div class="q-pa-md">
    </div>
</template>
<script>
import { useQuasar} from 'quasar'
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

        timer = setTimeout(() => {
          $q.loading.show({
            message: 'Redirect to register page'
          })

          timer = setTimeout(() => {
            $q.loading.hide()
                $store.dispatch('auth/cekEmail',val)
                .then(() => {
                    $router.push({name:'register', params: {email: val}})
                })
                .catch(() => {
                    $router.push({name:'register', params: {email: val}})
                })
                // $store.dispatch('auth/userReg',val)
                // .then(()=>{
                //     $router.push('/register')
                // })
                // .catch((error)=>{
                //   console.log("error",error)
                //     $router.push('/register')
                //     // console.log("tidak ada email",e)
                // })
            timer = void 0
          }, 1000)
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