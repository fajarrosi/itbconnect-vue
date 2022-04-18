import { api,header } from 'boot/axios'
import { useStore } from 'vuex'
import { useQuasar,date } from 'quasar'
export const useConnect = () =>{
    const store = useStore()
    let token = store.state.auth.token
    const getData = (url) => {
        return api.get(url,header(token))
    }

    const quasar = useQuasar()
    const successNotif = msg => {
        return quasar.notify({
            message: msg,
            type: 'positive',
            position: 'top',
            progress: true
        })
    }
    const errorNotif = msg => {
        quasar.notify({
            message: msg,
            type: 'positive',
            position: 'top',
            progress: true
        })
    }

    const GeneralFormatDate = (tgl,format) => {
        return date.formatDate(tgl,format,{
            months: ['Januari', 'Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
            monthsShort: ['Jan', 'Feb', 'Mar','Apr','Mei','Jun','Jul','Agus','Sept','Okt','Nov','Des'],
        })
    }
    return {
        getData,
        successNotif,
        errorNotif,
        GeneralFormatDate
    }
}