<template>
  <q-page >
    <q-card flat class="auth-card">
      <q-card-section>
            <q-stepper v-model="step" ref="stepper" color="primary" animated contracted flat inactive-color="white" 
            active-icon="primary"
            >
            <q-step
                :name="1"
                :done="step > 1"
            >
              <Bio v-model:name="user.name" v-model:email="user.email" v-model:nowa="user.nowa" v-model:tempat="user.tempat" v-model:tgl="user.tgl" v-model:thn="user.thn" v-model:bln="user.bln" v-model:cek="user.cek"/>
            </q-step>z

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
              <Ringkasan :name="user.name" :email="user.email" :nowa="user.nowa" :tgl="formattgl" :jenjang="getNameJenjang" :prodi="user.prodi" :thnmasuk="user.tahunmasuk" :thnkeluar="user.tahunkeluar" :username="user.username"/>
            </q-step>

            <template v-slot:navigation>
                <q-stepper-navigation>
                
                <q-btn
                    v-if="step == 4"
                    outline
                    @click="step = 1"
                    label="Ubah Data"
                    no-caps
                    class="q-mr-md col btn-radius"
                    style=" color:#707070;"
                    size="12px"
                />
                <q-btn
                    v-if="step > 1 && step !== 4"
                    outline
                    
                    @click="$refs.stepper.previous()"
                    label="Sebelumnya"
                    class="q-mr-md col btn-radius"
                    style=" color:#707070;"
                    size="12px"
                    no-caps
                />
                <q-btn
                    v-if="step === 1"
                    outline
                    
                    @click="$router.push('/cekemail')"
                    label="Sebelumnya"
                    class="q-mr-md col btn-radius"
                    style=" color:#707070;"
                    size="12px"
                    no-caps
                />
                <q-btn
                    v-if="step === 4"
                    @click="onSubmit"
                    color="primary"
                    label="Rekam Data"
                    class="col btn-radius"
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
                    
                    no-caps
                    class="col btn-radius"
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
        konfirmasi:'',
      },
      load: false,
      btndisabled: false,
      step:1,
      optjenjang:[],
      optprodi:[],
      alumnus:false,
    };
  },
  computed: {
    nick(){
            let x = this.user.name.match(/(\w+\S*)/)
            let random = ''
            random += x[1]
            for (let index = 0; index < 4; index++) {
                random += Math.floor(Math.random() * (9-0 +1))
            }
            return random
    },
    alumni(){
      return this.$store.state.auth.alumni
    },
    valid(){
      if(this.step === 1){
        // jika valid maka primary tidak maka grey
        if(this.user.name && this.user.email && this.user.nowa && this.user.tempat && this.user.tgl && this.user.bln && this.user.thn){
          return true
        }
          return false
      }else if(this.step === 2){
        if(this.user.jenjang && this.user.prodi && this.user.tahunmasuk && this.user.tahunkeluar){
          return true
        }
        return false
      }else if(this.step === 3){
        if(this.user.username && this.user.password && this.user.konfirmasi){
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
    getNameJenjang(){
      let jenjangname = ''
      if(this.alumni){
        jenjangname = this.optjenjang.find(x =>  x.value === this.alumni.univercity[0].education_id)
      }else{
        jenjangname = this.optjenjang.find(x =>  x.value === this.user.jenjang)
      }
          return jenjangname.label
      
      
    },
  },
  mounted(){
    if (this.alumni) {
      this.alumnus = true
      this.user.name = this.alumni.complete_name
      this.user.email = this.alumni.email
      this.user.nowa = this.alumni.telephone
      this.user.tahunmasuk = this.alumni.univercity[0].entry_year
      this.user.tahunkeluar = this.alumni.univercity[0].graduated_year
      this.user.jenjang = this.alumni.univercity[0].education_id
      this.user.prodi = this.alumni.univercity[0].program_study
      let tgllahir = this.alumni.dob.match(/(\d{4})-(\d{2})-(\d{2})/)
      this.user.tgl = tgllahir[3]
      this.user.bln = tgllahir[2]
      this.user.thn = tgllahir[1]
      this.user.tempat = this.alumni.pob
      this.step = 3
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
            this.optprodi.push(element.name)
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
            if (this.alumni.id) {
                  // dispatch api untuk register utk alumni
              this.$store.dispatch('auth/registerAl',this.user)
              .then(()=>{
                this.$router.push({name:'registerberhasil'})
                this.load = false
                this.btndisabled = false
              })
              .catch((error)=>{
                console.log("error",error)
              })
            }else{
              // dispatch api untuk register utk user baru
              this.$store.dispatch('auth/register',{
                user: this.user,
                nick: this.nick
              })
              .then((response)=>{
                this.$router.push({name:'registerberhasil'})
                this.load = false
                this.btndisabled = false
              })
              .catch((error)=>{
                console.log("error",error)
              })
            }
          
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

