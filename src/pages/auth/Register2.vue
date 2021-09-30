<template>
  <q-page padding>
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
          done-color="primary"
        >
          <q-step :name="1" :done="step > 1">
            <div class="text-h5 text-bold text-primary">ISI BIODATA</div>
            <div class="text-subtitle2 q-mb-sm text-justify">
              Mohon isikan biodata Anda dengan benar
            </div>
            <q-input
              outlined
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

            <q-input
              outlined
              v-model="user.kota"
              label="Kota"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Kota tidak boleh kosong',
              ]"
              class="q-mb-sm"
              bg-color="white"
              hide-bottom-space
            />
            <q-input
              outlined
              v-model="user.provinsi"
              label="Provinsi"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Provinsi tidak boleh kosong',
              ]"
              class="q-mb-sm"
              bg-color="white"
              hide-bottom-space
            >
            </q-input>
            <p class="text-subtitle2 text-bold">Pekerjaan Terakhir</p>
            <q-input
              outlined
              v-model="user.profesi"
              label="Profesi"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Profesi tidak boleh kosong',
              ]"
              class="q-mb-sm"
              bg-color="white"
              hide-bottom-space
            />
            <q-input
              outlined
              v-model="user.jabatan"
              label="Jabatan"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Jabatan tidak boleh kosong',
              ]"
              class="q-mb-sm"
              bg-color="white"
              hide-bottom-space
            />
          </q-step>

          <q-step :name="2" :done="step > 2">
            <div class="text-h5 text-bold text-primary">FOTO PROFIL</div>
            <div class="text-subtitle2 q-mb-sm text-justify">
              Mohon isikan biodata Anda dengan benar
            </div>
            <input type="file" @change="onFileSelected" style="display:none;" ref="iupload"/>
            <div class="row justify-center q-mt-lg text-grey-5">
                <q-icon name="account_circle" size="150px"/>
            </div>
            <div class="row justify-center q-mt-sm">
                <q-btn color="primary" label="Unggah" style="border-radius: 8px;" @click="$refs.iupload.click()"/>
            </div>
          </q-step>
          <q-step :name="3" :done="step > 3">
            <div class="text-h5 text-bold text-primary">Hobi & Minat</div>
            <div class="text-subtitle2 q-my-none text-justify">
              Mohon Isi minimal 3 tag
            </div>
            
            <q-select
                label="Masukkan Hobi & Minat Anda"
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
                color="primary"
                @click="$refs.stepper.previous()"
                label="sebelumnya"
                class="q-mr-sm"
                style="border-radius: 8px"
                size="12px"
              />

              <q-btn
                v-if="step === 2"
                flat
                color="primary"
                label="Lewati"
                class="q-mr-sm"
                style="border-radius: 8px"
                size="12px"
              />

              <q-btn
                @click="$refs.stepper.next()"
                color="primary"
                :label="step === 3 ? 'Lanjutkan' : 'berikutnya'"
                style="border-radius: 8px"
                size="12px"
              />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </q-card-section>
    </q-card>
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
      selectedFile:null
    };
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
<style lang="scss">
.q-card {
  margin-top: 100px;
}
.q-field--outlined .q-field__control {
  border-radius: 8px;
}
.q-stepper {
  background-color: transparent;
  .q-stepper__header {
    margin-top: -130px;
    margin-bottom: 50px;
  }
}
.q-markup-table {
  background: transparent;
}
.q-stepper__nav{
    display:flex;
    justify-content: space-between;
}
</style>