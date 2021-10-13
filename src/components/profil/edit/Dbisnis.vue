<template>
    <div>
        <q-dialog :model-value="dbisnis" @click="$emit('update:dbisnis', $event.target.value)" persistent>
            <q-card class="hide-scrollbar">
                <q-card-section>
                    <div class="q-mb-md text-edit" style="font-size:17px;">BISNIS & PEKERJAAN*</div>
                    <div class="row">
                        <q-img src="~assets/blogo.png" class="col-4">
                            <div class="absolute-full text-subtitle2 flex flex-center">
                                LOGO BISNIS
                            </div>
                        </q-img>
                        <q-btn color="grey-8" label="Unggah Logo" no-caps dense style="height:30px;margin-top:auto;" class="q-ml-sm"/>
                    </div>
                    <div class="row q-mt-md" v-for="(b,k) in bisnis" :key="k">
                        <div class="col-3 text-edit">Jabatan</div>
                        <q-input
                        dense
                        outlined
                        v-model="b.jabatan"
                        placeholder="Jabatan"
                        class="q-mb-sm col-9"
                        bg-color="white"
                        hide-bottom-space
                        />
                        <div class="col-3 text-edit">Perusahaan</div>
                        <q-input
                        dense
                        outlined
                        v-model="b.perusahaan"
                        placeholder="Perusahaan"
                        class="q-mb-sm col-9"
                        bg-color="white"
                        hide-bottom-space
                        />
                        <div class="col-3 text-edit">Bidang</div>
                        <q-select  outlined dense v-model="b.selectedbidang" emit-value map-options :options="optbidang" label="Select Bidang Jasa" bg-color="white" class="q-mb-sm col-9" />
                        <div class="col-3 text-edit">Lokasi</div>
                        <q-input
                        dense
                        outlined
                        v-model="b.lokasi"
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
                        v-model="b.dari" mask="date" 
                        class="q-mb-sm col-4"
                        bg-color="white"
                        hide-bottom-space
                        hide-hint
                        placeholder="Dari"
                        bottom-slots
                        >
                        <template v-slot:after>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="b.dari">
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
                        <span class="col-1 text-bold q-pl-sm" style="font-size:23px;">-</span>
                        <q-input
                        outlined
                        dense
                        lazy-rules
                        v-model="b.sampai" mask="date" 
                        class="q-mb-sm col-4"
                        bg-color="white"
                        hide-bottom-space
                        hide-hint
                        placeholder="Sampai"
                        bottom-slots
                        >
                        <template v-slot:after>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="b.sampai">
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
                        <div class="col-3 text-edit">Tautan</div>
                        <q-input
                        dense
                        outlined
                        v-model="b.tautan"
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
                        v-model="b.tentang"
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
                            v-model="p.keterangan"
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
                    <q-btn  no-caps label="Simpan" color="primary" @click="onSave" class="col-5"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'dbisnis',
        'userbaru'
    ],
    emits:[
        'update:dbisnis',
        'update:userbaru'
    ],
    data(){
        return{
            optbidang:[
                {
                    label:'Bidang1',
                    value:'1'
                },
                {
                    label:'Bidang2',
                    value:'2'
                },
                {
                    label:'Bidang3',
                    value:'3'
                }
            ],
            bisnis:[
                {
                    jabatan:'',
                    perusahaan:'',
                    tautan:'',
                    lokasi:'',
                    tentang:'',
                    selectedbidang:'',
                    dari:'',
                    sampai:'',
                    produk:[
                        {
                            produkimg:'',
                            keterangan:''
                        }
                    ]
                }
            ],
        }
    },
    methods:{
        addproduk(val){
            this.bisnis[val].produk.push({
                produkimg:'',
                keterangan:''
            })
        },
        addbisnis(){
            this.bisnis.push({
                jabatan:'',
                perusahaan:'',
                tautan:'',
                lokasi:'',
                selectedbidang:'',
                tentang:'',
                dari:'',
                sampai:'',
                produk:[
                    {
                        produkimg:'',
                        keterangan:''
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
            if (this.userbaru) {
                this.$emit('update:dbisnis', false)
                this.$emit('update:userbaru', false)
            }else{
                this.$emit('update:dbisnis', false)
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