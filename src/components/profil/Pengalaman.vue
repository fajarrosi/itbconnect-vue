<template>
    <div>
            <div class="row justify-between">
                <div class="title-section">PENGALAMAN</div>
                <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
                </q-btn>
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
    props:[
        'dpengalaman',
    ],
    computed:{
        datapengalaman(){
            return this.$store.state.myprofil.datapengalaman
        }
    },
    methods:{
        ubah(){
            this.$emit('update:dpengalaman',true)
        }
    }
}
</script>

<style>

</style>