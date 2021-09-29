<template >
    <div>
        <div class="row justify-center q-mt-md">
        <q-banner dense inline-actions class="text-white bg-red col-md-8 col-10" v-if="user.status === 'baru'">
        SIlahkan tunggu akun anda di verifikasi oleh admin
        </q-banner>
            <q-card class="my-card col-10">
                <q-card-section>
                    <p class="title">Profil</p>
                    <q-separator inset />
                    <div class="row q-mt-lg items-center">
                        <label for="name" class="col-4">Nama</label>
                        <q-input outlined v-model="user.complete_name" id="name" class="col-8 q-mb-lg"/>
                        <label for="email" class="col-4">Email</label>
                        <q-input outlined v-model="user.email" id="email" class="col-8 q-mb-lg"/>
                        <label for="alamat" class="col-4">Alamat</label>
                        <q-input outlined v-model="alamat" id="alamat" class="col-8 q-mb-lg" disable type="textarea"/>
                        <label for="nomorhp" class="col-4">No. Telepon</label>
                        <q-input outlined v-model="nohp" id="nomorhp" class="col-8 q-mb-lg" disable/>
                        <label for="fb" class="col-4">Facebook</label>
                        <q-input outlined v-model="fb" id="fb" class="col-8 q-mb-lg" disable/>
                        <label for="ig" class="col-4">Instagram</label>
                        <q-input outlined v-model="ig" id="ig" class="col-8 q-mb-lg" disable/>
                        <label for="tw" class="col-4">Twitter</label>
                        <q-input outlined v-model="tw" id="tw" class="col-8 q-mb-lg" disable/>
                        <label for="link" class="col-4">LinkedIn</label>
                        <q-input outlined v-model="link" id="link" class="col-8 q-mb-lg" disable/>
                        <label for="link" class="col-4">Ganti Password</label>
                        <q-input outlined v-model="link" id="link" class="col-8 q-mb-lg" disable/>
                        <label for="link" class="col-4">Semua orang bisa melihat</label>
                        <q-input outlined v-model="link" id="link" class="col-8 q-mb-lg" disable/>
                        <label for="link" class="col-4">Pengalaman</label>
                        <q-input outlined v-model="link" id="link" class="col-8 q-mb-lg" disable/>
                        <label for="link" class="col-4">Pendidikan</label>
                        <q-input outlined v-model="link" id="link" class="col-8 q-mb-lg" disable/>
                        <label for="link" class="col-4">Minat dan Organisasi</label>
                        <q-input outlined v-model="link" id="link" class="col-8 q-mb-lg" disable/>
                    </div>
                </q-card-section>
            </q-card>

        </div>
        <q-dialog v-model="carousel"
            maximized
            persistent
        >
            <q-carousel
                v-model="slide"
                transition-prev="jump-right"
                transition-next="jump-left"
                swipeable
                animated
                control-color="white"
                navigation
                padding
                :arrows="$q.screen.gt.sm"
                class=" text-white shadow-1 rounded-borders"
            >
                <q-carousel-slide :name="1" class="bg-orange-9 column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="bg-blue-8 column no-wrap flex-center">
                <q-icon name="live_tv" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="bg-cyan-10 column no-wrap flex-center">
                <q-icon name="layers" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <q-carousel-slide :name="4" class="bg-red-8 column no-wrap flex-center">
                <q-icon name="terrain" size="56px" />
                <div class="q-mt-md text-center">
                    {{ lorem }}
                </div>
                </q-carousel-slide>
                <template v-slot:control>
                    <q-carousel-control
                    position="bottom-right"
                    :offset="[18, 18]"
                    class="q-gutter-xs" v-if="slide === 4"
                    >
                        <q-btn color="white" text-color="black" label="Tutup" v-close-popup no-caps/>
                    </q-carousel-control>
                </template>
            </q-carousel>
        </q-dialog>
    </div>
</template>
<script>

import { ref } from 'vue'
import { mapState } from 'vuex'
export default {
    setup () {
        return {
            carousel: ref(false),
            slide: ref(1),
            maximizedToggle: ref(true),
            lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
        }
    },
    data(){
        return{
            name:'John Doe',
            email:'johndoe@gmail.com',
            alamat:'',
            nohp:'',
            fb:'',
            ig:'',
            tw:'',
            link:'',
            control : false

        }
    },
    mounted(){
        if(this.user.status === 'baru'){
            this.ctd()
        }
    },
    methods: {
        ctd(){
            setTimeout(()=>{
                this.carousel = true
            },500)
        }
    },
    computed: {
        ...mapState({
            user : state => state.auth.useractive
        })
    }
}
</script>
<style lang="scss" scoped>
    .title{
        font-size: 24px;
    }
</style>