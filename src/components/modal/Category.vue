<template>
  <div
    class="w-[97%] flex h-max border rounded-xl bg-white absolute top-36 z-20"
  >
    <div class="w-1/3 border-r border-accent pl-10 py-4">
      <div
        class="flex items-center py-2"
        v-for="item in category"
        :key="item.id"
      >
        <div class="w-5 h-5">
          <img
            :src="require('../../img/' + item.image)"
            alt=""
            class="h-full"
          />
        </div>
        <div class="ml-3">{{ item.title }}</div>
        <div class="ml-2 text-sm font-medium">{{ item.kol }}</div>
      </div>
    </div>
    <div class="p-4">
      <div class="text-lg font-medium">
        Продаж, купівля та оренда нерухомості, в Украіні, Оголошення Vamberi
      </div>
      <div class="mt-5 w-2/3 grid grid-cols-2 gap-2">
        <div>Новобуди</div>
        <div>Візьмемо до оренди</div>
        <div>Продаж нерухомості</div>
        <div>Оренда нерухомості</div>
        <div>Агенство нерухомості</div>
        <div>Ріэлтори</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        { id: 1, title: "Дитячі товари", image: "Medved.png", kol: 45 },
        { id: 2, title: "Нерухомість", image: "dom.svg" },
        {
          id: 3,
          title: "Для дому та комерції ",
          image: "krovat.svg",
          kol: 1,
        },
        { id: 4, title: "Робота", image: "rabota.png" },
        { id: 5, title: "Послуги та фріланс", image: "freelance.png" },
        { id: 6, title: "Авто", image: "avto.png" },
        {
          id: 7,
          title: "Запчастини для транспорту",
          image: "zapchasti.png",
          kol: 23,
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
          kol: 225,
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
