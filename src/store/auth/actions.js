import { api } from 'boot/axios'
// import router from '../../router'
export function register (context, credentials) {
    return new Promise((resolve, reject)=>{
        api.post('auth/register',credentials)
        .then((response)=>{
            context.commit('actUser',{token: response.data.token, user: response.data.data})
            localStorage.setItem('token',response.data.token)
            resolve("OK")
        })
        .catch((error)=>{
            reject(error.response.data)
        })
    })
}

export function registerAl (context, credentials) {
    return new Promise((resolve, reject)=>{
        api.post('auth/register-alumni',credentials)
        .then((response)=>{
            context.commit('actUser',{token: response.data.token, user: response.data.data})
            localStorage.setItem('token',response.data.token)
            resolve("OK")
        })
        .catch((error)=>{
            reject(error.response.data)
        })
    })
}

export function logout(context){
    return new Promise((resolve)=>{
        // localStorage.setItem('LoggedUser',false)
        localStorage.removeItem('token')
        console.log("action logout",localStorage.getItem('token'))
        delete api.defaults.headers.common['Authorization']
        context.commit('Logout')
        // router.push({name: 'login'})
        resolve("user Logout")
    })
}

export function login(context,credentials){
    return new Promise((resolve,reject)=>{
        api.post('auth/login', credentials)
        .then((response)=>{
            api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
            console.log("data user",response.data.user)
            let d = new Date();
            d.setTime(d.getTime() + 1  * 5 * 1000);
            let expires = "expires=" + d.toUTCString();
            document.cookie = "Token=" + response.data.access_token + ";" +expires + ";path=/";
            // localStorage.setItem('LoggedUser',JSON.stringify(response.data.user))
            context.commit('actUser',{token : response.data.access_token, user : response.data.user})
            // resolve(response)
            localStorage.setItem('token',response.data.access_token)
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' +response.data.access_token
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export function userReg(context,email){
    return new Promise((resolve,reject)=>{
        api.post('auth/check',{
            email : email
        })
        .then((response)=>{
            context.commit('uRegis',response.data.data)
            resolve(response.data.message)
        })
        .catch((error)=>{
            reject(error.response.data)
        })
        // if (email){
        //     context.commit('uRegis',email)
        //     resolve({response : "OK"})
        // }else{
        //     reject({error : "error"})
        // }
    })
}

export function otp(context,data){
    return new Promise((resolve,reject)=>{
        api.post('auth/verify',data)
        .then((response)=>{
            resolve(response.data.message)
        })
        .catch((error)=>{
            reject(error.response.data.message)
        })
    })
}
