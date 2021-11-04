<template>
    <q-page>
        <q-card flat >
            <q-card-section>
                <div class="row items-center">
                    <div class="col-5">Nama</div>
                    <q-input
                    dense
                    outlined
                    v-model="search.nama"
                    placeholder="Masukkan Nama Alumni"
                    class="q-mb-sm col-7"
                    bg-color="white"
                    hide-bottom-space
                    bottom-slots
                    autofocus
                    />
                    <div class="col-5">Jurusan</div>
                    <q-select  outlined dense v-model="search.jurusan" emit-value map-options :options="optjurusan" label="Select Jurusan" bg-color="white" class="q-mb-sm col-7" />
                    <div class="col-5">Profesi</div>
                    <q-select  outlined dense v-model="search.profesi" emit-value map-options :options="optprofesi" label="Select Profesi" bg-color="white" class="q-mb-sm col-7" />
                    <div class="col-5">Bidang Bisnis</div>
                    <q-select  outlined dense v-model="search.bisnis" emit-value map-options :options="optbisnis" label="Select Bisnis" bg-color="white" class="q-mb-sm col-7" />
                    <div class="col-5">Minat & Organisasi</div>
                    <q-select  outlined dense v-model="search.minat" emit-value map-options :options="optminat" label="Select Minat" bg-color="white" class="q-mb-sm col-7" />
                    <div class="col-5">Pengda/Komisariat</div>
                    <q-select  outlined dense v-model="search.pengda" emit-value map-options :options="optpengda" label="Select Pengda" bg-color="white" class="q-mb-sm col-7" />
                    <div class="col-5">IA Prodi</div>
                    <q-select  outlined dense v-model="search.prodi" emit-value map-options :options="optprodi" label="Select IA Prodi" bg-color="white" class="q-mb-sm col-7" />
                    <q-btn color="primary" label="Tampilkan Hasil" no-caps class="col-12 q-mt-md" @click="onSearch" />
                </div>
            </q-card-section>
        </q-card>

        <div v-if="load" class="bg-white q-py-md">
            <div class="row q-ma-md items-center card-radius bg-white" style="border:1px solid #dcdcdc;" v-for="n in 5" :key="n" >
                <div class="col-3 ">
                    <q-skeleton height="115px" square />
                </div>
                <div class="col-9 row q-pa-sm">
                    <q-skeleton  height="42px" class="col-12"/>
                    <q-skeleton  height="20px" class="col-12 q-my-sm"/>
                    <q-skeleton type="QBtn" height="34px" width="80px" class="col-2" style="margin-left:auto;border-radius:20px;"/>

                </div>
            </div>
        </div>

        <div class="row q-pa-md bg-white" v-if="result">
            <div class="text-17 text-bold col-12 q-mb-md" style="color:#505050;">Hasil Pencarian</div>
            <rekomendasihorizontal v-for="n in 10" :key="n"/>
        </div>
    </q-page>
</template>

<script>
export default {
    data(){
        return{
            search:{
                nama:'',
                jurusan:'',
                profesi:'',
                bisnis:'',
                minat:'',
                pengda:'',
                prodi:''
            },
            load:false,
            result:false,
            optjurusan:[
                {
                    label:'Jurusan1',
                    value:'1'
                },
                {
                    label:'Jurusan2',
                    value:'2'
                },
            ],
            optprofesi:[
                {
                    label:'Profesi1',
                    value:'1'
                },
                {
                    label:'Profesi2',
                    value:'2'
                },

            ],
            optbisnis:[
                {
                    label:'Bisnis1',
                    value:'1'
                },
                {
                    label:'Bisnis2',
                    value:'2'
                },
            ],
            optminat:[
                {
                    label:'minat1',
                    value:'1'
                },
                {
                    label:'minat2',
                    value:'2'
                },

            ],
            optpengda:[
                {
                    label:'Pengda1',
                    value:'1'
                },
                {
                    label:'Pengda2',
                    value:'2'
                },
            ],
            optprodi:[
                {
                    label:'prodi1',
                    value:'1'
                },
                {
                    label:'prodi2',
                    value:'2'
                },

            ]
        }
    },
    components:{
        'rekomendasihorizontal' : require('components/rekomendasi/Rekomendasihorizontal.vue').default
    },
    methods:{
        onSearch(){
            this.load = true
            setTimeout(()=>{
                this.load = false
                this.result = true
            },1000)
        }
    }
}
</script>

<style>

</style>