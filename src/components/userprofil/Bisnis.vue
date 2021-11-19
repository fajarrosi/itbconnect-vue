<template>
    <div>
        <div class="row justify-between">
            <div class="title-section">BISNIS DAN PEKERJAAN</div>
        </div>
           
            <div class="" v-if="Object.keys(bisnis).length > 0">
                <div class="row " v-for="(b,index) in bisnis" :key="index">
                    <q-img :src="b.prevlogo ? b.prevlogo : require('assets/blogo.png')" alt="bisnislogo" class="col-3" width="97px" height="98px" />
                    <div class="col-8">
                        <div class="row q-pl-sm">
                            <div class="text-bold col-12" style="font-size:15px;">{{b.position}}</div>
                            <p class="text-caption q-my-none col-12">{{b.business_name}}</p>
                            <p class="text-caption q-my-none col-12">{{b.starting_year}} - {{b.end_year}}</p>
                            <p class="text-caption q-my-none col-12">{{b.location}}</p>
                            <p class="text-caption q-my-none col-12">{{b.portfolio}}</p>
                        </div>
                    </div>
                    <p class="text-caption text-justify col-12 q-mt-md">
                        {{b.business_information}}
                    </p>
                    <div class="col-4 text-center row" v-for="(produk,ind) in b.produk" :key="ind">
                        <q-img :src="produk.prevlogo ? produk.prevlogo : require('assets/bisnisket.png')" alt="bisnis keterangan" class="col-11" width="110px" height="64px" />
                        <span class="col-12">{{produk.deskripsi}}</span>
                    </div>
                    
                    <q-separator spaced style="border:1px solid #CCDBDC; background:#CCDBDC;" class="col-12"/>
                </div>
            </div>
            <div v-else>
                <span>Tidak Ada</span>
                <q-separator spaced style="border:1px solid #CCDBDC; background:#CCDBDC;"/>
            </div>
    </div>
</template>

<script>
export default {
    computed:{
        databisnis(){
            return this.$store.state.databisnis
        },
    },
    data(){
        return{
            produk:[],
            bisnis:[]
        }
    },
    mounted(){
        if(Object.keys(this.databisnis).length > 0){
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