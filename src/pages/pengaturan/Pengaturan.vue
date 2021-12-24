<template>
    <q-page padding class="bg-white">
        <div class="text-primary text-h6 q-pl-md">Akun</div>
        <q-separator inset/>
        <q-btn color="black" label="Ganti Username" flat no-caps @click="dusername = true"/> <br> 
        <q-btn color="black" label="Ganti Password" flat no-caps @click="dpassword = true"/> <br>

        <div class="text-primary text-h6 q-pl-md q-mt-sm">Privasi</div>
        <q-separator inset/>
        <q-btn color="black" label="Setelan Info Pribadi" flat no-caps @click="onPrivacy"/> <br>
        
        <change-pass v-model:dpassword="dpassword" v-if="dpassword"/>
        <change-username v-model:dusername="dusername" v-if="dusername" />
        <change-privacy v-model:dprivacy="dprivacy" v-if="dprivacy" :dataPrivacy="dataPrivacy"/>
    </q-page>
</template>

<script>
import { api } from 'boot/axios'
export default {
    components:{
        'change-pass' : require('./ChangePass.vue').default,
        'change-username' : require('./ChangeUsername.vue').default,
        'change-privacy' : require('./ChangePrivacy.vue').default
    },
    data(){
        return{
            dpassword:false,
            dusername:false,
            dprivacy:false,
            dataPrivacy:''
        }
    },
    methods:{
        onPrivacy(){
            let config = {
                headers: {
                    Authorization : `Bearer ${this.$store.state.auth.token}`
                },
            }
            let idUser = {
                id_user: this.$store.state.auth.user.id
            }
            api.post('user/myprivacy',idUser,config)
            .then(response=>{
                this.dataPrivacy = response.data.data
                this.dprivacy = true
            })
            .catch(error=>{
                console.log("error",error)
            })
        }
    }
}
</script>

<style scoped>
.q-card{
    width: 418px;
    border-radius:10px;
}
</style>