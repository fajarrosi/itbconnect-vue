<template>
  <div class="row q-my-sm justify-between">
                                <q-skeleton  height="20px" class="col-3 q-my-sm"/>
                                <q-skeleton  height="20px" class="col-3 q-my-sm"/>
                                <q-skeleton  height="20px" class="col-3 q-my-sm"/>
                                <q-skeleton  height="20px" class="col-12 q-my-sm"/>
                                
                            </div>
                            <q-list bordered padding>
                                <div v-for="n in 3" :key="n">
                                    <q-item >
                                        <q-item-section top avatar>
                                            <q-skeleton type="circle"  />
                                        </q-item-section>
                                        <q-item-section class="row">
                                            <q-skeleton  height="20px"  class="col-12 q-mb-sm"/>
                                            <q-skeleton  height="20px"  class="col-12"/>
                                        </q-item-section>

                                        <q-item-section side top>
                                            <q-skeleton  height="36px" type="QChip" />
                                        </q-item-section>
                                    </q-item>
                                    <q-separator spaced inset="item" v-if="n !== 3"/>
                                </div>
                            </q-list>
                            <div class="row q-my-sm">
                                <q-skeleton  height="20px" class="col-12 q-my-sm"/>
                            </div>
                            <q-list bordered>
                                <div v-for="n in 3" :key="n">
                                    <q-item >
                                        <q-item-section top avatar>
                                            <q-skeleton  height="56px" width="100px"/>
                                        </q-item-section>

                                        <q-item-section class="row">
                                                <q-skeleton  height="20px"  class="col-12 q-mb-sm"/>
                                                <q-skeleton  height="20px"  class="col-12"/>
                                        </q-item-section>
                                    </q-item>
                                    <q-separator spaced v-if="n !== 3"/>
                                </div>
                            </q-list>
</template>

<script>
export default {

}
</script>

<style>

</style>