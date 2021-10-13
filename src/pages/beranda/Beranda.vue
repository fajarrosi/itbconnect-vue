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
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn v-if="active" size="5px" :icon="btnProps.icon" color="white" flat round dense @click="onClick"/>
            <q-btn v-else size="5px" :icon="btnProps.icon" color="grey-8" flat round dense @click="onClick" />
        </template>
        <q-carousel-slide :name="1" class="column no-wrap">
          <div class="text-bold text-15 ellipsis-2-lines text-justify">
            first slide : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto deserunt velit quaerat modi excepturi at ullam ducimus sint. Voluptates!
          </div>
          <div class="row q-mt-sm" style="margin-bottom:25px;">
            <q-btn color="primary" label="Undang teman" no-caps style="font-size:13px; padding-left:24px; padding-right:24px;"/>
          </div>
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

      <q-carousel
        v-model="slider5"
        infinite
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="black"
        arrows
        height="80px"
        class="bg-white text-black no-shadow rounded-borders q-ma-md"
        style="border-radius:10px;"
      >
        <q-carousel-slide :name="1">
          <div class="row q-mx-md">
            <div class="col-2">
              <div class="text-caption text-primary">Minggu</div>
              <div class="text-primary text-bold" style="font-size:32px;line-height:26px;">25</div>
            </div>
            <div class="col-10 q-px-md">
              <div class="text-caption text-grey-8" style="line-height:9px;">Meeting</div>
              <div class="text-caption text-grey-8" style="line-height:21px;">Indonesianisme</div>
              <q-separator spaced style="border:1px solid grey;background-color:grey; margin-top:0;margin-bottom:0;"/>
              <div class="text-caption text-primary" style="line-height:21px;">Meeting ITB Connect</div>
            </div>
          </div>
          
        </q-carousel-slide>
        <q-carousel-slide :name="2" >
          <div class="row q-mx-md">
            <div class="col-2">
              <div class="text-caption text-primary">Rabu</div>
              <div class="text-primary text-bold" style="font-size:32px;line-height:26px;">10</div>
            </div>
            <div class="col-10 q-px-md">
              <div class="text-caption text-grey-8" style="line-height:9px;">Meeting</div>
              <div class="text-caption text-grey-8" style="line-height:21px;">Indonesianisme</div>
              <q-separator spaced style="border:1px solid grey;background-color:grey; margin-top:0;margin-bottom:0;"/>
              <div class="text-caption text-primary" style="line-height:21px;">Meeting ITB Connect</div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <div class="row justify-between q-mx-md q-mt-md">
          <div class="text-17 text-bold" style="color:#505050;">Rekomendasi</div>
      </div>
         <q-carousel
            v-model="slider2"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            control-color="black"
            style="background-color:transparent;"
            class="text-black"
            height="360px"
        >
            <q-carousel-slide :name="1" style="overflow-x:hidden;" >
              <div class="container" style="width:470px;display:flex;">
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-caption title-berita text-justify ellipsis-2-lines" style="font-weight:600;">John Doe1</div>
                  <div class="text-caption title-berita ellipsis-2-lines" style="font-weight:600;">- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-caption title-berita text-justify ellipsis-2-lines" style="font-weight:600;">John Doe 2</div>
                  <div class="text-caption title-berita ellipsis-2-lines" style="font-weight:600;">- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-caption title-berita text-justify ellipsis-2-lines" style="font-weight:600;">John Doe 3</div>
                  <div class="text-caption title-berita ellipsis-2-lines" style="font-weight:600;">- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
               
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" style="overflow-x:hidden;">
              <div class="container" style="width:470px;display:flex;">
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines">John Doe 3</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines">- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 4</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 5</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
               
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" style="overflow-x:hidden;">
              <div class="container" style="width:470px;display:flex;">
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines">John Doe 5</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines">- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 6</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 7</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
               
              </div>
            </q-carousel-slide>
        </q-carousel>
      <div class="row justify-between q-mx-md q-mt-none">
          <div class="text-17 text-bold" style="color:#505050;">Rekomendasi Berdasarkan Lokasi</div>
      </div>
         <q-carousel
            v-model="slider3"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            control-color="black"
            style="background-color:transparent;"
            class="text-black"
            height="360px"
        >
            <q-carousel-slide :name="1" style="overflow-x:hidden;" >
              <div class="container" style="width:470px;display:flex;">
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines">John Doe1</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines">- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 2</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 3</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
               
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" style="overflow-x:hidden;">
              <div class="container" style="width:470px;display:flex;">
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines">John Doe 3</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines">- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 4</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 5</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
               
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" style="overflow-x:hidden;">
              <div class="container" style="width:470px;display:flex;">
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines">John Doe 5</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines">- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 6</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
                <div class="q-pr-sm" style="width:150px;height:322px;">
                  <q-card style="border-radius:10px;">
                <img src="~assets/akun23.png" style="height:130px;">
                <q-card-section class="q-pt-sm q-pb-none" >
                  <div class="text-13 text-bold title-berita text-justify ellipsis-2-lines" >John Doe 7</div>
                  <div class="text-13 text-bold title-berita ellipsis-2-lines" >- Teknik Mesin'86</div>
                </q-card-section>
                <q-card-section class="q-pb-md q-pt-none row">
                  <div class="text-13 ellipsis-3-lines text-primary col-12">
                    Direktur Pelindo Energi Logistik
                  </div>
                  <q-btn color="primary" label="Connect" no-caps style="padding-left:24px; padding-right:24px;margin-top:8px;" class="col-12" />
                </q-card-section>
              </q-card>
                </div>
               
              </div>
            </q-carousel-slide>
        </q-carousel>
      <div class="row justify-between q-mx-md q-mt-none">
          <div class="text-17 text-bold" style="color:#505050;">Kabar Alumni</div>
      </div>

        <q-carousel
            v-model="slider4"
            swipeable
            animated
            infinite
            transition-prev="slide-right"
            transition-next="slide-left"
            control-color="black"
            style="background-color:transparent;"
            class="text-black"
        >
            <q-carousel-slide :name="1" style="overflow-x:hidden;">
              <div class="container" style="display:flex;width:700px;">
                <div class="content q-pr-md" style="width:400px;">
                  <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                <img src="~assets/berita.png">
                <q-card-section class="q-py-none">
                  <div class="text-15 text-bold title-berita" @click="$router.push('/berita-detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
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
                <q-card-section class="q-py-none">
                  <div class="text-15 text-bold title-berita" @click="$router.push('/berita-detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
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
                <q-card-section class="q-py-none">
                  <div class="text-15 text-bold title-berita" @click="$router.push('/berita-detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
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
                <q-card-section class="q-py-none">
                  <div class="text-15 text-bold title-berita" @click="$router.push('/berita-detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
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
                <q-card-section class="q-py-none">
                  <div class="text-15 text-bold title-berita" @click="$router.push('/berita-detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
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
                <q-card-section class="q-py-none">
                  <div class="text-15 text-bold title-berita" @click="$router.push('/berita-detail')">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
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
          slider3:1,
          slider4:1,
          slider5:1
      }
  }
}

</script>
<style scoped>
/*  .title-berita:hover{
  color:$primary;
   cursor:pointer;
 } */
.q-carousel :deep() .q-carousel__prev-arrow--horizontal{
  left:0;
}
.q-carousel :deep() .q-carousel__next-arrow--horizontal{
  right:0;
}
</style>