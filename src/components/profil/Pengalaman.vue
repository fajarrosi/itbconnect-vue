<template>
    <div>
            <div class="row justify-between">
                <div class="title-section">PENGALAMAN</div>
                <!-- v-if="datapengalaman[0].user_id === userid" -->
                <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah" v-if="databio.userid === userid">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
                </q-btn>
            </div>
            <ul style="padding-left:15px;" class="q-my-none ">
                <li v-for="(pengalaman,index) in datapengalaman" :key="index">{{pengalaman.company_name}} <span v-if="pengalaman.location">, {{pengalaman.location}}</span> <span v-if="pengalaman.starting_year">, {{pengalaman.starting_year}} - </span> <span v-if="pengalaman.is_work">Sekarang</span> <span v-else> {{pengalaman.end_year}} </span><br>
                    sebagai {{pengalaman.position}}
                </li>
            </ul>
            <svg class="Line_85" viewBox="0 0 396 1">
                <path id="Line_85" d="M 0 0 L 396 0">
                </path>
            </svg>
    </div>
</template>

<script>
export default {
    props:[
        'dpengalaman',
        'datapengalaman',
        'databio'
    ],
    emits:['update:dpengalaman'],
    computed:{
        userid(){
            return this.$store.state.auth.user.id
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