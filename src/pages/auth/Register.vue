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
                <div class="text-subtitle2 q-mb-sm text-justify">
                Mohon isikan biodata Anda dengan benar
                </div>
                <q-input
                outlined
                v-model="user.name"
                label="Nama Lengkap"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Nama tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
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
                hide-bottom-space
                />
                <q-input
                outlined
                v-model="user.nowa"
                mask="############"
                label="No. Whatsapp Aktif"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Nomor Whatsapp tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
                hide-hint
                >
                <template v-slot:hint>
                  *) Isi untuk dihubungi lebih lanjut
                </template>
                </q-input>

                <q-input
                outlined
                v-model="user.tempatlahir"
                label="Tempat Lahir"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Tempat Lahir tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
                />
                <q-input
                outlined
                label="Tanggal Lahir"
                lazy-rules
                v-model="user.tgllahir" mask="date" :rules="[(val) => (val && val.length > 0) || 'Tanggal Lahir tidak boleh kosong']"
                class="q-mb-sm "
                bg-color="white"
                hide-bottom-space
                placeholder="contoh (2001/20/08)"
                >
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="user.tgllahir">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
            </q-step>

            <q-step
                :name="2"
                :done="step > 2"
            >
            <div class="text-h5 text-bold text-primary">JENJANG PENDIDIKAN</div>
                <div class="text-subtitle2 q-mb-sm text-justify">
                Mohon isikan jenjang pendidikan Anda di ITB
                </div>
                  <q-select outlined v-model="selectedjenjang" :options="optjenjang" label="Jenjang Pendidikan Terakhir di ITB" bg-color="white" />
                  <q-select outlined v-model="selectedprodi" :options="optprodi" label="Program Studi" bg-color="white" class="q-my-sm" />
                  <q-input
                  outlined
                  v-model="user.tahunmasuk"
                  label="Tahun Masuk"
                  lazy-rules
                  :rules="[
                  (val) => (val && val.length > 0) || 'Tahun masuk tidak boleh kosong',
                  ]"
                  bg-color="white"
                  hide-bottom-space
                  />
            </q-step>

            <q-step
                :name="3"
                :done="step > 3"
            >
            <div class="text-h5 text-bold text-primary">USER LOGIN</div>
                <div class="text-subtitle2 q-mb-sm text-justify">
                Buat username dan password Anda
                </div>
                <q-input
                outlined
                v-model="user.username"
                label="Username"
                lazy-rules
                :rules="[
                (val) => (val && val.length > 0) || 'Username tidak boleh kosong',
                ]"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
                />
                <q-input outlined bottom-slots v-model="user.password" :type="visibility ? 'password' : 'text' " label="Password" 
                lazy-rules
                :rules="[val => val.length >= 6 || 'Password minimal 6 karakter']"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
                >
                        <template v-slot:append>
                            <q-icon :name="visibility ? 'visibility' : 'visibility_off' " @click="visibility = !visibility" class="cursor-pointer"/>
                        </template>
                </q-input>
                <q-input outlined bottom-slots v-model="user.konfirmasi" :type="visibility ? 'password' : 'text' " label="Konfirmasi Password" 
                lazy-rules
                :rules="[ val => val && val.length >= 6 || 'konfirmasi password minimal 6 karakter', val => konfirmasi(val)]"
                bg-color="white"
                hide-bottom-space
                >
                    <template v-slot:append>
                    <q-icon :name="visibility ? 'visibility' : 'visibility_off' " @click="visibility = !visibility"/>
                    </template>
                </q-input>
            </q-step>
            

            <q-step :name="4">
              <div class="text-h5 text-bold text-primary">RINGKASAN DATA</div>
                <div class="text-subtitle2 q-mb-sm text-justify">
                  Berikut ringkasan data yang telah Anda Isi
                </div>
                <div class="flex">

                </div>
                <q-markup-table separator="none" flat dense>
                  <tbody>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Username</td>
                      <td class="text-left">:</td>
                      <td class="text-left">{{user.username}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Password</td>
                      <td class="text-left">:</td>
                      <td class="text-left">{{user.password}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Nama Lengkap</td>
                      <td class="text-left">:</td>
                      <td class="text-left">{{user.name}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Alamat Email Aktif</td>
                      <td class="text-left">:</td>
                      <td class="text-left">{{user.email}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">No. WhatsApp Aktif</td>
                      <td class="text-left">:</td>
                      <td class="text-left">{{user.nowa}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Tanggal Lahir</td>
                      <td class="text-left">:</td>
                      <td class="text-left">{{user.tempatlahir +', ' + formattgl()}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Jenjang Pendidikan</td>
                      <td class="text-left">:</td>
                      <td class="text-left">{{selectedjenjang}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Program Studi</td>
                      <td class="text-left">:</td>
                      <td class="text-left">{{selectedprodi}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left">Tahun Masuk</td>
                      <td class="text-left">:</td>
                      <td class="text-left">{{user.tahunmasuk}}</td>
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
import { date } from 'quasar'
export default {
  data() {
    return {
      user: {
        name:'',
        email: '',
        password: '',
        nowa:'',
        tempatlahir:'',
        tgllahir:'',
        tahunmasuk:'',
        username:'',
        password:'',
        konfirmasi:''
      },
      visibility: true,
      load: false,
      btndisabled: false,
      errors: {},
      step:1,
      optjenjang:[
        'Sarjana (S1)',
        'Sarjana (S2)',
        'Sarjana (S3)',
        'Diploma'
      ],
      optprodi:[
        'FTE',
        'FTI'
      ],
      selectedjenjang:'',
      selectedprodi:''
    };
  },
  computed: {
    alumni(){
      return this.$store.state.auth.alumnireg
    }
  },
  mounted(){
    if (this.alumni.id) {
      this.user.name = this.alumni.complete_name
      this.user.email = this.alumni.email
      this.user.tgllahir = this.alumni.dob
      // todo user tempat lahir, jenjang, tahun masuk, no wa,prodi
      this.step = 3
      this.selectedjenjang = 'Sarjana (S1)'
      this.selectedprodi = 'FTE'
      this.user.tahunmasuk = '2003'
    }else{
      this.step = 1
    }
  },
  methods:{
    konfirmasi(val){
            if(val === this.user.password){
                return true;
            }else{
                return 'Password tidak sama';
            }
    },
    formattgl(){
      let tgl = date.formatDate(this.user.tgllahir,'DD MMMM YYYY')
      return tgl
    }
  }
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