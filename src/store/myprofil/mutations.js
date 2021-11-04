import {date} from 'quasar'

export function setBio(state,data){
    let result = date.formatDate(data.created_at,'MMMM YYYY',{
        months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober','November','Desember'] 
    })
    state.databio = {
        name: data.complete_name,
        prodi: data.univercity[data.univercity.length - 1 ].program_study,
        tahunmasuk: data.univercity[data.univercity.length - 1 ].entry_year,
        domisili: data.address.province.name,
        jabatan : data.experience[data.experience.length -1].position,
        perusahaan: data.experience[data.experience.length -1].company_name,
        created : result,
        bio :data.description
    }
}

export function setProfil(state,data){
    state.dataprofil = {
        nick : data.nickname,
        gender : data.gender,
        blood: data.blood,
        status: data.marriage,
        religion: data.religion.name,
        citizenship : data.citizenship,
        email:data.email,
        telephone: data.telephone,
        negara: data.address.country_id,
        domisili:data.address.address
    }
}

export function setPengalaman(state,data){
    state.datapengalaman = data.experience
}

export function setPendidikan(state,data){
    state.datapendidikan = data.univercity
}

export function setOrganisasi(state,data){
    state.dataorganisasi = data.interest
}