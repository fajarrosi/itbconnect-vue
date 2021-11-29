import {date} from 'quasar'

export function setFriend(state,data){
    state.is_friend = data.is_friend
}

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
        prodi: data.univercity[0].program_study,
        tahunmasuk: data.univercity[0].entry_year,
        domisili: doms,
        jabatan : data.experience[0].position,
        perusahaan: data.experience[0].company_name,
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
        id: data.id,
        connect_stat : data.request_friend_status
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