import { api } from 'boot/axios'
// import router from '../../router'
// export const getProfile = async({commit}) => {
//     return await api.get('user/profile')
//             .then(res =>{
//                 console.log("action profile response", res.data)
//             })
//             .catch(err => {
//                 if(err.response.status === 401){
//                     localStorage.removeItem('token')
//                     console.log("statusnya 401",err.response.status)
//                 }
//                 console.log("errr",err)
//             })
// }

export const getBio = async({commit}) => {
    return await api.get('user/profile')
    .then(res =>{
        commit('setBio',{
            photo_profile : res.data.profile.photo_profile,
            header_profile : res.data.profile.header_profile,
            facebook_url : res.data.profile.facebook_url,
            instagram_url : res.data.profile.instagram_url,
            twitter_url : res.data.profile.twitter_url,
            linkedin_url : res.data.profile.linkedin_url,
        })
        // Catatan yang kurang jurusan , tahun keluar/masuk, experience terakhir,tempat lahir, jumlah konek,bio
    })
    .catch(err => {
        console.log("error",err)
    })
}
/* export const getBio = async({commit, rootState }) => {
//     return await api.get('user/profile',{
        'Authorization' : `Bearer ${rootState.auth.token}`
// })
//     .then(res =>{
//         commit('setBio',{
//             photo_profile : res.data.profile.photo_profile,
//             header_profile : res.data.profile.header_profile,
//             facebook_url : res.data.profile.facebook_url,
//             instagram_url : res.data.profile.instagram_url,
//             twitter_url : res.data.profile.twitter_url,
//             linkedin_url : res.data.profile.linkedin_url,
//         })
//         // Catatan yang kurang jurusan , tahun keluar/masuk, experience terakhir,tempat lahir, jumlah konek,bio
//     })
//     .catch(err => {
//         console.log("error",err)
//     })
 }
*/

export const getProfile = async({commit})=>{
    return await api.get('user/profile')
    .then(res=>{
        commit('setProfile',{
            namalengkap: res.data.complete_name,
            jns_kel: res.data.gender,
            goldar: res.data.blood,
            status: res.data.marriage,
            agama: res.data.religion_id,
            kewarganegaraan: res.data.citizenship,
            alamat:res.data.nim,
            email: res.data.email,
            nowa:res.data.telephone
        })
    })
    .catch(err => {
        console.log("error",err)
    })
}

export const getPengalaman = async({commit}) => {
    return await api.get('user/experience')
    .then(res=>{
        commit('setPengalaman',{
            perusahaan: res.data.experience.company_name,
            lokasi: res.data.experience.location,
            tahunmasuk: res.data.experience.starting_year,
            tahunkeluar: res.data.experience.end_year,
            posisi: res.data.experience.position
        })
    })
    .catch(err=>{
        console.log("error",err)
    })
}

export const getPendidikan = async({commit}) => {
    return await api.get('user/experience')
    .then(res=>{
        commit('setPendidikan',{
            universitas:'',
            jurusan:'',
            tahunmasuk:'',
            tahunkeluar:'',
        })
    })
    .catch(err=>{
        console.log("error",err)
    })
}

export const getOrganisasi = async({commit}) => {
    return await api.get('user/experience')
    .then(res=>{
        commit('setOrganisasi',{
            organisasi:'',
        })
    })
    .catch(err=>{
        console.log("error",err)
    })
}

export const getBisnis = async({commit}) => {
    return await api.get('user/experience')
    .then(res=>{
        commit('setBisnis',{
            logo:'',

        })
    })
    .catch(err=>{
        console.log("error",err)
    })
}
