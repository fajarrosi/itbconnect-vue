<template>
    <div>
         <q-dialog :model-value="dminat" @click="$emit('update:dminat', $event.target.value)" @hide="$emit('update:dminat',false)">
            <q-card class="hide-scrollbar">
                <q-card-section>
                    <div class="q-mb-md text-edit" style="font-size:17px;">MINAT & ORGANISASI*</div>
                    <q-select  outlined dense v-for="(inp,k) in minat" :key="k" v-model="inp.selectedorg" emit-value map-options :options="optorganisasi" label="Minat & Organisasi" bg-color="white" class="q-mb-sm">
                        <template v-slot:after>
                            <q-btn round dense flat icon="close" v-if="k >0" @click="remove(k)"/>
                        </template>
                    </q-select>
                    <div class="row q-mt-xs justify-center " >
                        <q-btn class="col-7" color="primary" icon="add" label="Tambah Minat & Organisasi" flat dense @click="add" no-caps   style="font-style:italic;"/>
                    </div>
                    <div class="q-mb-md q-mt-lg text-edit" style="font-size:17px;">PENGURUS DAERAH & IA PRODI</div>
                    <q-select  outlined dense v-model="selectedpengurus" emit-value map-options :options="optpengurus" label="IA Pengurus Daerah" bg-color="white" class="q-mb-sm" />
                    <q-select  outlined dense v-model="selectedprodi" emit-value map-options :options="optprodi" label="IA Prodi" bg-color="white" class="q-mb-sm" />
                </q-card-section>
                <q-card-actions align="center" class="q-mb-md">
                    <q-btn  no-caps label="Kembali" outline
                    style="border-radius: 8px;color:#bfc0c0;" @click="$emit('update:dminat', false)" class="col-5"/>
                    <q-btn  no-caps label="Simpan" color="primary" @click="onSave" class="col-5"/>
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>
</template>

<script>
export default {
    props:[
        'dminat',
        'dbisnis',
        'userbaru'
    ],
    emits:[
        'update:dminat',
        'update:dbisnis'
    ],
    data(){
        return{
            minat:[
                {
                    selectedorg:''
                }
            ],
            optorganisasi:[
                {
                    label:'Orgn1',
                    value:'1'
                },
                {
                    label:'Orgn2',
                    value:'2'
                },
                {
                    label:'testing3',
                    value:'3'
                }
            ],
            optpengurus:[
                {
                    label:'IA Pengurus 1',
                    value:'1'
                },
                {
                    label:'IA Pengurus 2',
                    value:'2'
                },
                {
                    label:'IA Pengurus 3',
                    value:'3'
                }
            ],
            optprodi:[
                {
                    label:'IA Prodi 1',
                    value:'1'
                },
                {
                    label:'IA Prodi 2',
                    value:'2'
                },
                {
                    label:'IA Prodi 3',
                    value:'3'
                }
            ]
        }
    },
    methods:{
        add(){
            this.minat.push({
                selectedorg:''
            })
        },
        remove(val){
            this.minat.splice(val,1)
        },
        onSave(){
            if (this.userbaru) {
                this.$emit('update:dminat', false)
                this.$emit('update:dbisnis', true)
            }else{
                this.$emit('update:dminat', false)
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