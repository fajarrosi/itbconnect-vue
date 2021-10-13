<template>
    <div> 
        <q-dialog :model-value="alumnus" @click="$emit('update:alumnus', $event.target.value)" persistent transition-show="scale" transition-hide="scale">
            <q-card>
                <q-card-section>
                <div class="text-h5 text-bold text-primary text-center">Anda Sudah Pernah Terdaftar</div>
                <div class="row justify-center">
                <q-img
                    src="~assets/question.png"
                    spinner-color="primary"
                    style="width: 118px; height: 112px;"
                    spinner-size="82px"
                />
                </div>
                <p class="text-center q-mt-md">
                    Database Anda sudah terdaftar. Silahkan klik lanjutkan untuk proses selanjutnya.
                </p>
                </q-card-section>
                <q-card-actions align="center">
                <q-btn label="Lanjutkan" color="primary" style="border-radius: 8px;" no-caps @click="$emit('update:alumnus', false)" />
                </q-card-actions>
            </q-card>
    </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'alumnus'
    ]
}
</script>

<style>

</style>