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
    path:'/invitedbyemail',
    component: () => import('pages/auth/InvitedByEmail.vue')
  },
  
  {
    path:'/auth',
    redirect:'login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {path:'/login',name:'login', component: () => import('pages/auth/Login.vue')},
      {path:'/cekemail',name:'cekemail', component: () => import('pages/auth/CekEmail.vue')},
      {path:'/otp',name:'otp', component: () => import('pages/auth/Otp.vue')},
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
      {path:'detail-user/:id',name:'profil user', component:()=>import('pages/rekomendasi/Detail.vue'),
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
      {path:'cari-koneksi', name:'Koneksi Anda', component:()=>import('pages/koneksi/Searchkoneksi.vue'),
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
      {path:'berita/:slug',name:'beritadetail',component:()=>import('pages/berita/Detail.vue'),
      meta:{
          detail:true
        }
      },
      {path:'berita/daftar-berita',name:'Daftar Berita',component:()=>import('pages/berita/Listberita.vue'),
      meta:{
          detail:true
        }
      },
      
      {path:'profil',name:'profil',component:()=>import('pages/profil/Profil.vue'),
        meta:{
          requireAuth:true
        },
      },
      {path:'profil/editbisnis',name:'editbisnis',component:()=>import('pages/profil/EditBisnis.vue'),
        meta:{
          requireAuth:true,
          detail:true
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
      {path:'permintaan',name:'permintaan',component:()=>import('pages/notifikasi/RequestDetail.vue'),
        meta:{
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
      // route testing
      {path:'berita/test',name:'test',component:()=>import('pages/berita/Test.vue'),
      meta:{
          detail:true
        }
      },
    ]
  },
  {
    path:'/testlayout',
    component: () => import('layouts/FirstLayout.vue'),
    children:[
      {path:'/logins', component: () => import('pages/auth/Login.vue')},
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
