<template>
    <div>
        <div class="text-h5 text-bold text-primary">Minat & Organisasi</div>
            <div class="text-subtitle2 q-mt-md text-justify">
                Silahkan isi minat dan organisasi anda
            </div>
            <hr class="line-cards q-my-md">
    </div>
</template>

<script>
export default {
   
    data(){
        return{
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
            inputs:[
                {selectedorg:''}
            ],
        }
    },
   
    methods:{
        onClick(){
            this.inputs.push({
                selectedorg:''
            })
            
        },
        remove(val){
            this.inputs.splice(val,1)
        },
    }
}
</script>

<style>

</style>