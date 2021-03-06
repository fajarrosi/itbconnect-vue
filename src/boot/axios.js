import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
// https://be.itbconnect.org/api
// http://127.0.0.1:8000/api
// 37.44.244.134 
const api = axios.create({ baseURL: process.env.BASE_URL })
const header = token => {
  let config = {
            headers: {
                Authorization : `Bearer ${token}`
            },
        }
    return config
}

export default boot(({ app,redirect,store }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  
  api.interceptors.response.use(response =>{
    return response
  },error =>{
    if(error.response.status === 401){
      store.dispatch('auth/logout')
      // store.dispatch('myprofil/logout')
      delete api.defaults.headers.common['Authorization']
      redirect({path:'/login'})  
    }
    return Promise.reject(error)
  })
  
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

})

export { api,header }
