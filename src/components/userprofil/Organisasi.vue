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
            <div class="title-section q-mt-md">Pengurus Daerah & IA Prodi</div>
            <div v-if="datapengda">
                <div >{{datapengda.commisariat.name}}</div>
                <div >{{datapengda.iaprodi.name}}</div>
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