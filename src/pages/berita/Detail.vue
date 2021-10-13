<template>
    <q-page class="bg-white">
        <img src="~assets/berita-detail.png" alt="berita-detail-gambar">
        <div class="row q-px-md bg-white">
            <q-breadcrumbs class="text-black q-my-sm">
                <template v-slot:separator>
                    <q-icon
                    size="1.5em"
                    name="chevron_right"
                    color="primary"
                    />
                </template>

                <q-breadcrumbs-el label="Berita" />
                <q-breadcrumbs-el label="Kabar Alumni" />
                <q-breadcrumbs-el label="Judul Berita" />
            </q-breadcrumbs>
            <div class="text-h6 text-bold text-center q-my-md">Gembong Primadjaja, Ketua IA-ITB Periode 2021-2025</div>
            <div class="col-12 row justify-between">
                <div class="text-13 text-bold  " style="color:#a2a2a2;">19 April 2021</div>
                <div class="text-primary text-caption text-bold ">Kabar Alumni</div>
            </div>
            <q-separator spaced class="col-12" style="border:2px solid #e6e6e6;margin-bottom:16px;"/>
            <div class="text-caption text-justify q-pb-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsam ratione quos quam quisquam eaque, voluptatem quod repudiandae cum deleniti! Distinctio, deleniti minus excepturi molestias dignissimos, eius nesciunt ut ratione inventore sint, ipsam enim in. Quasi rem, quo error quidem dolores sed voluptatem suscipit corporis similique sit, libero blanditiis temporibus?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti iste eveniet eligendi ratione, consequuntur animi a quas vero eaque dolorem vel esse vitae totam perspiciatis minus dolor asperiores distinctio dolore iusto fugiat, nulla obcaecati sunt. Corporis necessitatibus totam error veritatis voluptas porro dolorem doloribus vero, repudiandae modi eos iure, eius excepturi perferendis ex aut dolor officia? Atque, eligendi accusantium? Praesentium eos, reiciendis quam qui enim corrupti cumque vitae suscipit eaque illum molestiae odit nisi tempore accusamus facilis totam rerum saepe amet deserunt animi non et. Nostrum voluptatum assumenda ad vel temporibus alias nulla esse reprehenderit laudantium facilis, natus unde, sint eaque hic eveniet delectus labore quibusdam iure officiis pariatur autem ex architecto illo. Libero explicabo, qui quisquam sint dolorem dolor modi? Fuga aut quos tempora similique natus delectus quisquam, harum aperiam ipsum libero laboriosam culpa! Dignissimos nihil quas ipsa consectetur veniam ex deserunt natus harum sint quo ipsum accusamus, nisi cumque omnis corrupti aliquam et temporibus eveniet vel? Odio, ipsam consequatur iure dignissimos enim eligendi earum aut tempora nulla corrupti, qui doloremque atque, ipsum voluptatem officia aspernatur nobis placeat laborum distinctio praesentium id nesciunt reprehenderit quis vel. Voluptatum expedita, voluptatem explicabo, repellat accusantium iure necessitatibus veritatis quos aspernatur, quaerat eius?
            </div>
            <div class="text-17 text-bold" style="color:#505050;">Baca Juga</div>
            <q-separator spaced class="col-12" style="border:2px solid #e6e6e6;margin-bottom:16px;"/>
            <div class="row q-pb-md">
                <div class="col-6 q-pr-sm">
                    <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                <img src="~assets/berita.png">
                <q-chip class="glossy bg-primary text-white q-ml-none" label="Kabar Alumni" style="margin-top:-50px;"/>
                <q-card-section class="q-py-none" style="margin-top:-20px;">
                  <div class="text-15 text-bold title-berita" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
                </q-card-section>
                <q-card-section class="q-py-sm">
                  <div class="text-13 ellipsis-3-lines">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta perspiciatis odio distinctio error nam commodi aut rerum! Qui, quasi.
                  </div>
                  <div class="text-13 text-bold q-mt-sm" style="color:#a2a2a2;">19 April 2021</div>
                </q-card-section>
              </q-card>
                </div>
                <div class="col-6 q-pr-sm">
                    <q-card style="border-top-left-radius:10px;border-top-right-radius:10px;">
                <img src="~assets/berita.png">
                <q-chip class="glossy bg-primary text-white q-ml-none" label="Kabar Alumni" style="margin-top:-50px;"/>
                <q-card-section class="q-py-none" style="margin-top:-20px;">
                  <div class="text-15 text-bold title-berita" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, providen 1</div>
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
        </div>
    </q-page>
</template>

<script>
export default {

}
</script>

<style>

</style>