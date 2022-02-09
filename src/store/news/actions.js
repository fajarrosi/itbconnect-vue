import { api,header } from 'boot/axios'
// type_news('alumni-news','pp-ia','job-vacancies','project-info','beasiswa','etc')
export function getLatestNews(context,type){
    return new Promise((resolve,reject)=>{
        
        api.get(`user/latest-news/${type}`,header(context.rootState.auth.token))
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
        
        api.get(`user/news/${slug}`,header(context.rootState.auth.token))
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
       
        api.get(`user/random/${data.slug}/${data.type}`,header(context.rootState.auth.token))
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
       
        api.get('user/news',header(context.rootState.auth.token))
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
        
        api.post('user/search-news',keyword,header(context.rootState.auth.token))
        .then(response=>{
            resolve(response.data.data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

