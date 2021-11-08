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
    path:'/registrasi',
    component: () => import('pages/CekEmail.vue')
  },
  
  {
    path:'/auth',
    redirect:'login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {path:'/login',name:'login', component: () => import('pages/auth/Login.vue')},
      {path:'/cekemail', component: () => import('pages/auth/CekEmail.vue')},
      {path:'/otp', component: () => import('pages/auth/Otp.vue')},
      {path:'/forgot', component: () => import('pages/auth/Forgot.vue')},
      {path:'/forgot2', component: () => import('pages/auth/Forgot2.vue')},
      {path:'/register', component: () => import('pages/auth/Register.vue')},
      {path:'/regissuccess',name:'registerberhasil', component: () => import('pages/auth/RegisSucc.vue')},
      {path:'/registered', component: () => import('pages/auth/Register2.vue')},
    ]
  },

  {path:'/cari', name:'cari', component:()=>import('pages/search/Search.vue')},
  
  {
    path:'/',
    component: () => import('layouts/MobileLayout.vue'),
    children:[
      {path:'',name:'beranda',component:()=>import('pages/beranda/Beranda.vue'),
        meta:{
          userverified:true,
          requireAuth:true
        }
      },
      {path:'rekomendasi/:id',name:'rekomendasi', component:()=>import('pages/rekomendasi/Detail.vue'),
        meta:{
          detail:true
        }
      },
      {path:'koneksi',name:'koneksi',component:()=>import('pages/koneksi/Koneksi.vue'),
        meta:{
          userverified:true,
          requireAuth:true
        }
      },
      {path:'cari-alumni',name:'Cari Alumni',component:()=>import('pages/koneksi/Search.vue'),
        meta:{
          nofooter:true,
          headerback:true
        }
      },
      {path:'/cari-koneksi', name:'Koneksi Anda', component:()=>import('pages/koneksi/Searchkoneksi.vue'),
        meta:{
          headerback:true
        }
      },
      {path:'berita',name:'berita',component:()=>import('pages/berita/Berita.vue'),
        meta:{
            userverified:true,
            requireAuth:true
          }
      },
      {path:'berita/detail',name:'beritadetail',component:()=>import('pages/berita/Detail.vue'),
      meta:{
          detail:true
        }
      },
      {path:'berita/list',name:'Daftar Berita',component:()=>import('pages/berita/Listberita.vue'),
      meta:{
          nofooter:true,
          detail:true
        }
      },
      {path:'profil',name:'profil',component:()=>import('pages/profil/Profil.vue'),
        meta:{
          requireAuth:true
        },
        
      },
      {path:'calendar',name:'calendar',component:()=>import('pages/calendar/Calendar.vue'),
        meta:{
          nofooter:true,
          userverified:true,
          headerback:true
        }
      },
      {path:'notifikasi',name:'notifikasi',component:()=>import('pages/notifikasi/Notifikasi.vue'),
        meta:{
          nofooter:true,
          userverified:true,
          headerback:true
        }
      },
      {path:'pesan',name:'pesan',component:()=>import('pages/pesan/Pesan.vue'),
        meta:{
          nofooter:true,
          userverified:true,
          headerback:true
        }
      },
      {path:'detail',name:'detail-pesan',component:()=>import('pages/pesan/Detail.vue'),
        meta:{
          nofooter:true,
          userverified:true,
          headerback:true
        }
      },
      {path:'pengaturan',name:'setting&Privasi',component:()=>import('pages/pengaturan/Pengaturan.vue'),
        meta:{
          nofooter:true,
          userverified:true,
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
