<template>
    <div>
        <div class="text-h5 text-bold text-primary">ISI BIODATA</div>
        <div class="text-subtitle2 q-mt-md text-justify">
        Mohon isikan biodata Anda dengan benar
        </div>
        <hr class="line-cards q-my-md">
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
        :modelValue="email"
        @update:modelValue="event => $emit('update:email', event)"
        label="Alamat Email Aktif"
        lazy-rules
        :rules="[
        (val) => (val && val.length > 0) || 'Email tidak boleh kosong', val => validEmail(val)
        ]"
        class="q-mb-sm"
        bg-color="white"
        hide-bottom-space
        type="email"
        />
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
        class="q-mb-sm"
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
        class="q-mb-sm"
        bg-color="white"
        hide-bottom-space
        input-class="qname"
        />
        <div class="text-subtitle2">
        Tanggal Lahir
        </div>
        <div class="row q-my-sm justify-between">
            <q-select emit-value map-options outlined dense  :modelValue="tgl"
        @update:modelValue="event => $emit('update:tgl', event)" :options="opttgl" label="Tgl" bg-color="white" class="col-3"/>
            <q-select emit-value map-options outlined dense  :modelValue="bln"
        @update:modelValue="event => $emit('update:bln', event)" :options="optbln" label="Bulan" bg-color="white" class="col-4"/>
            <q-select emit-value map-options outlined dense  :modelValue="thn"
        @update:modelValue="event => $emit('update:thn', event)" :options="optthn" label="Tahun" bg-color="white" class="col-4"/>
        </div>
                <!-- <q-input
                outlined
                dense
                label="Tanggal Lahir"
                lazy-rules
                v-model="user.tgllahir" mask="date" :rules="[(val) => (val && val.length > 0) || 'Tanggal Lahir tidak boleh kosong']"
                class="q-mb-sm "
                bg-color="white"
                hide-bottom-space
                hide-hint
                placeholder="contoh (2001/20/08)"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="user.tgllahir">
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
                </q-input> -->
                
        
    </div>
</template>

<script>
export default {
    props:[
        'name',
        'email',
        'nowa',
        'tempat',
        'tgl',
        'bln',
        'thn',
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
        }
    },
    mounted(){
        this.OptTgl()
        this.OptThn()
        this.letterCapitalize()
    },
    computed:{
        // nicks(){
        //     let x = this.name.match(/(\w+\S*)/)
        //     let random = ''
        //     random += x[1]
        //     for (let index = 0; index < 4; index++) {
        //         random += Math.floor(Math.random() * (9-0 +1))
        //     }
        //     // this.$emit('update:nick',random)
        //     return random
        // }
    },
    methods:{
        validEmail(val){
            if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                return true;
            }else{
                return 'Email tidak valid';
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
        }
    }
}
</script>

<style>

</style>