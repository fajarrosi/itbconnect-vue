<template>
    <div>
        <div class="text-h5 text-bold text-primary">Foto Profil</div>
        <div class="text-subtitle2 q-mt-md text-justify">
            Mohon isikan biodata Anda dengan benar
        </div>
        <hr class="line-cards q-my-md">
        <div class="row justify-center q-mt-lg ">
            
            <q-avatar size="150px" v-if="previmg">
                <img :src="previmg" >
            </q-avatar>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="136" height="130" viewBox="0 0 136 130" class="col-6" v-else>
            <defs>
                <clipPath id="clip-path">
                <rect id="Rectangle_481" data-name="Rectangle 481" width="136" height="112" transform="translate(-0.257 0.485)" fill="#bfbfbf"/>
                </clipPath>
                <clipPath id="clip-path-2">
                <circle id="Ellipse_97" data-name="Ellipse 97" cx="63" cy="63" r="63" transform="translate(0.227 -0.031)" fill="#fff"/>
                </clipPath>
            </defs>
            <g id="Group_921" data-name="Group 921" transform="translate(-146 -453)">
                <g id="Group_584" data-name="Group 584" transform="translate(146.257 452.515)" clip-path="url(#clip-path)">
                <circle id="Ellipse_94" data-name="Ellipse 94" cx="63" cy="63" r="63" transform="translate(4.743 4.485)" fill="#bfbfbf"/>
                </g>
                <circle id="Ellipse_95" data-name="Ellipse 95" cx="26" cy="26" r="26" transform="translate(188 478)" fill="#fff"/>
                <g id="Group_585" data-name="Group 585" transform="translate(150.773 457.031)" clip-path="url(#clip-path-2)">
                <ellipse id="Ellipse_96" data-name="Ellipse 96" cx="46" cy="46.5" rx="46" ry="46.5" transform="translate(17.227 72.969)" fill="#fff"/>
                </g>
            </g>
            </svg>
            <input type="file" @change="onFileSelected" style="display:none;" ref="iupload"/>
        </div>
        <div class="row justify-center q-mt-sm q-mb-lg">
            <q-btn color="primary" label="Unggah" style="border-radius: 8px;" @click="$refs.iupload.click()"/>
        </div>
        <div class="row justify-between" style="margin-top:70px;margin-bottom:-22px;">
        <q-btn
        outline
        label="Sebelumnya"
        class="q-mr-sm col-4"
        style="border-radius: 8px; color:#707070;"
        size="12px"
        no-caps
        @click="prev()"
        />
        <q-btn
        flat
        color="grey-8"
        label="Lewati"
        class="q-mr-sm col-2"
        size="12px"
        style="padding-left:0;margin-right:-20px;"
        dense
        no-caps
        @click="nextstep()"
        />

        <q-btn
        color="primary"
        label="Simpan"
        style="border-radius: 8px"
        size="12px"
        no-caps
        class="col-5"
        @click="onSave()"
        />
        </div>
    </div>
</template>

<script>
export default {
    emits:['update:src','update:previmg','update:step'],
    props:[
        'src',
        'previmg',
        'step'
    ],
    data(){
        return{
            srcimg:null,
            preview:null
        }
    },
    methods:{
        prev(){
            this.$emit('update:step',2)
        },
        nextstep(){
            this.$emit('update:previmg','')
            this.$emit('update:src','')
            this.$emit('update:step',4)
        },
        onSave(){
            this.$emit('update:src',this.srcimg)
            this.$emit('update:previmg',this.preview)
            this.$emit('update:step',4)
        },
        onFileSelected(event){
            this.srcimg = event.target.files[0]
            this.preview = URL.createObjectURL(event.target.files[0])
            this.$emit('update:previmg',this.preview)
        },
        onUpload(){
        const fe = new FormData()
        // fd.append('name',value,filename)
        fe.append('image',this.selectedFile,this.selectedFile.name)
        },
    }
}
</script>

<style>
.q-btn--outline::before{
  border: 2px solid currentColor;
}
</style>