<template>
    <div class="row bg-grey-2 justify-center">
        <div class="register shadow-2 flex bg-white items-center">
            <q-layout view="lHh lpr lFf" container  class="shadow-2 rounded-borders">
                <q-header elevated>
                    <q-toolbar>
                        <q-btn flat icon="arrow_back" class="text-white" no-caps dense @click="$router.push('/testing')"/>
                        <q-input  outlined id="email" class="full-width q-pa-sm" v-model="keyword" color="white" bg-color="white" input-style="font-size: 16px;"  placeholder="Masukkan Kata Kunci" ref="focusKey"
                        @keyup.enter="onSearch"
                        />
                    </q-toolbar>
                </q-header>

                <q-page-container>
                    <q-page class="q-pa-md">
                        <p v-if="load">Mencari {{keyword}}.</p>
                        <q-card style="max-width: 300px" v-if="loading">
                            <q-item>
                                <q-item-section avatar>
                                <q-skeleton type="QAvatar" />
                                </q-item-section>

                                <q-item-section>
                                <q-item-label>
                                    <q-skeleton type="text" />
                                </q-item-label>
                                <q-item-label caption>
                                    <q-skeleton type="text" />
                                </q-item-label>
                                </q-item-section>
                            </q-item>

                            <q-skeleton height="200px" square />

                            <q-card-actions align="right" class="q-gutter-md">
                                <q-skeleton type="QBtn" />
                                <q-skeleton type="QBtn" />
                            </q-card-actions>
                        </q-card>
                        <p v-for="n in 15" :key="n">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
                        </p>
                    </q-page>
                </q-page-container>
            </q-layout>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            keyword:'',
            loading: false,
            load: false
        }
    },
    mounted(){
        setTimeout(() => {
            this.$refs.focusKey.focus()
        }, 100);
    },
    methods: {
        onSearch(){
            this.load = true
            console.log("when enter key is pressed then search")
            setTimeout(() => {
                this.loading = true
                this.load = false
            }, 2000);
            this.loading = false
        }
    },
}
</script>
<style lang="scss">
    .register{
        width: 480px;
        height:100vh;
    }
</style>