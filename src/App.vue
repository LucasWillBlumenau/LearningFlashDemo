<template>
  <SideBar />
  <router-view class="page-content"/>

</template>

<script>
  import SideBar from './components/SideBar.vue';
  export default {
    name: "App",
    components: { SideBar }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Poppins;
  }

  body {
    background-color: #222;
    height: 100vh;
    overflow-x: hidden;
  }

  
  @media screen and (min-width: 900px) {
    .page-content {
      margin-left: 4rem;
    }
  }

  @media screen and (max-width: 900px) {
    .page-content {
      margin-bottom: 2rem;
    }
  }
  
</style>
