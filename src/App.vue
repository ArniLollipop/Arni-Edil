<template>
  <div id = "App" class = " px-6">
    <Head></Head>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  import Head from './components/Head.vue'
  export default {
    name : 'app',
    components:{
      Head
    },
  }
  
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap');
</style>
