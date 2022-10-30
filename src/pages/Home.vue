<template>
  <Head></Head>

  <section>
    <Recomendation></Recomendation>
    <Advan></Advan>
    <Magazini></Magazini>
  </section>
</template>

<script>
import Advan from "@/components/Home_compponents/Advantages.vue";
import Head from "@/components/Home_compponents/Head.vue";
import Footer from "@/components/Home_compponents/Footer.vue";
import Magazini from "@/components/Home_compponents/Magazini.vue";
import Recomendation from '@/components/Home_compponents/Recomendation.vue';
export default {
  components: {
    Head,
    Footer,
    Advan,
    Magazini,
    Recomendation
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
