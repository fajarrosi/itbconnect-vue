<template>
    <div class="editbisnis">
        <q-page class="q-pb-lg q-px-lg relative-position">
            <div class="title-section q-my-md ">BISNIS DAN PEKERJAAN</div>
            <q-card class="my-card" flat>
                <q-card-section class="q-pa-none bg-secondary" v-if="Object.keys(bisnis).length > 0">
                    <q-scroll-area style="height: 60vh;">
                        <div class="row justify-between container" v-for="(b,index) in bisnis" :key="index">
                            <div class="col-9 text-primary q-pa-sm left-side">
                                {{b.business_name}}
                            </div >
                            <div class="col-3 text-primary q-pa-sm right-side" >
                                <q-btn color="positive" icon="edit" round size="sm" class="q-mr-sm" @click="onEdit(b.id)" />
                                <q-btn color="negative" icon="delete" round size="sm" @click="onDelete(b.id)" />
                            </div>
                        </div>
                    </q-scroll-area>
                </q-card-section>
                <q-card-section v-else class="row ">
                    <div class="col text-center text-primary q-pa-sm left-even" style="font-size:15px;">Belum Ada Bisnis dan Pekerjaan</div>
                </q-card-section>
            </q-card>
            <q-btn fab icon="add" color="primary" @click="onAdd" class="q-my-md btn-plus"/>
        </q-page>
            <dbisniss v-model:dbisnis="dbisnis" v-if="dbisnis" :id="id" :edit="edit"/>
            <dialogdelete v-model:ddelete="ddelete" v-if="ddelete" v-model:dload="dload" v-model:ddisabled="ddisabled"/>
    </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { useStore, mapActions } from 'vuex'
export default {
    setup () {
        const $q = useQuasar()
        const store = useStore()
        function confirm (val) {
        $q.dialog({
            title: 'Hapus Data',
            message: 'Apakah Anda Yakin ingin menghapus Data ini ?',
            cancel: true,
            persistent: true
        }).onOk(() => {
            store.dispatch('myprofil/delBisnis',val)
        }).onCancel(() => {
            // console.log('>>>> Cancel',val)
        }).onDismiss(() => {
            // console.log('I am triggered on both OK and Cancel')
        })
        }

        return { confirm }
    },
    components:{
        'dbisniss' : require('components/profil/edit/Dbisniss.vue').default,
        'dialogdelete' : require('components/DialogDelete.vue').default,
    },
    data(){
        return{
            dbisnis: false,
            ddelete: false,
            id:'',
            edit:false,
            dload:false,
            ddisabled:false
        }
    },
    computed:{
        bisnis(){
            return this.$store.state.myprofil.databisnis
        }
    },
    methods:{
        ...mapActions("myprofil", ['getBisnisField']),
        onDelete(val){
            this.id = val
            this.ddelete = true
        },
        onEdit(val){
            this.id = val
            this.edit = true
            this.getBisnisField()
            .then(()=>{
                this.dbisnis = true
            })
        },
        onAdd(){
            this.id = ''
            this.edit = false
            this.getBisnisField()
            .then(()=>{
                this.dbisnis = true
            })
        },
        onDeleting(){
            this.dload = true
            this.ddisabled = true
            this.$store.dispatch('myprofil/delBisnis',this.id)
            .then(()=>{
                this.dload = false
                this.ddisabled = false
                this.ddelete = false
            })
        }
    }
}
</script>

<style scoped>
.container:nth-child(even) .left-side{
    background-color:#b0c7e4;
}
.container:nth-child(even) .right-side{
    background-color:#dae3ef;
}
.container:nth-child(odd) .left-side{
    background-color:white;
}
.container:nth-child(odd) .right-side{
    background-color:#f2f2f2;
}
.btn-plus{
    position:absolute;
    bottom:0.625em;
    right:0.625em;
}
</style>