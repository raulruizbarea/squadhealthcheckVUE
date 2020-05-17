<template>
    <v-container pa-0>
        <v-fab-transition>
            <v-btn fab small fixed bottom right color="secondary" @click="dialog = !dialog">
                <v-icon small>mdi-message-draw</v-icon>
            </v-btn>
        </v-fab-transition>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
              <v-alert type="info" icon="mdi-comment-quote" color="secondary">{{$t('feedbackMsg1')}}!</v-alert>
            <!--v-card-title class="headline">{{$t('feedbackMsg1')}}</v-card-title-->

            <v-card-subtitle>{{$t('feedbackMsg2')}}</v-card-subtitle>
            <v-card-text>
                <v-textarea v-model="feedback" :label="$t('writeHere')" clearable color="secondary"></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!feedback" text color="secondary" @click="dialog = false, saveFeedback()">{{$t('submit')}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import db from '../firebaseInit'

    export default {
        name: 'Feedback',
        data: () => ({
            dialog: false,
            feedback: '',
        }),
        components:{
        },
        methods: {
            saveFeedback () {
                db.collection('feedbacks').add({
                    feedback: this.feedback,
                })
                .then(docRef => {
                    console.log('Feedback added: ', docRef.id);
                    this.feedback = '';
                })
                .catch(error => {
                    console.error('Error adding feedback: ', error);
                })
            }
        }
    }
</script>