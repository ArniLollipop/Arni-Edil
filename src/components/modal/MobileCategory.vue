<template>
  <div class = "w-[100%] rounded-[10px] py-4 px-4 bg-white h-fit ">
    <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto py-4 text-dark">
      <div class = "w-full sm:hidden flex justify-center items-center">
        <p class = "text-sm text-center text-accent">Всі категорії</p>
      </div>
      <div class="mt-6 w-full text-center">
        <button class="w-full flex items-center rounded-[10px] border border-accent px-2 py-1 mt-2" v-for="rec in recomendation" :key="rec.id">
          <div class="w-[30px] h-[30px] sm:h-[40px] sm:w-[40px]">
            <img :src="require('../../img/' + rec.image)" alt="" class="w-full h-full" />
          </div>
          <div class = "ml-2 text-xs flex items-center justify-center">
            <p>{{ rec.title }}</p>
          </div>
          <p class = "text-xs ml-1">{{rec.id}}</p>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    sendModalStatus() {
      this.$emit("mobileModalStatus", false);
    },
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
