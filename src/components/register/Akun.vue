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
        lazy-rules
        :rules="[
        validUsername, val => val && val.length > 0 || 'Username tidak boleh kosong'
        ]"
        class="q-mb-sm"
        bg-color="white"
        hide-bottom-space
        />
        <q-input outlined bottom-slots  :modelValue="password"
        @update:modelValue="event => $emit('update:password', event)" :type="visibility ? 'password' : 'text' " label="Password" 
        lazy-rules
        dense
        :rules="[val => val.length >= 6 || 'Password minimal 6 karakter']"
        class="q-mb-sm"
        bg-color="white"
        hide-bottom-space
        >
            <template v-slot:append>
                <q-icon :name="visibility ? 'visibility' : 'visibility_off' " @click="visibility = !visibility" class="cursor-pointer"/>
            </template>
        </q-input>
        <q-input outlined bottom-slots  :modelValue="konfirmasi"
        @update:modelValue="event => $emit('update:konfirmasi', event)" :type="visibility2 ? 'password' : 'text' " label="Konfirmasi Password" 
        lazy-rules
        dense
        :rules="[ val => val && val.length >= 6 || 'konfirmasi password minimal 6 karakter', val => konfirmasipw(val)]"
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
        'konfirmasi'
    ],
    data(){
        return{
            visibility: true,
            visibility2: true,
            validuser:false
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
                resolve('username sudah ada')
                this.validuser = false
                })
                .catch(() => {
                resolve(true)
                this.validuser = true
                })
            }, 1000)
        })
        }
    }
}
</script>

<style>

</style>