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

export async function getProfile(){
    return await api.get('user/profile')
}