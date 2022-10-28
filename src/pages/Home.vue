<template>
  <Head></Head>
  <section class="mt-10 px-6 pb-12">
    <img src="@/img/Баннер.png" alt="" class="w-full h-[200px]" />
    <div
      class="mt-16 grid grid-cols-9 gap-y-3 gap-x-10 md:hidden xl:grid-cols-6 lg:gap-x-2 xl:gap-y-5"
    >
      <div
        class="mx-auto text-center text-base w-[130px]"
        v-for="rec in recomendation"
      >
        <div
          class="px-6 py-8 bg-white rounded-full flex items-center justify-center"
        >
          <img :src="require('../img/' + rec.image)" alt="" class="h-[70px]" />
        </div>
        <a href="#" class="hover:text-accent">{{ rec.title }}</a>
      </div>
    </div>
  </section>
  <section>
    <Advan></Advan>
  </section>
  <Footer></Footer>
</template>

<script>
import Advan from "@/components/Home_compponents/Advantages.vue";
import Head from "@/components/Home_compponents/Head.vue";
import Footer from "@/components/Home_compponents/Footer.vue";
export default {
  components: {
    Head,
    Footer,
    Advan,
  },
  data() {
    return {
      recomendation: [
        { id: 1, title: "Дитячі товари", image: "Medved.png" },
        { id: 1, title: "Нерухомість", image: "Баннер.png" },
        { id: 1, title: "Для дому та комерції ", image: "Баннер.png" },
        { id: 1, title: "Робота", image: "Баннер.png" },
        { id: 1, title: "Послуги та фріланс", image: "Баннер.png" },
        { id: 1, title: "Авто", image: "Баннер.png" },
        {
          id: 1,
          title: "Запчастини для транспорту",
          image: "Баннер.png",
        },
        { id: 1, title: "Тварини", image: "Баннер.png" },
        { id: 1, title: "Електроніка", image: "Баннер.png" },
        { id: 1, title: "Допомога", image: "Баннер.png" },
        { id: 1, title: "Спорт і відпочинок", image: "Баннер.png" },
        { id: 1, title: "Обладнання та сировина", image: "Баннер.png" },
        {
          id: 1,
          title: "Будматеріали та інструменти",
          image: "Баннер.png",
        },
        { id: 1, title: "Мода та стиль", image: "Баннер.png" },
        { id: 1, title: "Краса і здоров’я", image: "Баннер.png" },
        { id: 1, title: "Обмін", image: "Баннер.png" },
        { id: 1, title: "Для бізнесу", image: "Баннер.png" },
        { id: 1, title: "Хобі та розваги", image: "Баннер.png" },
      ],
      images: ["Medved.jpg", "Medved.svg"],
    };
  },
};
</script>
