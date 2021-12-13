<template>
    <div>
            <div class="row justify-between">
                <div class="title-section">PENGALAMAN</div>
                <!-- v-if="datapengalaman[0].user_id === userid" -->
            </div>
            <div v-if="datapengalaman.length > 0">
                <ul style="padding-left:15px;" class="q-my-none ">
                    <li v-for="(pengalaman,index) in datapengalaman" :key="index">{{pengalaman.company_name}} <span v-if="pengalaman.location">, {{pengalaman.location}}</span> <span v-if="pengalaman.starting_year">, {{pengalaman.starting_year}} - </span> <span v-if="pengalaman.is_work">Sekarang</span> <span v-else> {{pengalaman.end_year}} </span><br>
                        sebagai {{pengalaman.position}}
                    </li>
                </ul>
            </div>
            
    </div>
</template>

<script>
export default {
    computed:{
        datapengalaman(){
            return this.$store.state.rekomendasi.datapengalaman
        }
    },
}
</script>

<style>

</style>