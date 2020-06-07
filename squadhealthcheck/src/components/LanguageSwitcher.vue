<template>
    
            <!--div v-for="(lang, index) in languages" :key="lang">
                <v-btn text dark depressed small tile :ripple="false" min-width="20" class="px-0 mr-1"
                    :class="{'subtitle-1 font-weight-bold': index === activeItem || lang === $root.$i18n.locale,
                                'mr-4': index === languages.length-1 }"
                    @click="changeLang(lang, index)">                            
                    {{ lang.toUpperCase() }}
                </v-btn>
            </div-->
    <v-layout row wrap align-end>
      <v-flex xs3 offset-xs9 align-end>
        <v-select
            v-model="language"
            :items="languages"
            color="primary"
            item-color="secondary"
            background-color="transparent"            
            outlined
            return-object
            dense
            hide-details
            height="20"
            dark
            style="width: 90px; min-height: 20px !important;"
            class="mt-2 shc-select"
            @change="changeLang(language)"
        ></v-select>
    </v-flex>
</v-layout>
</template>

<script>
    export default {
        name: 'LanguageSwitcher',
        data: () => ({ 
            language: 'En',
            languages: ['En', 'Es'],
            activeItem: -1,
        }),
        methods: {
            changeLang (lang, idx) {
                this.activeItem = idx;
                this.$root.$i18n.locale = lang.toLowerCase();
            }
        }
    }
</script>