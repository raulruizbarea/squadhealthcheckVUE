<template>
  <div class="create">
    Create
    <form-wizard title="" subtitle="">
      <tab-content>
        My first tab content
      </tab-content>
      <tab-content>
          My second tab content
      </tab-content>
      <tab-content>
        Yuhuuu! This seems pretty damn simple
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
  import {FormWizard, TabContent} from 'vue-form-wizard';
  import 'vue-form-wizard/dist/vue-form-wizard.min.css';
  
  export default {
  //component code
  components: {
    FormWizard,
    TabContent
  }
}
</script>