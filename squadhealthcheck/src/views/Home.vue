<template>
  <v-container pa-0 fluid>
    <shc-header />
    <v-col class="subtitle-1 text--line-height-s mt-12">
      <v-subheader>{{ $t('helloMsg') }}</v-subheader>
      <h2 class="headline font-weight-bold mb-3">{{ $t('squadMsg') }}</h2>
      <v-row justify="center">
        <!-- Not Mobile -->
        <v-container class="text-center hidden-xs-only" style="max-width: 420px;">
          <v-text-field
            class="custom-placeholer-color"
            v-bind:label="$t('enterCode')"
            color="secondary"
            append-icon="mdi-arrow-right-circle-outline"
            @click:append="enterCodeClick"
            outlined
            rounded
            hide-details
            v-model="surveyCode"
            maxlength="4"
            @keypress="onlyNumber"
          ></v-text-field>
          <div>
            <h5><span>{{ $t('or').toUpperCase() }}</span></h5>
          </div>
          <v-btn min-width="400" to="/create" color="secondary" x-large elevation="10" rounded>{{ $t('create') }}</v-btn>
        </v-container>

        <!-- Mobile -->
        <v-container class="text-center hidden-sm-and-up" fluid>
          <v-text-field
            class="custom-placeholer-color"
            v-bind:label="$t('enterCode')"
            color="secondary"
            append-icon="mdi-arrow-right-circle-outline"
            @click:append="enterCodeClick"
            outlined
            rounded
            hide-details
            v-model="surveyCode"
            maxlength="4"
            @keypress="onlyNumber"
          ></v-text-field>
          <div>
            <h5><span>{{ $t('or').toUpperCase() }}</span></h5>
          </div>
          <v-btn  block to="/create" color="secondary" x-large elevation="10" rounded>{{ $t('create') }}</v-btn>
        </v-container>
      </v-row>
    </v-col>
    <shc-footer />
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
  import Footer from "../components/Footer";

  export default {
    name: 'Home',
    components:{
      'shc-header': Header,
      'shc-footer': Footer,
    },
    methods: {
      enterCodeClick () {
        //console.log(this.surveyCode);
        if (this.surveyCode.length == 4 && !isNaN(this.surveyCode)) {
          this.$router.push('survey');
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