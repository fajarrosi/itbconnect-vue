<template>
    <div>
        <div class="text-h5 text-bold text-primary">USER LOGIN</div>
        <div class="text-subtitle2 q-mt-md text-justify">
        Buat username dan password Anda
        </div>
        <hr class="line-cards q-my-md">
        <q-input
        outlined
        dense
        :modelValue="username"
        @update:modelValue="event => $emit('update:username', event)"
        label="Username"
        debounce="1000"
        lazy-rules
        :rules="[
        val => val && val.length > 0 || 'Username tidak boleh kosong', validUsername
        ]"
        :class="error ? 'q-mb-none': 'q-mb-sm'"
        bg-color="white"
        bottom-slots
        hide-bottom-space
        >
            <template v-slot:append v-if="error">
                <q-avatar color="green" text-color="white" icon="done" />
            </template>
        </q-input>
        <span style="color:green;font-size:11px;padding-left:10px;" v-if="error">Username dapat digunakan</span>
        <q-input outlined bottom-slots  :modelValue="password"
        @update:modelValue="event => $emit('update:password', event)" :type="visibility ? 'password' : 'text' " placeholder="Password (8 - 12) karakter" 
        lazy-rules
        maxlength="12"
        label="Password"
        dense
        :rules="[val => val.length >= 8 || 'Password minimal 8 karakter']"
        class="q-mb-sm"
        :class="error ? 'q-mt-sm' : ''"
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
        maxlength="12"
        dense
        :rules="[ val => val && val.length >= 8 || 'konfirmasi password minimal 8 karakter', val => konfirmasipw(val)]"
        bg-color="white"
        hide-bottom-space
        >
            <template v-slot:append>
            <q-icon :name="visibility2 ? 'visibility' : 'visibility_off' " @click="visibility2 = !visibility2"/>
            </template>
        </q-input>
    </div>
</template>

<script>
import { api } from 'boot/axios'
export default {
    props:[
        'username',
        'password',
        'konfirmasi',
        'usuccess'
    ],
    data(){
        return{
            visibility: true,
            visibility2: true,
            validuser:false,
            error:false
        }
    },
    methods:{
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
        }
    }
}
</script>

<style>

</style>