<template>
    <div>
        <q-dialog :model-value="dbisnis" @click="$emit('update:dbisnis', $event.target.value)" @hide="$emit('update:dbisnis',false)">
            <q-card class="hide-scrollbar">
                <q-card-section>
                    <div class="q-mb-md text-edit" style="font-size:17px;">BISNIS & PEKERJAAN*</div>

                    <div class="row q-mt-md" v-for="(b,k) in bisnis" :key="k">
                        <input type="file" @change="onFileSelected($event,k)" class="col-12" :ref="'ppupload' + k" style="display:none;"/>
                        <div class="row col-12 q-mb-md">
                            <q-img :src="b.prevlogo ? b.prevlogo : require('assets/blogo.png')" width="129px" height="127px" class="col-4 q-mr-sm">
                                <div class="absolute-full text-subtitle2 flex flex-center">
                                    LOGO BISNIS
                                </div>
                            </q-img>
                            <!-- <label for="fileupload" class="btn-upload"> 
                            Unggah Logo
                            <input type="file" @change="onFileSelected($event,k)" class="col-12" ref="ppupload" id="fileupload" style="display:none;" multiple/>
                            </label> -->
                            <q-btn color="grey-8" label="Unggah Logo" no-caps dense style="height:30px;margin-top:auto;" class="q-ml-sm" @click="onUnggah('ppupload' + k)"/>
                        </div>
                        <div class="col-3 text-edit">Jabatan</div>
                        <q-input
                        dense
                        outlined
                        v-model="b.position"
                        placeholder="Jabatan"
                        class="q-mb-sm col-9"
                        bg-color="white"
                        hide-bottom-space
                        />
                        <div class="col-3 text-edit">Perusahaan</div>
                        <q-input
                        dense
                        outlined
                        v-model="b.business_name"
                        placeholder="Perusahaan"
                        class="q-mb-sm col-9"
                        bg-color="white"
                        hide-bottom-space
                        />
                        <div class="col-3 text-edit">Bidang</div>
                        <q-select  outlined dense v-model="b.business_field_id" emit-value map-options :options="optbidang" label="Select Bidang Jasa" bg-color="white" class="q-mb-sm col-9" />
                        <div class="col-3 text-edit">Lokasi</div>
                        <q-input
                        dense
                        outlined
                        v-model="b.location"
                        placeholder="Lokasi"
                        class="q-mb-sm col-9"
                        bg-color="white"
                        hide-bottom-space
                        />
                        <div class="col-3 text-edit">Sejak</div>
                        <q-input
                        outlined
                        dense
                        lazy-rules
                        v-model="b.starting_year" mask="####" 
                        class="q-mb-sm col-4"
                        bg-color="white"
                        hide-bottom-space
                        hide-hint
                        placeholder="Dari"
                        bottom-slots
                        >
                        <template v-slot:after>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="dari" transition-show="scale" transition-hide="scale">
                                <q-date v-model="b.starting_year" minimal default-view="Years" emit-immediately mask="YYYY"
                                @update:model-value="checkValue" />
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                        </q-input>
                        <q-input
                        outlined
                        dense
                        lazy-rules
                        v-model="b.end_year" mask="####" 
                        class="q-mb-sm col-5"
                        bg-color="white"
                        hide-bottom-space
                        hide-hint
                        placeholder="Sampai"
                        bottom-slots
                        >
                        <template v-slot:after>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="sampai" transition-show="scale" transition-hide="scale">
                                <q-date v-model="b.end_year" minimal default-view="Years" emit-immediately mask="YYYY"
                                @update:model-value="checkValue2" />
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                        </q-input>
                        <div class="col-3 text-edit">Tautan</div>
                        <q-input
                        dense
                        outlined
                        v-model="b.portfolio"
                        placeholder="Tautan"
                        class="q-mb-sm col-9"
                        bg-color="white"
                        hide-bottom-space
                        />
                        <div class="col-12 q-my-md text-edit">Tentang Bisnis</div>
                        <q-input
                        dense
                        type="textarea"
                        outlined
                        v-model="b.business_information"
                        placeholder="Ceritakan tentang bisnis Anda"
                        class="q-mb-sm col-12"
                        bg-color="white"
                        hide-bottom-space
                        />
                        <div class="col-4 text-edit">Produk</div>
                        <div class="col-8 q-pl-md text-edit">Keterangan</div>
                        <div v-for="(p,l) in b.produk" :key="l" class="col-12 row justify-center">
                            <q-img src="~assets/blogo.png" class="col-4 q-mt-md">
                                <div class="absolute-full text-subtitle2 flex flex-center">
                                    <q-btn label="Unggah Produk Bisnis Anda" no-caps flat dense @click="onClick" class="absolute-full flex flex-center items-center"/>
                                </div>
                            </q-img>
                            <q-input
                            dense
                            type="textarea"
                            outlined
                            v-model="p.description"
                            placeholder="Keterangan tentang produk bisnis Anda"
                            class="q-mb-sm col-8 q-pl-md q-mt-md"
                            bg-color="white"
                            hide-bottom-space
                            />
                            <q-btn class="col-7 q-mt-md" color="primary" icon="close" label="Hapus Produk" flat dense @click="removeproduk(k,l)" no-caps v-if="l > 0"  style="font-style:italic;"/>
                        </div>
                        <div class="col-12 row justify-center q-my-md">
                            <q-btn class="col-7 " color="primary" icon="add" label="Tambah Produk" flat dense @click="addproduk(k)" no-caps   style="font-style:italic;"/>
                        </div>
                        <hr style="border:1px solid #b2b2b2;" class="col-12">
                        <div class="col-12 row justify-center">
                            <q-btn class="col-7 q-mt-md" color="primary" icon="close" label="Hapus Bisnis" flat dense @click="removebisnis(k)" no-caps v-if="k > 0"  style="font-style:italic;"/>
                        </div>
                    </div>
                        <div class="row justify-center q-mt-md">
                            <q-btn class="col-7 " color="primary" icon="add" label="Tambah Bisnis" flat dense @click="addbisnis" no-caps   style="font-style:italic;"/>
                        </div>
                </q-card-section>
                <q-card-actions align="center" class="q-mb-md">
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dbisnis', false)" class="col-5"/>
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
export default {
    props:[
        'dbisnis',
        'userbaru',
        'bisnisfield',
    ],
    emits:[
        'update:dbisnis',
        'update:userbaru'
    ],
    computed:{
        databis(){
            return this.$store.state.myprofil.databisnis
        }
    },
    created(){
        this.bisnisfield.forEach(element => {
        let opt ={}
        opt.label = element.name
        opt.value = element.id
        this.optbidang.push(opt)
        })
    },
    mounted(){
        if(Object.keys(this.databis).length > 0){
            let x = [...this.databis]
            x.forEach(el=>{
                el.produk.forEach(al=>{
                    this.elproduk.push({
                        deskripsi:al.description,
                        bisnisid:al.user_bussiness_id
                    })
                })
                this.bisnis.push({
                    prevlogo:'',
                    id:el.id,
                    position:el.position,
                    business_name:el.business_name,
                    portfolio:el.portfolio,
                    location:el.location,
                    business_information:el.business_information,
                    business_field_id:el.business_field_id,
                    starting_year:el.starting_year,
                    end_year:el.end_year,
                    produk:[]
                })
            })
            this.elproduk.forEach(pr=>{
                this.bisnis.forEach(bs=>{
                    if(pr.bisnisid === bs.id){
                        bs.produk.push({
                            description: pr.deskripsi
                        })
                    }
                })
            })
        }else{
            this.bisnis.push({
                prevlogo:'',
                id:'',
                position:'',
                business_name:'',
                portfolio:'',
                location:'',
                business_information:'',
                business_field_id:'',
                starting_year:'',
                end_year:'',
                produk:[
                    {
                        description:''
                    }
                ]
            })
        }
        
    },
    data(){
        return{
            optbidang:[],
            bisnis:[],
            send:[],
            load:false,
            disabled:false,
            elproduk:[]
        }
    },
    methods:{
        onUnggah(val){
            this.$refs[val].click()
        },
        onFileSelected(event, value){
            this.bisnis[value].prevlogo = URL.createObjectURL(event.target.files[0])
            console.log("event",event)
            console.log("value",value)
        },
        addproduk(val){
            if(Object.keys(this.bisnis[val].produk).length < 3){
                this.bisnis[val].produk.push({
                    description:'',
                })
            }
        },
        addbisnis(){
            this.bisnis.push({
                business_name: '',
                business_field_id: '',
                position: '',
                location: '',
                starting_year: '',
                end_year: '',
                business_information: '',
                portfolio: '',
                produk:[
                    {
                    description:'',
                    }
                ]
            })
        },
        removebisnis(val){
            this.bisnis.splice(val,1)
        },
        removeproduk(bisnis,produk){
            this.bisnis[bisnis].produk.splice(produk,1)
        },
        onSave(){
            this.load = true
            this.disabled = true
            // this.bisnis.forEach(el=>{
            //     this.send.push({
            //         business_name: el.business_name,
            //         business_field_id: el.business_field_id,
            //         position: el.position,
            //         location: el.location,
            //         starting_year: el.starting_year,
            //         end_year: el.end_year,
            //         business_information: el.business_information,
            //         portfolio: el.portfolio,
            //     })
            // })
            let fd = new FormData();
            let z = {
                prevlogo:'aa',
                id:'el.id',
                position:'el.position',
                business_name:'el.business_name',
                portfolio:'el.portfolio',
                location:'el.location',
                business_information:'el.business_information',
                business_field_id:'el.business_field_id',
                starting_year:'el.starting_year',
                end_year:'el.end_year',
                produk:[
                    {
                        deskripsi:'al.description'
                    }
                ]
            }
            let m = []
            for (let index = 0; index < 5; index++) {
                m.push(z)
            }
            fd.append("z",JSON.stringify(m))
//             var fd = new FormData();
// fd.append("key", JSON.stringify(["a","b","c"]));

// var str_arr = fd.get("key");
// console.log(str_arr); // string format
// console.log(JSON.parse(str_arr)); // array format
            this.$store.dispatch('myprofil/updBisnis',fd)
            .then(()=>{
                this.load = false
                this.disabled = false
                if (this.userbaru) {
                    this.$emit('update:dbisnis', false)
                    this.$emit('update:userbaru', false)
                }else{
                    this.$emit('update:dbisnis', false)
                }   
            })
        },
        checkValue (val, reason, details) {
            if (reason === 'year') {
                this.$refs.dari.hide()
            }
        },
        checkValue2 (val, reason, details) {
            if (reason === 'year') {
                this.$refs.sampai.hide()
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
.q-img__content > div{
    background: rgba(0, 0, 0, 0.17);
    opacity:0;
}
.q-img__content:hover > div{
    cursor: pointer;
    opacity:1;
}
.btn-upload{
    background: #616161;
    color: white;
    padding:5px 5px;
    border-radius:4px;
    height:30px;
    margin-top:auto;
}
.btn-upload:hover{
    cursor:pointer;
}
</style>