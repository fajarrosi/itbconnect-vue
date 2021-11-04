<template>
    <div class="row q-mb-md items-center card-radius cursor-pointer q-hoverable relative-position bg-white" v-ripple  style="border:1px solid #dcdcdc;" @click="movePage">
        <span class="q-focus-helper"></span>
        <div class="col-3">
            <img src="~assets/akun23.png" alt="akun" style="width:100%;border-top-left-radius:10px;border-bottom-left-radius:10px;margin-bottom:-5px;">
        </div>
        <div class="col-9 row q-px-sm">
            <div class="col-12 ">Luke Pearce - Jurusan Matematika dan Ilmu Pengetahuan Alam</div>
            <div class="text-primary text-13 col-12">Art Director Studio Themis</div>
            <q-btn :color="wait ? 'grey-8' : 'primary'" no-caps class="text-13" rounded @click.stop="onSubmit" style="margin-left:auto;">
                <div class="row">
                    <q-icon name="done" v-if="wait" class="col-2" size="15px"/>
                    <div class="text-white col-10" >{{wait ? 'Menunggu' : 'Connect'}}</div>
                </div>
            </q-btn>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            wait:false,
            user:''
        }
    },
    methods:{
        onSubmit(){
            if(!this.wait){
                this.user = {
                    name: 'asdffas',
                    id:'adsfas',
                }
                // push ke api add koneksi
                this.wait = true
            }else{
                this.user = ''
                // push ke api remove koneksi
                this.wait = false
            }
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

</style>