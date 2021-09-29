<template>
  <q-page padding>
    <q-card flat>
     
      <q-card-section>
            <q-stepper v-model="step" ref="stepper" color="primary" animated contracted flat inactive-color="white" done-color="primary"
            >
            <q-step
                :name="1"
                :done="step > 1"
            >
                <div class="text-h5 text-bold text-primary">ISI BIODATA</div>
                <div class="text-subtitle2 q-mt-none q-mb-lg text-justify">
                Mohon isikan biodata Anda dengan benar
                </div>
                <q-input
                outlined
                v-model="user.email"
                label="Nama Lengkap"
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
                label="Alamat Email Aktif"
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
                label="No. Whatsapp Aktif"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
                >
                <template v-slot:hint>
                  *) Isi untuk dihubungi lebih lanjut/Pengiriman Kode Verifikasi
                </template>
                </q-input>
                <q-input
                outlined
                v-model="user.email"
                label="Tempat Lahir"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
                ]"
                class="q-mb-sm q-mt-lg"
                bg-color="white"
                />
                <q-input
                outlined
                label="Tanggal Lahir"
                lazy-rules
                v-model="date" mask="date" :rules="[(val) => (val && val.length > 0) || 'Tanggal Lahir tidak boleh kosong']"
                class="q-mb-sm "
                bg-color="white"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="date">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <!-- <p class="q-mt-lg">Tanggal Lahir : </p>

                <div class="row ">
                  <q-select outlined v-model="selectedtgl" :options="optiontgl" label="Tgl" bg-color="white" class="col q-pr-sm" />
                  <q-select outlined v-model="model" :options="options" label="Bulan" bg-color="white" class="col q-pr-sm" />
                  <q-select outlined v-model="model" :options="options" label="Tahun" bg-color="white" class="col q-pr-sm" />
                </div> -->
            </q-step>

            <q-step
                :name="2"
                :done="step > 2"
            >
            <div class="text-h5 text-bold text-primary">USER LOGIN</div>
                <div class="text-subtitle2 q-mb-sm text-justify">
                Buat username dan password Anda
                </div>
                <q-input
                outlined
                v-model="user.email"
                label="Username"
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
                label="password"
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
                label="konfirmasi password"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
                />
            </q-step>
            <q-step
                :name="3"
                :done="step > 3"
            >
            <div class="text-h5 text-bold text-primary">JENJANG PENDIDIKAN</div>
                <div class="text-subtitle2 q-my-none text-justify">
                Mohon isikan jenjang pendidikan Anda di ITB
                </div>
                  <q-select outlined v-model="selectedjenjang" :options="optjenjang" label="Jenjang Pendidikan Terakhir di ITB" bg-color="white" class="q-mt-md" />
                  <q-select outlined v-model="selectedprodi" :options="optprodi" label="Program Studi" bg-color="white" class="q-mt-md" />
                  <q-input
                  outlined
                  v-model="user.email"
                  label="Tahun Masuk"
                  lazy-rules
                  :rules="[
                  (val) => (val && val.length > 0) || 'Email tidak boleh kosong',
                  ]"
                  class="q-mt-md"
                  bg-color="white"
                  />
            </q-step>

            <q-step :name="4">
               <div class="text-h5 text-bold text-primary">RINGKASAN DATA</div>
                <div class="text-subtitle2 q-mb-sm text-justify">
                  Buat username dan password Anda
                </div>
                <div class="flex">

                </div>
                <q-markup-table separator="none" flat dense>
                  <tbody>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Nama Lengkap</td>
                      <td class="text-left">:</td>
                      <td class="text-left">Fajar Ilham Rosi</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Alamat Email Aktif</td>
                      <td class="text-left">:</td>
                      <td class="text-left">fajarilhamrosi@gmail.com</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">No. WhatsApp Aktif</td>
                      <td class="text-left">:</td>
                      <td class="text-left">082339946868</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Tanggal Lahir</td>
                      <td class="text-left">:</td>
                      <td class="text-left">Jambi, 20 Juni 1997</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Jenjang Pendidikan</td>
                      <td class="text-left">:</td>
                      <td class="text-left">Sarjana</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Program Studi</td>
                      <td class="text-left">:</td>
                      <td class="text-left">Teknik Informatika</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Tahun Masuk</td>
                      <td class="text-left">:</td>
                      <td class="text-left">Testing</td>
                    </tr>
                  </tbody>
                </q-markup-table>
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
                    style="border-radius: 8px;"
                    size="12px"
                />
                <q-btn
                    v-if="step === 4"
                    @click="$router.push('/otp')"
                    color="primary"
                    label="rekam data"
                    style="border-radius: 8px;"
                    size="12px"
                />
                <q-btn
                    v-else
                    @click="$refs.stepper.next()"
                    color="primary"
                    label="berikutnya"
                    style="border-radius: 8px;"
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
import {ref} from 'vue'
export default {
    setup () {
        return {
        step: ref(1)
        }
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
      date:'',
    };
  },

};
</script>
<style lang="scss">
.q-card{
  margin-top:100px;
}
.q-field--outlined .q-field__control {
  border-radius: 8px;
}
.q-stepper{
  background-color: transparent;
  .q-stepper__header{
    margin-top:-130px;
    margin-bottom: 50px;
  }
}
.q-markup-table{
  background: transparent;
}
.q-stepper__nav{
    display:flex;
    justify-content: space-between;
}
</style>