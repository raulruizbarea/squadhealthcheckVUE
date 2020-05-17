import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from '@/constants/trans'

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE, // set locale
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { 
    en: { 
      //Global
      or: 'or',
      continue: 'Continue',
      cancel: 'Cancel',
      finish: 'Finish',
      start: 'Start',
      submit: 'Submit',
      writeHere: 'Write your feedback here...',
      optional: 'Optional',
      //Home
      appName: 'Squad Health Check',
      slogan: 'Increased awareness of where<br/>the squad is at, it’s state,<br/>challenges and opportunities.',
      helloMsg: 'Hello, nice to meet you!',
      squadMsg: 'Get moving with the Squad',
      enterCode: 'Enter code',
      create: 'Create',
      //Survey
      survey: 'Survey',
      surveyView: 'Survey view',
      exampleOfCrappy: 'Example of crappy',
      exampleOfAwesome: 'Example of awesome',
      surveyNotActive: 'The survey is not yet active',
      //Create
      summary: 'Summary',
      email: 'Email',
      createView: 'Create view',
      squadName: 'Squad name',
      projectName: 'Project name',
      sprintNumber: 'Sprint number',
      squadSize: 'Squad size',
      anonymous: 'Anonymous',
      createStepMsg1: 'Select the Squad information',
      createStepMsg2: 'Select the Survey information',
      next: 'Next',
      awaitingTeam: 'Awaiting squad team',
      status: 'Status',
      sprint: 'Sprint',
      members: 'Members',
      shareCodeMsg: 'Share this code with your squad',
      template: 'Template',
      basedOn: 'Based on',
      //Footer
      terms: 'By using this application, you agree to our<br /><strong>Terms of Service</strong> and <strong>Privacy Policy</strong>',
      //Feedback
      feedbackMsg1: 'We want to hear from you',
      feedbackMsg2: 'Thank you for taking the time to provide us with your feedback!',
    }, 
    es: { 
      //Global
      or: 'o',
      continue: 'Continuar',
      cancel: 'Cancelar',
      finish: 'Terminar',
      start: 'Empezar',
      submit: 'Enviar',
      writeHere: 'Escriba sus comentarios aquí...',
      optional: 'Opcional',
      //Home
      appName: 'Squad Health Check',
      slogan: 'Mayor conciencia de dónde está <br/> el escuadrón, su estado, <br/> desafíos y oportunidades.',
      helloMsg: 'Hola, encantad@ de conocerte!',
      squadMsg: 'Muévete con el Escuadrón',
      enterCode: 'Introduce el código',
      create: 'Crear',
      //Survey
      survey: 'Encuesta',
      surveyView: 'Vista de encuesta',
      exampleOfCrappy: 'Ejemplo de mierda',
      exampleOfAwesome: 'Ejemplo de asombroso',
      surveyNotActive: 'La encuesta no está activa todavía',
      //Create
      summary: 'Resumen',
      email: 'Correo electrónico',
      createView: 'Vista de creación',
      squadName: 'Nombre de escuadrón',
      projectName: 'Nombre del proyecto',
      sprintNumber: 'Número de sprint',
      squadSize: 'Tamaño del escuadrón',
      anonymous: 'Anónimo',
      createStepMsg1: 'Seleccione la información del escuadrón',
      createStepMsg2: 'Seleccione la información de la encuesta',
      next: 'Siguiente',
      awaitingTeam: 'Esperando al escuadrón',
      status: 'Estado',
      sprint: 'Sprint',
      members: 'Miembros',
      shareCodeMsg: 'Comparte este código con tu escuadrón',
      template: 'Plantilla',
      basedOn: 'Basada en',
      //Footer
      terms: 'Al usar esta aplicación, acepta nuestros <br /> <strong> Términos de servicio </strong> y <strong> Política de privacidad </strong>',
      //Feedback
      feedbackMsg1: 'Queremos saber de ti',
      feedbackMsg2: '¡Gracias por tomarse el tiempo de enviarnos sus comentarios!',
    } 
  }// set locale messages
})
