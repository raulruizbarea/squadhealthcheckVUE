<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid pa-0>
        <!-- If using vue-router -->
        <router-view/>
      </v-container>
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
