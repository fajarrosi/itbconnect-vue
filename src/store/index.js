import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import auth from './auth'
import profile from './profile'
import myprofil from './myprofil'
import createPersistedState from 'vuex-persistedstate';

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
    state:{
      isVerified:'',
      userrekomen:{
        name:'Budi',
        prodi:'Teknik Informatika',
        tahunmasuk:'1990',
        jabatan:'CEO',
        perusahaan:'Pelindo Energi Logistik',
        domisili:'Bandung',
        bio:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consequatur aliquid impedit saepe et. Assumenda delectus ipsum vero. Tenetur aliquid laudantium debitis eveniet dolores quam, cupiditate nulla sint iste, modi pariatur dolorem. Voluptatum tenetur vel facere modi cupiditate praesentium iste soluta. Voluptates sed animi maiores fugiat, ullam placeat esse vero expedita maxime eaque corrupti optio quos aliquid nam tenetur! Est possimus volu',
        connect:false,
        id:2
      },
      dataprofil:{
        id:2,
        connect:false,
      },
      datapengalaman:{
        id:2
      },
      datapendidikan:{
        id:2
      },
      dataorganisasi:{
        id:2
      },
      databisnis:{
        id:2
      }
    },
    mutations:{
      Verified(state,data){
        state.isVerified = data
      }
    },
    actions:{
      setVerified({commit}, payload){
        commit('Verified',payload)
      }
    },
    modules: {
      auth,
      myprofil,
      profile
    },
    plugins: [createPersistedState()],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
