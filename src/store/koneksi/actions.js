import { api,header } from 'boot/axios'
export function getConnectRequest(context){
    return new Promise((resolve,reject)=>{
       
        api.get('connect/pending',header(context.rootState.auth.token))
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
       
        api.post('connect/confirm',idfriend, header(context.rootState.auth.token))
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
        
        api.post('connect/reject',idfriend, header(context.rootState.auth.token))
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
        
        api.get('connect/myconnect', header(context.rootState.auth.token))
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
        
        api.post('connect/delete',idfriend, header(context.rootState.auth.token))
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
        
        api.post('user/invite',idfriend, header(context.rootState.auth.token))
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
       
        api.post('user/search-spesific',payload, header(context.rootState.auth.token))
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}


