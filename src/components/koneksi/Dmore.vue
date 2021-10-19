<template>
    <div>
        <q-dialog :model-value="dmore" @click="$emit('update:dmore', $event.target.value)" position="bottom" @hide="$emit('update:dmore',false)">
            <q-card class="hide-scrollbar">
                <q-card-section>
                    <div class="text-17 text-bold"> Luke Pearce</div>
                    <div class="text-15">Teknik Mesin'86</div>
                    <q-btn no-caps class="text-left q-pl-none" flat>
                        <img src="~assets/email.png" alt="pesan">
                        <div class="text-13 q-ml-md">Kirim Pesan</div>
                    </q-btn>
                    <br>
                    <q-btn no-caps class="text-left q-pl-none" flat>
                        <img src="~assets/remove-user.png" alt="hapus">
                        <div class="text-13 q-ml-md">Hapus dari Koneksi</div>
                    </q-btn>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'dmore'
    ],
}
</script>

<style scoped>

.q-card{
    width: 418px;
    border-radius:10px;
}

</style>