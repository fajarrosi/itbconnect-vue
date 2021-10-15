<template>
    <div>
        <div class="row justify-between">
                <div class="title-section">PENGALAMAN</div>
               <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
            </div>
            <ul style="padding-left:15px;" class="q-my-none profil-color">
                <li>PT. Perusahaan 1, Jakarta, 2002-2007 <br>
                    sebagai Karyawan
                </li>
                <li>PT. Perusahaan 1, Jakarta, 2002-2007 <br>
                    sebagai Karyawan
                </li>
                <li>PT. Perusahaan 1, Jakarta, 2002-2007 <br>
                    sebagai Karyawan
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
        'dpengalaman'
    ],
    emits:['update:dpengalaman'],
    methods:{
        ubah(){
            this.$emit('update:dpengalaman',true)
        }
    }
}
</script>

<style>

</style>