<template>
<div>
  <!-- <q-page> -->
    <q-card flat class="auth-card col-12" style="max-width:354px;">
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
            <Alamat v-model:dalam="user.dalam" v-model:alamat="user.alamat" v-model:prov="prov" v-model:kota="user.kota" v-model:negara="user.negara" :optprovinsi="optprovinsi" :optkota="optkota" :kotashow="kotashow" :optnegara="optnegara" />
          </q-step>

          <q-step :name="2" :done="step > 2">
            <Pekerjaan v-model:profesi="user.profesi" v-model:jabatan="user.jabatan" v-model:perusahaan="user.perusahaan" :optprofesi="optprofesi"/>
          </q-step>

          <q-step :name="3" :done="step > 3" class="q-pb-none">
              <Foto v-model:previmg="previmg" v-model:src="user.src" v-model:step="step"/>
          </q-step>
          <q-step :name="4" :done="step > 4">
            <div class="text-h5 text-bold text-primary">Minat & Organisasi</div>
            <div class="text-subtitle2 q-mt-md text-justify">
                Silahkan isi minat dan organisasi anda
            </div>
            <hr class="line-cards q-my-md">
            <q-select  outlined dense v-for="(inp,k) in inputs" :key="k" v-model="inp.org" emit-value map-options :options="optorganisasi" label="Minat & Organisasi" bg-color="white" class="q-mb-sm">
                <template v-slot:after>
                    <q-btn round dense flat icon="close" v-if="k >0" @click="remove(k)"/>
                </template>
            </q-select>
            <q-btn color="primary" icon="add" label="Tambah Minat & Organisasi" flat dense @click="add" no-caps  style="font-style:italic;"/>
          </q-step>
          
          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn
                v-if="step > 1 && step !== 3"
                outline
                @click="$refs.stepper.previous()"
                label="Sebelumnya"
                class="q-mr-sm col"
                :disabled="btndisabled"
                style="border-radius: 8px; color:#707070;"
                size="12px"
                no-caps
              />
              <q-btn
                v-if="step === 1 "
                @click="$refs.stepper.next()"
                :color="valid ? 'primary' : 'grey'"
                :disabled="!valid"
                label="Berikutnya"
                style="border-radius: 8px;margin-left:auto;"
                size="12px"
                no-caps
                class="col-4"
              />
              <q-btn
                v-if="step === 2"
                @click="$refs.stepper.next()"
                :color="valid ? 'primary' : 'grey'"
                :disabled="!valid"
                label="Berikutnya"
                style="border-radius: 8px"
                size="12px"
                no-caps
                class="col"
              />
              <q-btn
              flat
              color="grey-8"
              label="Lewati"
              class="col"
              size="12px"
              dense
              no-caps
              :disabled="btndisabled"
              v-if="step === 4"
              @click="onSkip"
              />
              <q-btn
                v-if="step === 4"
                @click="onSubmit"
                :color="valid ? 'primary' : 'grey'"
                label="Lanjutkan"
                style="border-radius: 8px"
                :loading="load"
                :disabled="disabled"
                size="12px"
                no-caps
                class="col"
              >
              <template v-slot:loading>
                    <div class="row items-center">
                        <p class="text-bold q-mb-none q-mr-sm">Loading...</p>
                        <q-spinner-facebook />  
                    </div>
                </template>
              </q-btn>
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </q-card-section>
    </q-card>
    <DialogIntro v-model:intro="intro" v-if="intro"/>
  <!-- </q-page> -->
  <dialog-leave v-model:dleave="dleave" v-if="dleave" />
</div>
  
</template>

<script>
import Alamat from 'components/register2/Alamat.vue'
import Pekerjaan from 'components/register2/Pekerjaan.vue'
import Foto from 'components/register2/Foto.vue'
import DialogIntro from 'components/register2/DialogIntro.vue'
import { api } from 'boot/axios'
export default {
  
  components:{
      Alamat,
      Pekerjaan,
      Foto,
      DialogIntro,
      'dialog-leave' : require('components/DialogLeave.vue').default
  },
  data() {
    return {
      prov:'',
      user: {
        dalam:'',
        kota: '',
        negara:'',
        alamat:'',
        perusahaan:'',
        profesi:'',
        jabatan:'',
        src:''
      },
      previmg:'',
      load: false,
      btndisabled: false,
      errors: {},
      selectedFile:null,
      intro:false,
      inputs:[
          {org:''}
      ],
      optprovinsi:[],
      optprofesi:[],
      optkota:[],
      kotashow:false,
      optorganisasi:[],
      optnegara:[],
      dleave:false,
      step:1
    };
  },
  computed:{
    organization(){
      // let result = this.inputs.map(a => a.org)
      let a = {
        org: this.inputs
      }
      let result = a.org.map(a=>a.org)
      return result
    },
    valid(){
      if(this.step === 1){
        if(this.user.dalam.value == '1' && this.prov && this.user.kota && this.user.alamat){
          return true
        }
        else if(this.user.dalam.value == '2' && this.user.negara && this.user.alamat){
          return true
        }else{
          return false
        }
      } else if(this.step === 2){
        if(this.user.perusahaan && this.user.jabatan && this.user.profesi){
          return true
        }else{
          return false
        }
      } else if(this.step === 4){
        if(this.organization[0]){
          return true
        }else{
          return false
        }
      }
      else{
        return false
      }
    },
    disabled(){
      if(this.valid){
          if (this.btndisabled){
              return true
          }
          return false
      }
      return true
    }
  },
  beforeRouteLeave(to, from, next) {
    if(to.name === 'otp'){
      this.dleave = true
      next(false)
    }else{
      next()
    }
  },
  mounted(){
    this.intro = true
    this.getProvinsi()
    this.getProfesi()
    this.getOrganisasi()
    this.getNegara()
  },
  watch:{
        prov: function(val){
            this.optkota = []
            this.kotashow = false
            this.user.kota = ''
            api.get(`complex/city/${val.value}`)
            .then((response)=>{
            response.data.data.forEach(element => {
            let opt ={}
            opt.label = element.name
            opt.value = element.id
            this.optkota.push(opt)
            this.kotashow = true
            });
        })
        .catch((error)=> console.log("error",error))
        }
    },
  methods:{
    onLeave(){
      this.dleave = false
      alert('tidak dapat meninggalkan halaman')
    },
    async getProvinsi(){
      return await api.get('complex/province')
        .then((response)=>{
            response.data.data.forEach(element => {
            let opt ={}
            opt.label = element.name
            opt.value = element.id
            this.optprovinsi.push(opt)
            });
        })
        .catch((error)=> console.log("error",error))
    },
    async getProfesi(){
      return await api.get('complex/profession')
        .then((response)=>{
            response.data.data.forEach(element => {
            let opt ={}
            opt.label = element.name
            opt.value = element.id
            this.optprofesi.push(opt)
            });
        })
        .catch((error)=> console.log("error",error))
    },
    async getOrganisasi(){
      return await api.get('complex/organization')
        .then((response)=>{
            response.data.data.forEach(element => {
            let opt ={}
            opt.label = element.name
            opt.value = element.id
            this.optorganisasi.push(opt)
            });
        })
        .catch((error)=> console.log("error",error))
    },
    async getNegara(){
      return await api.get('complex/country')
        .then((response)=>{
            response.data.data.forEach(element => {
            let opt ={}
            opt.label = element.country_name
            opt.value = element.id
            this.optnegara.push(opt)
            });
        })
        .catch((error)=> console.log("error",error))
    },
    add(){
        this.inputs.push({
            org:''
        })
    },
    remove(val){
        this.inputs.splice(val,1)
    },
    luarNegeri(user){
      this.$store.dispatch('auth/register2',user)
      .then(response=>{
        this.load = false
        this.btndisabled = false
        // this.$router.push({name:'profil'})
        if(response.status === 200){
          this.$router.push({name:'profil'})
        }else{
          console.log("response",response)
        }
      })
      .catch((error)=>{
        this.load = false
        this.btndisabled = false
        console.log("error",error)
      })
    },
    dalamNegeri(user){
      this.$store.dispatch('auth/register2',user)
        .then(response=>{
          this.load = false
          this.btndisabled = false
          if(response.status === 200){
            this.$router.push({name:'profil'})
          }else{
            console.log("response",response)
          }
        })
        .catch((error)=>{
          this.load = false
          this.btndisabled = false
          console.log("error",error)
        })
    },
    onSkip(){ 
      this.btndisabled = true
      if(this.user.dalam.value === '2'){
        let users = {
          user: this.user
        }
        this.luarNegeri(users)
      }else{
        let users = {
          user: this.user,
          prov: this.prov,
        }
        this.dalamNegeri(users)
      }
    },
    onSubmit(){
      this.load = true
      this.btndisabled = true
      if(this.user.dalam.value === '2'){
          let users = {
            user: this.user,
            org: this.inputs
          }
          this.luarNegeri(users)
      }else{
        let users = {
          user: this.user,
          prov: this.prov,
          org: this.inputs
        }
        this.dalamNegeri(users)
      }
      
    }
  }
};
</script>
<style scoped>
.q-card{
  margin-top:30px;
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
    margin-top:-80px;
    /* margin-bottom: 50px; */
  }
  .q-stepper :deep() .q-stepper__content{
    margin-top:-20px;
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