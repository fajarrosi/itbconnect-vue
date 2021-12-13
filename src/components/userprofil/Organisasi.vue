<template>
    <div>
        <div class="row justify-between" >
            <div class="title-section">ORGANISASI</div>
        </div>
            <div v-if="dataorganisasi.length > 0">
                <ul style="padding-left:0;list-style:none;" class="q-my-none ">
                    <li v-for="(organisasi,index) in dataorganisasi" :key="index">
                        {{organisasi.organization.name}}
                    </li>
                </ul>
            </div>
            <div v-else>
                <div class="grey">Belum ada Organisasi </div>
            </div>
            <div class="title-section q-mt-md">Pengurus Daerah & IA Prodi</div>
            <div v-if="datapengda">
                <div v-if="datapengda.commisariat_id !== null">{{datapengda.commisariat.name}}</div>
                <div v-if="datapengda.ia_prodi_id !== null">{{datapengda.iaprodi.name}}</div>
                <div v-else>
                    <div class="grey">Belum ada Pengurus Daerah & IA Prodi</div>
                </div>
            </div>
            <div v-else>
                <div class="grey">Belum ada Pengurus Daerah & IA Prodi</div>
            </div>
        
    </div>
</template>

<script>
export default {
    computed:{
        datapengda(){
            return this.$store.state.rekomendasi.datapengda
        },
        dataorganisasi(){
            return this.$store.state.rekomendasi.dataorganisasi
        }
    },
}
</script>

<style>


</style>