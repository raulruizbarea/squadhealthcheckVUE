<template>
    <v-container class="secondary primary--text text-center" fluid>
        <h1 class="pt-6">Squad Health Check</h1>
        <v-col class="subtitle-1 text--line-height-s">
            <v-rating v-model="rating" size="14" readonly dense half-increments class="pb-2"></v-rating>
            <span>Increased awareness of where<v-spacer></v-spacer>the squad is at, it’s state,<v-spacer></v-spacer>challenges and opportunities.</span>
        </v-col>
        <router-link to="/"><v-img src="../assets/logo.png" width="7rem"></v-img></router-link>
    </v-container>
</template>

<style scoped>
/* img {
        width: 7em;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        top: 12.5em;
}*/
</style>
<script>
  export default {
    data: () => ({
      rating: 4.5,
    }),
  }
</script>