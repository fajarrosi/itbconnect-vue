<template>
    <div>
         <q-dialog :model-value="dprofil" @click="$emit('update:dprofil', $event.target.value)" persistent full-height>
            <q-card class="hide-scrollbar">
                <q-form @submit.prevent.stop="onSave" ref="dform" class="q-gutter-md" style="height:100%;">
                    <div class="card-grid">
                        <q-scroll-area class="fit">
                            <q-card-section class="row justify-center items-center" style="margin-top:300px;" v-if="!loadApi">
                                <q-spinner-grid class="col-4 text-primary"/>
                                <span class="col-12 text-primary text-center q-mt-md">Memuat Data</span>
                            </q-card-section>
                            <q-card-section class="row" v-else>
                                <div class="col-12 text-edit" style="font-size:17px;">PROFIL</div>
                                <div class="col-4 text-edit">Nama Panggilan</div>
                                <q-input
                                dense
                                outlined
                                v-model="nama"
                                placeholder="Nama Panggilan"
                                class="q-mb-sm col-8"
                                bg-color="white"
                                hide-bottom-space
                                @keyup="onNama($event)"
                                />
                                <!-- 
                                    this.$data.nama = $event.target.value.replace(/\w\S*/g,
                                function(txt) {
                                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                                })
                                 -->
                                <div class="col-4 text-edit">Tempat Lahir<span class="text-negative">*</span></div>
                                <q-input
                                dense
                                outlined
                                v-model="tempat"
                                placeholder="Tempat Lahir"
                                class="q-mb-sm col-8"
                                bg-color="white"
                                hide-bottom-space
                                lazy-rules
                                :rules="[
                                (val) => (val && val.length > 0) || 'Tempat lahir tidak boleh kosong',
                                ]"
                                @keyup="this.$data.tempat = $event.target.value.replace(/\w\S*/g,
                                function(txt) {
                                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                                })"
                                />
                                <div class="col-4 text-edit">Tgl Lahir<span class="text-negative">*</span></div>
                                <q-input
                                    outlined
                                    dense
                                    v-model="tgl" mask="date" 
                                    class="q-mb-sm col-8"
                                    bg-color="white"
                                    hide-bottom-space
                                    hide-hint
                                    placeholder="Tgl Lahir"
                                    bottom-slots
                                    lazy-rules
                                    :rules="[
                                    (val) => (val && val.length > 0) || 'Tanggal lahir tidak boleh kosong',
                                    ]"
                                    >
                                    <template v-slot:after>
                                        <q-icon name="event" class="cursor-pointer">
                                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                            <q-date v-model="tgl">
                                            <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Close" color="primary" flat />
                                            </div>
                                            </q-date>
                                        </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                    <template v-slot:hint>
                                    *) Pilih tanggal dengan mengklik icon disebelah kanan
                                    </template>
                                    </q-input>
                                <div class="col-12 row justify-between">
                                    <div class="col-6">
                                        <div class="col-4 text-edit">Jenis Kelamin<span class="text-negative">*</span></div>
                                        <q-select  outlined dense v-model="jkelamin" :options="optjkelamin" bg-color="white" class="q-mb-sm col-8" 
                                        lazy-rules
                                    :rules="[
                                        val => val !== null && val !== '' || 'Jenis kelamin tidak boleh kosong',
                                    ]"
                                    hide-bottom-space
                                        />
                                    </div>
                                    <div class="col-5">
                                        <div class="col-4 text-edit">Gol. Darah<span class="text-negative">*</span></div>
                                        <q-select  outlined dense v-model="goldar" :options="optgoldar" bg-color="white" class="q-mb-sm col-8"
                                        lazy-rules
                                    :rules="[
                                        val => val !== null && val !== '' || 'Gol.Darah tidak boleh kosong',
                                    ]"
                                    hide-bottom-space
                                        />
                                    </div>
                                </div>
                                <div class="col-12 row justify-between">
                                    <div class="col-6">
                                        <div class="col-4 text-edit">Status<span class="text-negative">*</span></div>
                                        <q-select  outlined dense v-model="status" :options="optstatus" bg-color="white" class="q-mb-sm col-8"
                                        lazy-rules
                                    :rules="[
                                        val => val !== null && val !== '' || 'Status tidak boleh kosong',
                                    ]"
                                    hide-bottom-space
                                        />
                                    </div>
                                    <div class="col-5">
                                        <div class="col-4 text-edit">Agama<span class="text-negative">*</span></div>
                                        <q-select  outlined dense v-model="agama" :options="optagama" bg-color="white" class="q-mb-sm col-8"
                                        lazy-rules
                                    :rules="[
                                        val => val !== null && val !== '' || 'Agama tidak boleh kosong',
                                    ]"
                                    hide-bottom-space
                                        />
                                    </div>
                                </div>
                                <div class="col-4 text-edit" style="overflow-wrap: break-word;
  word-wrap: break-word;">Kewarganegaraan</div>
                                <q-input
                                    outlined
                                    dense
                                    v-model="kewarganegaraan"
                                    label="Kewarganegaraan"
                                    class="q-mb-sm col-8"
                                    bg-color="white"
                                    hide-bottom-space
                                    @keyup="this.$data.kewarganegaraan = $event.target.value.replace(/\w\S*/g,
                                function(txt) {
                                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                                })"
                                    />
                                    
                                <div class="col-3 text-edit">Alamat<span class="text-negative">*</span></div>
                                <div class="col-9 row">
                                    <q-radio v-model="dalam" val="1" label="Dalam Negeri" class="col"/>
                                    <q-radio v-model="dalam" val="2" label="Luar Negeri" class="col"/>
                                </div>
                                <div v-if="dalam === '1'" class="col-11 row" style="margin-left:auto;">
                                    <div class="col-4 text-edit">Provinsi<span class="text-negative">*</span></div>
                                    <q-select  outlined dense v-model="prov" :options="optprov" label="Provinsi" bg-color="white" class="q-mb-sm col-8"
                                    lazy-rules
                                    :rules="[
                                        val => val !== null && val !== '' || 'Provinsi tidak boleh kosong',
                                    ]"
                                    v-if="dalam === '1'"
                                    hide-bottom-space
                                    />
                                    <div class="col-12 row" v-if="kotashow">
                                        <div class="col-4 text-edit" style="overflow-wrap: break-word;
  word-wrap: break-word;">Kota/Kabupaten<span class="text-negative">*</span></div>
                                        <q-select  outlined dense v-model="kota" :options="optkota" label="Kota / Kabupaten" bg-color="white" class="q-mb-sm col-8"
                                        v-if="dalam === '1'"
                                        lazy-rules
                                    :rules="[
                                        val => val !== null && val !== '' || 'Kota tidak boleh kosong',
                                    ]"
                                    hide-bottom-space
                                        />
                                    </div>
                                        <div class="col-4 text-edit">Alamat<span class="text-negative">*</span></div>
                                    <q-input
                                    outlined
                                    dense
                                    v-model="alamat"
                                    label="Alamat Domisili"
                                    lazy-rules
                                    :rules="[
                                    (val) => (val && val.length > 0) || 'Alamat Domisili tidak boleh kosong',
                                    ]"
                                    class="q-mb-sm col-8"
                                    bg-color="white"
                                    hide-bottom-space
                                    v-if="dalam === '1'"
                                    />
                                </div>
                                <div v-if="dalam === '2'" class="col-11 row" style="margin-left:auto;">
                                    <div class="col-4 text-edit">Negara<span class="text-negative">*</span></div>
                                    <q-select  outlined dense v-model="negara" :options="optnegara" label="Negara" bg-color="white" class="q-mb-sm col-8"
                                    lazy-rules
                                    :rules="[
                                        val => val !== null && val !== '' || 'Negara tidak boleh kosong',
                                    ]"
                                    v-if="dalam === '2'"
                                    hide-bottom-space
                                    />
                                        <div class="col-4 text-edit">Alamat<span class="text-negative">*</span></div>
                                    <q-input
                                    outlined
                                    dense
                                    v-model="alamatluar" 
                                    label="Alamat Domisili"
                                    lazy-rules
                                    :rules="[
                                    (val) => (val && val.length > 0) || 'Alamat Domisili tidak boleh kosong',
                                    ]"
                                    class="q-mb-sm col-8"
                                    bg-color="white"
                                    hide-bottom-space
                                    v-if="dalam === '2'"
                                    />
                                </div>
                                <div class="col-3 text-edit">NIM</div>
                                <q-input
                                dense
                                outlined
                                v-model="nim"
                                placeholder="NIM"
                                class="q-mb-sm col-9"
                                bg-color="white"
                                hide-bottom-space
                                maxlength="24"
                                />
                                <div class="col-3 text-edit">Email<span class="text-negative">*</span></div>
                                <div class="col-9 row q-mb-sm">
                                    <q-input
                                    dense
                                    outlined
                                    v-model="email"
                                    placeholder="Email"
                                    class=" col-12"
                                    bg-color="white"
                                    hide-bottom-space
                                    lazy-rules
                                    :loading="eload"
                                    :rules="[
                                    (val) => (val && val.length > 0) || 'Email tidak boleh kosong',val => validEmail(val), val=>  existEmail()
                                    ]"
                                    input-class="email"
                                    >
                                    <template v-slot:append>
                                        <q-avatar color="positive" text-color="white" icon="done"  v-if="esuccess"/>
                                        <!-- <q-icon name="error"  v-if="error" class="text-negative"/> -->
                                    </template>
                                    </q-input>
                                    <span style="font-size:11px;padding-left:10px;" class="col-12 text-positive" v-if="esuccess">Email dapat digunakan</span>
                                    <!-- <span style="font-size:11px;padding-left:10px;" class="col-12 text-negative" v-if="error">Email tidak dapat digunakan karena email sudah terdaftar</span> -->
                                </div>
                                <div class="col-3 text-edit">No. Telepon<span class="text-negative">*</span></div>
                                <q-input
                                dense
                                outlined
                                v-model="nowa"
                                @keyup="onWa($event)"
                                placeholder="No. Telepon"
                                class="q-mb-sm col-9"
                                bg-color="white"
                                type="text"
                                hide-bottom-space
                                maxlength="18"
                                lazy-rules
                                :rules="[
                                (val) => (val && val.length > 0) || 'No telepon tidak boleh kosong',
                                ]"
                                />
                                <div class="col-12 text-grey-7 q-mt-xs" >
                                    Untuk privasi Alamat, edit di Pengaturan&Privasi 
                                </div>
                            </q-card-section>
                        </q-scroll-area>
                        <q-card-actions align="center" class="q-mb-md">
                            <q-btn  no-caps label="Kembali" outline
                            style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dprofil', false)" class="col-5" :disabled="disabled"/>
                            <q-btn  no-caps label="Simpan" color="primary" type="submit" class="col-5 btn-radius" :loading="load"
                        :disabled="disabled">
                                <template v-slot:loading>
                                    <div class="row items-center">
                                        <q-spinner-facebook />  
                                    </div>
                                </template>
                            </q-btn>
                        </q-card-actions>
                    </div>
                </q-form>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { api } from 'boot/axios'
import { debounce,useQuasar } from 'quasar'
import {  mapActions } from "vuex"
export default {
    setup(){
        const $q = useQuasar()
        return {
            failNotif () {
                $q.notify({
                message: 'tunggu waktu validasi email sampai selesai',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
            successNotif () {
                $q.notify({
                message: 'Profil berhasil diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failedNotif () {
                $q.notify({
                message: 'Profil gagal diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'dprofil',
        'dpengalaman',
        'userbaru',
        'dataprofil',
        'pnegara',
        'pprov',
        'pagama',
        'intro'
    ],
    data(){
        return{
            optstatus:[
               { label:'Menikah',
                value:'1'},
               { label:'Lajang',
                value:'2'}
            ],
            optagama:[],
            optgoldar:[
               { label:'O',
                value:'o'},
               { label:'A',
                value:'a'},
               { label:'AB',
                value:'ab'},
               { label:'B',
                value:'b'},
                
            ],
            optjkelamin:[
                { label:'Laki-laki',
                    value:'1'},
                { label:'Perempuan',
                    value:'2'}
            ],
            optdomisili:[
            {
                label:'Dalam Negeri',
                value:'1'
            },
            {
                label:'Luar Negeri',
                value:'2'
            }
        ],
        optprov:[],
        optkota:[],
        optnegara:[],
        nama:'',
        tempat:'',
        tgl:'',
        jkelamin:'',
        goldar:'',
        status:'',
        agama:'',
        kewarganegaraan:'',
        nim:'',
        email:'',
        nowa:'',
        dalam:'',
        prov:'',
        kota:'',
        negara:'',
        alamat:'',
        alamatluar:'',
        kotashow:false,
        load:false,
        disabled:false,
        eload:false,
        esuccess:false,
        error:false,
        first:false,
        loadApi:false
        }
    },
    created(){
        this.debouncedGetAnswer = debounce(this.getAnswer, 1000)
        this.pagama.forEach(el=>{
            let opt = {}
            opt.label = el.name
            opt.value = el.id
            this.optagama.push(opt)
        })
        
        this.pprov.forEach(element => {
            let opt ={}
            opt.label = element.name
            opt.value = element.id
            this.optprov.push(opt)
        })
        this.pnegara.forEach(element => {
            let opt ={}
            opt.label = element.country_name
            opt.value = element.id
            this.optnegara.push(opt)
        })
        if(this.dataprofil.religion){
            this.agama = this.optagama.find((ag)=>ag.label.includes(this.dataprofil.religion))
        }
        if(this.dataprofil.prov){
            this.prov = this.optprov.find((opt)=> opt.value === this.dataprofil.prov)
        }
        if(this.dataprofil.negara !== 78){
            this.negara = this.optnegara.find((opt)=> opt.value === this.dataprofil.negara)
        }
    },
    mounted(){
        this.getData()
        this.nama = this.dataprofil.nick
        this.email = this.dataprofil.email
        this.nowa = this.dataprofil.telephone
        this.nim = this.dataprofil.nim
        this.tempat = this.dataprofil.pob
        this.tgl = this.dataprofil.dob.replace(/\-/gi,'/')
        this.jkelamin = this.optjkelamin.find((jk)=> 
            this.dataprofil.gender === 'male' ? jk.label.includes('Laki-laki') : jk.label.includes('Perempuan')
        )
        this.status = this.optstatus.find((st)=>
            this.dataprofil.status === 'yes' ? st.label.includes('Menikah') : st.label.includes('Lajang')
        )
        this.goldar = this.optgoldar.find((gd)=> gd.value.includes(this.dataprofil.blood))
        this.kewarganegaraan = this.dataprofil.citizenship
        if(this.dataprofil.negara === 78){
            this.dalam = '1'
            this.alamat = this.dataprofil.domisili
        }else{
            this.dalam = '2'
                this.alamatluar = this.dataprofil.domisili
        }
    },
    computed:{
        valid(){
            if(this.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true
            }
            return false
        },
    },
    watch:{
        prov: function(val){
            this.optkota = []
            this.kotashow = false
            this.kota = ''
            if(val){
                api.get(`complex/city/${val.value}`)
                .then((response)=>{
                    response.data.data.forEach(element => {
                    let opt ={}
                    opt.label = element.name
                    opt.value = element.id
                    this.optkota.push(opt)
                    this.kotashow = true
                    })
                    if(this.dataprofil.city){
                        this.kota = this.optkota.find((opt)=> opt.value === this.dataprofil.city)
                    }
                })
                .catch((error)=> console.log("error",error))
            }
        },
        email(val){
            this.esuccess = false
            this.error = false
            if(val !== this.dataprofil.email && val !== null && val !== ''){
                this.first = false
                if(this.valid){
                    this.eload = true
                    this.debouncedGetAnswer()
                }else{
                    this.eload = false
                }
            }else if(val === this.dataprofil.email){
                this.first = true
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
    methods:{
        ...mapActions("myprofil", ['getNegara','getProv','getAgama']),
        async getData(){
            let a = this.getNegara()
            let b = this.getProv()
            let c = this.getAgama()
            Promise.all([a,b,c]).then(() =>{
                this.loadApi = true
            })
        },
        getAnswer(){
            if(this.email !== this.dataprofil.email && this.email !== null && this.email !== ''){
                if(this.valid){
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
                }
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
        validEmail(val){
            if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true;
            }else{
                return 'Email tidak valid';
            }
        },
        onSave(){
            if(this.first){
                this.onSaving()
            }
            else if(this.esuccess){
                this.onSaving()
            }else{
                this.failNotif()
            }

        },
        onSaving(){
            this.$refs.dform.validate()
                .then(valid=>{
                    if(valid){
                        this.load = true
                        this.disabled = true
                        let sendData = {}
                        sendData.nickname = this.nama
                        sendData.pob= this.tempat
                        sendData.dob = this.tgl.replace(/\//gi,'-')
                        if(this.jkelamin.label === 'Laki-laki'){
                            sendData.gender = 'male'
                        }else{
                            sendData.gender = 'female'
                        }
                        sendData.blood = this.goldar.value
                        if(this.status.value === '1'){
                            sendData.marriage = 'yes'
                        }else{
                            sendData.marriage = 'no'
                        }
                        sendData.religion_id = this.agama.value
                        sendData.citizenship = this.kewarganegaraan
                        if(this.dalam === '1'){
                            sendData.province_id = this.prov.value
                            sendData.cities_id = this.kota.value
                            sendData.country_id = 78
                            sendData.address = this.alamat
                        }else{
                            sendData.province_id = null
                            sendData.cities_id = null
                            sendData.address = this.alamatluar
                            sendData.country_id = this.negara.value
                        }
                        sendData.nim = this.nim
                        
                        sendData.email = this.email
                        sendData.telephone = this.nowa
                        this.$store.dispatch('myprofil/updProfil',sendData)
                        .then(response=>{
                            this.load = false
                            this.disabled = false
                            if(this.userbaru){
                                this.$emit('update:dprofil',false)
                                this.$emit('update:intro',false)
                                this.$emit('update:dpengalaman',true)
                            }else{
                                this.$emit('update:intro',false)
                                this.$emit('update:dprofil',false)
                            }
                                this.successNotif()
                        })
                        .catch(err=>{
                            this.load = false
                            this.disabled = false
                            this.$emit('update:intro',false)
                            this.$emit('update:dprofil',false)
                            this.failedNotif()
                            console.log("error",err)
                        })
                    }
                })
        },
        onNama(event){
            this.nama = event.target.value.replace(/\w\S*/g,function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })
        },
        onWa(event){
            if (/[0-9+]/.test(event.key)) {
                this.nowa = event.target.value
            }else{
                this.nowa = event.target.value.replace(event.key,'')
            }
        }
     
    }
}
</script>

<style scoped>
.q-btn--outline::before{
    border: 2px solid currentColor;
}
.q-card{
    width: 418px;
    border-radius:10px;
}
.q-field--dense .q-field__bottom{
    padding:0;
}

</style>