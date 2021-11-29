import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import auth from './auth'
import myprofil from './myprofil'
import news from './news'
import rekomendasi from './rekomendasi'
import koneksi from './koneksi'
import createPersistedState from 'vuex-persistedstate';
import { api } from 'boot/axios'
// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    actions:{
      searchData(context,keyword){
        return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('user/search',keyword,config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
        })
      },
      getAgenda(context){
        return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get('user/agenda',config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
        })
      },
      getCaraousel(context){
        return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get('user/list-caraousel',config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
        })
      },
      changePassword(context,password){
        return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('user/change-password',password,config)
        .then(response=>{
            resolve(response.data)
        })
        .catch(error=>{
            reject(error)
        })
        })
      },
      checkPassword(context,password){
        return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('user/check-password',password,config)
        .then(()=>{
            resolve("OK")
        })
        .catch(()=>{
            reject("fail")
        })
        })
      },
      changeUsername(context,username){
        return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('user/change-username',username,config)
        .then(response=>{
            context.commit('auth/updateUsername', response.data.data, {root: true})
            resolve(response.data)
        })
        .catch(error=>{
            reject(error)
        })
        })
      },
      
    },
    modules: {
      auth,
      myprofil,
      news,
      rekomendasi,
      koneksi
    },
    plugins: [createPersistedState()],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
