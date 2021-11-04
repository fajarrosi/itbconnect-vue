<template>
    <div class="content q-mr-md cursor-pointer" :style="detail ? 'width:200px;' : 'width:400px;'">
        <q-card class="card-radius q-hoverable relative-position" v-ripple @click="$router.push('/berita/detail')">
        <span class="q-focus-helper"></span>
            <q-chip class="text-white q-ml-none text-bold ppa" label="Seputar PP-IA" style="border-radius:0;z-index:99;" v-if="!databerita.kabar"/>
            <q-img
                src="~assets/berita.png"
                spinner-color="primary"
                spinner-size="82px"
                :draggable="false"
            />
            <!-- <img src="~assets/berita.png" draggable="false"> -->
            <q-chip class="text-white q-ml-none kabar text-bold" label="Kabar Alumni" v-if="databerita.kabar"/>
            <!-- <q-card-section class="q-py-none"  :class="databerita.kabar ? 'mt-20' : ''">
            <div class="text-15 text-bold title-berita cursor-pointer" >{{databerita.title}}</div>
            </q-card-section> -->
            <q-card-section class="q-pb-sm" :class="databerita.kabar ? 'mt-20' : ''">
                <div class="row">
                    <!-- <q-chip class="text-white q-ml-none text-bold ppa" label="Seputar PP-IA" style="border-radius:0;" v-if="!databerita.kabar"/>
                    <img src="~assets/berita.png" draggable="false">
                    <q-chip class="text-white q-ml-none kabar text-bold" label="Kabar Alumni" v-if="databerita.kabar"/> -->
                    <div class="text-15 text-bold col-12" >{{databerita.title}}</div>
                    <div class="col-12 text-13 ellipsis-3-lines">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                    </div>
                    <div class="text-13 text-bold q-mt-sm col-12" style="color:#a2a2a2;">19 April 2021</div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
    props:['databerita','detail']
}
</script>

<style lang="scss">
.mt-20{
    margin-top:-30px;
}
.kabar{
    margin-top:-50px;
    background:rgba(38,128,235,0.9);
}
.ppa{
    margin-top:20px;
    background:rgba(230,144,88,0.9);
    position:absolute;
}
.title-berita:hover{
    color:$primary;
    text-decoration:underline;
}
</style>