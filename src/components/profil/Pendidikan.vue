<template>
    <div>
        <div class="row justify-between">
            <div class="title-section">PENDIDIKAN</div>
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
        <ul style="padding-left:15px;" class="q-my-none profil-color">
                <li>
                    <div class="row">
                        <div class="col-4">1998 - 20002</div>
                        <div class="col-8">: Institut Teknik Bandung, Jurusan Teknik Mesin</div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-4">1998 - 20002</div>
                        <div class="col-8">: Institut Teknik Bandung, Jurusan Teknik Mesin</div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-4">1998 - 20002</div>
                        <div class="col-8">: Institut Teknik Bandung, Jurusan Teknik Mesin</div>
                    </div>
                </li>
                <li>
                    <div class="row">
                        <div class="col-4">1998 - 20002</div>
                        <div class="col-8">: Institut Teknik Bandung, Jurusan Teknik Mesin</div>
                    </div>
                </li>
        </ul>
        <svg class="Line_85" viewBox="0 0 396 1">
            <path id="Line_85" d="M 0 0 L 396 0">
            </path>
        </svg>
    </div>
</template>

<script>
export default {
    props:[
        'dpend'
    ],
    emits:['update:dpend'],
    methods:{
        ubah(){
            this.$emit('update:dpend',true)
        }
    }
}
</script>

<style>

</style>