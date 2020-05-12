<template>
  <v-app>
    <v-content> 
      <router-view/>
    </v-content>
    <shc-footer />
  </v-app>
</template>

<script>
  import Footer from "./components/Footer";

  export default {
    name: 'App',
    components:{
      'shc-footer': Footer,
    },
  }
</script>
