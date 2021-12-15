<template>
    <q-dialog :model-value="dusername" persistent>
        <q-card>
            <q-card-section class="row ">
                <div class="q-mb-md text-edit col-12" style="font-size:17px;">Ganti Username</div>
                <div class="col-4 text-edit">Username Baru </div>
                <div class="col-8 row">
                    <q-input
                        dense
                        outlined
                        v-model="username"
                        placeholder="Username Baru"
                        class="q-mb-sm col-12"
                        bg-color="white"
                        hide-bottom-space
                        :loading="uload"
                        :rules="[ val => val && val.length >= 5 || 'username minimal 5 karakter']"
                        input-class="username"
                    >
                    <template v-slot:append >
                        <q-avatar color="positive" text-color="white" icon="done"  v-if="usuccess"/>
                        <q-icon name="error"  v-if="uerror" class="text-negative"/>
                    </template>
                    </q-input>
                    <span style="font-size:11px;padding-left:10px;" class="col-12 text-positive" v-if="usuccess">Username dapat digunakan</span>
                    <span style="font-size:11px;padding-left:10px;" class="col-12 text-negative" v-if="uerror">Username tidak dapat digunakan</span>
                </div>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Batal" color="primary" no-caps @click="$emit('update:dusername',false)" :disabled="ubtndisabled"/>
                <q-btn flat label="Simpan" :color="usuccess ? 'primary' : 'grey'" no-caps :disabled="udisabled" @click="changeUser" :loading="load2">
                    <template v-slot:loading>
                        <div class="row items-center">
                            <q-spinner-facebook />  
                        </div>
                    </template>
                </q-btn>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
import { useQuasar,debounce } from 'quasar'
import { api } from 'boot/axios'
export default {
    setup(){
        const $q = useQuasar()
        return {
            usuccessNotif () {
                $q.notify({
                message: 'Username berhasil diganti',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failNotif () {
                $q.notify({
                message: 'Username gagal diganti. Silahkan coba lagi',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'dusername'
    ],
    data(){
        return{
            username:'',
            uload:false,
            usuccess:false,
            uerror:false,
            ubtndisabled:false,
            load2:false,
        }
    },
    watch:{
        username(val){
            this.usuccess = false
            this.uerror = false
            if(val.length >= 5){
                this.uload = true
                this.debouncedGetAnswer()
            }else{
                this.usuccess = false
            this.uerror = false
            }
        },
        usuccess(val){
            let x = document.getElementsByClassName('username')
            Array.from(x).forEach(function(n,index){
                let m = n.parentNode.parentNode
                if(val){
                    m.classList.add("text-positive")
                }else{
                    m.classList.remove("text-positive")
                }
            })
        },
        uerror(val){
            let x = document.getElementsByClassName('username')
            Array.from(x).forEach(function(n,index){
                let m = n.parentNode.parentNode
                if(val){
                    m.classList.add("text-negative")
                }else{
                    m.classList.remove("text-negative")
                }
            })
        }
    },
    created(){
        this.debouncedGetAnswer = debounce(this.getAnswer, 1000)
    },  
    computed:{
        udisabled(){
            if(this.usuccess){
                if (this.ubtndisabled){
                    return true
                }
                return false
            }
            return true
        }
    },
    methods:{
        getAnswer(){
            api.post('auth/check-username',{
                username:this.username
            })
            .then(response=>{
                this.uload = false
                this.usuccess = true
            })
            .catch(error=>{
                console.log('err',error)
                this.uload = false
                this.uerror = true
            })
        },
        changeUser(){
            this.load2 = true
            this.ubtndisabled = true
            this.$store.dispatch('changeUsername',{
                username : this.username
            })
            .then(()=>{
                this.load2 = false
                this.ubtndisabled = false
                this.usuccessNotif()
                this.$emit('update:dusername',false)
                // this.dusername = false
                this.username = ''
                // console.log("resp",response)
            })
            .catch(error=>{
                this.load2 = false
                this.ubtndisabled = false
                console.log("err",error)
                this.failNotif()
            })
        },
    },
    mounted(){
        this.username = ''
    }
}
</script>

<style scoped>
.q-card{
    max-width: 418px;
    border-radius:10px;
}
</style>