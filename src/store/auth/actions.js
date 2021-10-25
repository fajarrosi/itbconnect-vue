import { api } from 'boot/axios'
// import router from '../../router'

export function cekEmail(context,email){
    return new Promise((resolve,reject)=>{
        api.post('auth/check',{
            email : email
        })
        .then((response)=>{
            context.commit('setAlumni',response.data.data)
            resolve("berhasil")
        })
        .catch((error)=>{
            context.commit('setAlumni','')
            reject(error)
        })
    })
}

export function register (context, payload) {
    return new Promise((resolve, reject)=>{
        api.post('auth/register',{
            complete_name : payload.user.name,
            nickname : payload.nick,
            email : payload.user.email,
            password : payload.user.password,
            password_confirmation : payload.user.konfirmasi,
            username : payload.user.username,
            dob : payload.user.thn + '-' + payload.user.bln + '-' + payload.user.tgl,
            telephone : payload.user.nowa,
            campus_name : "ITB",
            education_id : payload.user.jenjang,
            program_study : payload.user.prodi,
            graduated_year : payload.user.tahunkeluar,
            entry_year : payload.user.tahunmasuk,
            pob: payload.user.tempat,
            citizenship : "Indonesia",
            is_itb:true
        })
        .then((response)=>{
            context.commit('regUser',{token: response.data.token, email: response.data.data.email})
            api.defaults.headers.common['Authorization'] = 'Bearer ' +response.data.token
            resolve(response.data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export function registerAl (context, payload) {
    return new Promise((resolve, reject)=>{
        api.post('auth/register-alumni',{
            complete_name : payload.name,
            // nickname : payload.nick,
            email : payload.email,
            password : payload.password,
            password_confirmation : payload.konfirmasi,
            username : payload.username,
            dob : payload.thn + '-' + payload.bln + '-' + payload.tgl,
            telephone : payload.nowa,
            campus_name : "ITB",
            education_id : payload.jenjang,
            program_study : payload.prodi,
            graduated_year : payload.tahunkeluar,
            entry_year : payload.tahunmasuk,
            pob: payload.tempat,
            citizenship : "Indonesia",
            is_itb:true
        })
        .then((response)=>{
            context.commit('regUser',{token: response.data.token, email: response.data.data.email})
            api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
            resolve(response.data)
        })
        .catch((error)=>{
            reject(error.response.data)
        })
    })
}

export function otp(context,data){
    return new Promise((resolve,reject)=>{

        api.post('auth/verify',data)
        .then((response)=>{
            resolve(response.data.message)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export function resend(context,data){
    return new Promise((resolve,reject)=>{

        api.post('auth/resend',data)
        .then((response)=>{
            resolve(response.data.message)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export function register2(context,data){
    return new Promise((resolve,reject)=>{
        let form = new FormData()
        form.append('photo_profile',data.user.src)
        form.append('company_name',data.user.perusahaan)
        form.append('position',data.user.jabatan)
        form.append('profession_id',data.user.profesi.value)
        form.append('province_id',data.prov.value)
        form.append('cities_id',data.user.kota.value)
        form.append('address',data.user.alamat)
        form.append('organization_id',"1")
        let config = {
            header : {
            'Content-Type' : 'multipart/form-data'
            }
        }

        api.post('detail/biodata',form,config)
        .then((response)=>{
            resolve("berhasil",response)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}


// export function logout(context){
//     return new Promise((resolve)=>{
//         // localStorage.setItem('LoggedUser',false)
//         localStorage.removeItem('token')
//         console.log("action logout",localStorage.getItem('token'))
//         delete api.defaults.headers.common['Authorization']
//         context.commit('Logout')
//         // router.push({name: 'login'})
//         resolve("user Logout")
//     })
// }

// export function login(context,credentials){
//     return new Promise((resolve,reject)=>{
//         api.post('auth/login', credentials)
//         .then((response)=>{
//             api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
//             console.log("data user",response.data.user)
//             let d = new Date();
//             d.setTime(d.getTime() + 1  * 5 * 1000);
//             let expires = "expires=" + d.toUTCString();
//             document.cookie = "Token=" + response.data.access_token + ";" +expires + ";path=/";
//             // localStorage.setItem('LoggedUser',JSON.stringify(response.data.user))
//             context.commit('actUser',{token : response.data.access_token, user : response.data.user})
//             // resolve(response)
//             localStorage.setItem('token',response.data.access_token)
//             // axios.defaults.headers.common['Authorization'] = 'Bearer ' +response.data.access_token
//             resolve(response)
//         })
//         .catch((error) => {
//             reject(error)
//         })
//     })
// }



