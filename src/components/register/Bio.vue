<template>
    <div>
        <div class="text-h5 text-bold text-primary">ISI BIODATA</div>
        <div class="text-subtitle2 q-mt-md text-justify">
        Mohon isikan biodata Anda dengan benar
        </div>
        <hr class="line-cards q-my-md">
        <q-form @submit.prevent.stop="onSave" ref="dform" class="q-gutter-md q-mt-sm">
        <q-input
        dense
        outlined
        :modelValue="name"
        @update:modelValue="event => $emit('update:name', event)"
        label="Nama Lengkap"
        lazy-rules
        :rules="[
        (val) => (val && val.length > 0) || 'Nama tidak boleh kosong',
        ]"
        class="q-mb-sm"
        bg-color="white"
        hide-bottom-space
        input-class="qname"
        />

        <q-input
        outlined
        dense
        v-model="bemail"
        label="Alamat Email Aktif"
        lazy-rules
        :loading="load"
        :rules="[
        (val) => (val && val.length > 0) || 'Email tidak boleh kosong', val => validEmail(val)
        ]"
        class="q-mb-sm q-mt-none"
        bg-color="white"
        hide-bottom-space
        type="email"
        input-class="email"
        >
        <template v-slot:append>
            <q-avatar color="positive" text-color="white" icon="done"  v-if="success"/>
            <q-icon name="error"  v-if="error" class="text-negative"/>
        </template>
        </q-input>
        <span style="font-size:11px;padding-left:10px;" class="col-12 text-positive" v-if="success">Email dapat digunakan</span>
        <span style="font-size:11px;padding-left:10px;" class="col-12 text-negative" v-if="error">Email tidak dapat digunakan karena email sudah terdaftar</span>
        <q-input
        outlined
        dense
        :modelValue="nowa"
        @update:modelValue="event => $emit('update:nowa', event)"
        mask="####-####-####"
        unmasked-value
        label="No. Whatsapp Aktif"
        lazy-rules
        :rules="[
        (val) => (val && val.length > 0) || 'Nomor Whatsapp tidak boleh kosong',
        ]"
        class="q-mb-sm q-mt-none"
        bg-color="white"
        hide-bottom-space
        >
        <template v-slot:hint>
            *) Isi untuk dihubungi lebih lanjut/Pengiriman Kode Verifikasi
        </template>
        </q-input>

        <q-input
        outlined
        dense
        :modelValue="tempat"
        @update:modelValue="event => $emit('update:tempat', event)"
        label="Tempat Lahir"
        lazy-rules
        :rules="[
        (val) => (val && val.length > 0) || 'Tempat Lahir tidak boleh kosong',
        ]"
        class="q-mb-sm q-mt-none"
        bg-color="white"
        hide-bottom-space
        input-class="qname"
        />
        <div class="text-subtitle2">
        Tanggal Lahir<span class="text-negative">*</span>
        </div>
        <div class="row q-my-sm justify-between">
            <q-select emit-value map-options outlined dense  :modelValue="tgl"
        @update:modelValue="event => $emit('update:tgl', event)" :options="opttgl" label="Tgl" bg-color="white" class="col-3"
        lazy-rules
        :rules="[
            val => val !== null && val !== '' || 'Tgl tidak boleh kosong',
        ]"
        hide-bottom-space
        />
            <q-select emit-value map-options outlined dense  :modelValue="bln"
        @update:modelValue="event => $emit('update:bln', event)" :options="optbln" label="Bulan" bg-color="white" class="col-4"
        lazy-rules
        :rules="[
            val => val !== null && val !== '' || 'Bulan tidak boleh kosong',
        ]"
        hide-bottom-space
        />
            <q-select emit-value map-options outlined dense  :modelValue="thn"
        @update:modelValue="event => $emit('update:thn', event)" :options="optthn" label="Tahun" bg-color="white" class="col-4"
        lazy-rules
        :rules="[
            val => val !== null && val !== '' || 'Tahun tidak boleh kosong',
        ]"
        hide-bottom-space
        />
        </div>
        <div class="row q-mt-md" style="margin-bottom:-20px;">
            <q-btn outline label="Sebelumnya" @click="$router.push({name:'cekemail'})" class="col q-mr-md btn-radius" style=" color:#707070;"
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
import { debounce,useQuasar} from 'quasar'
import { api } from 'boot/axios'
export default {
    setup(){
        const $q = useQuasar()
        return {
            failNotif () {
                $q.notify({
                message: 'tunggu waktu validasi email sampai selesai atau email tidak dapat digunakan',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'name',
        'email',
        'nowa',
        'tempat',
        'tgl',
        'bln',
        'thn',
        'step'
    ],
    emits: ['update:tgl','update:bln','update:thn','update:name','update:email','update:nowa','update:tempat'],
    data(){
        return{
            opttgl:[],
            optbln:[
                {value:'01',label:'Januari'},
                {value:'02',label:'Februari'},
                {value:'03',label:'Maret'},
                {value:'04',label:'April'},
                {value:'05',label:'Mei'},
                {value:'06',label:'Juni'},
                {value:'07',label:'Juli'},
                {value:'08',label:'Agustus'},
                {value:'09',label:'September'},
                {value:'10',label:'Oktober'},
                {value:'11',label:'November'},
                {value:'12',label:'Desember'},
            ],
            optthn:[],
            stgl:'',
            sbln:'',
            sthn:'',
            load:false,
            error:false,
            success:false,
            bemail:''
        }
    },
    created(){
        this.debouncedGetAnswer = debounce(this.getAnswer, 1000)
        if(this.email){
            this.bemail = this.email
        }
    },
    mounted(){
        this.OptTgl()
        this.OptThn()
        this.letterCapitalize()
    },
    computed:{
        valid(){
            if(this.bemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true
            }
            return false
        },
    },
    watch:{
        bemail(val){
            this.success = false
            this.error = false
            if(val !== '' && this.valid){
                this.load = true
                this.debouncedGetAnswer()
            }
        },
        success(val){
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
    methods:{
        getAnswer(){
            if(this.bemail !== null && this.bemail !== ''){
                if(this.valid){
                    api.post('auth/checkEmailExist',{
                    email : this.bemail
                    })
                    .then(()=>{
                        this.success = true
                        this.load = false
                    })
                    .catch(()=>{
                        this.load = false
                        this.error = true
                    })
                }
            }else{
                this.load = false
            }
        },
        validEmail(val){
            if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true;
            }else{
                return 'Email tidak valid';
            }
        },
        existEmail(){
            if(!this.error){
                return true
            }else{
                return ''
            }
        },
        OptTgl(){
            for (let index =1; index < 32; index++) {
                if(index < 10){
                    this.opttgl.push('0'+index)
                }else{
                    this.opttgl.push(index)
                }
            }
        },
        OptThn(){
            let now = new Date().getFullYear()
            for (let index =1930; index <= now; index++) {
                this.optthn.push(index)
            }
        },
        letterCapitalize(){
            let qname = document.getElementsByClassName('qname')
            Array.from(qname).forEach(function(x){
                x.addEventListener("keyup",function(e){

                e.target.value = e.target.value.replace(/\w\S*/g,
                    function(txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    })
            })
            })
        },
        onSave(){
                this.$refs.dform.validate()
                .then(valid=>{
                    if(valid){
                        if(this.success){
                            this.$emit('update:email',this.bemail)
                            this.$emit('update:step',2)
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