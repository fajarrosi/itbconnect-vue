import { api,header } from 'boot/axios'
export function getAllUser(context){
    return new Promise((resolve,reject)=>{
       
        api.get('user/user-all',header(context.rootState.auth.token))
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function getAllUserByLocation(context){
    return new Promise((resolve,reject)=>{
        
        api.get('user/location-user',header(context.rootState.auth.token))
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function addConnect(context,idfriend){
    return new Promise((resolve,reject)=>{
        
        api.post('connect/add',idfriend,header(context.rootState.auth.token))
        .then(response=>{
            resolve(response.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function userDetail(context,idfriend){
    return new Promise((resolve,reject)=>{
      
        api.post('user/view-user',idfriend,header(context.rootState.auth.token))
        .then(response=>{
            context.commit('setBio',response.data.data[0])
            context.commit('setFriend',response.data.data[0])
            context.commit('setProfil',response.data.data[0])
            context.commit('setPengalaman',response.data.data[0])
            context.commit('setPendidikan',response.data.data[0])
            context.commit('setOrganisasi',response.data.data[0])
            context.commit('setBisnis',response.data.data[0])
            resolve('OK')
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function getRandomUserById(context,id){
    return new Promise((resolve,reject)=>{
     
        api.get(`user/random-user/${id}`,header(context.rootState.auth.token))
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}