<template>
    <div>
        <q-dialog :model-value="dbio" @click="$emit('update:dbio', $event.target.value)" @hide="$emit('update:dbio',false)">
            <q-card class="hide-scrollbar">
                <input type="file" @change="onHeaderSelected" style="display:none;" ref="hpupload"/>
                <q-img :src="prevhp ? prevhp : require('assets/bg-akun.png')" width="418px" height="153px">
                    <div class="absolute-full text-subtitle2 flex flex-center" @click="$refs.hpupload.click()">
                        <img src="~assets/edit.png" alt="edit">
                    </div>
                </q-img>
                <div class="row justify-center">
                    <input type="file" @change="onFileSelected" style="display:none;" ref="ppupload"/>
                    <!-- <q-avatar size="92px" style="margin-top:-50px;" v-if="databio.photoprofil">
                        <q-img :src="'http://127.0.0.1:8000/profile/' + databio.photoprofil" width="92px" height="92px">
                            <div class="absolute-full text-subtitle2 flex flex-center" @click="$refs.ppupload.click()">
                                <img src="~assets/edit.png" alt="edit">
                            </div>
                        </q-img>
                    </q-avatar> -->
                    <q-avatar size="92px" style="margin-top:-50px;">
                        <q-img :src="prevpp ? prevpp : require('assets/akun.png')" width="92px" height="92px">
                            <div class="absolute-full text-subtitle2 flex flex-center" @click="$refs.ppupload.click()">
                                <img src="~assets/edit.png" alt="edit">
                            </div>
                        </q-img>
                    </q-avatar>
                </div>
            
                <q-card-section class="row ">
                    <div class="col-4 text-edit">Nama Lengkap</div>
                    <div class="col-8 ">{{databio.name}}</div>
                    <div class="col-4 text-edit">Alumni</div>
                    <div class="col-8 q-my-sm">Jurusan {{databio.prodi}}, {{databio.tahunmasuk}} <br>
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
                    disable
                    >
                    <template v-slot:hint>
                        <div class="text-caption q-pa-none">
                            Untuk Edit di Profil. Domisili tempat Anda tinggal/kerja, sehingga memudahkan sesama alumni menemukan Anda. 
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
                        <q-btn color="secondary q-mr-sm q-mt-sm" outline no-caps v-for="(org,index) in dataorganisasi" :key="index">
                            <div class="text-grey-8">{{org.organization.name}}</div>
                        </q-btn>
                    </div>
                    <div class="col-12 text-grey-7 q-mt-xs" >Untuk edit di Organisasi</div>
                    <div class="col-12 text-edit q-mt-md q-mb-sm" style="font-size:17px;">TAUTAN</div>
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
        'dbio',
        'dprofil',
        'userbaru',
        'databio',
        'dataorganisasi',
        'headerprev',
        'profilprev'
    ],
    data(){
        return{
            bio:'',
            domisili:'',
            linkedin:'',
            ig:'',
            fb:'',
            tw:'',
            load:false,
            disabled:false,
            prevpp:'',
            srcpp:'',
            prevhp:'',
            srchp:''
        }
    },
    mounted(){
        this.domisili = this.databio.domisili
        this.bio = this.databio.bio
        this.linkedin = this.databio.linkedin
        this.ig = this.databio.ig
        this.fb = this.databio.fb
        this.tw = this.databio.twit
        if(this.databio.photoprofil){
            this.prevpp = this.profilprev
        }
        if(this.databio.headerprofil){
            this.prevhp = this.headerprev
        }
    },
    methods:{
        onFileSelected(event){
            this.srcpp = event.target.files[0]
            this.prevpp = URL.createObjectURL(event.target.files[0])
        },
        onHeaderSelected(event){
            this.srchp = event.target.files[0]
            this.prevhp = URL.createObjectURL(event.target.files[0])
        },
        onSave(){
            this.load = true
            this.disabled = true
            let form = new FormData()
            form.append('photo_profile',this.srcpp)
            form.append('header_profile',this.srchp)
            form.append('description',this.bio)
            form.append('facebook_url',this.fb)
            form.append('instagram_url',this.ig)
            form.append('twitter_url',this.tw)
            form.append('linkedin_url',this.linkedin)
            this.$store.dispatch('myprofil/updBio',form)
            .then(()=>{
                this.load = false
                this.disabled = false
                this.$emit('update:headerprev',this.prevhp)
                this.$emit('update:profilprev',this.prevpp)
                if(this.userbaru){
                    this.$emit('update:dbio', false)
                    this.$emit('update:dprofil', true)
                }else{
                    this.$emit('update:dbio', false)
                }
            })
            .catch(err=>{
                console.log(err)
            })
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