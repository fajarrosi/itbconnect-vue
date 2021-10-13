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
              <Bio v-model:name="user.name" v-model:email="user.email" v-model:nowa="user.nowa" v-model:tempat="user.tempat" v-model:tgl="user.tgl" v-model:thn="user.thn" v-model:bln="user.bln" v-model:cek="user.cek"/>
            </q-step>

            <q-step
                :name="2"
                :done="step > 2"
            >
            <Pend v-model:jenjang="user.jenjang" v-model:prodi="user.prodi" v-model:thnmasuk="user.tahunmasuk" v-model:thnkeluar="user.tahunkeluar" :optjenjang="optjenjang" :optprodi="optprodi"/>
            </q-step>

            <q-step
                :name="3"
                :done="step > 3"
            >
            <Akun v-model:username="user.username" v-model:password="user.password" v-model:konfirmasi="user.konfirmasi"/>
            </q-step>
            

            <q-step :name="4">
              <Ringkasan :name="user.name" :email="user.email" :nowa="user.nowa" :tgl="formattgl" :jenjang="user.jenjang.label" :prodi="user.prodi.label" :thnmasuk="user.tahunmasuk" :thnkeluar="user.tahunkeluar" :username="user.username"/>
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
                    v-if="step > 1 && step !== 4"
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
                    v-if="step === 1"
                    outline
                    color="grey-8"
                    @click="$router.push('/cekemail')"
                    label="Sebelumnya"
                    class="q-mr-md col"
                    style="border-radius: 8px; color:#bfc0c0;"
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
    <DialogUser v-model:alumnus="alumnus"/>
  </q-page>
</template>

<script>
import { date } from 'quasar'
import { api } from 'boot/axios'
import Bio from 'components/register/Bio.vue'
import Pend from 'components/register/Pend.vue'
import Akun from 'components/register/Akun.vue'
import Ringkasan from 'components/register/Ringkasan.vue'
import DialogUser from 'components/register/DialogUser.vue'
export default {
  components:{
    Bio,
    Pend,
    Akun,
    Ringkasan,
    DialogUser
  },
  
  data() {
    return {
      user: {
        name:'',
        email: '',
        password: '',
        nowa:'',
        tempat:'',
        tgl:'',
        bln:'',
        thn:'',
        cek:false,
        jenjang:'',
        prodi:'',
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
    },
      formattgl(){
        let tgls = this.user.thn +'/' + this.user.bln+'/'+this.user.tgl
        // console.log("tgls",tgls)
        let tgl = date.formatDate(tgls,'DD-MMMM-YYYY',{
          months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober','November','Desember'] 
        })
        let lengkap =  this.user.tempat + ', ' + tgl
        return lengkap
      },
  },
  mounted(){
    if (this.alumni.id) {
      this.alumnus = true
      this.user.name = this.alumni.complete_name
      this.user.email = this.alumni.email
      this.user.tgllahir = this.alumni.dob
      // todo user tempat lahir, jenjang, tahun masuk, no wa,prodi
      this.step = 3
      // this.selectedjenjang = 'Sarjana (S1)'
      // this.selectedprodi = 'FTE'
      // this.user.tahunmasuk = '2003'
      // this.user.nowa = '082339946868'
      // this.user.tempatlahir = 'Jakarta'
    }else{
      this.step = 1
    }
    
    this.getJenjang()
    this.getProdi()
  },
  
  methods:{
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
                  // dispatch api untuk register utk alumni
                  this.$store.dispatch('auth/cekEmail')
                }else{
                  // dispatch api untuk register utk user baru
                  this.$store.dispatch('auth/cekEmail')
                }
                this.$router.push('/regissuccess') 
                this.load = false
                this.btndisabled = false
            }, 5000);
    },
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
.q-btn--outline::before{
  border: 2px solid currentColor;
}
</style>

