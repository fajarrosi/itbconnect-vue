// export function alumniRegis(state,data){
//     state.alumnireg= data
// }
// export function setUser(state, user){
//     state.users.push(user)
// }
// export function actUser(state,data){
//     state.useractive = data.user
//     state.token = data.token
// }
// export function actUsers(state,user){
//     state.useractive = user
//     // state.token = data.token
// }
// export function Logout(state){
//     state.useractive = {}
// }

export function setUser(state,data){
    state.token = data.token
    state.user = data.user
}

export function setAlumni(state,data){
    state.alumni = data
}

export function delAlumni(state){
    state.alumni = ''
}
