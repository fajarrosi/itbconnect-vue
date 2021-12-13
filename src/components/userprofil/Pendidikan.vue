<template>
    <div>
        <div class="row justify-between" >
            <div class="title-section">PENDIDIKAN</div>
        </div>
        <div v-if="datapendidikan.length > 0">
            <ul style="padding-left:15px;" class="q-my-none">
                    <li v-for="(pendidikan,index) in datapendidikan" :key="index">
                        <div class="row">
                            <div class="col-3">{{pendidikan.entry_year}} - {{pendidikan.graduated_year}}</div>
                            <div class="col-9">: <span v-if="pendidikan.is_itb">Institut Teknik Bandung</span> <span v-else>{{pendidikan.campus_name}}</span> , Jurusan {{pendidikan.program_study}}</div>
                        </div>
                    </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    computed:{
        datapendidikan(){
            return this.$store.state.rekomendasi.datapendidikan
        }
    },
}
</script>

<style>

</style>