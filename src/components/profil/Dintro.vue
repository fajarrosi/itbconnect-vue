<template>
    <div> 
        <q-dialog :model-value="intro" @click="$emit('update:intro', $event.target.value)" persistent transition-show="scale" transition-hide="scale">
            <q-card>
                <q-card-section>
                <div class="row justify-center">
                    <p class="text-center q-mt-md text-primary text-bold col-12" style="font-size:18px;">
                        Isi Profile Dahulu
                    </p>
                <q-img
                    src="~assets/no-data.png"
                    spinner-color="primary"
                    style="width: 118px; height: 112px;"
                    spinner-size="82px"
                />
                    <p class="text-center q-mt-md text-grey-8 text-bold col-12" style="font-size:14px;">
                        Anda tidak bisa mengakses halaman lain sebelum melengkapi data diri Anda 
                    </p>
                    <q-btn label="Edit Profil" color="primary" style="border-radius: 8px;" no-caps @click="edit" class="col-4"/>
                </div>
                </q-card-section>
            </q-card>
    </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'intro',
        'dbio'
    ],
    emits:['update:intro','update:dbio'],
    methods:{
        edit(){
            this.$emit('update:intro', false)
            this.$emit('update:dbio',true)
        }
    }
}
</script>

<style scoped>
.q-card{
    width: 418px;
    border-radius:10px;
}
</style>