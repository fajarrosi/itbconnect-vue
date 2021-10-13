<template>
    <div>
        <q-dialog :model-value="dbio" @click="$emit('update:dbio', $event.target.value)" persistent>
            <q-card class="hide-scrollbar">
                <q-img src="~assets/bg-akun.png">
                    <div class="absolute-full text-subtitle2 flex flex-center" @click="onEditHeader">
                        <img src="~assets/edit.png" alt="edit">
                    </div>
                </q-img>
                <div class="row justify-center">
                    <q-avatar size="92px" style="margin-top:-50px;">
                        <q-img src="~assets/akun.png">
                            <div class="absolute-full text-subtitle2 flex flex-center" @click="onEditHeader">
                                <img src="~assets/edit.png" alt="edit">
                            </div>
                        </q-img>
                    </q-avatar>
                </div>
            
                <q-card-section class="row ">
                    <div class="col-4 text-edit">Nama Lengkap</div>
                    <div class="col-8 ">Gembong Primadjaya</div>
                    <div class="col-4 text-edit">Alumni</div>
                    <div class="col-8 q-my-sm">Jurusan Teknik Mesi, 1998 <br>
                        <span class="text-grey-8" style="font-size:11px;">Tidak bisa diubah </span>

                    </div>
                    <div class="col-4 text-edit">Domisili</div>
                    <q-input
                    dense
                    outlined
                    v-model="domisili"
                    placeholder="Tuliskan alamat domisili"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    bottom-slots
                    >
                    <template v-slot:hint>
                        <div class="text-caption q-pa-none">
                            Domisili tempat Anda tinggal/kerja, sehingga memudahkan sesama alumni menemukan Anda.
                        </div>
                    </template>
                    </q-input>
                    <div class="col-12 text-edit q-mb-sm">Bio (Max. 150 kata)</div>
                    <q-input
                    dense
                    outlined
                    type="textarea"
                    v-model="bio"
                    placeholder="Tuliskan secara singkat bio mu"
                    class="q-mb-md col-12"
                    bg-color="white"
                    hide-bottom-space
                    />
                    
                    <div class="col-2 text-edit">Minat</div>
                    <div class="col-10">
                        <q-btn color="secondary q-mr-sm" outline no-caps>
                            <div class="text-grey-8">Musik</div>
                        </q-btn>
                        <q-btn color="secondary q-mr-sm" outline no-caps>
                            <div class="text-grey-8">Musik</div>
                        </q-btn>
                        <q-btn color="secondary q-mr-sm" outline no-caps>
                            <div class="text-grey-8">Musik</div>
                        </q-btn>
                    </div>
                    <div class="col-12 text-grey-7 q-mt-xs" >Untuk edit di Personal Info-Minat&Organisasi</div>
                    <div class="col-12 text-edit" style="font-size:17px;">TAUTAN</div>
                    <div class="col-4 text-edit">Linkedin</div>
                    <q-input
                    dense
                    outlined
                    v-model="linkedin"
                    placeholder="linkedin"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <div class="col-4 text-edit">Instagram</div>
                    <q-input
                    dense
                    outlined
                    v-model="ig"
                    placeholder="instagram"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <div class="col-4 text-edit">Facebook</div>
                    <q-input
                    dense
                    outlined
                    v-model="fb"
                    placeholder="facebook"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <div class="col-4 text-edit">Twitter</div>
                    <q-input
                    dense
                    outlined
                    v-model="tw"
                    placeholder="twitter"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                </q-card-section>
                <q-card-actions align="center" class="q-mb-md">
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dbio', false)" class="col-5"/>
                    <q-btn  no-caps label="Simpan" color="primary" @click="onSave" class="col-5"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'dbio',
        'dprofil',
        'userbaru'
    ],
    data(){
        return{
            bio:'',
            domisili:'',
            linkedin:'',
            ig:'',
            fb:'',
            tw:''
        }
    },
    methods:{
        onEditHeader(){
            console.log("test")
        },
        onSave(){
            if (this.userbaru) {
                this.$emit('update:dbio', false)
                this.$emit('update:dprofil', true)
            }else{
                this.$emit('update:dbio', false)
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
</style>