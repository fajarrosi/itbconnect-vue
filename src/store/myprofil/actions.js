import { api } from 'boot/axios'
export async function getProfil(context,data){
    return await new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            }
        }
        api.get('user/profile',config)
        .then((response)=>{
            context.commit('setBio',response.data.data)
            context.commit('setProfil',response.data.data)
            context.commit('setPengalaman',response.data.data)
            context.commit('setPendidikan',response.data.data)
            context.commit('setOrganisasi',response.data.data)
            resolve(response,"response dari api")
        })
        .catch(error=>{
            reject(error)
        })
    })
}