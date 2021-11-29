<template>
    <q-dialog :model-value="dinvite" @click="$emit('update:dinvite', $event.target.value)" @hide="$emit('update:dinvite',false)">
        <q-card class="dinvite">
            <q-card-section>
                <div class="row justify-center">
                    <div class="text-17 text-primary text-center text-bold col-12" style="margin-bottom:-20px;">Undang Teman</div>
                    <img src="~assets/invite-friend.png" alt="undang-teman-ilustrasi">
                    <div class="text-15 text-bold col-12 text-center" style="color:#1987BF;margin-top:-30px;">Masukkan alamat email teman anda</div>
                    <q-input
                    dense
                    outlined
                    v-model="email"
                    placeholder="Alamat Email"
                    class="q-mb-sm col-10 q-mt-sm"
                    bg-color="white"
                    hide-bottom-space
                    lazy-rules
                    :rules="[
                    val => val && val.length > 0 || 'Email tidak boleh kosong', val => validEmail(val)
                    ]"
                    />
                    <q-btn :color="valid ? 'primary' : 'grey'" label="Kirim Undangan" no-caps class="col-7 btn-radius q-my-md" :loading="load"
                :disabled="disabled" @click="onSubmit">
                        <template v-slot:loading>
                            <q-spinner-facebook />
                        </template>
                    </q-btn>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
import { useQuasar } from 'quasar'
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
        }
    },
    props:[
        'dinvite'
    ],
    data(){
        return{
            email:'',
            load:false,
            btndisabled:false,
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
            if(this.valid){
                if (this.btndisabled){
                    return true
                }
                return false
            }
            return true
        }
    },
    mounted(){
        this.email = ''
    },
    methods:{
        onSubmit(){
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
        },
        validEmail(val){
            if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true;
            }else{
                return 'Email tidak valid';
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