<template>
    <q-page padding class="bg-white">
        <q-list>
            <q-item clickable v-ripple @click="$router.push('/detail')">
                <q-item-section avatar>
                    <q-avatar size="40px">
                        <img src="~assets/akun.png" >
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                <q-item-label >John Doe3</q-item-label>
                <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </q-item-section>

                <q-item-section side top>
                <q-item-label caption>20/06/2021</q-item-label>
                </q-item-section>
            </q-item>
            <q-separator spaced inset />

            <q-item clickable v-ripple @click="$router.push('/detail')">
                <q-item-section avatar>
                    <q-avatar size="40px">
                        <img src="~assets/akun.png" >
                    </q-avatar>
                    <!-- <q-avatar color="teal" text-color="white" icon="bluetooth" /> -->
                </q-item-section>
                <q-item-section>
                <q-item-label >John Doe1</q-item-label>
                <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </q-item-section>

                <q-item-section side top>
                <q-item-label caption class="text-primary">Baru Saja</q-item-label>
                <q-badge color="primary" label="9+" class="q-mt-sm" />
                </q-item-section>
            </q-item>
            <q-separator spaced inset />
            <q-item clickable v-ripple @click="$router.push('/detail')">
                <q-item-section avatar>
                    <q-avatar size="40px">
                        <img src="~assets/akun.png" >
                    </q-avatar>
                    <!-- <q-avatar color="teal" text-color="white" icon="bluetooth" /> -->
                </q-item-section>
                <q-item-section>
                <q-item-label >John Doe2</q-item-label>
                <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
                </q-item-section>

                <q-item-section side top>
                <q-item-label caption class="text-primary">2 Jam yang lalu</q-item-label>
                <q-badge color="primary" label="9+" class="q-mt-sm" />
                </q-item-section>
            </q-item>

            <q-separator spaced inset />
            

        </q-list>
    </q-page>
</template>

<script>
export default {

}
</script>

<style>

</style>