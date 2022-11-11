<template>
  <div class = "sm:block hidden">
    <Create></Create>
  </div>
  <div class = "sm:hidden">
    <Head></Head>
    <section class = "px-4 text-dark">
      <div class = "w-full sm:hidden flex justify-between items-center my-2">
          <router-link to="/"><img src="@/img/strelka_left.svg" alt="" class = "w-fit"></router-link>
          <router-link to="/" class = "text-sm underline underline-offset-4 decoration-dashed text-red">скасувати</router-link>
      </div>
      <p class = "lg:text-3xl md:text-2xl sm:text-lg text-sm font-medium sm:hidden my-2">Підкатегорія</p>
      <div to="/create/create1" class="relative hover:sm:text-accent sm:flex-col flex gap-x-3 my-2 sm:bg-transparent bg-pink px-2 py-1 rounded-[10px] items-center justify-start w-full sm:shadow-md shadow-accent">
        <div class="xl:w-[100px] xl:h-[100px] lg:w-[90px] lg:h-[90px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center sm:mx-auto">
          <img src="@/img/Medved.svg" alt="" class="h-[70%] w-[70%]" />
        </div>
        <div class = "sm:mt-2 lg:text-base sm:text-sm text-xs flex items-center justify-center">
          <p>Дитячі товари</p>
          <img src="@/img/strelka_right.svg" alt="" class = "h-2 mx-1 sm:hidden">
          <p class = "sm:hidden">Дитячі мебелі</p>
        </div>
        
      </div>
    </section>
  </div>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-2 text-dark">
    <h2 class = "font-medium lg:text-2xl md:text-xl sm:text-base sm:block hidden">Виберіть підкатегорію</h2>
    <div class = "sm:w-[70%] md:w-[65%] lg:w-1/2 w-full sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-2 lg:py-8 md:my-6 sm:my-4 my-2">
      <router-link to="/create/create2/create3" class = "w-full sm:bg-white sm:rounded-[10px] sm:border sm:border-accent hover:shadow-sm hover:sm:shadow-accent">
        <p class = "sm:text-sm text-xs hover:text-accent hover:sm:text-dark sm:text-center py-2 sm:border-0 border-t border-gray">Дитячі м’які меблі</p>
      </router-link>
      <router-link to="/create/create2/create3" class = "w-full sm:bg-white sm:rounded-[10px] sm:border sm:border-accent hover:shadow-sm hover:sm:shadow-accent">
        <p class = "sm:text-sm text-xs hover:text-accent hover:sm:text-dark sm:text-center py-2 sm:border-0 border-t border-gray">Пеленальний столик та комод</p>
      </router-link>
      <router-link to="/create/create2/create3" class = "w-full sm:bg-white sm:rounded-[10px] sm:border sm:border-accent hover:shadow-sm hover:sm:shadow-accent">
        <p class = "sm:text-sm text-xs hover:text-accent hover:sm:text-dark sm:text-center py-2 sm:border-0 border-t border-gray">Дитячі ліжка</p>
      </router-link>
      <router-link to="/create/create2/create3" class = "w-full sm:bg-white sm:rounded-[10px] sm:border sm:border-accent hover:shadow-sm hover:sm:shadow-accent">
        <p class = "sm:text-sm text-xs hover:text-accent hover:sm:text-dark sm:text-center py-2 sm:border-0 border-t border-gray">Стелажі, полиці, ящики</p>
      </router-link>
      <router-link to="/create/create2/create3" class = "w-full sm:bg-white sm:rounded-[10px] sm:border sm:border-accent hover:shadow-sm hover:sm:shadow-accent">
        <p class = "sm:text-sm text-xs hover:text-accent hover:sm:text-dark sm:text-center py-2 sm:border-0 border-t border-gray">Шафи та стінки в дитячу</p>
      </router-link>
      <router-link to="/create/create2/create3" class = "w-full sm:bg-white sm:rounded-[10px] sm:border sm:border-accent hover:shadow-sm hover:sm:shadow-accent">
        <p class = "sm:text-sm text-xs hover:text-accent hover:sm:text-dark sm:text-center py-2 sm:border-0 border-t border-gray">Дитячі столики та стільці</p>
      </router-link>
      <router-link to="/create/create2/create3" class = "w-full sm:bg-white sm:rounded-[10px] sm:border sm:border-accent hover:shadow-sm hover:sm:shadow-accent">
        <p class = "sm:text-sm text-xs sm:text-center py-2 sm:border-0 border-t border-b border-gray">Дитячі парти</p>
      </router-link>
    </div>
  </section>
</template>

<script>
  import Head from '@/components/Head.vue';
  import Footer from '@/components/Footer.vue';
  import Create from '@/components/Create_components/Create.vue';
  import Create1 from '@/components/Create_components/Create_1.vue';
  export default{
    components:{
      Head, 
      Footer,
      Create,
      Create1,
    },
  }
</script>