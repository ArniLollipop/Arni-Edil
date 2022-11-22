<template>
  <Head></Head>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div class = "w-full sm:hidden flex justify-between items-center">
      <router-link to="/"><img src="@/img/strelka_left.svg" alt="" class = "w-fit"></router-link>
      <router-link to="/" class = "text-sm underline underline-offset-4 decoration-dashed text-red">скасувати</router-link>
    </div>
    <div class = "flex items-center sm:justify-center relative sm:mt-8 my-3">
      <router-link to="/" class = "text-blue text-sm absolute left-0 underline decoration-solid underline-offset-4 sm:block hidden">Вернуться на главную</router-link>
      <div>
        <h1 class = "lg:text-3xl md:text-2xl sm:text-lg text-sm font-medium">Публікація оголошення</h1>
      </div>
    </div>
    <div class="sm:grid sm:grid-cols-6 lg:grid-cols-9 lg:gap-x-5 xl:gap-y-11 mt-6 w-full text-center">
      <router-link to="/create/create1" class="relative hover:sm:text-accent sm:flex-col flex gap-x-3 my-2 sm:bg-transparent bg-pink px-2 py-1 rounded-[10px] items-center justify-start w-full" v-for="rec in recomendation" :key="rec.id">
        <div class="xl:w-[100px] xl:h-[100px] lg:w-[90px] lg:h-[90px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center sm:mx-auto">
          <img :src="require('../../img/' + rec.image)" alt="" class="h-[70%] w-[70%]" />
        </div>
        <div class = "sm:mt-2 lg:text-base sm:text-sm text-xs flex items-center justify-center">
          <p>{{ rec.title }}</p>
        </div>
        <img src="@/img/strelka_right.svg" alt="" class = "w-fit absolute right-3 sm:hidden">
      </router-link>
    </div>
  </section>
</template>

<script>
  import Head from '@/components/Head.vue';
  import Footer from '@/components/Footer.vue';
  export default{
    components:{
      Head, 
      Footer,
    },
    data() {
      return {
        recomendation: [
          { id: 1, title: "Дитячі товари", image: "Medved.png" },
          { id: 2, title: "Нерухомість", image: "dom.svg" },
          { id: 3, title: "Для дому та комерції ", image: "krovat.svg" },
          { id: 4, title: "Робота", image: "rabota.png" },
          { id: 5, title: "Послуги та фріланс", image: "freelance.png" },
          { id: 6, title: "Авто", image: "avto.png" },
          {
            id: 7,
            title: "Запчастини для транспорту",
            image: "zapchasti.png",
          },
          { id: 8, title: "Тварини", image: "tvari.png" },
          { id: 9, title: "Електроніка", image: "electronica.png" },
          { id: 10, title: "Допомога", image: "pomoch.png" },
          { id: 11, title: "Спорт і відпочинок", image: "velik.png" },
          { id: 12, title: "Обладнання та сировина", image: "sirovina.png" },
          {
            id: 13,
            title: "Будматеріали та інструменти",
            image: "instrumenti.png",
          },
          { id: 14, title: "Мода та стиль", image: "stil.png" },
          { id: 15, title: "Краса і здоров’я", image: "kosmetika.png" },
          { id: 16, title: "Обмін", image: "obmen.png" },
          { id: 17, title: "Для бізнесу", image: "biznes.png" },
          { id: 18, title: "Хобі та розваги", image: "games.png" },
        ],
      };
    },
  }
</script>