<template>
    <div>
        <div class="text-h5 text-bold text-primary">ISI BIODATA</div>
        <div class="text-subtitle2 q-mt-md text-justify">
            Mohon isikan biodata Anda dengan benar
        </div>
        <hr class="line-cards q-my-md">
        <q-input
            outlined
            dense
            v-model="user.domisili"
            label="Alamat Domisili"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Alamat Domisili tidak boleh kosong',
            ]"
            class="q-mb-sm"
            bg-color="white"
            hide-bottom-space
        />

        <q-input
            outlined
            dense
            v-model="user.kota"
            label="Kota"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Kota tidak boleh kosong',
            ]"
            class="q-mb-sm"
            bg-color="white"
            hide-bottom-space
        />
        <q-input
            outlined
            dense
            v-model="user.provinsi"
            label="Provinsi"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Provinsi tidak boleh kosong',
            ]"
            class="q-mb-sm"
            bg-color="white"
            hide-bottom-space
        >
        </q-input>
        <p class="text-subtitle2 text-bold">Pekerjaan Terakhir</p>
        <q-input
            outlined
            dense
            v-model="user.profesi"
            label="Profesi"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Profesi tidak boleh kosong',
            ]"
            class="q-mb-sm"
            bg-color="white"
            hide-bottom-space
        />
        <q-input
            outlined
            dense
            v-model="user.jabatan"
            label="Jabatan"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'Jabatan tidak boleh kosong',
            ]"
            class="q-mb-sm"
            bg-color="white"
            hide-bottom-space
        />
        <q-btn
        @click="next"
        color="primary"
        label="Berikutnya"
        style="border-radius: 8px"
        size="12px"
        no-caps
        class="col"
        />
    </div>
</template>

<script>
export default {
    data(){
        return{
        user: {
        domisili: "",
        kota: "",
        provinsi: "",
        profesi: "",
        jabatan: "",
      },
        }
    },
    methods:{
        onSubmit(){
            console.log("user",this.user);
        },
        next(){
            console.log("user",this.user);
            this.$emit('update:step',2)
            // pertama dia ngubah step ditambah 1 biar step selanjutnya
            // submit form / simpan data ke vuex
        }
    }
}
</script>

<style>

</style>