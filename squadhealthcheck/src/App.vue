<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-content class="pa-0">
      <!-- Provides the application the proper gutter -->
      <v-container fluid pa-0>
        <!-- If using vue-router -->
        <router-view/>
      </v-container>
    </v-content>
    <shc-footer />
    <!--shc-feedback /-->
  </v-app>
</template>

<script>
  import Footer from "./components/Footer";
  import Feedback from "./components/Feedback";

  export default {
    name: 'App',
    components:{
      'shc-footer': Footer,
      'shc-feedback': Feedback,
    },
  }
</script>
