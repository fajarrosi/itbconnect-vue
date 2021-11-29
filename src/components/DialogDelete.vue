<template>
    <q-dialog :model-value="ddelete" @click="$emit('update:ddelete', $event.target.value)" @hide="$emit('update:ddelete',false)">
        <q-card>
            <q-card-section class="row items-center">
                <div class="text-17 text-bold col-12">Hapus Data</div>
                <span class="text-15">Apakah Anda Yakin ingin menghapus Data ini?</span>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Batal" color="primary" @click="$emit('update:ddelete',false)" no-caps :disabled="ddisabled"/>
                <q-btn flat label="Hapus" color="primary" @click="onDelete" :loading="dload"
            :disabled="ddisabled" no-caps> 
                    <template v-slot:loading>
                        <div class="row justify-between">
                            <div class="col-8 text-13">hapus..</div>
                            <q-spinner-facebook class="col-3"/>  
                        </div>
                    </template>
                </q-btn>
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
export default {
    props:[
        'ddelete',
        'dload',
        'ddisabled'
    ],
    methods:{
        onDelete(){
            this.$parent.onDeleting()
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