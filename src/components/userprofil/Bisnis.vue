<template>
    <div class="bisnis-profil"> 
        <q-card-section class="row justify-between q-pt-none">
            <div class="title-section">BISNIS DAN PEKERJAAN</div>
        </q-card-section>
        <div v-if="Object.keys(bisnis).length > 0">
            <div v-for="(b,index) in bisnis" :key="index">
                <q-card-section  class="row q-pt-none items-center">
                    <q-img :src="b.prevlogo ? b.prevlogo : require('assets/blogo.png')" alt="bisnislogo" class="col-3" width="97px" height="98px" />
                    <div class="col-8 q-pl-md row">
                        <div class="text-bold col-12" style="font-size:15px;">{{b.position}}</div>
                        <p class="q-my-none col-12">{{b.business_name}}</p>
                        <p class="q-my-none col-12">{{b.starting_year}} - {{b.end_year}}</p>
                        <p class="q-my-none col-12">{{b.location}}</p>
                        <p class="q-my-none col-12">{{b.portfolio}}</p>
                    </div>
                </q-card-section>
                
                <q-card-section class="q-pt-none " v-if="b.business_information" style="overflow-wrap: break-word;
  word-wrap: break-word;max-width:428px;" v-text="b.business_information">
                  
                </q-card-section> 
                <q-card-section v-else class="q-py-none">
                    Belum ada keterangan informasi bisnis
                </q-card-section>
                <div class="row" v-if="b.produk[0].prevlogo !== '' || b.produk[0].deskripsi !== ''">
                    <div class="col-4" v-for="(produk,ind) in b.produk" :key="ind">
                            <q-card-section class="q-py-none">
                                <q-img :src="produk.prevlogo ? produk.prevlogo : require('assets/bisnisket.png')" alt="bisnis keterangan" width="110px" height="64px" v-if="produk.prevlogo || produk.deskripsi"/>
                                <span v-if="produk.deskripsi">{{produk.deskripsi}}</span>
                            </q-card-section>
                    </div>
                </div>
                <q-card-section v-if="b.produk[0].prevlogo === '' && b.produk[0].deskripsi === ''">
                    Belum ada produk
                </q-card-section>
                <q-separator spaced style="background:#CCDBDC;" />
            </div>
        </div>

        <div v-else>
            <q-card-section class="q-pt-none">
                Belum ada bisnis dan pekerjaan
            </q-card-section>
            
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        databisnis(){
            return this.$store.state.rekomendasi.databisnis
        },
    },
    data(){
        return{
            produk:[],
            bisnis:[]
        }
    },
    mounted(){
        if(this.databisnis.length > 0){
            this.databisnis.forEach(el=>{
                this.bisnis.push({
                    logo:el.logo,
                    prevlogo:'',
                    position:el.position,
                    business_name:el.business_name,
                    portfolio:el.portfolio,
                    location:el.location,
                    business_information:el.business_information,
                    business_field_id:el.business_field_id,
                    starting_year:el.starting_year,
                    end_year:el.end_year,
                    produk:[],
                    id:el.id
                })
                el.produk.forEach(pr=>{
                    this.produk.push({
                        bisnisid:pr.user_bussiness_id,
                        deskripsi:pr.description,
                        logo:pr.product_image,
                    })
                })

            })
            this.bisnis.forEach(el=>{
                if(el.logo){
                    el.prevlogo = this.bisnislogo + el.logo
                }
            })
            this.produk.forEach(pr=>{
                this.bisnis.forEach(el=>{
                    if(pr.bisnisid === el.id){
                        if(pr.logo){
                            el.produk.push({
                                deskripsi: pr.deskripsi,
                                prevlogo: this.produkimg + pr.logo
                            })
                        }else{
                            el.produk.push({
                                deskripsi: pr.deskripsi,
                                prevlogo: ''
                            })
                        }
                    }
                })
            })
            
        }
    },
}
</script>

<style>

</style>