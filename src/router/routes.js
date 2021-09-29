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
    path: '/logins',
    name:'login4',
    component: () => import('pages/Login.vue')
  },
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
      {path:'/register', component: () => import('pages/auth/Register.vue')},
      {path:'/otp', component: () => import('pages/auth/Otp.vue')},
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
  {
    path:'/',
    redirect:'home',
    component: () => import('layouts/MobileLayout.vue'),
    children:[
      {path:'home',name:'home',component:()=>import('pages/Home.vue')},
      // {path:'inbox',name:'inbox',component:()=>import('pages/Inbox.vue')},
      {path:'network',name:'network',component:()=>import('pages/Network.vue')},
      {path:'news',name:'news',component:()=>import('pages/News.vue')},
      {path:'account',name:'account',component:()=>import('pages/Account.vue')},

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
