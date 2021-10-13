<template>
    <div>
        <div class="text-h5 text-bold text-primary">Isi BIODATA</div>
        <div class="text-subtitle2 q-mt-md text-justify">
            Mohon isikan biodata Anda dengan benar
        </div>
        <hr class="line-cards q-my-md">
        <p class="text-caption text-bold">Pekerjaan Terakhir</p>
        <q-select  outlined dense :modelValue="profesi" @update:modelValue="event => $emit('update:profesi',event)" :options="optprofesi" label="Profesi" bg-color="white" class="q-mb-sm"/>
        <q-select  outlined dense :modelValue="jabatan" @update:modelValue="event => $emit('update:jabatan',event)" :options="optjbtn" label="Jabatan" bg-color="white" class="q-mb-sm"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            optprofesi:[
                {
                    label:'Profesi1',
                    value:'1'
                },
                {
                    label:'Profesi2',
                    value:'2'
                }
            ],
            optjbtn:[
                {
                    label:'Jabatan1',
                    value:'1'
                },
                {
                    label:'Jabatan2',
                    value:'2'
                }
            ]
        }
    },
    props:[
        'profesi',
        'jabatan'
    ]
}
</script>

<style>

</style>