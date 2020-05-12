<template>
    <v-container class="secondary primary--text text-center" fluid>
        <h1 class="pt-6">Squad Health Check</h1>
        <v-col class="subtitle-1 text--line-height-s mb-12">
            <v-rating v-model="rating" size="14" readonly dense half-increments class="pb-2"></v-rating>
            <span v-html="slogan"></span>
        </v-col>
        <router-link to="/"><v-img src="../assets/logo.png" width="7rem" class="shc-img"></v-img></router-link>
    </v-container>
</template>

<style scoped>
  .shc-img {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 11.5rem;
    z-index: 999;
  }
</style>
<script>
  export default {
    name: 'Header',
    data: () => ({
      rating: 4.5,
      slogan: 'Increased awareness of where<br/>the squad is at, it’s state,<br/>challenges and opportunities.',
    }),
  }
</script>