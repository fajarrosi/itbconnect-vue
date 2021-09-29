<template>
  <router-view />
</template>
<script>
// import {api} from 'boot/axios'
export default ({
  name: 'App',
  // created(){
    
  //   api.interceptors.response.use(error => {
  //     console.log("error status main app",error.response)
  //     if (error.response.status === 401) {
  //       localStorage.removeItem('token')
  //     }
  //     return Promise.reject(error)
  //     // return  new Promise((resolve,reject)=>{
  //     //   if (error.status === 401) {
  //     //     console.log("main app response 401",error.status)
  //     //   }
  //     //   reject("status ",error.status)
  //     // })
  //   });
  // }
 
})
</script>
