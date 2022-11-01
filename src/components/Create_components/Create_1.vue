<template>
  <Create></Create>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <h2 class = "font-medium text-2xl">Виберіть підкатегорію</h2>
    <div class = "w-[50%] grid grid-cols-2 gap-x-4 gap-y-2 py-8">
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Дитячі мебелі</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Дитяче взуття</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Дитячі автокрісла</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Дитячий транспорт</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Дитячий транспорт</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Здоров’я та догляд</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Облаштування дитячої</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Товари для мам</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Дитячий одяг</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Дитячі коляски</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Іграшки та ігри</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Дитяче харчування та годування </p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Прогулянки та активний відпочинок</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Розвиток та творчість </p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Радіо- та відеоняні</p>
      </router-link>
      <router-link to="/create/create2" class = "w-full bg-white rounded-[10px] border border-accent shadow-sm shadow-accent">
        <p class = "text-sm text-center py-1">Дитячі товари, інше</p>
      </router-link>
    </div>
  </section>
</template>

<script>
  import Head from '@/components/Head.vue';
  import Footer from '@/components/Footer.vue';
  import Create from '@/components/Create_components/Create.vue';
  import Create2 from '@/components/Create_components/Create_2.vue'
  export default{
    components:{
      Head, 
      Footer,
      Create,
      Create2
    },
  }
</script>