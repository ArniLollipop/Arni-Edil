<template>
  <Head></Head>
  <section class="mt-10 px-6 pb-12">
    <img src="@/img/Баннер.png" alt="" class="w-full h-[200px]" />
    <div
      class="mt-16 grid grid-cols-9 gap-y-3 gap-x-8 xl:grid-cols-9"
    >
      <div
        class="mx-auto text-center text-base w-[130px]"
        v-for="rec in recomendation"
      >
        <div
          class="px-4 py-8 bg-white rounded-full flex items-center justify-center"
        >
          <img :src="require('../img/' + rec.image)" alt="" class="h-[65px]" />
        </div>
        <a href="#" class="hover:text-accent">{{ rec.title }}</a>
      </div>
    </div>
  </section>
  <section>
    <Advan></Advan>
    <Magazini></Magazini>
  </section>
  <Footer></Footer>
</template>

<script>
import Advan from "@/components/Home_compponents/Advantages.vue";
import Head from "@/components/Home_compponents/Head.vue";
import Footer from "@/components/Home_compponents/Footer.vue";
import Magazini from "@/components/Home_compponents/Magazini.vue";
export default {
  components: {
    Head,
    Footer,
    Advan,
    Magazini
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
};
</script>
