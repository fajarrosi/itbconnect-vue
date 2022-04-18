import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
    // app.config.globalProperties.header = 'http://127.0.0.1:8000/header/'
    // app.config.globalProperties.profil = 'http://127.0.0.1:8000/profile/'
    // app.config.globalProperties.bisnislogo = 'http://127.0.0.1:8000/business_logo/'
    // app.config.globalProperties.produkimg = 'http://127.0.0.1:8000/product_image/'
    // app.config.globalProperties.newsimg = 'http://127.0.0.1:8000/image_news/'
    // app.config.globalProperties.caraouselimg = 'http://127.0.0.1:8000/list_caraousel/'
    
    app.config.globalProperties.header = process.env.headerUrl
    app.config.globalProperties.profil = process.env.profileUrl
    app.config.globalProperties.bisnislogo = process.env.bisnislogoUrl
    app.config.globalProperties.produkimg = process.env.produkimgUrl
    app.config.globalProperties.newsimg = process.env.newsimgUrl
    app.config.globalProperties.caraouselimg = process.env.caraouselimgUrl
    
})