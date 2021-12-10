import { api } from 'boot/axios'
export function getConnectRequest(context){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get('connect/pending',config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function AcceptConnection(context,idfriend){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('connect/confirm',idfriend, config)
        .then(response=>{
            context.commit('myprofil/updateFriend', response.data.data.myfriend.total_connect, {root: true})
            context.dispatch('MyConnection')
            .then(()=>{
                resolve("OK")
            })
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function RejectConnection(context,idfriend){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('connect/reject',idfriend, config)
        .then(()=>{
            resolve("OK")
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function MyConnection(context){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get('connect/myconnect', config)
        .then(response=>{
            context.commit('setMyConnection',response.data.data)
            resolve("OK")
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function deleteMyConnection(context){
    context.commit('deleteMyConnection')
}

export function DeleteConnection(context,idfriend){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('connect/delete',idfriend, config)
        .then(response=>{
            context.commit('myprofil/updateFriend', response.data.data.total_connect, {root: true})
            context.dispatch('MyConnection')
            .then(()=>{
                resolve("OK")
            })
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function InviteFriend(context,idfriend){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('user/invite',idfriend, config)
        .then(()=>{
            resolve("OK")
        })
        .catch(error=>{
            reject(error)
        })
    })
}
export function searchConnect(context,payload){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('user/search-spesific',payload, config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}


