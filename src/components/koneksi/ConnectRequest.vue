<template>
    <div class="connect-request">
                
                <div class="row q-mt-sm items-center cursor-pointer q-hoverable relative-position" v-ripple v-for="(req,index) in request" :key="index" @click="movePage(req)">
                    <span class="q-focus-helper"></span>
                    <div class="col-2 text-center">
                        <q-avatar size="60px">
                            <img :src="profilimage(req) ? profilimage(req) : require('assets/akun23.png')" >
                        </q-avatar>
                    </div>
                    <div class="col-7 q-pl-sm row">
                        <div class="col-12 ellipsis-2-lines">{{req.name}} - Jurusan {{req.prodi}}</div>
                        <div class="text-primary text-13 col-12 ellipsis">{{req.posisi}} {{req.perusahaan}}</div>
                    </div>
                    <div class="col-3 q-pl-sm">
                            <q-btn class="bg-white btnclose q-mr-sm" icon="close" round size="sm" @click.stop="reject(index)" :disabled="btndisabled"/>
                            <q-btn color="primary" icon="done" round size="sm" class="btncek" @click.stop="accept(index)" :disabled="btndisabled"/>
            
                    </div>
                </div>
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
export default {
    setup(){
        const $q = useQuasar()
        return {
            showNotif () {
                $q.notify({
                message: 'Permintaan Berhasil Diterima',
                type: 'positive',
                position: 'bottom',
                progress: true
                })
            },
            failNotif(){
                $q.notify({
                message: 'Permintaan Berhasil Ditolak. ',
                type: 'positive',
                position: 'bottom',
                progress: true
                })
            }
        }
    },
    computed:{
        profilimage(){
            return val=> val.photo_profile ? this.profil + val.photo_profile : ''
        }
    },
    props:[
        'datarequest'
    ],
    data(){
        return{
            request:[],
            valid:false,
            btndisabled:false
        }
    },
    created(){
        // this.getRequest()
        if(this.datarequest.length > 0){
                    this.datarequest.forEach(el=>{
                        this.request.push({
                            acc: false,
                            // requestvalid:true,
                            name : el.complete_name,
                            prodi : el.univercity[0].program_study,
                            posisi : el.experience[0].position,
                            perusahaan : el.experience[0].company_name,
                            photo_profile : el.profile.photo_profile,
                            id: el.id
                        })
                    })
        }else if (this.datarequest.length > 3){
            let res = this.datarequest.slice(0,2)
            res.forEach(el=>{
                this.request.push({
                    acc: false,
                    // requestvalid:true,
                    name : el.complete_name,
                    prodi : el.univercity[0].program_study,
                    posisi : el.experience[0].position,
                    perusahaan : el.experience[0].company_name,
                    photo_profile : el.profile.photo_profile,
                    id: el.id
                })
            })
        }
    },
    methods:{
        getRequest(){
            this.$store.dispatch('koneksi/getConnectRequest')
            .then(response=>{
                if(response.length > 0){
                    response.forEach(el=>{
                        this.request.push({
                            acc: false,
                            // requestvalid:true,
                            name : el.complete_name,
                            prodi : el.univercity[0].program_study,
                            posisi : el.experience[0].position,
                            perusahaan : el.experience[0].company_name,
                            photo_profile : el.profile.photo_profile,
                            id: el.id
                        })
                    })
                    // this.request = response

                }else if (response.length > 3){
                    let res = response.slice(0,2)
                    res.forEach(el=>{
                        this.request.push({
                            acc: false,
                            // requestvalid:true,
                            name : el.complete_name,
                            prodi : el.univercity[0].program_study,
                            posisi : el.experience[0].position,
                            perusahaan : el.experience[0].company_name,
                            photo_profile : el.profile.photo_profile,
                            id: el.id
                        })
                    })
                }
                this.valid = true
            })
            .catch(error=>{
                console.log("error",error)
                this.valid = true
            })
        },
        accept(index){
            // this.request[index].acc = true
            this.btndisabled = true
            this.$store.dispatch('koneksi/AcceptConnection',{
                friend_id : this.request[index].id
            })
            .then(()=>{
                this.showNotif()
                this.request.splice(index,1)
                this.btndisabled = false
                this.$emit('update:datarequest',this.request)
                // this.request[index].requestvalid = false
                // this.request[index].acc = true
            })
            .catch(error=>{
                console.log("error",error)
            })
        },
        reject(index){
            // this.request[index].acc = true
            this.btndisabled = true
            this.$store.dispatch('koneksi/RejectConnection',{
                friend_id : this.request[index].id
            })
            .then(()=>{
                this.failNotif()
                this.request.splice(index,1)
                this.btndisabled = false
                this.$emit('update:datarequest',this.request)
            })
            .catch(error=>{
                console.log("error",error)
            })
        },
        movePage(req){
            // console.log("movepage")
            this.$router.push(`/detail-user/${req.id}?request=true`)
        }
    }
}
</script>

<style>

</style>