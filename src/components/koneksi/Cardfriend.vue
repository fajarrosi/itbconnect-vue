<template>
    <div class="bg-white cursor-pointer q-hoverable relative-position" v-ripple @click="movePage">
        <span class="q-focus-helper"></span>
        <div class="row items-center ">
            <div class="col-2 text-center">
                <q-avatar size="60px">
                    <img src="~assets/akun.png" >
                </q-avatar>
            </div>
            <div class="col-8 q-pl-sm">
                <div>{{koneksi.name}} - {{koneksi.jurusan}}'{{tahun()}}</div>
                <div class="text-primary text-13">{{koneksi.profesi}} {{koneksi.perusahaan}}</div>
            </div>
            <div class="col-2 text-right">
                <q-btn class="bg-white btncek" icon="more_horiz" size="md" @click.stop="onMore"/>
            </div>
        </div>
        <q-separator spaced inset />
    </div>
</template>

<script>
export default {
    props:['dmore','koneksi'],
    emits:['update:dmore'],
    methods:{
        onMore(){
            this.$emit('update:dmore',true)
        },
        tahun(){
            return this.$props.koneksi.tahunmasuk.substring(2,4)
        },
        movePage(){
            setTimeout(() => {
                this.$router.push('/rekomendasi/3')
            }, 400);
        }
    }
}
</script>

<style>
.btncek.q-btn::before 
{
    box-shadow: none;
}

</style>