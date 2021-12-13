import { api } from 'boot/axios'

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
            religion_id:1,
            is_itb:true
        })
        .then((response)=>{
            context.commit('setUser',{token: response.data.token, user: response.data.user})
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
            religion_id:1,
            is_itb:true
        })
        .then((response)=>{
            context.commit('setUser',{token: response.data.token, user: response.data.user})
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
            context.commit('delAlumni')
            context.commit('updateEmailVerified',response.data.data)
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
        if(data.user.dalam.value === '2'){
            form.append('country_id',data.user.negara.value)
        }else{
            form.append('province_id',data.prov.value)
            form.append('cities_id',data.user.kota.value)
        }
        form.append('address',data.user.alamat)
        if(data.org){
            let org = data.org.map(a=> a.org)
            for (var i = 0; i < org.length; i++) {
                form.append(`organization_id[${i}]`, org[i]);
            }
        }
        let config = {
            headers : {
            'Content-Type' : 'multipart/form-data',
            Authorization : `Bearer ${context.rootState.auth.token}`
            }
        }

        api.post('detail/biodata',form,config)
        .then((response)=>{
            resolve(response)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export function logout(context){
    context.commit('delUser')
    delete api.defaults.headers.common['Authorization']

}

export function login(context, credentials){
    return new Promise((resolve,reject)=>{
        api.post('auth/login',credentials)
        .then((response)=>{
            context.commit('setUser',{token: response.data.access_token, user: response.data.user})
            api.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
            resolve(response.data.data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

export function forgot(context,email){
    return new Promise((resolve,reject)=>{
        api.post('auth/forgot',email)
        .then((response)=>{
            resolve(response.data)
        })
        .catch((error)=>{
            reject(error.response.data)
        })
    })
}

export function updateUserVerified(context,verified){
    context.commit('updateUserVerified',verified)
}




