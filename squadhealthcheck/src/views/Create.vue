<template>
  <v-container fluid pa-0>
    <tool-bar />
    <v-container fluid>
      <v-stepper v-model="e6" vertical class="elevation-0">
        <v-stepper-step :complete="e6 > 1" step="1" color="secondary">
          {{ $t('createStepMsg1') }}
          <small>{{$t('next')}}: {{$t('awaitingTeam')}}</small>
        </v-stepper-step>
        
        <v-stepper-content step="1">
          <v-form ref="form" v-model="step1Valid">
            <v-text-field
              v-model="squadName"
              :counter="40"
              :rules="squadNameRules"
              v-bind:label="$t('squadName')"
              required
              color="secondary"
            ></v-text-field>
            <v-subheader class="pl-0">{{ $t('sprintNumber') }}</v-subheader>
            <span
              class="subtitle-1"
              v-text="currentSprint"
            ></span>
            <v-slider
              v-model="currentSprint"
              color="secondary"
              track-color="gray"
              :thumb-label="true"
              min="1"
              max="50"
              class="px-5"
              :thumb-size="24"
              hide-details
            ></v-slider>
            <v-subheader class="pl-0">{{ $t('squadSize') }}</v-subheader>
            <span
              class="subtitle-1"
              v-text="currentSize"
            ></span>
            <v-slider
              v-model="currentSize"
              color="secondary"
              track-color="gray"
              :thumb-label="true"
              min="2"
              max="20"
              class="px-5"
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
            <!--v-btn block to="/create" color="secondary" x-large elevation="10" rounded>{{ $t('create') }}</v-btn-->
            <v-row justify="end" class="px-4">
              <v-btn :ripple="false" text @click="$router.go(-1)" class="btnNoEffect">{{$t('cancel')}}</v-btn>
              <v-btn :disabled="!step1Valid" color="secondary" @click="e6 = 2">{{$t('continue')}}</v-btn>
            </v-row>
          </v-form>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2" color="secondary">
          {{$t('awaitingTeam')}}
          <small>{{$t('next')}}: {{$t('status')}}</small>
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-row justify="end" class="px-4">
            <v-btn :ripple="false" text @click="e6 = 1" class="btnNoEffect">{{$t('cancel')}}</v-btn>
            <v-btn :disabled="!step1Valid" color="secondary" @click="e6 = 3">{{$t('continue')}}</v-btn>
          </v-row>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3" color="secondary">
          {{$t('status')}}
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-row justify="end" class="px-4">
            <v-btn :ripple="false" text @click="e6 = 2" class="btnNoEffect">{{$t('cancel')}}</v-btn>
            <v-btn :disabled="!step1Valid" color="secondary">{{$t('finish')}}</v-btn>
          </v-row>
        </v-stepper-content>
      </v-stepper>      
    </v-container>
  </v-container>
</template>

<style scoped>
.btnNoEffect:before {
  display: none;
}
</style>

<script>
  import ToolBar from '../components/ToolBar';
  
  export default {
    data: () => ({
      step1Valid: true,
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