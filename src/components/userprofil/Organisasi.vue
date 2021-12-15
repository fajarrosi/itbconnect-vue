<template>
    <div>
        <div class="row justify-between" >
            <div class="title-section">ORGANISASI</div>
        </div>
            <div v-if="dataorganisasi.length > 0">
                <div v-if="dataorganisasi[0].organization_id !== null">
                    <ul style="padding-left:0;list-style:none;" class="q-my-none ">
                        <li v-for="organisasi in dataorganisasi" :key="organisasi.id">
                            {{organisasi.organization.name}}
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <div class="grey">Belum ada organisasi </div>
                </div>
            </div>
            <div v-else>
                <div class="grey">Belum ada organisasi </div>
            </div>
            <div class="title-section q-mt-md">Pengurus Daerah & IA Prodi</div>
            <div v-if="datapengda">
                <div v-if="(datapengda.commisariat_id === null) && (datapengda.ia_prodi_id === null)">
                    <div class="grey">Belum ada pengurus daerah & IA prodi </div>
                </div>
                <div v-else>
                    <div v-if="datapengda.commisariat_id !== null">{{datapengda.commisariat.name}}</div>
                    <div v-else>
                        <div class="grey">Belum ada pengurus daerah </div>
                    </div>
                    <div v-if="datapengda.ia_prodi_id !== null">{{datapengda.iaprodi.name}}</div>
                    <div v-else>
                        <div class="grey">Belum ada IA prodi</div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="grey">Belum ada pengurus daerah & IA prodi</div>
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