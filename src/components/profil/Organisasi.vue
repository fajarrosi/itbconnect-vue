<template>
    <div>
        <div class="row justify-between">
            <div class="title-section">ORGANISASI</div>
            <q-btn flat dense style="color:rgba(25,135,191,1);
font-size: 12px;padding-top:0;" no-caps @click="ubah">
                <div>Ubah</div>
                <q-icon name="edit" size="15px"/>
            </q-btn>
        </div>
            <ul style="padding-left:0; color:#7b7a7a;list-style:none;" class="q-my-none">
                <li>
                    Unit Kebudayaan Betawi (UKB)
                </li>
                <li>
                    Unit Kebudayaan Betawi (UKB)
                </li>
                <li>
                    Unit Kebudayaan Betawi (UKB)
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
        'dminat'
    ],
    emits:['update:dminat'],
    methods:{
        ubah(){
            this.$emit('update:dminat',true)
        }
    }
}
</script>

<style>


</style>