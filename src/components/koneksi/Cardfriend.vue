<template>
    <div class="bg-white cursor-pointer q-hoverable relative-position" v-ripple @click="movePage">
        <span class="q-focus-helper"></span>
        <div class="row items-center ">
            <div class="col-2 text-center">
                <q-avatar size="60px">
                    <img :src="profilimage(koneksi.profile) ? profilimage(koneksi.profile) : require('assets/akun23.png')" >
                </q-avatar>
            </div>
            <div class="col-8 q-pl-sm">
                <div>{{koneksi.complete_name}} - {{koneksi.univercity[0].program_study}}'{{tahun()}}</div>
                <div class="text-primary text-13">{{koneksi.experience[0].position}} {{koneksi.experience[0].company_name}}</div>
            </div>
            <div class="col-2 text-right">
                <q-btn class="bg-white btncek" icon="more_horiz" size="md" @click.stop="onMore"/>
            </div>
        </div>
        <q-separator spaced inset />
        <d-more v-model:dmore="dmore" :detail="koneksi" v-if="dmore"/>
    </div>
</template>

<script>
export default {
    props:['koneksi'],
    components:{
        'd-more': require('components/koneksi/Dmore.vue').default,
    },
    methods:{
        onMore(){
            this.dmore = true
        },
        tahun(){
            return this.koneksi.univercity[0].entry_year.substring(2,4)
        },
        movePage(){
                this.$router.push(`/detail-user/${this.koneksi.id}`)
        }
    },
    data(){
        return {
            dmore:false
        }
    },
    computed:{
        profilimage(){
            return val=> val.photo_profile ? this.profil + val.photo_profile : ''
        }
    },
}
</script>

<style>
.btncek.q-btn::before 
{
    box-shadow: none;
}

</style>