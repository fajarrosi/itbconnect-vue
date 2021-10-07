<template>
  <q-page>
    <q-card flat>
      <q-card-section>
        <q-stepper
          v-model="step"
          ref="stepper"
          color="primary"
          animated
          contracted
          flat
          inactive-color="white"
          
          active-icon="primary"
        >
          <q-step :name="1" :done="step > 1">
            <div class="text-h5 text-bold text-primary">Isi BIODATA</div>
            <div class="text-subtitle2 q-mt-md text-justify">
              Mohon isikan biodata Anda dengan benar
            </div>
            <hr class="line-cards q-my-md">
            <p class="text-caption text-bold">Alamat Domisili</p>
            <q-select  outlined dense v-model="selecteddomisili" :options="optdomisili" label="Dalam Negeri / Luar Negeri" bg-color="white" class="q-mb-sm"/>
            <div class="dlm" v-if="selecteddomisili.value === '1'">
              <q-select  outlined dense v-model="selecteddomisili" :options="optdomisili" label="Provinsi" bg-color="white" class="q-mb-sm"/>
              <q-select  outlined dense v-model="selecteddomisili" :options="optdomisili" label="Kota / Kabupaten" bg-color="white" class="q-mb-sm"/>
              <q-select  outlined dense v-model="selecteddomisili" :options="optdomisili" label="Kecamatan" bg-color="white" class="q-mb-sm"/>
              <q-select  outlined dense v-model="selecteddomisili" :options="optdomisili" label="Kelurahan" bg-color="white" class="q-mb-sm"/>
              <q-input
                outlined
                dense
                v-model="user.domisili"
                label="Alamat Domisili"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Alamat Domisili tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
              />
            </div>
            <div class="luar" v-if="selecteddomisili.value === '2'">
              <q-select  outlined dense v-model="selecteddomisili" :options="optdomisili" label="Negara" bg-color="white" class="q-mb-sm"/>
              <q-input
                outlined
                dense
                v-model="user.domisili"
                label="Alamat Domisili"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Alamat Domisili tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
              />

            </div>

          </q-step>

          <q-step :name="2" :done="step > 2">
            <div class="text-h5 text-bold text-primary">Isi BIODATA</div>
            <div class="text-subtitle2 q-mt-md text-justify">
              Mohon isikan biodata Anda dengan benar
            </div>
            <hr class="line-cards q-my-md">
            <p class="text-caption text-bold">Pekerjaan Terakhir</p>
            <q-select  outlined dense v-model="selecteddomisili" :options="optdomisili" label="Profesi" bg-color="white" class="q-mb-sm"/>
            <q-select  outlined dense v-model="selecteddomisili" :options="optdomisili" label="Jabatan" bg-color="white" class="q-mb-sm"/>
          </q-step>
          <q-step :name="3" :done="step > 3">
            <div class="text-h5 text-bold text-primary">Foto Profil</div>
            <div class="text-subtitle2 q-mt-md text-justify">
              Mohon isikan biodata Anda dengan benar
            </div>
            <hr class="line-cards q-my-md">
            <input type="file" @change="onFileSelected" style="display:none;" ref="iupload"/>
            <div class="row justify-center q-mt-lg " style="color:#bfbfbf">
                <q-icon name="account_circle" size="150px"/>
            </div>
            <div class="row justify-center q-mt-sm q-mb-lg">
                <q-btn color="primary" label="Unggah" style="border-radius: 8px;" @click="$refs.iupload.click()"/>
            </div>
          </q-step>
          <q-step :name="4" :done="step > 4">
            <div class="text-h5 text-bold text-primary">Minat & Organisasi</div>
            <div class="text-subtitle2 q-mt-md text-justify">
              Silahkan isi minat dan organisasi anda
            </div>
            <hr class="line-cards q-my-md">
            <q-select
                label="Masukkan Minat & Organisasi Anda"
                outlined
                bg-color="white"
                v-model="modelAdd"
                use-input
                use-chips
                multiple
                hide-dropdown-icon
                input-debounce="0"
                new-value-mode="add"
            />
            <q-chip removable v-model="icecream" @remove="log('Icecream')" color="primary" text-color="white">
                Main
            </q-chip>
            <q-chip removable v-model="icecream" @remove="log('Icecream')" color="primary" text-color="white">
                Main
            </q-chip>
            <q-chip removable v-model="icecream" @remove="log('Icecream')" color="primary" text-color="white">
                Main
            </q-chip>
            <q-chip removable v-model="icecream" @remove="log('Icecream')" color="primary" text-color="white">
                Main
            </q-chip>
            <q-chip removable v-model="icecream" @remove="log('Icecream')" color="primary" text-color="white">
                Main
            </q-chip>
            <q-chip removable v-model="icecream" @remove="log('Icecream')" color="primary" text-color="white">
                Main
            </q-chip>
          </q-step>
          
          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn
                v-if="step > 1"
                outline
                
                @click="$refs.stepper.previous()"
                label="Sebelumnya"
                class="q-mr-sm col"
                style="border-radius: 8px; color:#bfc0c0;"
                size="12px"
                no-caps
              />

              <q-btn
                v-if="step === 3"
                flat
                color="grey-8"
                label="Lewati"
                class="q-mr-sm col"
                size="12px"
                style="padding-left:0;margin-right:-20px;"
                dense
                no-caps
              />

              <q-btn
                v-if="step === 3"
                @click="$refs.stepper.next()"
                color="primary"
                label="Simpan"
                style="border-radius: 8px"
                size="12px"
                no-caps
                class="col"
              />
              <q-btn
                v-else-if="step === 1"
                @click="$refs.stepper.next()"
                color="primary"
                label="Berikutnya"
                style="border-radius: 8px"
                size="12px"
                no-caps
                class="text-right"
              />
              <q-btn
                v-else
                @click="$refs.stepper.next()"
                color="primary"
                :label="step === 4 ? 'Lanjutkan' : 'Berikutnya'"
                style="border-radius: 8px"
                size="12px"
                no-caps
                class="col"
              />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </q-card-section>
    </q-card>
    <q-dialog v-model="intro" persistent transition-show="scale" transition-hide="scale" full-height>
            <q-carousel
                v-model="slide"
                transition-prev="jump-right"
                transition-next="jump-left"
                swipeable
                animated
                control-color="primary"
                navigation
                padding
                class=" text-black shadow-1 rounded-borders"
            >
            <template v-slot:navigation-icon="{ active, btnProps, onClick }">
              <q-btn v-if="active" size="md" :icon="btnProps.icon" color="primary" flat round dense @click="onClick" />
              <q-btn v-else size="sm" :icon="btnProps.icon" color="grey" flat round dense @click="onClick" />
            </template>
                <q-carousel-slide :name="1" class="bg-white text-black column no-wrap items-center justify-center">
                  <div class="text-h5 text-bold text-primary q-my-lg text-center">Apa itu ITBconnect?</div>
                  <q-img
                    src="~assets/question.png"
                    spinner-color="primary"
                    style="width: 118px; height: 112px;"
                    spinner-size="82px"
                  />
                <div class="q-mt-md text-center text-h6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid quisquam dignissimos iure exercitationem natus explicabo corrupti tempora sunt odit.
                </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="bg-white column no-wrap flex-center">
                <div class="text-h5 text-bold text-primary q-my-lg text-center">Apa itu ITBconnect2?</div>
                  <q-img
                    src="~assets/question.png"
                    spinner-color="primary"
                    style="width: 118px; height: 112px;"
                    spinner-size="82px"
                  />
                <div class="q-mt-md text-center text-h6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid quisquam dignissimos iure exercitationem natus explicabo corrupti tempora sunt odit.
                </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="bg-white column no-wrap flex-center">
              <div class="text-h5 text-bold text-primary q-my-lg text-center">Apa itu ITBconnect3?</div>
                  <q-img
                    src="~assets/question.png"
                    spinner-color="primary"
                    style="width: 118px; height: 112px;"
                    spinner-size="82px"
                  />
                <div class="q-mt-md text-center text-h6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid quisquam dignissimos iure exercitationem natus explicabo corrupti tempora sunt odit.
                </div>
                </q-carousel-slide>
                <template v-slot:control>
                    <q-carousel-control
                    position="top-right"
                    :offset="[18, 18]"
                    class="q-gutter-xs"
                    >
                        <q-btn color="white" text-color="black" flat dense v-close-popup no-caps icon="close"/>
                    </q-carousel-control>
                </template>
            </q-carousel>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      step: ref(1),
        modelAdd: ref(null),
    };
  },
  data() {
    return {
      user: {
        domisili:'',
        kota: '',
        provinsi:'',
        profesi:'',
        jabatan:''

      },
      load: false,
      btndisabled: false,
      errors: {},
      icecream:'',
      selectedFile:null,
      intro:false,
      selecteddomisili:'',
      slide:1,
      lorem:'testing',
      optdomisili:[
        {
          label: 'Dalam Negeri',
          value: '1'
        },
        {
          label: 'Luar Negeri',
          value: '2'
        }
      ]
          
    };
  },
  mounted(){
    this.intro = true
  },
  methods:{
    onFileSelected(event){
      this.selectedFile = event.target.files[0]
      console.log(event.target.files[0].name)
      this.onUpload()
    },
    onUpload(){
      const fd = new FormData()
      const fe = new FormData()
      // fd.append('name',value,filename)
      fe.append('image',this.selectedFile,this.selectedFile.name)
      console.log("fd",fd,"fe",fe)
      console.log("testing")
      // $axios.post('/')
    }
  }
};
</script>
<style scoped>
.q-card{
  margin-top:20px;
}
.q-field--outlined :deep() .q-field__control {
  border-radius: 8px;
}
.q-stepper{
  background-color: transparent;
    margin-left:-24px;
  margin-right:-24px;
}
.q-stepper :deep() .q-stepper__header{
    margin-top:-100px;
    /* margin-bottom: 50px; */
  }

.q-stepper__nav{
    display:flex;
    justify-content: space-between;
}
.q-carousel{
  width:480px;
  border-radius:10px;
}
div :deep() .q-dialog :deep() .q-dialog__inner{
  padding:0px;
}
.q-stepper--horizontal :deep() .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__line::after,
.q-stepper--horizontal :deep() .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__line::before{
  height:3px; 
  background:white; 
  top:6px;
}
.q-stepper--horizontal :deep() .q-stepper__tab.q-stepper__tab--active .q-stepper__line::after,
.q-stepper--horizontal :deep() .q-stepper__tab.q-stepper__tab--active .q-stepper__line::before{
  height:3px; 
  background:white; 
  top:9px;
}
.q-stepper--horizontal :deep() .q-stepper__header{
  justify-content:center !important;
}
.q-stepper--horizontal :deep() .row .q-stepper__tab{
  flex-grow:0;
  width:69px;
}

.q-stepper--horizontal :deep() .q-stepper__dot::before{
  margin-right:0;
}
.q-stepper--horizontal :deep() .q-stepper__dot::after{
  margin-left:0;
}

.q-stepper--horizontal :deep() .row .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__dot{
  min-width:16px;
  width:16px;
  height:15px;
}
.q-stepper--horizontal :deep() .row .q-stepper__tab.q-stepper__tab--active .q-stepper__dot{
  min-width:21px;
  width:21px;
  height:21px;
}
.q-btn--outline::before{
  border: 2px solid currentColor;
}
</style>