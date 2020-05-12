<template>
  <v-app>
    <shc-header />
    
    <v-content> 
      <router-view/>
    </v-content>
    
    <shc-footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components:{
    'shc-header': Header,
    'shc-footer': Footer,
  },
}
</script>
