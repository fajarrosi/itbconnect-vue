<template>
    <div class="row bg-grey-2 justify-center">
        <div class="register bg-white shadow-2 q-pa-md flex items-center">
            <q-card  bordered class="full-width">
                <q-card-section>
                    <q-banner class="text-white bg-red " v-if="Object.keys(errors).length">
                        Email sudah terdaftar <br>
                        
                    </q-banner>
                </q-card-section>

                <q-card-section>
                    <q-form
                        @submit="onSubmit"
                    >
                    <q-input filled bottom-slots v-model="user.email" label="Email"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Email tidak boleh kosong', val => validEmail(val)]"
                    >
                        <template v-slot:before>
                        <q-icon name="email" />
                        </template>
                    </q-input>
                    <q-input filled bottom-slots v-model="user.complete_name" label="Nama"  
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Nama tidak boleh kosong']"
                    >
                        <template v-slot:before>
                        <q-icon name="perm_identity" />
                        </template>
                    </q-input>
                    <q-input filled bottom-slots v-model="user.password" :type="visibility ? 'password' : 'text' " label="Password" 
                    lazy-rules
                    :rules="[val => val.length > 6 || 'Password minimal 6 karakter']"
                    >
                        <template v-slot:before>
                        <q-icon name="key" />
                        </template>

                        <template v-slot:append>
                            <q-icon :name="visibility ? 'visibility' : 'visibility_off' " @click="visibility = !visibility" class="cursor-pointer"/>
                        </template>
                    </q-input>
                    <q-input filled bottom-slots v-model="user.password_confirmation" :type="visibility ? 'password' : 'text' " label="Konfirmasi Password" 
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'konfirmasi password tidak boleh kosong', val => konfirmasi(val)]">
                        <template v-slot:before>
                        <q-icon name="key" />
                        </template>

                        <template v-slot:append>
                        <q-icon :name="visibility ? 'visibility' : 'visibility_off' " @click="visibility = !visibility"/>
                        </template>

                    </q-input>
                    <div class="flex justify-center">
                        <q-btn label="Daftar" type="submit" color="primary" :loading="load" :disabled="btndisabled" no-caps class="q-mx-auto">
                            <template v-slot:loading>
                                <q-spinner-facebook />
                            </template>
                        </q-btn>
                    </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:null,
            user:{
                email:'',
                complete_name:'',
                password:'',
                password_confirmation:'',
                username: 'fajarrokl9',
                gender:'male',
                dob:'1997-11-10'
            },
            visibility: true,
            load:false,
            btndisabled: false,
            errors:{}
        }
    },
    beforeCreate(){
        if(this.$store.getters['auth/isAuthenticated']){
            this.$router.push({name : 'home'})
        }
    },
    mounted(){
        let userReg = this.$store.state.auth.userReg
        if(Object.keys(userReg).length > 0){
            this.user.email = userReg.email
            this.user.complete_name = userReg.complete_name
        }
    },
    methods: {
        onSubmit(){
            this.load = true
            this.btndisabled = true
            setTimeout(()=>{
                this.data = this.user
                this.$store.dispatch('auth/register',this.user)
                .then(()=>{
                    this.load = false
                    this.btndisabled = false
                    this.$router.push("/otp")
                })
                .catch((error)=>{
                    this.errors = error
                    console.log("error",error)
                    this.load = false
                    this.btndisabled = false
                })
            },1000)
        },
        validEmail(val){
            if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true;
            }else{
                return 'Email tidak valid';
            }
        },
        konfirmasi(val){
            if(val === this.user.password){
                return true;
            }else{
                return 'Password tidak sama';
            }
        }
    },
}
</script>
<style lang="scss">
    .register{
        width: 480px;
        height:100vh;
    }
</style>