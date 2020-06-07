<template>
  <v-container class="primary--text text-center shc-header pt-0" fluid>
    <shc-lang />
    <h3>{{ $t('appName').toUpperCase() }}</h3>
    <v-col class="text--line-height-s">
      <v-rating v-model="rating" size="12" readonly dense half-increments class="pb-2"></v-rating>
      <span v-html="$t('slogan')" class="shc-slogan"></span>
      <v-img src="../assets/logo.png" width="7rem" class="shc-img"></v-img>
    </v-col>
  </v-container>
</template>

<style scoped>
  .shc-header {
    background: url('../assets/home_background.png') no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 101% 300px;
  }

  .shc-slogan {
    font-size: 13px;
  }

  .shc-img {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    margin-top: 1em;
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