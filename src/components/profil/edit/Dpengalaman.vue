<template>
    <div>
         <q-dialog :model-value="dpengalaman" @click="$emit('update:dpengalaman', $event.target.value)" persistent>
            <q-card class="hide-scrollbar">
                <q-card-section>
                    <div class="q-mb-md text-edit" style="font-size:17px;">PENGALAMAN</div>
                <div class="row q-mb-lg" v-for="(peng,k) in pengalaman" :key="k">
                    
                    <div class="col-4 text-edit">Perusahaan*</div>
                    <q-input
                    dense
                    outlined
                    v-model="peng.perusahaan"
                    placeholder="Perusahaan"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    
                    <div class="col-4 text-edit">Alamat (Kota)*</div>
                    <q-input
                    dense
                    outlined
                    v-model="peng.alamat"
                    placeholder="Alamat perusahaan"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <div class="col-4 text-edit">Tahun Aktif*</div>
                    <q-input
                    dense
                    outlined
                    v-model="peng.tahun"
                    placeholder="ex: 2002 - 2007"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <div class="col-4 text-edit">Posisi*</div>
                    <q-input
                    dense
                    outlined
                    v-model="peng.posisi"
                    placeholder="Posisi"
                    class="q-mb-sm col-8"
                    bg-color="white"
                    hide-bottom-space
                    />
                    <q-btn class="col-12" color="primary" icon="close" label="Hapus Pengalaman" flat dense @click="remove(k)" no-caps  v-if="k >0" style="font-style:italic;"/>
                </div>
                
                    <div class="row q-mt-xs justify-center " >
                        <q-btn class="col-6" color="primary" icon="add" label="Tambah Pengalaman" flat dense @click="add" no-caps   style="font-style:italic;"/>
                    </div>
                </q-card-section>
                <q-card-actions align="center" class="q-mb-md">
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dpengalaman', false)" class="col-5"/>
                    <q-btn  no-caps label="Simpan" color="primary" @click="onSave" class="col-5"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'dpengalaman',
        'dpend',
        'userbaru'
    ],
    emits:['update:dpend','update:dpengalaman'],
    data(){
        return{
            pengalaman:[
                {
                    posisi:'',
                    alamat:'',
                    tahun:'',
                    perusahaan:'',
                }
            ]
        }
    },
    methods:{
        add(){
            this.pengalaman.push({
                posisi:'',
                alamat:'',
                tahun:'',
                perusahaan:'',
            })
        },
        remove(val){
            this.pengalaman.splice(val,1)
        },
        onSave(){
            if (this.userbaru) {
                this.$emit('update:dpengalaman', false)
                this.$emit('update:dpend', true)
            }else{
                this.$emit('update:dpengalaman', false)
            }   

        }
    }
}
</script>

<style scoped>
.q-btn--outline::before{
    border: 2px solid currentColor;
}
.q-card{
    width: 418px;
    border-radius:10px;
}
.q-field--dense .q-field__bottom{
    padding:0;
}

</style>