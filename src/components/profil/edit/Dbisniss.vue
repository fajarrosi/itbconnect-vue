<template>
    <div class="dbisniss">
        <q-dialog :model-value="dbisnis" @click="$emit('update:dbisnis', $event.target.value)" persistent>
            <q-card class="hide-scrollbar">
                <q-form @submit.prevent.stop="onSave" ref="dform" class="q-gutter-md">
                <q-scroll-area style="height: 80vh;">
                <q-card-section>
                    <div class="row q-mt-md">
                            <input type="file" @change="onFileSelected($event)" class="col-12" ref="logoupload" style="display:none;"/>
                            <div class="row col-12 q-mb-md">
                                <q-img :src="bisnis.prevlogo ? bisnis.prevlogo : require('assets/blogo.png')" width="129px" height="127px" class="col-4 q-mr-sm">
                                    <div class="absolute-full text-subtitle2 flex flex-center">
                                        LOGO BISNIS
                                    </div>
                                </q-img>
                                <q-btn color="grey-8" label="Unggah Logo" no-caps dense style="height:30px;margin-top:auto;" class="q-ml-sm" @click="$refs.logoupload.click()"/>
                            </div>
                            <div class="col-3 text-edit">Jabatan</div>
                            <q-input
                            dense
                            outlined
                            v-model="bisnis.position"
                            placeholder="Jabatan"
                            class="q-mb-sm col-9"
                            bg-color="white"
                            hide-bottom-space
                            />
                            <div class="col-3 text-edit">Perusahaan</div>
                            <q-input
                            dense
                            outlined
                            v-model="bisnis.business_name"
                            placeholder="Perusahaan"
                            class="q-mb-sm col-9"
                            bg-color="white"
                            hide-bottom-space
                            />
                            <div class="col-3 text-edit">Bidang<span class="text-negative">*</span></div>
                            <q-select  outlined dense v-model="bisnis.business_field_id" emit-value map-options :options="optbidang" label="Select Bidang Jasa" bg-color="white" class="q-mb-sm col-9"
                            lazy-rules
                            :rules="[
                                val => val !== null && val !== '' || 'Bidang tidak boleh kosong',
                            ]"
                            hide-bottom-space
                            />
                            <div class="col-3 text-edit">Lokasi</div>
                            <q-input
                            dense
                            outlined
                            v-model="bisnis.location"
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
                            v-model="bisnis.starting_year" mask="####" 
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
                                    <q-date v-model="bisnis.starting_year" minimal default-view="Years" emit-immediately mask="YYYY"
                                    @update:model-value="checkValue" />
                                </q-popup-proxy>
                                </q-icon>
                            </template>
                            </q-input>
                            <q-input
                            outlined
                            dense
                            lazy-rules
                            v-model="bisnis.end_year" mask="####" 
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
                                    <q-date v-model="bisnis.end_year" minimal default-view="Years" emit-immediately mask="YYYY"
                                    @update:model-value="checkValue2" />
                                </q-popup-proxy>
                                </q-icon>
                            </template>
                            </q-input>
                            <div class="col-3 text-edit">Tautan</div>
                            <q-input
                            dense
                            outlined
                            v-model="bisnis.portfolio"
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
                            v-model="bisnis.business_information"
                            placeholder="Ceritakan tentang bisnis Anda"
                            class="q-mb-sm col-12"
                            bg-color="white"
                            hide-bottom-space
                            />
                            <div class="col-4 text-edit">Produk</div>
                            <div class="col-8 q-pl-md text-edit">Keterangan</div>
                            <div v-for="(p,l) in bisnis.produk" :key="l" class="col-12 row justify-center">
                            <input type="file" @change="onFileSelected2($event,l)" class="col-12" :ref="'productupload' + l" style="display:none;"/>
                                <q-img :src="p.prevproduct ? p.prevproduct : require('assets/blogo.png')" class="col-4 q-mt-md" width="128px" height="152px">
                                    <div class="absolute-full text-subtitle2 flex flex-center">
                                        <q-btn label="Unggah Produk Bisnis Anda" no-caps flat dense @click="$refs['productupload'+l].click()" class="absolute-full flex flex-center items-center"/>
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
                                <q-btn class="col-7 q-mt-md" color="primary" icon="close" label="Hapus Produk" flat dense @click="removeproduk(l,p.id)" no-caps v-if="l > 0"  style="font-style:italic;"/>
                            </div>
                            <div class="col-12 row justify-center q-my-md">
                                <q-btn class="col-7 " color="primary" icon="add" label="Tambah Produk" flat dense @click="addproduk()" no-caps   style="font-style:italic;"/>
                            </div>
                        </div>
                </q-card-section>
                </q-scroll-area >
                <q-card-actions align="center" class="q-mb-md">
                        <q-btn  no-caps label="Kembali" outline
                        style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dbisnis', false)" class="col-5" :disabled="disabled"/>
                        <q-btn  no-caps label="Simpan" type="submit" class="col-5 btn-radius" :loading="load"
                :disabled="disabled" color="primary">
                        <template v-slot:loading>
                            <div class="row items-center">
                                <q-spinner-facebook />  
                            </div>
                        </template>
                    </q-btn>
                </q-card-actions>
                </q-form>
            </q-card>
        </q-dialog>
        <dialogdeletes v-model:ddelete="ddelete" v-if="ddelete" v-model:dload="dload" v-model:ddisabled="ddisabled"/>
    </div>
</template>

<script>
import {  mapState } from "vuex"
import { useQuasar } from 'quasar'
export default {
    setup(){
        const $q = useQuasar()
        return {
            failNotif(){
                $q.notify({
                message: 'Maksimal 3 Produk. ',
                type: 'negative',
                position: 'top',
                progress: true
                })
            },
            successNotif () {
                $q.notify({
                message: 'Bisnis berhasil dibuat',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failedNotif () {
                $q.notify({
                message: 'Bisnis gagal dibuat',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            successNotif2 () {
                $q.notify({
                message: 'Bisnis berhasil diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
            failedNotif2 () {
                $q.notify({
                message: 'Bisnis gagal diperbarui',
                type: 'positive',
                position: 'top',
                progress: true
                })
            },
        }
    },
    props:[
        'dbisnis',
        'id',
        'edit'
    ],
    components:{
        'dialogdeletes' : require('components/DialogDelete.vue').default,
    },
    computed:{
        ...mapState('myprofil',['databisnis','bisnisfield']),
        
    },
    data(){
        return{
            bisnis:{
                prevlogo:'',
                srclogo:'',
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
                        description:'',
                        srcproduct:'',
                        prevproduct:''
                    }
                ]
            },
            optbidang:[],
            load:false,
            disabled:false,
            ddelete:false,
            dload:false,
            ddisabled:false,
            deleteid:'',
            produkid:''
        }
    },
    created(){
        this.bisnisfield.forEach(element => {
        let opt ={}
        opt.label = element.name
        opt.value = element.id
        this.optbidang.push(opt)
        })
        if(this.id){
            // let x = [...this.databisnis]
            let res = this.databisnis.find(k=> k.id == this.id)
            this.bisnis = {
                id : res.id,
                prevlogo: '',
                srclogo:'',
                position : res.position,
                business_name : res.business_name,
                portfolio : res.portfolio,
                location : res.location,
                business_information : res.business_information,
                business_field_id : res.business_field_id,
                starting_year : res.starting_year,
                end_year : res.end_year,
                produk: []
            }
            res.produk.forEach(el=>{
                if(el.product_image){
                    this.bisnis.produk.push({
                        description : el.description,
                        prevproduct : this.produkimg + el.product_image,
                        srcproduct:'',
                        id:el.id
                    })
                }else{
                    this.bisnis.produk.push({
                        description : el.description,
                        prevproduct : '',
                        srcproduct:'',
                        id:el.id
                    })

                }
                
            })
            if(res.logo){
                this.bisnis.prevlogo = this.bisnislogo + res.logo
            }
        }else{
            this.bisnis = {
                prevlogo:'',
                srclogo:'',
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
                        description:'',
                        srcproduct:'',
                        prevproduct:''
                    }
                ]
            }
        }
    },
    methods:{
        checkValue (val, reason, details) {
            if (reason === 'year') {
                this.$refs.dari.hide()
            }
        },
        checkValue2 (val, reason, details) {
            if (reason === 'year') {
                this.$refs.sampai.hide()
            }
        },
        addproduk(){
            if(this.bisnis.produk.length < 3){
                this.bisnis.produk.push({
                description:'',
                srcproduct:'',
                prevproduct:''
                })
            }else{
                this.failNotif()
            }
            
        },
        removeproduk(produk,val){
            if(val){
                this.deleteid = val
                this.produkid = produk
                this.ddelete = true
            }else{
                this.produkid = produk
                this.ddelete = true
                // this.bisnis.produk.splice(produk,1)
            }
        },
        onFileSelected(event){
            this.bisnis.srclogo = event.target.files[0]
            this.bisnis.prevlogo = URL.createObjectURL(event.target.files[0])
        },
        onFileSelected2(event,val){
            this.bisnis.produk[val].prevproduct = URL.createObjectURL(event.target.files[0])
            this.bisnis.produk[val].srcproduct = event.target.files[0]
        },
        onSave(){
            this.$refs.dform.validate()
            .then(valid=>{
                if(valid){
                    this.load = true
                    this.disabled = true
                    let fd = new FormData()
                    fd.append('bisnis',JSON.stringify(this.bisnis))
                    fd.append('logo',this.bisnis.srclogo)
                    let srcproduk = this.bisnis.produk.map(x=> x.srcproduct)
                    for (let i = 0; i < srcproduk.length; i++) {
                        fd.append(`produk[${i}]`,srcproduk[i])
                    }
                    if(this.edit){ //update
                        let send = {
                            id: this.id,
                            data:fd
                        }
                        this.$store.dispatch('myprofil/updBisnis',send)
                        .then(()=>{
                            this.load = false
                            this.disabled = false
                            this.$emit('update:dbisnis', false)
                            this.successNotif2()
                        })
                        .catch(()=>{
                                this.load = false
                                this.disabled = false
                                this.$emit('update:dbisnis', false)
                                this.failedNotif2()
                        })
                    }else{ //create new
                        this.$store.dispatch('myprofil/createBisnis',fd)
                        .then(()=>{
                            this.load = false
                            this.disabled = false
                            this.$emit('update:dbisnis', false)
                            this.successNotif()
                        })
                        .catch(()=>{
                                this.load = false
                                this.disabled = false
                                this.$emit('update:dbisnis', false)
                                this.failedNotif()
                        })
                    }
                }
            })
            
        },
        onDeleting(){
            this.dload = true
            this.ddisabled = true
            if(this.deleteid){
                this.$store.dispatch('myprofil/delProduk',this.deleteid)
                .then(()=>{
                    this.bisnis.produk.splice(this.produkid,1)
                    this.dload = false
                    this.ddisabled = false
                    this.ddelete = false
                })
            }else{
                setTimeout(() => {
                    this.bisnis.produk.splice(this.produkid,1)
                    this.dload = false
                    this.ddisabled = false
                    this.ddelete = false
                }, 1000);
            }
        }
    }
}
</script>

<style scoped>
.q-card{
    width: 418px;
    border-radius:10px;
}
.q-img__content > div{
    background: rgba(0, 0, 0, 0.17);
    opacity:0;
}
.q-img__content:hover > div{
    cursor: pointer;
    opacity:1;
}
</style>