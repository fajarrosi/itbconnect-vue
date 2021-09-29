<template>
<q-page>

  <div class="q-pa-md">
    <h1>{{user.profile}}</h1>
  </div>
</q-page>
</template>

<script>
export default ({
  data(){
    return {
      user:{}
    }
  },
    mounted(){
      this.$store.dispatch('profile/getProfile')
      .then(response =>{
        console.log("response",response)
        this.user = response.data.data
      })
    },
})
</script>
