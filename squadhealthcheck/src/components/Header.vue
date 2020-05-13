<template>
  <v-container class="secondary primary--text text-center shc-header" fluid>
    <shc-lang />
    <h1 class="pt-2">{{ $t('appName') }}</h1>
    <v-col class="subtitle-1 text--line-height-s mb-12">
      <v-rating v-model="rating" size="14" readonly dense half-increments class="pb-2"></v-rating>
      <span v-html="$t('slogan')"></span>
    </v-col>
    <router-link to="/"><v-img src="../assets/logo.png" width="7rem" class="shc-img"></v-img></router-link>
  </v-container>
</template>

<style scoped>
  .shc-header {
    border-radius: 0 0 100% 100%;
  }

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
  import LanguageSwitcher from "./LanguageSwitcher";

  export default {
    name: 'Header',
    components:{
      'shc-lang': LanguageSwitcher,
    },
    data: () => ({
      rating: 4.5,
    }),
  }
</script>