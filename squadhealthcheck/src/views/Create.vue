<template>
  <v-container fluid pa-0>
    <tool-bar />
    {{ $t('createView') }}
  </v-container>
</template>

<script>
  import ToolBar from '../components/ToolBar';
  
  export default {
    components: {
      'tool-bar': ToolBar,
    }
  }
</script>