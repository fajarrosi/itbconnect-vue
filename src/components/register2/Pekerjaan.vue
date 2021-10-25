<template>
    <div>
        <div class="text-h5 text-bold text-primary">Isi BIODATA</div>
        <div class="text-subtitle2 q-mt-md text-justify">
            Mohon isikan biodata Anda dengan benar
        </div>
        <hr class="line-cards q-my-md">
        <p class="text-caption text-bold">Pekerjaan Terakhir</p>
        <q-input
            outlined
            dense
            :modelValue="perusahaan"
            @update:modelValue="event => $emit('update:perusahaan', event)"
            label="Perusahaan"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'perusahaan tidak boleh kosong',
            ]"
            class="q-mb-sm"
            bg-color="white"
            hide-bottom-space
            />
        <q-select  outlined dense :modelValue="profesi" @update:modelValue="event => $emit('update:profesi',event)" :options="optprofesi" label="Profesi" bg-color="white" class="q-mb-sm"/>
        <q-input
            outlined
            dense
            :modelValue="jabatan"
            @update:modelValue="event => $emit('update:jabatan', event)"
            label="Jabatan"
            lazy-rules
            :rules="[
            (val) => (val && val.length > 0) || 'jabatan tidak boleh kosong',
            ]"
            class="q-mb-sm"
            bg-color="white"
            hide-bottom-space
            />
    </div>
</template>

<script>
export default {
    data(){
        return{
            // optprofesi:[
            //     {
            //         label:'Profesi1',
            //         value:'1'
            //     },
            //     {
            //         label:'Profesi2',
            //         value:'2'
            //     }
            // ],
        }
    },
    props:[
        'profesi',
        'jabatan',
        'perusahaan',
        'optprofesi'
    ]
}
</script>

<style>

</style>