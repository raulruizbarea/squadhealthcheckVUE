<template>
  <v-container fluid pa-0>
    <tool-bar />

    {{ $t('createView') }}
    <!--form-wizard title="" subtitle="">
      <tab-content>
        My first tab content
      </tab-content>
      <tab-content>
          My second tab content
      </tab-content>
      <tab-content>
        Yuhuuu! This seems pretty damn simple
      </tab-content>
    </form-wizard-->
  </v-container>
</template>

<script>
  //import {FormWizard, TabContent} from 'vue-form-wizard';
  //import 'vue-form-wizard/dist/vue-form-wizard.min.css';
  import ToolBar from '../components/ToolBar';
  
  export default {
  //component code
  components: {
    //FormWizard,
    //TabContent,
    'tool-bar': ToolBar,
  }
}
</script>