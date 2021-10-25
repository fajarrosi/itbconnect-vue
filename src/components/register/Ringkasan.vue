<template>
    <div>
        <div class="text-h5 text-bold text-primary">RINGKASAN DATA</div>
        <div class="text-subtitle2 q-mt-md text-justify">
            Berikut ringkasan data yang telah Anda Isi
        </div>
        <hr class="line-cards q-my-md">
        <table>
            <tr style="color:#363636; font-size:13px;">
                <td class="title-table q-pr-sm">Nama Lengkap</td>
                <td>: {{name}}</td>
            </tr>
            <tr style="color:#363636; font-size:13px;">
                <td class="title-table q-pr-sm">Alamat Email Aktif</td>
                <td>: {{email}}</td>
            </tr>
            <tr style="color:#363636; font-size:13px;">
                <td class="title-table q-pr-sm">No. WhatsApp Aktif</td>
                <td>: {{getNowa()}}</td>
            </tr>
            <tr style="color:#363636; font-size:13px;">
                <td class="title-table q-pr-sm">Tanggal Lahir</td>
                <td>: {{tgl}}</td>
            </tr>
            <tr style="color:#363636; font-size:13px;">
                <td class="title-table q-pr-sm">Jenjang Pendidikan</td>
                <td>: {{jenjang}}</td>
            </tr>
            <tr style="color:#363636; font-size:13px;">
                <td class="title-table q-pr-sm" >Program Studi</td>
                <td>: {{prodi}}</td>
            </tr>
            <tr style="color:#363636; font-size:13px;">
                <td class="title-table q-pr-sm">Tahun Masuk</td>
                <td>: {{thnmasuk}}</td>
            </tr>
            <tr style="color:#363636; font-size:13px;">
                <td class="text-left  q-pr-sm">Tahun Keluar</td>
                <td class="text-left">: {{thnkeluar}}</td>
            </tr>
            <tr style="color:#363636; font-size:13px;">
                <td class="text-left  q-pr-sm">Username</td>
                <td class="text-left">: {{username}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props:[
        'name',
        'email',
        'nowa',
        'tgl',
        'jenjang',
        'prodi',
        'thnmasuk',
        'thnkeluar',
        'username'
    ],
    methods:{
        getNowa(){
            let test = this.nowa.match(/(\d{0,4})(\d{0,4})(\d{0,4})/)
            let result = test[1] + '-' + test[2] + '-' + test[3]
            return result
        }
    }
}
</script>

<style>
.q-markup-table{
    background: transparent;
}
.title-table{
    width:130px;
}
</style>