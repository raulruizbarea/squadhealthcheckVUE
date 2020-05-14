<template>
    <v-toolbar color="secondary" dark elevation="0">
        <v-row align="center">
            <v-btn to="/" icon>
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title primary>{{ $t('appName') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <shc-lang />
        </v-row>
    </v-toolbar>
</template>

<script>
    import LanguageSwitcher from "./LanguageSwitcher";

  export default {
    name: 'ToolBar',
    components:{
      'shc-lang': LanguageSwitcher,
    },
  }
</script>