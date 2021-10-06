<template>
  <q-page >
    <q-card flat>
     
      <q-card-section>
            <q-stepper v-model="step" ref="stepper" color="primary" animated contracted flat inactive-color="white" 
            active-icon="primary"
            >
            <q-step
                :name="1"
                :done="step > 1"
            >
                <div class="text-h5 text-bold text-primary">ISI BIODATA</div>
                <div class="text-subtitle2 q-mt-md text-justify">
                Mohon isikan biodata Anda dengan benar
                </div>
                <hr class="line-cards q-my-md">
                <q-input
                dense
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
                dense
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
                dense
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
                >
                <template v-slot:hint>
                  *) Isi untuk dihubungi lebih lanjut
                </template>
                </q-input>

                <q-input
                outlined
                dense
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
                <div class="text-subtitle2">
                Tanggal Lahir
                </div>
                <div class="row q-my-sm justify-between">
                  <q-select emit-value map-options outlined dense v-model="selectedtgl" :options="opttgl" label="Tgl" bg-color="white" class="col-3"/>
                  <q-select emit-value map-options outlined dense v-model="selectedbln" :options="optbln" label="Bulan" bg-color="white" class="col-4"/>
                  <q-select emit-value map-options outlined dense v-model="selectedthn" :options="optthn" label="Tahun" bg-color="white" class="col-4"/>
                </div>
                <!-- <q-input
                outlined
                dense
                label="Tanggal Lahir"
                lazy-rules
                v-model="user.tgllahir" mask="date" :rules="[(val) => (val && val.length > 0) || 'Tanggal Lahir tidak boleh kosong']"
                class="q-mb-sm "
                bg-color="white"
                hide-bottom-space
                hide-hint
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
                  <template v-slot:hint>
                  *) Pilih tanggal dengan mengklik icon disebelah kanan
                  </template>
                </q-input> -->
                
                <q-checkbox v-model="cek" label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, veritatis." />
            </q-step>

            <q-step
                :name="2"
                :done="step > 2"
            >
            <div class="text-h5 text-bold text-primary">JENJANG PENDIDIKAN</div>
                <div class="text-subtitle2 q-mt-md text-justify">
                Mohon isikan jenjang pendidikan Anda di ITB
                </div>
                <hr class="line-cards q-my-md">
                  <q-select  outlined dense v-model="user.selectedjenjang" :options="optjenjang" label="Jenjang Pendidikan Terakhir di ITB" bg-color="white" />
                  <q-select  outlined dense v-model="user.selectedprodi" :options="optprodi" label="Program Studi" bg-color="white" class="q-my-sm" />
                  <!-- <q-select  outlined dense v-model="user.selectedprodi" :options="options" label="Program Studi" bg-color="white" class="q-my-sm"  @filter="filterProdi" use-input
        input-debounce="0" /> -->
                  <div class="row items-center">
                    <q-input
                    outlined
                    dense
                    v-model="user.tahunmasuk"
                    label="Tahun Masuk"
                    lazy-rules
                    :rules="[
                    (val) => (val && val.length > 0) || 'Tahun masuk tidak boleh kosong',
                    ]"
                    bg-color="white"
                    class="col-4"
                    hide-bottom-space
                    />
                    <p class="q-mb-none text-bold q-mx-md" style="font-size:20px;">-</p>
                    <q-input
                    outlined
                    dense
                    v-model="user.tahunkeluar"
                    label="Tahun Keluar"
                    lazy-rules
                    :rules="[
                    (val) => (val && val.length > 0) || 'Tahun keluar tidak boleh kosong',
                    ]"
                    bg-color="white"
                    class="col-4"
                    hide-bottom-space
                    />
                  </div>
            </q-step>

            <q-step
                :name="3"
                :done="step > 3"
            >
            <div class="text-h5 text-bold text-primary">USER LOGIN</div>
                <div class="text-subtitle2 q-mt-md text-justify">
                Buat username dan password Anda
                </div>
                <hr class="line-cards q-my-md">
                <q-input
                outlined
                dense
                v-model="user.username"
                label="Username"
                lazy-rules
                :rules="[
                validUsername, val => val && val.length > 0 || 'Username tidak boleh kosong'
                ]"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
                />
                <q-input outlined bottom-slots v-model="user.password" :type="visibility ? 'password' : 'text' " label="Password" 
                lazy-rules
                dense
                :rules="[val => val.length >= 6 || 'Password minimal 6 karakter']"
                class="q-mb-sm"
                bg-color="white"
                hide-bottom-space
                >
                        <template v-slot:append>
                            <q-icon :name="visibility ? 'visibility' : 'visibility_off' " @click="visibility = !visibility" class="cursor-pointer"/>
                        </template>
                </q-input>
                <q-input outlined bottom-slots v-model="user.konfirmasi" :type="visibility2 ? 'password' : 'text' " label="Konfirmasi Password" 
                lazy-rules
                dense
                :rules="[ val => val && val.length >= 6 || 'konfirmasi password minimal 6 karakter', val => konfirmasi(val)]"
                bg-color="white"
                hide-bottom-space
                >
                    <template v-slot:append>
                    <q-icon :name="visibility2 ? 'visibility' : 'visibility_off' " @click="visibility2 = !visibility2"/>
                    </template>
                </q-input>
            </q-step>
            

            <q-step :name="4">
              <div class="text-h5 text-bold text-primary">RINGKASAN DATA</div>
                <div class="text-subtitle2 q-mt-md text-justify">
                  Berikut ringkasan data yang telah Anda Isi
                </div>
                <hr class="line-cards q-my-md">
                <q-markup-table separator="none" flat dense>
                  <tbody>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan">Username</td>
                      <td class="text-left">: {{user.username}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan" >Password</td>
                      <td class="text-left">: {{user.password}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan">Nama Lengkap</td>
                      <td class="text-left">: {{user.name}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan">Alamat Email Aktif</td>
                      <td class="text-left">: {{user.email}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan">No. WhatsApp Aktif</td>
                      <td class="text-left">: {{user.nowa}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan">Tanggal Lahir</td>
                      <td class="text-left">: {{user.tempatlahir +', ' + formattgl()}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan">Jenjang Pendidikan</td>
                      <td class="text-left">: {{user.selectedjenjang.label}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan">Program Studi</td>
                      <td class="text-left">: {{user.selectedprodi.label}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan">Tahun Masuk</td>
                      <td class="text-left">: {{user.tahunmasuk}}</td>
                    </tr>
                    <tr class="q-tr--no-hover">
                      <td class="text-left judulringkasan">Tahun Keluar</td>
                      <td class="text-left">: {{user.tahunkeluar}}</td>
                    </tr>
                  </tbody>
                </q-markup-table>
            </q-step>

            <template v-slot:navigation>
                <q-stepper-navigation>
                
                <q-btn
                    v-if="step == 4"
                    outline
                    color="grey-8"
                    @click="step = 1"
                    label="Ubah Data"
                    no-caps
                    class="q-mr-md col"
                    style="border-radius: 8px;"
                    size="12px"
                />
                <q-btn
                    v-else
                    outline
                    color="grey-8"
                    @click="$refs.stepper.previous()"
                    label="Sebelumnya"
                    class="q-mr-md col"
                    style="border-radius: 8px;"
                    size="12px"
                    no-caps
                />
                <q-btn
                    v-if="step === 4"
                    @click="onSubmit"
                    color="primary"
                    label="Rekam Data"
                    class="col"
                    style="border-radius: 8px;"
                    size="12px"
                    :loading="load"
                    no-caps
                    :disabled="btndisabled"
                >
                <template v-slot:loading>
                    <div class="row items-center">
                        <p class="text-bold q-mb-none q-mr-sm">Loading...</p>
                        <q-spinner-facebook />  
                    </div>
                </template>
                </q-btn>
                <q-btn
                    v-else
                    @click="$refs.stepper.next()"
                    :color="valid ? 'primary' : 'grey'"
                    :disabled="!valid"
                    label="Berikutnya"
                    style="border-radius: 8px; "
                    no-caps
                    class="col"
                    size="12px"
                    
                />
              
                </q-stepper-navigation>
            </template>
            </q-stepper>
      </q-card-section>
    </q-card>
    <q-dialog v-model="alumnus" persistent transition-show="scale" transition-hide="scale">
            <q-card>
                <q-card-section>
                  <div class="text-h5 text-bold text-primary text-center">Anda Sudah Pernah Terdaftar</div>
                  <div class="row justify-center">
                  <q-img
                    src="~assets/question.png"
                    spinner-color="primary"
                    style="width: 118px; height: 112px;"
                    spinner-size="82px"
                  />
                  </div>
                  <p class="text-center q-mt-md">
                    Database Anda sudah terdaftar. Silahkan klik lanjutkan untuk proses selanjutnya.
                  </p>
                </q-card-section>
                <q-card-actions align="center">
                  <q-btn label="Lanjutkan" color="primary" style="border-radius: 8px;" v-close-popup no-caps />
                </q-card-actions>
            </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { date } from 'quasar'
import { api } from 'boot/axios'
export default {
  setup(){
    const options = []
   
    return {
      options,
      filterProdi(val, update){
        if (val === '') {
          update(() => {
            api.get('complex/prodi')
            .then((response)=>{
              console.log("response",response.data.data)
              response.data.data.forEach(element => {
                options.value = element.id

                // options.label = element.name
              });
            })

          })
          return
        }
        update(() => {
          const needle = val.toLowerCase()
          options.value = options.value.filter(v => v.toLowerCase().indexOf(needle) > -1)
        })
      }
    }
  },
  data() {
    return {
      user: {
        name:'',
        email: '',
        password: '',
        nowa:'',
        tempatlahir:'',
        tgllahir:'',
        selectedjenjang:'',
        selectedprodi:'',
        tahunmasuk:'',
        tahunkeluar:'',
        username:'',
        password:'',
        konfirmasi:''
        
      },
      visibility: true,
      visibility2: true,
      load: false,
      btndisabled: false,
      errors: {},
      step:1,
      optjenjang:[],
      optprodi:[],
      opttgl:[],
      optthn:[],
      optbln:[
        {value:'01',label:'Januari'},
        {value:'02',label:'Februari'},
        {value:'03',label:'Maret'},
        {value:'04',label:'April'},
        {value:'05',label:'Mei'},
        {value:'06',label:'Juni'},
        {value:'07',label:'Juli'},
        {value:'08',label:'Agustus'},
        {value:'09',label:'September'},
        {value:'10',label:'Oktober'},
        {value:'11',label:'November'},
        {value:'12',label:'Desember'},
      ],
      selectedtgl:'',
      selectedbln:'',
      selectedthn:'',
      cek:false,
      alumnus:false,
      validuser:false
    };
  },
  computed: {
    alumni(){
      return this.$store.state.auth.alumnireg
    },
    valid(){
      if(this.step === 5){
        // jika valid maka primary tidak maka grey
        if(this.user.name && this.user.email && this.user.nowa && this.user.tempatlahir && this.user.tgllahir){
          return true
        }
          return false
      }else if(this.step === 6){
        if(this.user.selectedjenjang && this.user.selectedprodi && this.user.tahunmasuk){
          return true
        }
        return false
      }else if(this.step === 7){
        if(this.validuser && this.user.password && this.user.konfirmasi){
          return true
        }
        return false
      }else{
        return true
      }
    }
  },
  mounted(){
    if (this.alumni.id) {
      this.alumnus = true
      this.user.name = this.alumni.complete_name
      this.user.email = this.alumni.email
      this.user.tgllahir = this.alumni.dob
      // todo user tempat lahir, jenjang, tahun masuk, no wa,prodi
      this.step = 3
      this.selectedjenjang = 'Sarjana (S1)'
      this.selectedprodi = 'FTE'
      this.user.tahunmasuk = '2003'
      this.user.nowa = '082339946868'
      this.user.tempatlahir = 'Jakarta'
    }else{
      this.step = 1
    }
    this.getJenjang()
    this.getProdi()
    this.OptTgl()
    this.OptThn()
    this.formattgl()
  },
  methods:{
    // filterProdi(val, update){
    //     if (val === '') {
    //       update(() => {
    //         this.getProdi()
    //         // options.value = stringOptions

    //         // here you have access to "ref" which
    //         // is the Vue reference of the QSelect
    //       })
    //       return
    //     }
    //     update(() => {
    //       const needle = val.toLowerCase()
    //       this.optprodi.value = this.optprodi.value.filter(v => v.toLowerCase().indexOf(needle) > -1)
    //     })
    // },
    OptTgl(){
      for (let index =1; index < 32; index++) {
        this.opttgl.push(index)
      }
    },
    OptThn(){
      let now = new Date().getFullYear()
      console.log(now)
      for (let index =1930; index <= now; index++) {
        this.optthn.push(index)
      }
    },
    getJenjang(){
        api.get('complex/education')
        .then((response)=>{
          response.data.data.forEach(element => {
            let opt ={}
            opt.label = element.name
            opt.value = element.id
            this.optjenjang.push(opt)
          });
        })
        .catch((error)=> console.log("error",error))
    },
    getProdi(){
      api.get('complex/prodi')
      .then((response)=>{
        response.data.data.forEach(element => {
          let opt ={}
          opt.label = element.name
          opt.value = element.id
          this.optprodi.push(opt)
        });
      })
      .catch((error)=> console.log("error",error))
    },
    konfirmasi(val){
            if(val === this.user.password){
                return true;
            }else{
                return 'Password tidak sama';
            }
    },
    formattgl(){
      let tgls = this.selectedthn +'/' + this.selectedbln+'/'+this.selectedtgl
      // console.log("tgls",tgls)
      let tgl = date.formatDate(tgls,'DD MMMM YYYY',{
        months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober','November','Desember'] 
      })
      return tgl
    },
    onSubmit(){
            this.load = true
            this.btndisabled = true
            setTimeout(() => {
                // this.$store.dispatch('auth/cekEmail',this.email)
                // .then(() => {
                //     this.$router.push('/register')
                //     this.load = false
                //     this.btndisabled = false
                // })
                // .catch(() => {
                //     this.$router.push('/register')
                //     // console.log("error",error)
                //     this.load = false
                //     this.btndisabled = false
                // })
                if (this.alumni.id) {
                  // dispatch api untuk alumni
                  this.$store.dispatch('auth/cekEmail')
                }else{
                  // dispatch api untuk user baru
                  this.$store.dispatch('auth/cekEmail')
                }
                this.$router.push('/regissuccess') 
                this.load = false
                this.btndisabled = false
            }, 5000);
    },
    validUsername(val){
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            api.post('auth/check-username',{
              username:val
            })
            .then(() => {
              resolve('username sudah ada')
              this.validuser = false
            })
            .catch(() => {
              resolve(true)
              this.validuser = true
            })
          }, 1000)
      })
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
.q-markup-table{
  background: transparent;
}
.q-stepper__nav{
    display:flex;
    justify-content: space-between;
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
.q-stepper--horizontal :deep() .row .q-stepper__tab.col-grow.flex.items-center.no-wrap{
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
.judulringkasan{
  width:30px;
}
</style>

