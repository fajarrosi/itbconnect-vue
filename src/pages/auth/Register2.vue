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
            <Alamat v-model:dalam="user.dalam" v-model:alamat="user.alamat" v-model:prov="user.prov" v-model:kota="user.kota" v-model:kec="user.kec" v-model:kel="user.kel" v-model:negara="user.negara"/>
          </q-step>

          <q-step :name="2" :done="step > 2">
            <Pekerjaan v-model:profesi="user.profesi" v-model:jabatan="user.jabatan"/>
          </q-step>

          <q-step :name="3" :done="step > 3" class="q-pb-none">
              <Foto v-model:previmg="previmg" v-model:src="user.src" v-model:step="step"/>
          </q-step>
          <q-step :name="4" :done="step > 4">
            <Organisasi />
            <q-select  outlined dense v-for="(inp,k) in inputs" :key="k" v-model="inp.selectedorg" emit-value map-options :options="optorganisasi" label="Minat & Organisasi" bg-color="white" class="q-mb-sm">
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
                style="border-radius: 8px; color:#bfc0c0;"
                size="12px"
                no-caps
              />
              <q-btn
                v-if="step === 1 && step !== 3"
                @click="$refs.stepper.next()"
                color="primary"
                label="Berikutnya"
                style="border-radius: 8px;margin-left:auto;"
                size="12px"
                no-caps
                class="col-4"
              />
              <q-btn
                v-if="step === 2"
                @click="$refs.stepper.next()"
                color="primary"
                label="Berikutnya"
                style="border-radius: 8px"
                size="12px"
                no-caps
                class="col"
              />
              <q-btn
                v-if="step === 4"
                @click="$router.push('/profil')"
                color="primary"
                label="Lanjutkan"
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
    <DialogIntro v-model:intro="intro"/>
  </q-page>
</template>

<script>
import { ref } from "vue";
import Alamat from 'components/register2/Alamat.vue'
import Pekerjaan from 'components/register2/Pekerjaan.vue'
import Foto from 'components/register2/Foto.vue'
import Organisasi from 'components/register2/Organisasi.vue'
import DialogIntro from 'components/register2/DialogIntro.vue'
export default {
  setup() {
    return {
      step: ref(1),
    };
  },
  components:{
      Alamat,
      Pekerjaan,
      Foto,
      Organisasi,
      DialogIntro
  },
  data() {
    return {
      user: {
        dalam:'',
        prov:'',
        kota: '',
        kec:'',
        kel:'',
        negara:'',
        alamat:'',

        profesi:'',
        jabatan:'',
        organisasi:'',
        src:''
      },
      previmg:'',
      load: false,
      btndisabled: false,
      errors: {},
      selectedFile:null,
      intro:false,
      optorganisasi:[
          {
              label:'Orgn1',
              value:'1'
          },
          {
              label:'Orgn2',
              value:'2'
          },
          {
              label:'testing3',
              value:'3'
          }
      ],
      inputs:[
          {selectedorg:''}
      ],
    };
  },
  mounted(){
    this.intro = true
  },
  methods:{
    add(){
        this.inputs.push({
            selectedorg:''
        })
        
    },
    remove(val){
        this.inputs.splice(val,1)
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