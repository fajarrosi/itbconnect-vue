import { api,header } from 'boot/axios'

export function getProfil(context){
    return new Promise((resolve,reject)=>{
        api.get('user/profile',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setBio',response.data.data)
            context.commit('setProfil',response.data.data)
            context.commit('setPengalaman',response.data.data)
            context.commit('setPendidikan',response.data.data)
            context.commit('setOrganisasi',response.data.data)
            context.commit('setBisnis',response.data.data)
            context.dispatch('auth/updateUserVerified',response.data.data.is_verified, { root: true })
            resolve(response.data.data)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function logout(context){
    context.commit('delProfil')
}


export function updBio(context,bio){
    let config = {
        headers: {
            'Content-Type' : 'multipart/form-data',
            Authorization : `Bearer ${context.rootState.auth.token}`
        }
    }
    return new Promise((resolve,reject)=>{
        api.post('user/edit-account',bio,config)
        .then(()=>{
            context.dispatch('getProfil')
            .then(()=>{
                resolve('OK')
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function updProfil(context,bio){
   
    return new Promise((resolve,reject)=>{
        api.post('user/add-profile',bio,header(context.rootState.auth.token))
        .then(()=>{
            context.dispatch('getProfil')
            .then(()=>{
                resolve('OK')
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function updOrg(context,bio){
  
    return new Promise((resolve,reject)=>{
        api.put('user/add-interest',bio,header(context.rootState.auth.token))
        .then(()=>{
            context.dispatch('getProfil')
            .then(()=>{
                resolve('OK')
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function updExp(context,bio){
   
    return new Promise((resolve,reject)=>{
        api.post('user/add-experience',bio,header(context.rootState.auth.token))
        .then(()=>{
            context.dispatch('getProfil')
            .then(()=>{
                resolve("OK")
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function updEdu(context,bio){
   
    return new Promise((resolve,reject)=>{
        api.post('user/add-education',bio,header(context.rootState.auth.token))
        .then(()=>{
            context.dispatch('getProfil')
            .then(()=>{
                resolve("OK")
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getOrg(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/organization',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setOrganization',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getProfesi(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/profession',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setProfesi',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getPengda(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/pengda',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setPengda',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getIaprodi(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/iaprodi',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setIaprodi',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getJenjang(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/education',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setJenjang',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getProdi(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/prodi',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setProdi',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getUniv(context){
    return new Promise((resolve,reject)=>{
        api.get('user/university',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setUniv',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getNegara(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/country',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setNegara',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getProv(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/province',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setProv',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getAgama(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/religion',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setAgama',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function getBisnisField(context){
    return new Promise((resolve,reject)=>{
        api.get('complex/business-field',header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setBisnisfield',response.data.data)
            resolve('ok')
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function createBisnis(context,bio){
    let config = {
        headers: {
            'Content-Type' : 'multipart/form-data',
            Authorization : `Bearer ${context.rootState.auth.token}`
        }
    }
    return new Promise((resolve,reject)=>{
        api.post('user/input-business',bio,config)
        .then(()=>{
            context.dispatch('getProfil')
            .then(()=>{
                resolve("OK")
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function updBisnis(context,bio){
    let config = {
        headers: {
            'Content-Type' : 'multipart/form-data',
            Authorization : `Bearer ${context.rootState.auth.token}`
        }
    }
    return new Promise((resolve,reject)=>{
        api.post(`user/update-business/${bio.id}`,bio.data,config)
        .then(()=>{
            context.dispatch('getProfil')
            .then(()=>{
                resolve("OK")
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function delBisnis(context,id){
   
    return new Promise((resolve,reject)=>{
        api.delete(`user/delete-business/${id}`,header(context.rootState.auth.token))
        .then(()=>{
            context.dispatch('getProfil')
            .then(()=>{
                resolve("OK")
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function delProduk(context,id){
  
    return new Promise((resolve,reject)=>{
        api.delete(`user/delete-produk/${id}`,header(context.rootState.auth.token))
        .then(()=>{
            context.dispatch('getProfil')
            .then(()=>{
                resolve("OK")
            })
        })
        .catch(err=>{
            reject(err)
        })
    })
}

export function deleteall(context){
    return new Promise((resolve)=>{
        context.commit('delAll')
                resolve("OK")
    })
}

