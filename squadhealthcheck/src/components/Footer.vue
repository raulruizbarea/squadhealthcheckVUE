<template>
    <v-footer absolute padless>
        <v-col class="caption text-center text--secondary text--line-height-s" v-html="terms">
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        name: 'Footer',
        data: () => ({
            terms: 'By using this application, you agree to our<br /><strong>Terms of Service</strong> and <strong>Privacy Policy</strong>',
        }),
    }
</script>