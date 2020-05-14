<template>
  <v-container fluid pa-0>
    <tool-bar />
    <v-container fluid>
      <v-stepper v-model="e6" vertical class="elevation-0">
        <v-stepper-step :complete="e6 > 1" step="1" color="secondary">
          Select the Squad information
          <!--small>Summarize if needed</small-->
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-text-field
            v-model="squadName"
            :counter="40"
            :rules="squadNameRules"
            v-bind:label="$t('squadName')"
            required
            color="secondary"
          ></v-text-field>
          <v-subheader class="pl-0">{{ $t('sprintNumber') }}</v-subheader>
          <v-slider
            v-model="currentSprint"
            color="secondary"
            track-color="gray"
            thumb-label="true"
            min="1"
            max="50"
            :thumb-size="24"
            hide-details
          ></v-slider>
          <v-subheader class="pl-0">{{ $t('squadSize') }}</v-subheader>
          <v-slider
            v-model="currentSize"
            color="secondary"
            track-color="gray"
            thumb-label="true"
            min="2"
            max="20"
            :thumb-size="24"
            hide-details
          ></v-slider>
          <v-layout column align-center>
            <v-switch 
              v-model="anonymous" 
              :label="$t('anonymous')"
              color="secondary"
              inset>
            </v-switch>
          </v-layout>
          <v-btn block to="/create" color="secondary" x-large elevation="10" rounded>{{ $t('create') }}</v-btn>
          
          <v-btn color="secondary" @click="e6 = 2">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2" color="secondary">Configure analytics for this app</v-stepper-step>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="secondary" @click="e6 = 3">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3" color="secondary">Select an ad format and name ad unit</v-stepper-step>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="secondary" @click="e6 = 1">Finish</v-btn>
        </v-stepper-content>
      </v-stepper>      
    </v-container>
  </v-container>
</template>

<script>
  import ToolBar from '../components/ToolBar';
  
  export default {
    data: () => ({
      squadName: '',
      squadNameRules: [
        v => !!v || 'Squad name is required',
        v => (v && v.length <= 40) || 'Squad name must be less than 40 characters',
      ],
      //satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
      currentSprint: 1,
      currentSize: 5,
      anonymous: false,
      e6: 1,
    }),
    components: {
      'tool-bar': ToolBar,
    },
    methods: {
    },
  }
</script>