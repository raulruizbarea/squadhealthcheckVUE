<template>
    <v-toolbar color="secondary" dark elevation="0">
        <v-row align="center">
            <v-col>
                <v-btn to="/" icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
            <v-col class="d-flex justify-space-around">
                <v-toolbar-title primary>{{ $t('appName') }}</v-toolbar-title>
            </v-col>
            <v-col class="d-flex justify-end">
      
            </v-col>
        </v-row>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'ToolBar',
    }
</script>