<template>
    <v-item-group mandatory>
        <v-container fluid pa-0>
            <v-row justify="end">
                <div v-for="(lang, index) in languages" :key="lang">
                    <v-item>
                        <div class="mr-2 svh-language-switcher-pointer" 
                            :class="{'font-weight-bold': index === activeItem, 'mr-4': index === languages.length-1}"
                            @click="changeLang(lang, index)">                            
                            {{ lang.toUpperCase() }}
                        </div>
                    </v-item>
                </div>
            </v-row>
        </v-container>
  </v-item-group>
</template>

<style scoped>
    .svh-language-switcher-pointer {
        cursor: pointer;
    }
</style>

<script>
    export default {
        name: 'LanguageSwitcher',
        data: () => ({ 
            languages: ['en', 'es'],
            activeItem: 0,
        }),
        methods: {
            changeLang (lang, idx) {
                this.activeItem = idx;
                this.$root.$i18n.locale = lang;
            }
        }
    }
</script>