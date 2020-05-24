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
                <v-stepper-step :step="index+1" color="secondary" class="pa-0">{{question.area}}</v-stepper-step>
                <v-divider></v-divider>
              </div>
            </v-stepper-header>

            <v-stepper-items>
               <v-stepper-content v-for="(question, index) in survey.questions" :key="index" :step="index+1">
                <v-card class="mb-12"
                  color="secondary"
                >
                  <v-card-title class="white--text">{{question.area}}</v-card-title>
                  <v-alert class="caption mx-2" type="success" icon="mdi-emoticon-happy-outline">{{question.exampleOfAwesome}}</v-alert>
                  <v-alert class="caption mx-2" type="error" icon="mdi-emoticon-sad-outline">{{question.exampleOfCrappy}}</v-alert>

                </v-card>
                <v-slider
                  color="secondary"
                  track-color="gray"
                  class="px-5"
                  thumb-label="always"
                  thumb-size="40"
                  hide-details
                  value="49"
                  v-model="survey.questions[index].value"
                >
                  <template v-slot:thumb-label="{ value }">
                    {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
                  </template>
                </v-slider>

                <v-btn color="secondary" @click="index === survey.questions.length-1 ? finishSurvey() : e1++">{{ index===survey.questions.length-1 ? "Finish" : "Continue"}}</v-btn>
                <v-btn v-if="index!=0" text @click="e1--">Cancel</v-btn>
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
      surveyId: null,
      surveyCode: null,
      surveyStatus: STATUS.INACTIVE,
      survey: null,
      satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
    }),
    methods: {
      isSurveyActive() {
        db.collection('surveys').where('code', '==', this.surveyCode).where('status','<',2).get().then((querySnapshot) => {
          if(querySnapshot.size > 0) {
            this.surveyId = querySnapshot.docs[0].id;
            this.surveyStatus = STATUS.ACTIVE;
            this.survey = querySnapshot.docs.map(doc => doc.data())[0];
          }
        });
      },
      isSurveyStatusActive() {
        if (this.surveyStatus == STATUS.ACTIVE) {
          return true;
        } else {
          return false;
        }
      },
      finishSurvey() {
        var user = [];
        user.push({username: "Anonymous", answerDate: Date.now(), answers: []});

        this.survey.questions.forEach(element => {
          user[0].answers.push({
            area: element.area,
            score: element.value
          });
        });

        db.collection('surveys').doc(this.surveyId)
        .collection('answers')
        .add(user[0])
        .then(docRef => {
            console.log('Answer added: ', docRef.id);
            this.surveyId = docRef.id;
        })
        .catch(error => {
            console.error('Error updating survey: ', error);
        });
      }
    },
    mounted() {
      this.isSurveyActive();
    },
    created() {
      this.surveyCode = this.$route.params.id;
    },
  }
</script>