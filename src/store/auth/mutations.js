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

export function updateEmailVerified(state,data){
    state.user.email_verified_at = data
}

export function delUser(state){
    state.user = ''
    state.token = ''
}

export function updateUsername(state,data){
    state.user.username = data
}