<template>
  <v-container class="pa-0" fluid>
    <shc-header />
    <v-col class="subtitle-1 text--line-height-s mt-12">
      <v-subheader>Hello, nice to meet you!</v-subheader>
      <h2 class="headline font-weight-bold mb-3">Get moving with the Squad</h2>
      <v-row justify="center">
        <!-- Not Mobile -->
        <v-container class="text-center hidden-xs-only" style="max-width: 420px;">
          <v-text-field
            class="custom-placeholer-color"
            label="Enter code"
            color="secondary"
            append-icon="mdi-arrow-right-circle-outline"
            @click:append="enterCodeClick"
            outlined
            rounded
            hide-details
          ></v-text-field>
          <div>
            <h5><span>OR</span></h5>
          </div>
          <v-btn min-width="400" to="/create" color="secondary" x-large elevation="10" rounded>CREATE</v-btn>
        </v-container>

        <!-- Mobile -->
        <v-container class="text-center hidden-sm-and-up" fluid>
          <v-text-field
            class="custom-placeholer-color"
            label="Enter code"
            color="secondary"
            append-icon="mdi-arrow-right-circle-outline"
            @click:append="enterCodeClick"
            outlined
            rounded
            hide-details
          ></v-text-field>
          <div>
            <h5><span>OR</span></h5>
          </div>
          <v-btn  block to="/create" color="secondary" x-large elevation="10" rounded>CREATE</v-btn>
        </v-container>
      </v-row>
    </v-col>
  </v-container>
</template>

<style scoped>
h5 {
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 1em 30% 1em 30%;
  } 

  h5 span { 
    background:#fff; 
    padding:0 10px; 
  }
</style>

<script>
  import Header from "../components/Header";

  export default {
    name: 'Home',
    components:{
      'shc-header': Header,
    },
    methods: {
      enterCodeClick () {
        this.$router.push('survey')
      },
    },
  }
</script>