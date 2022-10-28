<template>
  <div id = "App">
    <Head></Head>
    <main>
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
  
  export default {
    name : 'app',
    data(){
      return {
        recomendation:[
          {id: 1, title: 'Дитячі товари', image: 'img/Medved.png'},
          
        ],
        images:[
          '@/img/Medved.jpg',
          '@/img/Medved.svg'
        ]
      }
    }
  }
  
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap');
</style>
