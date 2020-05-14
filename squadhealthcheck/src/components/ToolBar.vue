<template>
    <v-toolbar color="secondary" dark elevation="0">
        <v-btn to="/" icon>
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-title primary>{{ $t('appName') }}</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'ToolBar',
    }
</script>