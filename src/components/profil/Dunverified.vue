<template>
    <div> 
        <q-dialog :model-value="unverified" @click="$emit('update:unverified', $event.target.value)" persistent transition-show="scale" transition-hide="scale">
            <q-card>
                <q-card-section>
                <div class="row justify-center">
                    <p class="text-center q-mt-md text-primary text-bold col-12" style="font-size:18px;">
                        Dalam Proses Verifikasi
                    </p>
                <q-img
                    src="~assets/unverified.png"
                    spinner-color="primary"
                    style="width: 118px; height: 112px;"
                    spinner-size="82px"
                />
                    <p class="text-center q-mt-md text-grey-8 text-bold col-12" style="font-size:14px;">
                        Mohon sabar menunggu. Silahkan lengkapi data untuk mempermudah kami melakukan verifikasi.
                    </p>
                    <q-btn label="Tutup" color="primary" style="border-radius: 8px;" no-caps @click="edit" class="col-4"/>
                </div>
                </q-card-section>
            </q-card>
    </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'unverified',
    ],
    methods:{
        edit(){
            this.$emit('update:unverified', false)
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