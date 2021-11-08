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
                    <q-select  outlined dense v-model="kewarganegaraan" :options="optkewarganegaraan" bg-color="white" class="q-mb-sm col-8"/>
                    <div class="col-3 text-edit">Alamat*</div>
                    <div class="col-9 row">
                        <q-radio v-model="dalam" val="1" label="Dalam Negeri" class="col"/>
                        <q-radio v-model="dalam" val="2" label="Luar Negeri" class="col"/>
                    </div>
                    <div v-if="dalam === '1'" class="col-11 row" style="margin-left:auto;">
                        <div class="col-4 text-edit">Provinsi</div>
                        <q-select  outlined dense v-model="prov" :options="optprov" label="Provinsi" bg-color="white" class="q-mb-sm col-8"/>
                        <div class="col-4 text-edit">Kota/Kabupaten</div>
                        <q-select  outlined dense v-model="kota" :options="optkota" label="Kota / Kabupaten" bg-color="white" class="q-mb-sm col-8"/>
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
                    />
                    <div class="col-12 text-grey-7 q-mt-xs" >
                        Untuk privasi Alamat, edit di Pengaturan&Privasi 
                    </div>
                </q-card-section>
                <q-card-actions align="center" class="q-mb-md">
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dprofil', false)" class="col-5"/>
                    <q-btn  no-caps label="Simpan" color="primary" @click="onSave" class="col-5"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'dprofil',
        'dpengalaman',
        'userbaru',
        'dataprofil'
    ],
    emits:['update:dpengalaman','update:dprofil'],
    data(){
        return{
            optkewarganegaraan:[
               { label:'Indonesia',
                value:'1'},
               { label:'India',
                value:'2'}
            ],
            optstatus:[
               { label:'Menikah',
                value:'1'},
               { label:'Lajang',
                value:'2'}
            ],
            optagama:[
               { label:'Islam',
                value:'1'},
               { label:'Kristen',
                value:'2'}
            ],
            optgoldar:[
               { label:'O',
                value:'1'},
               { label:'A',
                value:'2'}
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
        optprov:[
            {
                label:'Jambi',
                value:'1'
            },
            {
                label:'Palembang',
                value:'2'
            },
        ],
        optkota:[
            {
                label:'Kota1',
                value:'1'
            },
            {
                label:'Kota2',
                value:'2'
            },
        ],
        optkec:[
            {
                label:'Kec1',
                value:'1'
            },
            {
                label:'Kec2',
                value:'2'
            },
        ],
        optkel:[
            {
                label:'Kel1',
                value:'1'
            },
            {
                label:'Kel2',
                value:'2'
            },
        ],
        optnegara:[
            {
                label:'Neg1',
                value:'1'
            },
            {
                label:'Neg2',
                value:'2'
            },
        ],
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
        kec:'',
        kel:'',
        negara:'',
        alamat:''
        }
    },
    mounted(){
        this.nama = this.$props.dataprofil.nick
        this.email = this.$props.dataprofil.email
        this.nowa = this.$props.dataprofil.telephone
        this.nim = this.$props.dataprofil.nim
    },
    methods:{
        onSave(){
            if(this.userbaru){
                this.$emit('update:dprofil',false)
                this.$emit('update:dpengalaman',true)
            }else{
                this.$emit('update:dprofil',false)
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