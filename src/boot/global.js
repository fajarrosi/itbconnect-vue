import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
    // app.config.globalProperties.header = 'http://127.0.0.1:8000/header/'
    // app.config.globalProperties.profil = 'http://127.0.0.1:8000/profile/'
    // app.config.globalProperties.bisnislogo = 'http://127.0.0.1:8000/business_logo/'
    // app.config.globalProperties.produkimg = 'http://127.0.0.1:8000/product_image/'
    // app.config.globalProperties.newsimg = 'http://127.0.0.1:8000/image_news/'
    // app.config.globalProperties.caraouselimg = 'http://127.0.0.1:8000/list_caraousel/'
    
    app.config.globalProperties.header = 'https://be.itbconnect.org/header/'
    app.config.globalProperties.profil = 'https://be.itbconnect.org/profile/'
    app.config.globalProperties.bisnislogo = 'https://be.itbconnect.org/business_logo/'
    app.config.globalProperties.produkimg = 'https://be.itbconnect.org/product_image/'
    app.config.globalProperties.newsimg = 'https://be.itbconnect.org/image_news/'
    app.config.globalProperties.caraouselimg = 'https://be.itbconnect.org/list_caraousel/'
    
})