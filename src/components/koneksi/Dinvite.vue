<template>
    <q-dialog :model-value="dinvite" @click="$emit('update:dinvite', $event.target.value)" @hide="$emit('update:dinvite',false)">
        <q-card class="dinvite">
            <q-card-section>
                <div class="row justify-center">
                    <div class="text-17 text-primary text-center text-bold col-12" style="margin-bottom:-20px;">Undang Teman</div>
                    <img src="~assets/invite-friend.png" alt="undang-teman-ilustrasi">
                    <div class="text-15 text-bold col-12 text-center" style="color:#1987BF;margin-top:-30px;">Masukkan alamat email teman anda</div>
                    <q-input
                    dense
                    outlined
                    v-model="email"
                    placeholder="Alamat Email"
                    class="q-mb-sm col-10 q-mt-sm"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <q-btn color="primary" label="Kirim Undangan" no-caps class="col-7 btn-radius q-my-md"/>
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
export default {
    props:[
        'dinvite'
    ],
    data(){
        return{
            email:''
        }
    }
}
</script>

<style>
.dinvite.q-card{
    width: 418px;
    border-radius:10px;
}
</style>