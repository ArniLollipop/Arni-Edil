<template>
  <Create></Create>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <h2 class = "font-medium text-2xl">Виберіть підкатегорію</h2>
    <div class = "w-[50%] grid grid-cols-2 gap-x-4 gap-y-2 py-8">
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent hover:shadow-sm hover:shadow-accent">
        <p class = "text-sm text-center py-1">Дитячі м’які меблі</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent hover:shadow-sm hover:shadow-accent">
        <p class = "text-sm text-center py-1">Шафи та стінки в дитячу</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent hover:shadow-sm hover:shadow-accent">
        <p class = "text-sm text-center py-1">Пеленальний столик та комод</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent hover:shadow-sm hover:shadow-accent">
        <p class = "text-sm text-center py-1">Дитячі столики та стільці</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent hover:shadow-sm hover:shadow-accent">
        <p class = "text-sm text-center py-1">Дитячі ліжка</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent hover:shadow-sm hover:shadow-accent">
        <p class = "text-sm text-center py-1">Дитячі ліжка</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent hover:shadow-sm hover:shadow-accent">
        <p class = "text-sm text-center py-1">Стелажі, полиці, ящики</p>
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