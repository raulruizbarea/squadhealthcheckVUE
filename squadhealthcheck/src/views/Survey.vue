<template>
    <v-container fluid pa-0 fill-height>
      <tool-bar />
       <v-container fluid v-if="!isSurveyStatusActive()">
          <h3 class="text-center">{{ $t('surveyNotActive') }}</h3>
          <div class="text-center">  
            <v-progress-circular class="ma-10" text-center :width="10" :size="70" color="secondary" indeterminate></v-progress-circular>
          </div>
       </v-container>
       <v-container fluid v-if="isSurveyStatusActive()">
          <v-stepper v-model="e1" class="elevation-0" color="secondary">
            <v-stepper-header>
              <div v-for="(question, index) in survey.questions" :key="index">
                <v-stepper-step :step="index+1" color="secondary">{{question.area}}</v-stepper-step>
                <v-divider></v-divider>
              </div>
            </v-stepper-header>

            <v-stepper-items>
               <v-stepper-content v-for="(question, index) in survey.questions" :key="index" :step="index">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
               </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
       </v-container>
    </v-container>
</template>

<script>
  import ToolBar from '../components/ToolBar';
  import json from '../constants/surveys.json';
  import { STATUS } from '@/constants/surveyStatus';
  import db from '../firebaseInit';

  export default {
    components: {
      'tool-bar': ToolBar,
    },
    data: () => ({
      e1: 1,
      surveyCode: null,
      surveyStatus: STATUS.INACTIVE,
      survey: JSON.parse(JSON.stringify(json)).en[0],
    }),
    methods: {
      isSurveyActive() {
        db.collection('surveys').where('code', '==', this.surveyCode).where('status','<',2).get().then((querySnapshot) => {
          if(querySnapshot.size > 0) {
            this.surveyStatus = STATUS.ACTIVE;
          }
        });
      },
      isSurveyStatusActive() {
        if (this.surveyStatus == STATUS.ACTIVE) {
          return true;
        } else {
          return false;
        }
      }
    },
    mounted() {
      this.isSurveyActive();
    },
  }
</script>