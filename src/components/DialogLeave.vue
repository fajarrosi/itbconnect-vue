<template>
    <q-dialog :model-value="dleave" @click="$emit('update:dleave', $event.target.value)" persistent>
        <q-card>
            <q-card-section class="row items-center">
                <div class="text-17 text-bold col-12">Tinggalkan Halaman</div>
                <span class="text-15">Apakah Anda Yakin ingin meninggalkan halaman ini?</span>
                <span class="text-15">Seluruh data akan hilang jika Anda meninggalkan halaman ini</span>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Ya" color="primary" @click="Leave" no-caps /> 
                <q-btn flat label="Tidak" color="primary" @click="$emit('update:dleave',false)" no-caps/>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
export default {
    props:[
        'dleave',
    ],
    methods:{
        Leave(){
            this.$parent.onLeave()
        }
    }
}
</script>

<style scoped>
.q-card{
    width: 418px;
    border-radius:10px;
}
</style>