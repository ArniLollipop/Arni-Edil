<template>
  <Head></Head>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div class = "flex items-center justify-center relative mt-32">
      <router-link to="/" class = "text-blue text-sm absolute left-0 underline decoration-solid underline-offset-4">Вернуться на главную</router-link>
      <div>
        <h1 class = "text-3xl font-medium">Публікація оголошення</h1>
      </div>
    </div>
    <div class="grid grid-cols-9 gap-x-5 gap-y-11 mt-6 w-full text-center">
      <router-link to="/create/create1" class=" hover:text-accent" v-for="rec in recomendation" :key="rec.id">
        <div class="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center mx-auto">
          <img :src="require('../../img/' + rec.image)" alt="" class="h-[70%] w-[70%]" />
        </div>
        <div class = "mt-2 text-base flex items-center justify-center">
          <p>{{ rec.title }}</p>
        </div>
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