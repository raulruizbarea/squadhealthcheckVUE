<template>
    <v-item-group mandatory>
        <v-container fluid pa-0>
            <v-row justify="end">
                <div v-for="(lang, index) in languages" :key="lang">
                    <v-btn text dark depressed small tile :ripple="false" min-width="20" class="px-0 mr-1"
                        :class="{'subtitle-1 font-weight-bold': index === activeItem || lang === $root.$i18n.locale,
                                 'mr-4': index === languages.length-1 }"
                        @click="changeLang(lang, index)">                            
                        {{ lang.toUpperCase() }}
                    </v-btn>
                </div>
            </v-row>
        </v-container>
  </v-item-group>
</template>

<style scoped>
    .v-btn:before {
        display: none;
    }
</style>

<script>
    export default {
        name: 'LanguageSwitcher',
        data: () => ({ 
            languages: ['en', 'es'],
            activeItem: -1,
        }),
        methods: {
            changeLang (lang, idx) {
                this.activeItem = idx;
                this.$root.$i18n.locale = lang;
            }
        }
    }
</script>