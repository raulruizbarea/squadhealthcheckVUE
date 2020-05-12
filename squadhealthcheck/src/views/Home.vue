<template>
  <v-container class="pa-0" fluid>
    <shc-header />
    <v-col class="subtitle-1 text--line-height-s mt-12">
      <v-subheader>Hello, nice to meet you!</v-subheader>
      <h2 class="headline font-weight-bold mb-3">Get moving with the Squad</h2>
      <v-row justify="center">
        <v-container class="text-center" fluid>
          <!-- Hola -->
          <!-- Hola 2 -->
          <v-text-field
            label="Enter code"
            color="secondary"
            append-icon="mdi-arrow-right"
            outlined
          ></v-text-field>
          <v-btn class="hidden-xs-only" min-width="400" to="/create" color="secondary" x-large elevation="10">CREATE</v-btn>
          <v-btn class="hidden-sm-and-up" block to="/create" color="secondary" x-large elevation="10">CREATE</v-btn>
        </v-container>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
  import Header from "../components/Header";

  export default {
    name: 'Home',
    components:{
      'shc-header': Header,
    },
  }
</script>