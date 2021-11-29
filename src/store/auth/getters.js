export function isAuthenticated(state){
    return !!state.user
}

export function isVerifiedemail(state){
    return !!state.user.email_verified_at
}

export function isVerifieduser(state){
    return state.user.is_verified
}
