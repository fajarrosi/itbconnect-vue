<template>
    <div>
        <div class="row justify-between" >
            <div class="title-section">ORGANISASI</div>
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <div v-if="dataorganisasi.length > 0">
            <ul style="padding-left:0;list-style:none;" class="q-my-none ">
                <li v-for="organisasi in dataorganisasi" :key="organisasi.id">
                    {{organisasi.organization.name}}
                </li>
            </ul>
        </div>
            <div class="title-section q-mt-md">Pengurus Daerah & IA Prodi</div>
            <div v-if="datapengda">
                <div>{{datapengda.commisariat.name}}</div>
                <div>{{datapengda.iaprodi.name}}</div>
            </div>
            <div v-else>
                <div class="grey">Tidak Ada</div>
            </div>
        <svg class="Line_85" viewBox="0 0 396 1">
            <path id="Line_85" d="M 0 0 L 396 0">
            </path>
        </svg>
    </div>
</template>

<script>
export default {
    props:[
        'dminat',
    ],
    computed:{
        datapengda(){
            return this.$store.state.myprofil.datapengda
        },
        dataorganisasi(){
            return this.$store.state.myprofil.dataorganisasi
        }
    },
    methods:{
        ubah(){
            this.$emit('update:dminat',true)
        }
    }
}
</script>

<style>


</style>