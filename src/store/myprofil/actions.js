import { api } from 'boot/axios'
export function getProfil(context){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get('user/profile',config)
        .then((response)=>{
            context.commit('setBio',response.data.data)
            context.commit('setProfil',response.data.data)
            context.commit('setPengalaman',response.data.data)
            context.commit('setPendidikan',response.data.data)
            context.commit('setOrganisasi',response.data.data)
            resolve(response.data.data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

export function logout(context){
    context.commit('delProfil')
}
