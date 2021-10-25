// function guard(to, from, next)
// {
//  let isAuthenticated= false;
// //this is just an example. You will have to find a better or 
// // centralised way to handle you localstorage data handling 
//     if(localStorage.getItem('LoggedUser')){
//       isAuthenticated = true;
//       console.log("ada user", localStorage.getItem('LoggedUser'))
//     }else{
//       console.log("tidakada", localStorage.getItem('LoggedUser'))
//       isAuthenticated= false; 
//     }
//       if(isAuthenticated){
//         next(); // allow to enter route
//       }else{
//         next({name: 'login'}); // go to '/login';
//       }
// }

const routes = [
  
  {
    path: '/login2',
    component: () => import('pages/Login2.vue')
  },

  {
    path:'/registrasi',
    component: () => import('pages/CekEmail.vue')
  },
  {
    path:'/registers',
    component: () => import('pages/Register.vue')
  },
  {
    path:'/register2',
    component: () => import('pages/Register2.vue')
  },
  {
    path:'/testing',
    component: () => import('layouts/TestingLayout.vue')
  },
  {
    path:'/otps',
    component: () => import('pages/Otp.vue')
  },
  {
    path:'/auth',
    redirect:'login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {path:'/login',name:'login', component: () => import('pages/auth/Login.vue')},
      {path:'/cekemail', component: () => import('pages/auth/CekEmail.vue')},
      {path:'/otp', component: () => import('pages/auth/Otp.vue')},
      {path:'/register', component: () => import('pages/auth/Register.vue')},
      {path:'/regissuccess',name:'registerberhasil', component: () => import('pages/auth/RegisSucc.vue')},
      {path:'/registered', component: () => import('pages/auth/Register2.vue')},
    ]
  },
  {
    path:'/search',
    component: () => import('components/Search2.vue')
  },

  // {
  //   path:'/',
  //   redirect:'home',
  //   component: () => import('layouts/BaseLayout.vue'),
  //   children: [
  //     {
  //       path: 'home',name: 'home', component: () => import ('pages/Home.vue'),
  //       meta:{
  //         requireAuth : true
  //       }
    
  //     },
  //     {
  //       path: 'profil',name: 'profil', component: () => import ('pages/Profil.vue')
  //     },
  //     {
  //       path: 'bisnis',name: 'bisnis', component: () => import ('pages/Profil.vue')
  //     },
  //     {
  //       path: 'chat',name: 'chat', component: () => import ('pages/Profil.vue')
  //     }
     
  //   ]
  // },
  {path:'/cari',name:'cari',component:()=>import('pages/search/Search.vue')},
  {
    path:'/',
    component: () => import('layouts/MobileLayout.vue'),
    children:[
      {path:'',name:'beranda',component:()=>import('pages/beranda/Beranda.vue')},
      {path:'koneksi',name:'koneksi',component:()=>import('pages/koneksi/Koneksi.vue')},
      {path:'cari-alumni',name:'Cari Alumni',component:()=>import('pages/koneksi/Search.vue'),
        meta:{
          nofooter:true,
          headerback:true
        }
      },
      {path:'hasil-pencarian-alumni',name:'Hasil Pencarian',component:()=>import('pages/koneksi/ResultSearch.vue'),
        meta:{
          nofooter:true,
          headerback:true
        }
      },
      {path:'berita',name:'berita',component:()=>import('pages/berita/Berita.vue')},
      {path:'berita/detail',name:'berita-detail',component:()=>import('pages/berita/Detail.vue')},
      {path:'profil',name:'profil',component:()=>import('pages/profil/Profil.vue')},
      {path:'calendar',name:'calendar',component:()=>import('pages/calendar/Calendar.vue'),
        meta:{
          nofooter:true,
          headerback:true
        }
      },
      {path:'notifikasi',name:'notifikasi',component:()=>import('pages/notifikasi/Notifikasi.vue'),
        meta:{
          nofooter:true,
          headerback:true
        }
      },
      {path:'pesan',name:'pesan',component:()=>import('pages/pesan/Pesan.vue'),
        meta:{
          nofooter:true,
          headerback:true
        }
      },
      {path:'detail',name:'detail-pesan',component:()=>import('pages/pesan/Detail.vue'),
        meta:{
          nofooter:true,
          headerback:true
        }
      },
      {path:'pengaturan',name:'setting&Privasi',component:()=>import('pages/pengaturan/Pengaturan.vue'),
        meta:{
          nofooter:true,
          headerback:true
        }
      },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
