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
            <div class="text-subtitle2 q-mt-none q-mb-lg text-justify">
              Mohon isikan biodata Anda dengan benar
            </div>
            <q-input
              outlined
              v-model="user.email"
              label="Alamat Domisili"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
              ]"
              class="q-mb-sm"
              bg-color="white"
            />

            <q-input
              outlined
              v-model="user.email"
              label="Kota"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
              ]"
              class="q-mb-sm"
              bg-color="white"
            />
            <q-input
              outlined
              v-model="user.email"
              label="Provinsi"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
              ]"
              class="q-mb-sm"
              bg-color="white"
            >
            </q-input>
            <p class="text-subtitle2 text-bold">Pekerjaan Terakhir</p>
            <q-input
              outlined
              v-model="user.email"
              label="Profesi"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
              ]"
              class="q-mb-sm"
              bg-color="white"
            />
            <q-input
              outlined
              v-model="user.email"
              label="Jabatan"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
              ]"
              class="q-mb-sm"
              bg-color="white"
            />
          </q-step>

          <q-step :name="2" :done="step > 2">
            <div class="text-h5 text-bold text-primary">FOTO PROFIL</div>
            <div class="text-subtitle2 q-mb-sm text-justify">
              Mohon isikan biodata Anda dengan benar
            </div>
            <div class="row justify-center q-mt-lg text-grey-5">
                <q-icon name="account_circle" size="150px"/>
            </div>
            <div class="row justify-center q-mt-sm">
                <q-btn color="primary" label="Unggah" style="border-radius: 8px;" />
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
      data: null,
      user: {
        email: "",
        password: "",
      },
      visibility: true,
      load: false,
      btndisabled: false,
      errors: {},
      date: "",
      icecream:'',
    };
  },
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