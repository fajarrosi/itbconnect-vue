<template>
<q-dialog :model-value="dprivacy" persistent>
    <q-card>
        <q-card-section>
            <div class="q-mb-md text-edit" style="font-size:17px;">Setelan Info Pribadi</div>
            <q-list>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Status</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-toggle color="primary" icon="lock" v-model="privacy" val="Status" />
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Gol.Darah</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-toggle color="primary" icon="lock" v-model="privacy" val="Gol.Darah" />
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Agama</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-toggle color="primary" icon="lock" v-model="privacy" val="Agama" />
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Alamat</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-toggle color="primary" icon="lock" v-model="privacy" val="Alamat" />
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>Email</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-toggle color="primary" icon="lock" v-model="privacy" val="Email" />
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                        <q-item-label>No.Telepon</q-item-label>
                    </q-item-section>

                    <q-item-section avatar>
                        <q-toggle color="primary" icon="lock" v-model="privacy" val="No.Telepon" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn flat label="Batal" color="primary" @click="$emit('update:dprivacy',false)" no-caps/>
            <q-btn flat label="Simpan" color="primary" no-caps/>
        </q-card-actions>
    </q-card>
</q-dialog>
</template>

<script>
export default {
    props:['dprivacy'],
    data(){
        return{
            privacy:[]
        }
    }
}
</script>

<style scoped>
.q-card{
    width:100vw;
    max-width:418px;
    border-radius:10px;
}
@media(min-width:428px){
    .q-card{
        width:418px;
        max-width:418px;
        border-radius:10px;
    }
}
</style>