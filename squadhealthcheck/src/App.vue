<template>
  <div id="app">
    <shc-header />
    <router-view/>
    <shc-footer />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  
  export default {
      components:{
        'shc-header': Header,
        'shc-footer': Footer,
      }
  }
</script>