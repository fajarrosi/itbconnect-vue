import { api } from 'boot/axios'
// type_news('alumni-news','pp-ia','job-vacancies','project-info','beasiswa','etc')
export function getLatestNews(context,type){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get(`user/latest-news/${type}`,config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function getNewsBySlug(context,slug){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get(`user/news/${slug}`,config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function getNewsRandom(context,data){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get(`user/random/${data.slug}/${data.type}`,config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function getNews(context){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.get('user/news',config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

export function getNewsByTitle(context,keyword){
    return new Promise((resolve,reject)=>{
        let config = {
            headers: {
                Authorization : `Bearer ${context.rootState.auth.token}`
            },
        }
        api.post('user/search-news',keyword,config)
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

