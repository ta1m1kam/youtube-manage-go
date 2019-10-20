<template>
  <div id="app">
    <TheHeader />
     <div class="columns">
       <TheSidebar />
       <div class="column content">
         <nuxt />
       </div>
     </div>
  </div>
</template>

<script>
  import TheHeader from "~/components/TheHeader";
  import TheSidebar from "~/components/TheSidebar"

  export default {
    components: {
      TheHeader,
      TheSidebar
    }
  }
</script>

<style scoped>
  #app {
    min-height: 100vh;
    background: #FFAAFF;
  }

  .columns {
    min-height: 100vh;
  }
</style>
