<template>
    <q-dialog :model-value="dinvite" @click="$emit('update:dinvite', $event.target.value)" @hide="$emit('update:dinvite',false)">
        <q-card class="dinvite">
            <q-card-section>
                <div class="row justify-center">
                    <div class="text-17 text-primary text-center text-bold col-12" style="margin-bottom:-20px;">Undang Teman</div>
                    <img src="~assets/invite-friend.png" alt="undang-teman-ilustrasi">
                    <div class="text-15 text-bold col-12 text-center" style="color:#1987BF;margin-top:-30px;">Masukkan alamat email teman anda</div>
                <q-form @submit.prevent.stop="onSubmit" ref="dform" class="q-gutter-md col-12 row justify-center">
                    <div class="col-10 row justify-center">
                        <q-input
                        dense
                        outlined
                        v-model="email"
                        placeholder="Alamat Email"
                        class="q-mb-sm col-12 q-mt-sm"
                        bg-color="white"
                        hide-bottom-space
                        lazy-rules
                        :loading="eload"
                        :rules="[
                        val => val && val.length > 0 || 'Email tidak boleh kosong', val => validEmail(val)
                        ]"
                        input-class="email"
                        >
                        <template v-slot:append>
                            <q-avatar color="positive" text-color="white" icon="done"  v-if="esuccess"/>
                            <q-icon name="error"  v-if="error" class="text-negative"/>
                        </template>
                        </q-input>
                        <span style="font-size:11px;padding-left:10px;" class="col-12 text-positive" v-if="esuccess">Email dapat dikirim undangan</span>
                        <span style="font-size:11px;padding-left:10px;" class="col-12 text-negative" v-if="error">Email sudah terdaftar</span>
                    </div>
                    <q-btn color="primary" label="Kirim Undangan" no-caps class="col-7 btn-radius q-my-md" :loading="load"
                :disabled="btndisabled" type="submit">
                        <template v-slot:loading>
                            <q-spinner-facebook />
                        </template>
                    </q-btn>
                </q-form>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
import { debounce,useQuasar } from 'quasar'
import { api } from 'boot/axios'
export default {
    setup(){
        const $q = useQuasar()
        return {
            showNotif () {
                $q.notify({
                message: 'Invitation Berhasil Dikirim',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failNotif () {
                $q.notify({
                message: 'tunggu waktu validasi email sampai selesai atau email sudah terdaftar',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'dinvite'
    ],
    watch:{
        email(val){
            this.esuccess = false
            this.error = false
            if(val !== null && val !== ''){
                if(this.valid){
                    this.eload = true
                    this.debouncedGetAnswer()
                }else{
                    this.eload = false
                }
            }
        },
        esuccess(val){
            let x = document.getElementsByClassName('email')
            Array.from(x).forEach(function(n,index){
                let m = n.parentNode.parentNode
                if(val){
                    m.classList.add("text-positive")
                    
                }else{
                    m.classList.remove("text-positive")
                }
            })
        },
        error(val){
            let x = document.getElementsByClassName('email')
            Array.from(x).forEach(function(n,index){
                let m = n.parentNode.parentNode
                if(val){
                    m.classList.add("text-negative")
                    
                }else{
                    m.classList.remove("text-negative")
                }
            })
        },
    },
    data(){
        return{
            email:'',
            load:false,
            btndisabled:false,
            eload:false,
            esuccess:false,
            error:false
        }
    },
    computed:{
        valid(){
            if(this.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true
            }
            return false
        },
        disabled(){
            if(this.valid && !this.error){
                if (this.btndisabled){
                    return true
                }
                return false
            }
            return true
        }
    },
    created(){
        this.debouncedGetAnswer = debounce(this.getAnswer, 1000)
    },
    mounted(){
        this.email = ''
    },
    methods:{
        onSubmit(){
            if(this.esuccess){
                this.$refs.dform.validate()
                .then(valid=>{
                    if(valid){
                        this.load = true
                        this.btndisabled = true
                        this.$store.dispatch('koneksi/InviteFriend',{
                            email : this.email,
                            description: 'Silahkan Mendaftar Melalui Link yang Ada di Bawah'
                        })
                        .then(()=>{
                            this.load = false
                            this.btndisabled = false
                            this.showNotif()
                            this.$emit('update:dinvite',false)
                        })
                        .catch(error=>{
                            console.log("error",error)
                        })
                    }
                })
            }else{
                this.failNotif()
            }
        },
        validEmail(val){
            if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true;
            }else{
                return 'Email tidak valid';
            }
        },
        getAnswer(){
            if(this.valid && this.email !== null && this.email !== ''){
                    api.post('auth/checkEmailExist',{
                    email : this.email
                    })
                    .then(()=>{
                        this.esuccess = true
                        this.eload = false
                    })
                    .catch(()=>{
                        this.eload = false
                        this.error = true
                    })
            }else{
                this.eload = false
            }
        },
        existEmail(){
            if(!this.error){
                return true
            }else{
                return 'Email tidak dapat digunakan karena email sudah terdaftar'
            }
        },
    }
}
</script>

<style>
.dinvite.q-card{
    width: 418px;
    border-radius:10px;
}
</style>