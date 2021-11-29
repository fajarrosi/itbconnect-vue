import { api } from 'boot/axios'
export function getAllUser(context){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get('user/user-all',config)
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
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get('user/location-user',config)
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
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('connect/add',idfriend,config)
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
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('user/view-user',idfriend,config)
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
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get(`user/random-user/${id}`,config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}