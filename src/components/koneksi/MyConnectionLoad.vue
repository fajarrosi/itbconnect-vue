<template>

<div class="row q-my-sm items-center justify-between" v-for="n in 3" :key="n">
    <div class="col-2 text-center">
        <q-skeleton type="circle"  size="60px" />
    </div>
    <div class="col-7 q-pl-sm row">
        <q-skeleton class="col-12 q-mb-sm" height="21px"/>
        <q-skeleton class="col-12 q-mb-sm" height="21px"/>
    </div>
    <div class="col-2 text-right q-ml-auto row">
        <q-skeleton type="QBtn" height="21px" class="col" />
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>