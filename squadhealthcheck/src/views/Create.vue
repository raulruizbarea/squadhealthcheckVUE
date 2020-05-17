<template>
  <v-container fluid pa-0>
    <tool-bar />
    <v-container fluid>
      <v-stepper v-model="e1" vertical class="elevation-0">

        <!-- STEP 1 -->
        <v-stepper-step :complete="e1 > 1" step="1" color="secondary">
          {{ $t('createStepMsg1') }}
          <small>{{$t('next')}}: {{$t('createStepMsg2')}}</small>
        </v-stepper-step>
        
        <v-stepper-content step="1">
          <v-form ref="form" v-model="step1Valid">
            <!--v-text-field
              v-model="email"
              :counter="50"
              :rules="emailRules"
              v-bind:label="$t('email')"
              required
              color="secondary"
            ></v-text-field-->
            <v-text-field
              v-model="squadName"
              :counter="40"
              :rules="squadNameRules"
              v-bind:label="$t('squadName')"
              required
              color="secondary"
            ></v-text-field>
            <v-text-field
              v-model="projectName"
              :counter="40"
              :rules="projectNameRules"
              v-bind:label="textFieldMsg"
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
            <!--v-subheader class="pl-0">{{ $t('squadSize') }}</v-subheader>
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
            ></v-slider-->
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
              <v-btn small :ripple="false" text @click="$router.go(-1)" class="btnNoEffect">{{$t('cancel')}}</v-btn>
              <v-btn small :disabled="!step1Valid" color="secondary" @click="e1 = 2">{{$t('continue')}}</v-btn>
            </v-row>
          </v-form>
        </v-stepper-content>



        <!-- STEP 2 -->
         <v-stepper-step :complete="e1 > 2" step="2" color="secondary">
          {{$t('createStepMsg2')}}
          <small>{{$t('next')}}: {{$t('summary')}}</small>
        </v-stepper-step>

        <v-stepper-content step="2">
          
          <v-select
            v-model="survey"
            :items="surveys"
            item-text="name"
            item-value="name"
            color="secondary"
            item-color="secondary"
            background-color="primary"            
            outlined
            return-object
            single-line
            dense
            @change="resetSurveys(survey.name)"
          ></v-select>

          <v-container fluid pa-0>
            <v-row dense v-for="(question, idx) in survey.questions" v-bind:key="idx">
              <v-col>
                <v-card outlined>
                  <v-toolbar flat color="secondary" dark dense height="35">
                    
                    <v-toolbar-title style="width: 100%">
                      <v-text-field class="caption" :value="question.area" hide-details></v-text-field>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn small icon @click="deleteQuestion(idx, survey)" right>
                      <v-icon small>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn icon small @click="show = !show, currentQuestion = idx" right>
                      <v-icon small>{{ show && currentQuestion == idx ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                  </v-toolbar>

                  <v-expand-transition>
                    <div v-show="show && currentQuestion == idx">
                      <v-card-text>
                        <v-textarea
                          outlined color="secondary"
                          clearable
                          rows="2"
                          class="caption pb-2"
                          hide-details
                          v-bind:label="$t('exampleOfAwesome')+':'"
                          :value="question.exampleOfAwesome"
                        ></v-textarea>
                        
                        <v-textarea
                          outlined color="secondary" 
                          clearable
                          rows="2"
                          class="caption"
                          hide-details
                          v-bind:label="$t('exampleOfCrappy')+':'"
                          :value="question.exampleOfCrappy"
                        ></v-textarea>
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-row justify="end" class="px-4">
            <v-btn small :ripple="false" text @click="e1 = 1" class="btnNoEffect">{{$t('cancel')}}</v-btn>
            <v-btn small color="error" class="mr-1" @click="resetSurveys(survey.name)">Reset</v-btn>
            <v-btn small :disabled="!step1Valid || survey.questions.length == 0" color="secondary" @click="e1 = 3">{{$t('continue')}}</v-btn>
          </v-row>
        </v-stepper-content>



        <!-- STEP 3 -->
        <v-stepper-step :complete="e1 > 3" step="3" color="secondary">
          {{$t('summary')}}
        </v-stepper-step>

        <v-stepper-content step="3">
          <div>
            <h4>{{$t('squadName')}}: {{ squadName }}</h4>
            <p v-if="projectName.length!=0" class="my-0">{{$t('projectName')}}: {{projectName}}</p>
            <p class="my-0">{{$t('sprint')}}: {{currentSprint}}</p>
            <p class="my-0">{{$t('survey')}}: {{survey.name}}</p>
          </div>
          <p class="subtitle-2 text-center font-weight-bold my-2">{{$t('shareCodeMsg')}}</p>
          <div class="text-center my-2">
            <code class="display-2 black--text">{{this.surveyCode}}</code>
          </div>

          <v-row justify="end" class="px-4">
            <v-btn small :ripple="false" text @click="e1 = 2" class="btnNoEffect">{{$t('cancel')}}</v-btn>
            <v-dialog v-model="dialog" persistent>
              <template v-slot:activator="{ on }">
                <v-btn small :disabled="!step1Valid" color="secondary" v-on="on" @click="createSurvey">{{$t('create')}}</v-btn>
              </template>
              <v-card>
                <v-alert prominent type="warning">Administrator code</v-alert>
                <v-card-text>Save this URL in order to enter as an administrator in your survey, if you lose it you will not be able to administrate the survey! /{{surveyId}}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false" to="/">Confirm</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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
  import json from '../constants/surveys.json';
  import md5 from 'js-md5';
  import db from '../firebaseInit';
  import { STATUS } from '@/constants/surveyStatus';

  export default {
    data: () => ({
      dialog: false,
      surveyId: null,
      //surveyCode:  (Math.floor(Math.random() * 10000) + 10000).toString().substring(1),
      surveyCode: null,
      show: false,
      currentQuestion: -1,
      step1Valid: true,
      //email: '',
      //emailRules: [
      //  v => !!v || 'Email is required',
      //  v => (v && v.length <= 50) || 'Email must be less than 50 characters',
      //  v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      //],
      squadName: '',
      squadNameRules: [
        v => !!v || 'Squad name is required',
        v => (v && v.length <= 40) || 'Squad name must be less than 40 characters',
      ],
      projectName: '',
      projectNameRules: [
        v => (v.length <= 40) || 'Project name must be less than 40 characters',
      ],
      //satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'],
      currentSprint: 1,
      //currentSize: 5,
      anonymous: false,
      e1: 1,
      survey: JSON.parse(JSON.stringify(json)).en[0],
      surveys: JSON.parse(JSON.stringify(json)).en,
    }),
    components: {
      'tool-bar': ToolBar,
    },
    methods: {
      deleteQuestion(index, survey) {
        survey.questions.splice(index, 1);
      },
      resetSurveys(name) {
        this.surveys = JSON.parse(JSON.stringify(json)).en.slice();
        this.survey = this.surveys[this.surveys.findIndex(x => x.name === name)];
     },
     createSurvey(){
       db.collection('surveys').add({
          code: this.surveyCode,
          status: STATUS.ACTIVE,
          creationDate: Date.now(),
          name: this.survey.name,
          project: this.projectName,
          sprint: this.currentSprint,
          questions: this.survey.questions,
          anonymous: this.anonymous,
        })
        .then(docRef => {
            console.log('Survey added: ', docRef.id);
            this.surveyId = docRef.id;
        })
        .catch(error => {
            console.error('Error updating survey: ', error);
        })
     },
     setSurveyCode(){
      this.surveyCode = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

      db.collection('surveys').where('code', '==', this.surveyCode).where('status','<',3).get().then((querySnapshot) => {
        if(querySnapshot.size > 0){
          this.setSurveyCode();
        }
      });
     }
    },
    computed: {
      textFieldMsg() {
        return this.$t('projectName') + " (" + this.$t('optional').toLowerCase() + ")";
      }
    },   
    mounted() {
      this.setSurveyCode();
    },
  }
</script>