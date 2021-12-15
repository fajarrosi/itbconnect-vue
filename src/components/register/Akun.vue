<template>
    <div >
        <div class="text-h5 text-bold text-primary">USER LOGIN</div>
        <div class="text-subtitle2 q-mt-md text-justify">
        Buat username dan password Anda
        </div>
        <hr class="line-cards q-my-md">
        <q-form @submit.prevent.stop="onSave" ref="dform" class="q-gutter-md q-mt-sm">
        <q-input
        outlined
        dense
        v-model="dusername"
        label="Username"
        lazy-rules
        :rules="[
        val => val && val.length >= 5 || 'Username minimal 5 karakter'
        ]"
        bg-color="white"
        :loading="load"
        :disable="userdisable"
        bottom-slots
        hide-bottom-space
        class="q-mb-sm"
        input-class="username"
        >
            <template v-slot:append >
                <q-avatar color="positive" text-color="white" icon="done"  v-if="success"/>
                <q-icon name="error"  v-if="error" class="text-negative"/>
            </template>
        </q-input>
        <span class="text-positive " style="font-size:11px;padding-left:10px;" v-if="success">Username dapat digunakan</span>
        <span class="text-negative " style="font-size:11px;padding-left:10px;" v-if="error">Username tidak dapat digunakan</span>
        <q-input outlined bottom-slots  :modelValue="password"
        @update:modelValue="event => $emit('update:password', event)" :type="visibility ? 'password' : 'text' " placeholder="Password (8 - 12) karakter" 
        lazy-rules
        maxlength="25"
        label="Password"
        dense
        :rules="[val => val.length >= 8 || 'Password minimal 8 karakter']"
        class="q-my-sm"
        bg-color="white"
        hide-bottom-space
        >
            <template v-slot:append>
                <q-icon :name="visibility ? 'visibility' : 'visibility_off' " @click="visibility = !visibility" class="cursor-pointer"/>
            </template>
        </q-input>
        <q-input outlined bottom-slots  :modelValue="konfirmasi" placeholder="Input Ulang Password"
        @update:modelValue="event => $emit('update:konfirmasi', event)" :type="visibility2 ? 'password' : 'text' " label="Konfirmasi Password" 
        lazy-rules
        maxlength="25"
        dense
        :rules="[ val => val && val.length >= 8 || 'konfirmasi password minimal 8 karakter', val => konfirmasipw(val)]"
        bg-color="white"
        hide-bottom-space
        >
            <template v-slot:append>
            <q-icon :name="visibility2 ? 'visibility' : 'visibility_off' " @click="visibility2 = !visibility2"/>
            </template>
        </q-input>
        <div class="col-12 row q-mt-md" style="margin-bottom:-20px;">
                <q-btn outline label="Sebelumnya" @click="$emit('update:step',2)" class="col q-mr-md btn-radius" style=" color:#707070;"
                        size="12px" 
                        no-caps/>
                <q-btn color="primary" label="Berikutnya" type="submit" class="col btn-radius"
                size="12px" 
                        no-caps
                />
            </div>
        </q-form>
    </div>
</template>

<script>
import { api } from 'boot/axios'
import { debounce,useQuasar } from 'quasar'
export default {
    setup(){
        const $q = useQuasar()
        return {
            failNotif () {
                $q.notify({
                message: 'tunggu waktu validasi username sampai selesai atau username tidak dapat digunakan',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'username',
        'password',
        'konfirmasi',
        'usuccess',
        'step'
    ],
    data(){
        return{
            visibility: true,
            visibility2: true,
            validuser:false,
            error:false,
            load:false,
            success:false,
            dusername:'',
        }
    },
    created(){
        this.debouncedGetAnswer = debounce(this.getAnswer, 1000)
        if(this.username){
            this.dusername = this.username
        }
    },
    watch:{
        dusername(val){
            this.error = false
            this.success = false
            if(val.length >=5){
                this.load =true
                this.debouncedGetAnswer()
            }else{
                this.error = false
                this.success = false
            }
        },
        success(val){
            let x = document.getElementsByClassName('username')
            Array.from(x).forEach(function(n,index){
                let m = n.parentNode.parentNode
                if(val){
                    m.classList.add("text-positive")
                    

                }else{
                    m.classList.remove("text-positive")
                    
                }
            })
            if(val){
                this.$emit('update:usuccess',true)
            }else{
                this.$emit('update:usuccess',false)
            }
        },
        error(val){
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
    methods:{
        getAnswer(){
            api.post('auth/check-username',{
                username:this.dusername
            })
            .then(()=>{
                this.load = false
                this.success = true
                this.$emit('update:username',this.dusername)
            })
            .catch(error=>{
                console.log('err',error)
                this.load = false
                this.error = true
                this.$emit('update:username',this.dusername)
            })
        },
        konfirmasipw(val){
            if(val === this.password){
                return true;
            }else{
                return 'Password tidak sama';
            }
        },
        validUsername(val){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                api.post('auth/check-username',{
                username:val
                })
                .then(() => {
                resolve(true)
                this.error = true
                this.validuser = true
                })
                .catch(() => {
                resolve('Username telah dipakai. Silahkan coba lagi.')
                this.validuser = false
                })
            }, 1000)
        })
        },
        onSave(){
            this.$refs.dform.validate()
            .then(valid=>{
                if(valid){
                    if(this.success){
                        this.$emit('update:username',this.dusername)
                            this.$emit('update:step',4)
                    }else{
                        this.failNotif()
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
.q-btn--outline::before{
  border: 2px solid currentColor;
}
</style>