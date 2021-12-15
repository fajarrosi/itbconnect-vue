<template>
    <q-dialog :model-value="dpassword" persistent>
        <q-card>
            <q-card-section class="row ">
                <div class="q-mb-md text-edit col-12" style="font-size:17px;">Ganti Password</div>
                <div class="col-4 text-edit">Password Lama </div>
                <div class="row col-8">
                    <q-input
                        dense
                        outlined
                        v-model="oldpw"
                        placeholder="Password lama"
                        class="q-mb-sm col-12"
                        bg-color="white"
                        hide-bottom-space
                        :type="visibility ? 'password' : 'text' "
                        maxlength="25"
                        :loading="load"
                        :rules="[ val => val && val.length >= 8 || 'password minimal 8 karakter']"
                        input-class="password"
                    >
                        <template v-slot:append>
                            <q-icon :name="visibility ? 'visibility' : 'visibility_off' " @click="visibility = !visibility" class="cursor-pointer"/>
                            <q-avatar color="positive" text-color="white" icon="done"  v-if="success"/>
                            <q-icon name="error"  v-if="error" class="text-negative"/>
                        </template>
                    </q-input>
                        <span style="font-size:11px;padding-left:10px;" class="col-12 text-positive" v-if="success">Password anda benar. Silahkan Anda dapat mengganti password</span>
                        <span style="font-size:11px;padding-left:10px;" class="col-12 text-negative" v-if="error">Password lama anda salah. Anda tidak dapat mengganti password</span>
                </div>
                <div class="col-4 text-edit">Password Baru</div>
                <q-input
                    dense
                    outlined
                    v-model="newpw"
                    placeholder="Password baru"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    :type="visibility2 ? 'password' : 'text' "
                    maxlength="25"
                    :disable="newpass"
                    :rules="[ val => val && val.length >= 8 || 'password baru minimal 8 karakter']"
                >
                <template v-slot:append>
                        <q-icon :name="visibility2 ? 'visibility' : 'visibility_off' " @click="visibility2 = !visibility2" class="cursor-pointer"/>
                    </template>
                </q-input>
                <div class="col-4 text-edit">Konfirmasi Password Baru</div>
                <q-input
                    dense
                    outlined
                    v-model="confirmpw"
                    placeholder="Konfirmasi Password baru"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    :type="visibility3 ? 'password' : 'text' "
                    maxlength="25"
                    :disable="newpass"
                    :rules="[ val => val && val.length >= 8 || 'konfirmasi password baru minimal 8 karakter', val => konfirmasipw(val)]"
                >
                <template v-slot:append>
                        <q-icon :name="visibility3 ? 'visibility' : 'visibility_off' " @click="visibility3 = !visibility3" class="cursor-pointer"/>
                    </template>
                </q-input>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Batal" color="primary" no-caps @click="$emit('update:dpassword',false)" :disabled="btndisabled"/>
                <q-btn flat label="Simpan" :color="valid ? 'primary' : 'grey'" no-caps :disabled="disabled" @click="onSubmit" :loading="btnload">
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
export default {
    props:[
        'dpassword'
    ],
    setup(){
        const $q = useQuasar()
        return {
            failNotif () {
                $q.notify({
                message: 'Password gagal diganti. Silahkan coba lagi',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
            successNotif () {
                $q.notify({
                message: 'Password berhasil diganti',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
        }
    },
    data(){
        return{
            oldpw:'',
            newpw:'',
            confirmpw:'',
            visibility: true,
            visibility2: true,
            visibility3: true,
            load:false,
            btndisabled:false,
            newpass:true,
            success:false,
            error:false,
            btnload:false
        }
    },
    created(){
        this.debouncedGetAnswer = debounce(this.getAnswer, 1000)
    },
    methods:{
        konfirmasipw(val){
            if(val === this.newpw){
                return true;
            }else{
                return 'Konfirmasi Password Baru tidak sama dengan Password Baru';
            }
        },
        getAnswer(){
            this.$store.dispatch('checkPassword',{
                old_password : this.oldpw
            })
            .then(()=>{
                this.success = true
                this.load = false
            })
            .catch(()=>{
                this.load = false
                this.error = true
            })
        },
        onSubmit(){
            this.btnload = true
            this.btndisabled = true
            this.$store.dispatch('changePassword',{
                password : this.newpw,
                old_password : this.oldpw,
                password_confirmation : this.confirmpw
            })
            .then(()=>{
                this.successNotif()
                this.$emit('update:dpassword',false)
                // this.oldpw = '' 
                // this.newpw = '' 
                // this.confirmpw =''
            })
            .catch(error=>{
                this.failNotif()
                console.log("er",error)
                this.btnload = false
                this.btndisabled = false
            })
        },
    },
    watch:{
        oldpw(val){
            this.success = false
            this.error = false
            if(val.length >= 8){
                this.load = true
                this.debouncedGetAnswer()
            }
        },
        success(val){
            let x = document.getElementsByClassName('password')
            Array.from(x).forEach(function(n,index){
                let m = n.parentNode.parentNode
                if(val){
                    m.classList.add("text-positive")
                    
                }else{
                    m.classList.remove("text-positive")
                }
            })
            if(val){
                this.newpass = false
            }
        },
        error(val){
            let x = document.getElementsByClassName('password')
            Array.from(x).forEach(function(n,index){
                let m = n.parentNode.parentNode
                if(val){
                    m.classList.add("text-negative")
                }else{
                    m.classList.remove("text-negative")
                }
            })
            if(val){
                this.newpass = true
            }
        }
    },
    computed:{
        valid(){
            return this.newpw && this.confirmpw ? true : false
        },
        disabled(){
            if(this.valid){
                if (this.btndisabled){
                    return true
                }
                return false
            }
            return true
        },
    },
    mounted(){
        this.oldpw = '' 
        this.newpw = '' 
        this.confirmpw =''
    }
}
</script>

<style scoped>
.q-card{
    max-width: 418px;
    border-radius:10px;
}
</style>