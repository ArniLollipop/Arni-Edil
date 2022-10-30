<template>
  <section class="mt-10 px-4 md:pb-9 pb-4 relative">
    <img src="@/img/Баннер.png" alt="" class="w-full max-h-[200px]" />
    <div
      class="xl:mt-16 sm:mt-9 sm:grid gap-y-3 xl:gap-x-[4%] lg:gap-x-4 lg:grid-cols-9 sm:grid-cols-6 sm:gap-x-5 hidden  mx-auto" 
    >
      <div
        class="xl:text-base sm:w-[100px] text-center lg:text-[14px] sm:text-[12px] text-[11px] w-fit"
        v-for="rec in recomendation"
      >
        <div
          class="xl:w-[100px] xl:h-[100px] lg:w-[90px] lg:h-[90px] sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center mx-auto"
        >
          <img :src="require('../../img/' + rec.image)" alt="" class="h-[70%] w-[70%]" />
        </div>
        <a href="#" class="hover:text-accent">{{ rec.title }}</a>
      </div>
    </div>
    <swiper
      :slides-per-view="4"
      :loop="true"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :modules="modules"
      class="sm:hidden mt-6 w-[100%] h-[90px]"
    >
      <swiper-slide class="text-center text-[10px] w-fit h-full" v-for="rec in recomendation" :key="rec.id">
          <div v-if="rec.id == 0" class="w-[40px] h-[40px] bg-accent rounded-full flex items-center justify-center mx-auto">
            <img :src="require('../../img/' + rec.image)" alt="" class="h-[70%] w-[70%]">
          </div>
          <div v-if="rec.id >=1"
            class="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center mx-auto"
            >
            <img :src="require('../../img/' + rec.image)" alt="" class="h-[70%] w-[70%]" />
          </div>
          <div class = "h-1/2 px-4 flex items-end justify-center">
            <a href="#" class="hover:text-accent ">{{ rec.title }}</a>
          </div>
        
      </swiper-slide>
    </swiper>
    <button ref="prev" class="absolute bottom-1 left-6  z-10"><img src="@/img/Влево.png" alt=""></button>
    <button ref="next" class="absolute bottom-1 right-6 z-10"><img src="@/img/Вправо.png" alt=""></button>
  </section>
</template>

<script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation } from 'swiper';export default{
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        recomendation: [
          { id: 0, title: "Всі категорії", image: "category.svg"},
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
    setup() {
      const prev = ref(null);
      const next = ref(null);
      return {
        modules: [Navigation],
        prev,
        next,
      };
    },
  };
</script>