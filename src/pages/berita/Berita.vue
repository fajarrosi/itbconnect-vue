<template>
    <q-page >
        <q-carousel
        v-model="slider1"
        swipeable
        animated
        navigation
        height="150px"
        style="background-color:#efefef;color:#5b5b5b;"
        class="no-shadow"
        infinite
        autoplay
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn v-if="active" size="5px" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
            <q-btn v-else size="5px" :icon="btnProps.icon" color="grey-8" flat round dense @click="onClick" />
        </template>
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="text-bold text-15 ellipsis-3-lines text-justify">
            first slide : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto deserunt velit quaerat modi excepturi at ullam ducimus sint. Voluptates!
          </div>
          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <div class="text-bold text-15 ellipsis-3-lines text-justify">
            second slide : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, non.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, dolorem?
          </div>
          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <div class="text-bold text-15 ellipsis-3-lines text-justify">
            three slide : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ducimus aliquid magnam, dolores odio eos.
          </div>
          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
        </q-carousel-slide>
      </q-carousel>

      <div class="row justify-between q-mx-md q-mt-md">
          <div class="text-17 text-bold" style="color:#505050;">Berita Terkini</div>
          <div class="text-primary text-caption text-bold">Selengkapnya</div>
      </div>

        <q-carousel
            v-model="slider2"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            style="background-color:transparent;"
            class="text-black"
        >
            <q-carousel-slide :name="1" style="overflow-x:hidden;">
              <div class="container" style="display:flex;width:700px;">
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                      <img src="~assets/berita.png">
                      <q-chip class="glossy bg-primary text-white q-ml-none" label="Kabar Alumni" style="margin-top:-50px;"/>
                      <q-card-section class="q-py-none" style="margin-top:-20px;">
                        <div class="text-15 text-bold title-berita" @click="$router.push('/berita/detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                      </q-card-section>
                      <q-card-section class="q-py-sm">
                        <div class="text-13 ellipsis-3-lines">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                        </div>
                        <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                      </q-card-section>
                  </q-card>
                </div>
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                      <img src="~assets/berita.png">
                      <q-chip class="glossy bg-primary text-white q-ml-none" label="Kabar Alumni" style="margin-top:-50px;"/>
                      <q-card-section class="q-py-none" style="margin-top:-20px;">
                        <div class="text-15 text-bold title-berita" @click="$router.push('/berita/detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                      </q-card-section>
                      <q-card-section class="q-py-sm">
                        <div class="text-13 ellipsis-3-lines">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                        </div>
                        <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                      </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" style="overflow-x:hidden;">
              <div class="container" style="display:flex;width:700px;">
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                      <img src="~assets/berita.png">
                      <q-chip class="glossy bg-primary text-white q-ml-none" label="Kabar Alumni" style="margin-top:-50px;"/>
                      <q-card-section class="q-py-none" style="margin-top:-20px;">
                        <div class="text-15 text-bold title-berita" @click="$router.push('/berita/detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                      </q-card-section>
                      <q-card-section class="q-py-sm">
                        <div class="text-13 ellipsis-3-lines">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                        </div>
                        <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                      </q-card-section>
                  </q-card>
                </div>
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                      <img src="~assets/berita.png">
                      <q-chip class="glossy bg-primary text-white q-ml-none" label="Kabar Alumni" style="margin-top:-50px;"/>
                      <q-card-section class="q-py-none" style="margin-top:-20px;">
                        <div class="text-15 text-bold title-berita" @click="$router.push('/berita/detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                      </q-card-section>
                      <q-card-section class="q-py-sm">
                        <div class="text-13 ellipsis-3-lines">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                        </div>
                        <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                      </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" style="overflow-x:hidden;">
              <div class="container" style="display:flex;width:700px;">
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                      <img src="~assets/berita.png">
                      <q-chip class="glossy bg-primary text-white q-ml-none" label="Kabar Alumni" style="margin-top:-50px;"/>
                      <q-card-section class="q-py-none" style="margin-top:-20px;">
                        <div class="text-15 text-bold title-berita" @click="$router.push('/berita/detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                      </q-card-section>
                      <q-card-section class="q-py-sm">
                        <div class="text-13 ellipsis-3-lines">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                        </div>
                        <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                      </q-card-section>
                  </q-card>
                </div>
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                      <img src="~assets/berita.png">
                      <q-chip class="glossy bg-primary text-white q-ml-none" label="Kabar Alumni" style="margin-top:-50px;"/>
                      <q-card-section class="q-py-none" style="margin-top:-20px;">
                        <div class="text-15 text-bold title-berita" @click="$router.push('/berita/detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                      </q-card-section>
                      <q-card-section class="q-py-sm">
                        <div class="text-13 ellipsis-3-lines">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                        </div>
                        <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                      </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-carousel-slide>
        </q-carousel>
      <div class="row justify-between q-mx-md q-mt-none">
          <div class="text-17 text-bold" style="color:#505050;">Seputar Pengurus Pusat IA-ITB</div>
          <div class="text-primary text-caption text-bold">Selengkapnya</div>
      </div>

       <q-carousel
            v-model="slider3"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            style="background-color:transparent;"
            class="text-black"
        >
            <q-carousel-slide :name="1" style="overflow-x:hidden;" >
              <div class="container" style="display:flex;width:700px;">
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                        <img src="~assets/berita.png">
                        <q-chip class="glossy bg-warning text-white q-ml-none" label="Seputar PP-IA" style="margin-top:-50px;"/>
                        <q-card-section class="q-py-none" style="margin-top:-20px;">
                          <div class="text-15 text-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                        </q-card-section>
                        <q-card-section class="q-py-sm">
                          <div class="text-13 ellipsis-3-lines">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                          </div>
                          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                        <img src="~assets/berita.png">
                        <q-chip class="glossy bg-warning text-white q-ml-none" label="Seputar PP-IA" style="margin-top:-50px;"/>
                        <q-card-section class="q-py-none" style="margin-top:-20px;">
                          <div class="text-15 text-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                        </q-card-section>
                        <q-card-section class="q-py-sm">
                          <div class="text-13 ellipsis-3-lines">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                          </div>
                          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                        </q-card-section>
                    </q-card>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" style="overflow-x:hidden;">
              <div class="container" style="display:flex;width:700px;">
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                        <img src="~assets/berita.png">
                        <q-chip class="glossy bg-warning text-white q-ml-none" label="Seputar PP-IA" style="margin-top:-50px;"/>
                        <q-card-section class="q-py-none" style="margin-top:-20px;">
                          <div class="text-15 text-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                        </q-card-section>
                        <q-card-section class="q-py-sm">
                          <div class="text-13 ellipsis-3-lines">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                          </div>
                          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                        <img src="~assets/berita.png">
                        <q-chip class="glossy bg-warning text-white q-ml-none" label="Seputar PP-IA" style="margin-top:-50px;"/>
                        <q-card-section class="q-py-none" style="margin-top:-20px;">
                          <div class="text-15 text-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                        </q-card-section>
                        <q-card-section class="q-py-sm">
                          <div class="text-13 ellipsis-3-lines">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                          </div>
                          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                        </q-card-section>
                    </q-card>
                </div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" style="overflow-x:hidden;" >
              <div class="container" style="display:flex;width:700px;">
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                        <img src="~assets/berita.png">
                        <q-chip class="glossy bg-warning text-white q-ml-none" label="Seputar PP-IA" style="margin-top:-50px;"/>
                        <q-card-section class="q-py-none" style="margin-top:-20px;">
                          <div class="text-15 text-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                        </q-card-section>
                        <q-card-section class="q-py-sm">
                          <div class="text-13 ellipsis-3-lines">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                          </div>
                          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                        </q-card-section>
                    </q-card>
                </div>
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                        <img src="~assets/berita.png">
                        <q-chip class="glossy bg-warning text-white q-ml-none" label="Seputar PP-IA" style="margin-top:-50px;"/>
                        <q-card-section class="q-py-none" style="margin-top:-20px;">
                          <div class="text-15 text-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                        </q-card-section>
                        <q-card-section class="q-py-sm">
                          <div class="text-13 ellipsis-3-lines">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                          </div>
                          <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                        </q-card-section>
                    </q-card>
                </div>
              </div>
            </q-carousel-slide>
        </q-carousel>
    </q-page>
</template>

<script>

export default {
  data(){
      return{
          slider1:1,
          slider2:1,
          slider3:1
      }
  }
}

</script>
<style lang="scss" scoped>
.title-berita:hover{
  color:$primary;
  cursor:pointer;
}
</style>