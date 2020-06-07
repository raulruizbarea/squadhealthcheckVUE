<template>
  <v-container pa-0 fluid>
    <shc-header />
    <v-col class="subtitle-1 text--line-height-s">
      <v-subheader class="d-block text-center shc-subheader mt-1">{{ $t('helloMsg') }}</v-subheader>
      <h4 class="font-weight-bold mb-3">{{ $t('squadMsg').toUpperCase() }}</h4>
      <v-row justify="center">
        <!-- Not Mobile -->
        <v-container class="text-center hidden-xs-only" style="max-width: 420px;" fluid>
          <v-text-field
            v-bind:label="$t('enterCode')"
            color="secondary"
            append-icon="mdi-arrow-right-circle-outline"
            @click:append="enterCodeClick"
            outlined
            hide-details
            v-model="surveyCode"
            maxlength="4"
            @keypress="onlyNumber"
          ></v-text-field>
          
          <h4 class="my-2">{{ $t('or').toLowerCase() }}</h4>

          <v-btn min-width="400" to="/create" color="secondary" x-large elevation="10">{{ $t('create') }}</v-btn>
        </v-container>

        <!-- Mobile -->
        <v-container class="text-center hidden-sm-and-up" fluid>
          <v-text-field
            v-bind:label="$t('enterCode')"
            color="secondary"
            append-icon="mdi-arrow-right-circle-outline"
            v-bind:placeholder="$t('digitCode')"
            @click:append="enterCodeClick"
            outlined
            hide-details
            v-model="surveyCode"
            maxlength="4"
            @keypress="onlyNumber"
          ></v-text-field>
          
          <h4 class="my-2">{{ $t('or').toLowerCase() }}</h4>

          <v-btn  block to="/create" color="secondary" x-large elevation="10">{{ $t('create') }}</v-btn>
        </v-container>
      </v-row>
    </v-col>
  </v-container>
</template>

<style scoped>
  .shc-subheader {
    color: var(--v-secondary-base) !important;
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
        //console.log(this.surveyCode);
        if (this.surveyCode.length == 4 && !isNaN(this.surveyCode)) {
          this.$router.push('survey/' + this.surveyCode); 
        }
      },
    },
    data: () => ({
      surveyCode: "",
      onlyNumber($event) {
        //console.log($event.keyCode); //keyCodes value
        let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
            $event.preventDefault();
        }
      }
    }),
  }
</script>