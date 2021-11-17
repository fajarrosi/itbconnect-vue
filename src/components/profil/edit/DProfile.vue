<template>
    <div>
         <q-dialog :model-value="dprofil" @click="$emit('update:dprofil', $event.target.value)" @hide="$emit('update:dprofil',false)">
            <q-card class="hide-scrollbar">
                <q-card-section class="row ">
                    <div class="col-12 text-edit" style="font-size:17px;">PROFIL</div>
                    <div class="col-4 text-edit">Nama Panggilan*</div>
                    <q-input
                    dense
                    outlined
                    v-model="nama"
                    placeholder="Nama Lengkap"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    @keyup="this.$data.nama = $event.target.value.replace(/\w\S*/g,
                    function(txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    })"
                    />
                    <div class="col-4 text-edit">Tempat Lahir*</div>
                    <q-input
                    dense
                    outlined
                    v-model="tempat"
                    placeholder="Tempat Lahir"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    @keyup="this.$data.tempat = $event.target.value.replace(/\w\S*/g,
                    function(txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    })"
                    />
                    <div class="col-4 text-edit">Tgl Lahir*</div>
                    <q-input
                        outlined
                        dense
                        lazy-rules
                        v-model="tgl" mask="date" 
                        class="q-mb-sm col-8"
                        bg-color="white"
                        hide-bottom-space
                        hide-hint
                        placeholder="Tgl Lahir"
                        bottom-slots
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
                            <div class="col-4 text-edit">Jenis Kelamin</div>
                            <q-select  outlined dense v-model="jkelamin" :options="optjkelamin" bg-color="white" class="q-mb-sm col-8"/>
                        </div>
                        <div class="col-5">
                            <div class="col-4 text-edit">Gol. Darah</div>
                            <q-select  outlined dense v-model="goldar" :options="optgoldar" bg-color="white" class="q-mb-sm col-8"/>
                        </div>
                    </div>
                    <div class="col-12 row justify-between">
                        <div class="col-6">
                            <div class="col-4 text-edit">Status</div>
                            <q-select  outlined dense v-model="status" :options="optstatus" bg-color="white" class="q-mb-sm col-8"/>
                        </div>
                        <div class="col-5">
                            <div class="col-4 text-edit">Agama</div>
                            <q-select  outlined dense v-model="agama" :options="optagama" bg-color="white" class="q-mb-sm col-8"/>
                        </div>
                    </div>
                    <div class="col-4 text-edit">Kewarganegaraan</div>
                    <q-input
                        outlined
                        dense
                        v-model="kewarganegaraan"
                        label="Kewarganegaraan"
                        lazy-rules
                        :rules="[
                        (val) => (val && val.length > 0) || 'Kewarganegaraan tidak boleh kosong',
                        ]"
                        class="q-mb-sm col-8"
                        bg-color="white"
                        hide-bottom-space
                        @keyup="this.$data.kewarganegaraan = $event.target.value.replace(/\w\S*/g,
                    function(txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    })"
                        />
                    <div class="col-3 text-edit">Alamat*</div>
                    <div class="col-9 row">
                        <q-radio v-model="dalam" val="1" label="Dalam Negeri" class="col"/>
                        <q-radio v-model="dalam" val="2" label="Luar Negeri" class="col"/>
                    </div>
                    <div v-if="dalam === '1'" class="col-11 row" style="margin-left:auto;">
                        <div class="col-4 text-edit">Provinsi</div>
                        <q-select  outlined dense v-model="prov" :options="optprov" label="Provinsi" bg-color="white" class="q-mb-sm col-8"/>
                        <div class="col-12 row" v-if="kotashow">
                            <div class="col-4 text-edit">Kota/Kabupaten</div>
                            <q-select  outlined dense v-model="kota" :options="optkota" label="Kota / Kabupaten" bg-color="white" class="q-mb-sm col-8"/>
                        </div>
                            <div class="col-4 text-edit">Alamat</div>
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
                        />
                    </div>
                    <div v-if="dalam === '2'" class="col-11 row" style="margin-left:auto;">
                        <div class="col-4 text-edit">Negara</div>
                        <q-select  outlined dense v-model="negara" :options="optnegara" label="Negara" bg-color="white" class="q-mb-sm col-8"/>
                            <div class="col-4 text-edit">Alamat</div>
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
                    <div class="col-3 text-edit">Email*</div>
                    <q-input
                    dense
                    outlined
                    v-model="email"
                    placeholder="Email"
                    class="q-mb-sm col-9"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <div class="col-3 text-edit">No. Telepon*</div>
                    <q-input
                    dense
                    outlined
                    v-model="nowa"
                    placeholder="No. Telepon"
                    class="q-mb-sm col-9"
                    bg-color="white"
                    hide-bottom-space
                    maxlength="12"
                    />
                    <div class="col-12 text-grey-7 q-mt-xs" >
                        Untuk privasi Alamat, edit di Pengaturan&Privasi 
                    </div>
                </q-card-section>
                <q-card-actions align="center" class="q-mb-md">
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dprofil', false)" class="col-5"/>
                    <q-btn  no-caps label="Simpan" color="primary" @click="onSave" class="col-5" :loading="load"
                :disabled="disabled">
                        <template v-slot:loading>
                            <div class="row items-center">
                                <q-spinner-facebook />  
                            </div>
                        </template>
                    </q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
import { api } from 'boot/axios'
export default {
    props:[
        'dprofil',
        'dpengalaman',
        'userbaru',
        'dataprofil',
        'pnegara',
        'pprov',
        'pagama'
    ],
    emits:['update:dpengalaman','update:dprofil'],
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
        kotashow:false,
        load:false,
        disabled:false,
        }
    },
    created(){
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
        if(this.dataprofil.negara){
            this.negara = this.optnegara.find((opt)=> opt.value === this.dataprofil.negara)
        }
    },
    mounted(){
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
            // this.getProv()
        }else{
            this.dalam = '2'
            this.alamat = this.dataprofil.domisili
            // this.getNegara()
        }
    },
    watch:{
        prov: function(val){
            this.optkota = []
            this.kotashow = false
            this.kota = ''
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
    methods:{
        onSave(){
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
            }else{
                sendData.country_id = this.negara.value
            }
            sendData.address = this.alamat
            sendData.nim = this.nim
            
            sendData.email = this.email
            sendData.telephone = this.nowa
            this.$store.dispatch('myprofil/updProfil',sendData)
            .then(response=>{
                this.load = false
                this.disabled = false
                if(this.userbaru){
                    this.$emit('update:dprofil',false)
                    this.$emit('update:dpengalaman',true)
                }else{
                    this.$emit('update:dprofil',false)
                }
            })
            .catch(err=>{
                console.log("error",err)
            })
        },
        // async getReligion(){
        //     return await api.get('complex/religion')
        // .then(response=>{
        //     response.data.data.forEach(el=>{
        //         let opt = {}
        //         opt.label = el.name
        //         opt.value = el.id
        //         this.optagama.push(opt)
        //     })
        //     if(this.dataprofil.religion){
        //         this.agama = this.optagama.find((ag)=>ag.label.includes(this.dataprofil.religion))
        //     }
        // })

        // },
        // async getProv(){
        //     return await api.get('complex/province')
        //     .then((response)=>{
        //         response.data.data.forEach(element => {
        //         let opt ={}
        //         opt.label = element.name
        //         opt.value = element.id
        //         this.optprov.push(opt)
        //         })
        //         if(this.dataprofil.prov){
        //             this.prov = this.optprov.find((opt)=> opt.value === this.dataprofil.prov)
        //         }
        //     })
        //     .catch((error)=> console.log("error",error))
        // },
        // async getNegara(){
        //     return await api.get('complex/country')
        //     .then((response)=>{
        //         response.data.data.forEach(element => {
        //         let opt ={}
        //         opt.label = element.country_name
        //         opt.value = element.id
        //         this.optnegara.push(opt)
        //         })
        //         this.negara = this.optnegara.find((opt)=> opt.value === this.dataprofil.negara)
        //     })
        //     .catch((error)=> console.log("error",error))
        // },
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