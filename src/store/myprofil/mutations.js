import {date} from 'quasar'

export function setBio(state,data){
    let result = date.formatDate(data.created_at,'MMMM YYYY',{
        months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober','November','Desember'] 
    })
    let doms = ''
    if (data.address.country_id === 78){
        doms = data.address.province.name
    }else{
        doms = data.address.country.country_name
    }
    state.databio = {
        name: data.complete_name,
        prodi: data.univercity[data.univercity.length - 1 ].program_study,
        tahunmasuk: data.univercity[data.univercity.length - 1 ].entry_year,
        domisili: doms,
        jabatan : data.experience[data.experience.length -1].position,
        perusahaan: data.experience[data.experience.length -1].company_name,
        created : result,
        bio :data.description,
        photoprofil : data.profile.photo_profile,
        headerprofil : data.profile.header_profile,
        fb: data.profile.facebook_url,
        ig: data.profile.instagram_url,
        twit: data.profile.twitter_url,
        linkedin : data.profile.linkedin_url,
        friend : data.total_connect,
        userid : data.id
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
        domisili:data.address.address,
        prov:data.address.province_id,
        city:data.address.cities_id,
        nim: data.nim,
        pob:data.pob,
        dob: data.dob,
        userid: data.id
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
    state.datapengda = data.user_organization
}

export function setBisnis(state,data){
    state.databisnis = data.business
}

export function delProfil(state){
    state.databio = {}
}

export function setOrganization(state,data){
    state.organization = data
}

export function setPengda(state,data){
    state.pengda = data
}

export function setIaprodi(state,data){
    state.iaprodi = data
}

export function setJenjang(state,data){
    state.jenjang = data
}

export function setProdi(state,data){
    state.prodi = data
}

export function setNegara(state,data){
    state.negara = data
}
export function setProv(state,data){
    state.prov = data
}
export function setAgama(state,data){
    state.agama = data
}
export function setBisnisfield(state,data){
    state.bisnisfield = data
}