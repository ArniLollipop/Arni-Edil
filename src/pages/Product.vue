<template>
  <div class="bg-back2">
    <div class="container mx-auto z-0">
      <Head></Head>
      <div class="hidden sm:px-4 lg:block mt-10 pb-20">
        <div class="flex items-center">
          <div class="text-sm flex items-center">
            <a href="">Україна</a>
            <img src="../img/arrowRight.svg" alt="" class="w-2.5 ml-1" />
          </div>
          <div class="text-sm ml-1 flex items-center">
            <a href="">Електроніка</a>
            <img src="../img/arrowRight.svg" alt="" class="w-2.5 ml-1" />
          </div>
          <div class="text-sm ml-1">
            <a href="">Комп’ютери і комплектуючі</a>
          </div>
        </div>

        <div class="mt-3 flex justify-end items-center">
          <div>У обране</div>
          <div class="ml-1">
            <img src="../img/RecCards/heartFill.svg" alt="" class="w-5" />
          </div>
        </div>

        <div class="grid grid-cols-6 gap-x-[50px] xl:gap-x-[74px] mt-3">
          <div class="col-span-4">
            <div class="grid grid-cols-3 gap-x-3 w-full">
              <div class="col-span-2 relative overflow-hidden">
                <swiper
                  :slides-per-view="1"
                  :loop="true"
                  :navigation="{
                    prevEl: prev,
                    nextEl: next,
                  }"
                  :space-between="20"
                  :modules="modules"
                  class="h-fit"
                >
                  <swiper-slide>
                    <img src="../img/productp1.png" alt="" class="w-full" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="../img/productp2.png" alt="" class="w-full" />
                  </swiper-slide>
                  <swiper-slide>
                    <img src="../img/productp3.png" alt="" class="w-full" />
                  </swiper-slide>
                </swiper>
                <button
                  ref="prev"
                  class="z-10 absolute top-[45%] xl:top-1/2 left-1 bg-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <img src="../img/chevron-left.svg" alt="" class="w-4" />
                </button>
                <button
                  ref="next"
                  class="z-10 absolute top-[45%] xl:top-1/2 right-1 bg-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <img src="../img/chevron-right.svg" alt="" class="w-4" />
                </button>
              </div>
              <div class="col-span-1">
                <div>
                  <img src="../img/productp2.png" alt="" class="w-full" />
                </div>
                <div class="mt-[22px] xl:mt-[26px] 2xl:mt-[30px]">
                  <img src="../img/productp3.png" alt="" class="w-full" />
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-2xl pt-8 pl-8 pr-14 2xl:pr-20 pb-10 mt-14"
            >
              <div class="text-2xl font-bold">Характеристики</div>
              <div class="flex mt-8 items-start justify-between">
                <div class="flex flex-col gap-y-4 text-sm">
                  <div v-for="item in harNormal1">
                    {{ item }}
                  </div>
                </div>
                <div class="flex flex-col gap-y-4 text-sm font-bold">
                  <div v-for="item in harBold1">
                    {{ item }}
                  </div>
                </div>
                <div class="flex flex-col gap-y-4 text-sm">
                  <div v-for="item in harNormal2">
                    {{ item }}
                  </div>
                </div>
                <div class="flex flex-col gap-y-4 text-sm font-bold">
                  <div v-for="item in harBold2">
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 p-8 bg-white rounded-2xl">
              <div class="font-bold text-xl">Опис товару</div>
              <div class="mt-5 text-sm">
                {{ description }}
              </div>
            </div>

            <div class="mt-8 font-bold text-xl">Коментарі</div>
            <div
              class="mt-4 bg-[#F2EEF9] p-5 rounded-2xl flex items-center justify-between"
            >
              <div class="text-sm text-gray">
                Додавати коментарі можуть лише авторизовані користувачі
              </div>
              <div>
                <img src="../img/sendsam.svg" alt="" class="h-9" />
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="bg-white rounded-3xl px-6 pt-3 pb-8">
              <div class="font-medium text-2xl">{{ title }}</div>
              <div class="text-sm mt-7">Опубліковано {{ date }}</div>
              <div class="flex justify-between items-center mt-7">
                <div class="font-medium text-2xl">{{ price }}</div>
                <div
                  class="w-[66px] py-1 text-center bg-accent rounded-[10px] text-white text-sm"
                >
                  {{ status }}
                </div>
              </div>
              <div class="mt-1 text-green text-xs">{{ text }}</div>
            </div>
            <div class="bg-white rounded-3xl px-6 pb-5 pt-10">
              <div class="w-[220px] xl:w-[264px] mx-auto">
                <div class="flex flex-col gap-y-2">
                  <div
                    class="py-3 w-full bg-accent rounded-full text-center text-white text-sm font-medium"
                  >
                    Показати номер телефону
                  </div>
                  <div
                    class="py-3 w-full bg-accent rounded-full text-center text-white text-sm font-medium"
                  >
                    Написати продавцеві
                  </div>
                  <div
                    class="py-3 w-full bg-accent rounded-full text-center text-white text-sm font-medium"
                  >
                    Додати у кошик
                  </div>
                </div>
              </div>
              <div class="flex justify-between mt-8 xl:mt-14">
                <div
                  class="p-1 px-2 border-[0.25px] border-accent rounded-lg text-xs"
                >
                  {{ btnText }}
                </div>
                <div class="flex items-center">
                  <div><img src="../img/podelit.svg" alt="" class="w-4" /></div>
                  <div class="ml-1 text-sm text-blueText">Поділитися</div>
                </div>
              </div>
            </div>
            <div class="mt-12 bg-white rounded-2xl p-5">
              <div
                class="w-2/3 mx-auto py-3 bg-[#E358A6] rounded-full text-center text-white font-medium text-sm"
              >
                Купити онлайн
              </div>
              <div class="mt-3 text-center text-sm text-green">
                Безпечна угода
              </div>
              <div class="mt-4 text-sm">Спосіб доставки:</div>
              <div class="mt-2.5 flex items-center gap-x-1.5">
                <div class="">
                  <img src="../img/H.svg" alt="" class="h-8" />
                </div>
                <div class="text-sm">{{ delivery }}</div>
              </div>
            </div>

            <div class="mt-10 bg-white rounded-2xl pt-5 pl-2.5 pr-7 pb-3">
              <div class="flex items-end gap-x-4">
                <div class="shrink-0">
                  <img src="../img/maks.png" alt="" class="h-[92px] shrink-0" />
                </div>
                <div class="">
                  <div class="font-medium text-xl">{{ name }}</div>
                  <div class="mt-2 text-sm">
                    {{ personText }}
                  </div>
                  <div class="flex items-center">
                    <div><img src="../img/stars.png" alt="" class="h-4" /></div>
                    <div class="ml-1 text-sm">(0)</div>
                  </div>
                </div>
              </div>
              <a href="#" class="block mt-5 text-center text-[#B73D25] text-sm">
                Поскаржитись
              </a>
            </div>

            <div class="mt-10 bg-white rounded-2xl py-3 px-5">
              <div class="font-bold text-xl">Розташування</div>
              <div class="mt-3 text-sm">
                {{ adres }}
              </div>
              <div class="mt-3">
                <img src="../img/2gis.png" alt="" class="w-full" />
              </div>
            </div>

            <div
              class="w-[85%] xl:w-2/3 mx-auto mt-10 bg-white rounded-[10px] pt-5 pl-5 pb-8 pr-1.5"
            >
              <div class="text-center font-medium">Онлайн-показ</div>
              <div class="mt-6 flex items-center gap-x-5">
                <div class="shrink-0">
                  <img src="../img/on-pokaz.png" alt="" class="h-[64px]" />
                </div>
                <div>
                  <div class="text-sm">Можна переглянути по відеозв’язку</div>
                  <div class="flex items-center gap-x-1.5">
                    <div class="border-b border-dotted border-gray text-sm">
                      Докладніше
                    </div>
                    <div
                      class="flex items-center justify-center w-4 h-4 rounded-full bg-accent"
                    >
                      <img
                        src="../img/chevron-right-white.svg"
                        alt=""
                        class="w-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-10 bg-white w-[85%] xl:w-2/3 mx-auto">
              <img src="../img/phones.png" alt="" class="w-full" />
            </div>
          </div>
        </div>
      </div>
      <div class="lg:hidden pb-10 px-4">
        <div class="mt-4">
          <img src="../img/mob-banner.png" alt="" class="w-full" />
        </div>
        <div class="mt-4">
          <div class="flex items-center justify-center">
            <div class="text-[11px] flex items-center shrink-0">
              <a href="">Україна</a>
              <img src="../img/arrowRight.svg" alt="" class="w-2.5" />
            </div>
            <div class="text-[11px] flex items-center shrink-0">
              <a href="">Електроніка</a>
              <img src="../img/arrowRight.svg" alt="" class="w-2.5" />
            </div>
            <div class="text-[11px] shrink-0">
              <a href="">Комп’ютери і комплект...</a>
            </div>
          </div>
        </div>

        <div class="relative mt-6">
          <swiper
            :slides-per-view="1"
            :loop="true"
            :pagination="{
              clickable: true,
            }"
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
            :space-between="20"
            :modules="modules"
            class="z-0"
          >
            <swiper-slide class="rounded-[10px] overflow-hidden">
              <img src="../img/productp1.png" alt="" class="w-full h-[200px]" />
            </swiper-slide>
            <swiper-slide class="rounded-[10px] overflow-hidden">
              <img src="../img/productp2.png" alt="" class="w-full h-[200px]" />
            </swiper-slide>
            <swiper-slide class="rounded-[10px] overflow-hidden">
              <img src="../img/productp3.png" alt="" class="w-full h-[200px]" />
            </swiper-slide>
          </swiper>
          <div class="absolute top-2 left-2">
            <img src="../img/chevronn-left-white.svg" alt="" class="w-3.5" />
          </div>
          <div class="absolute top-2 right-2 flex items-center gap-x-1">
            <div>
              <img src="../img/heart.svg" alt="" class="w-4" />
            </div>
            <div>
              <img src="../img/sett.svg" alt="" class="w-3.5" />
            </div>
          </div>
        </div>

        <div class="text-[10px] mt-1">{{ date }}</div>

        <div class="mt-1 flex items-center justify-between">
          <div class="text-sm font-medium">{{ title }}</div>
          <div
            class="w-[60px] py-px bg-accent rounded-full text-center text-white text-xs shrink-0"
          >
            {{ status }}
          </div>
        </div>

        <div class="flex items-center gap-x-2.5 mt-2">
          <div class="text-sm font-medium">{{ price }}</div>
          <div class="text-green text-xs">{{ text }}</div>
        </div>

        <div
          class="mt-5 w-[75%] mx-auto py-3.5 bg-[#E358A6] rounded-full text-center text-white text-xs font-medium"
        >
          Купити онлайн
        </div>

        <div class="mt-2.5 text-center text-green text-xs">Безпечна угода</div>

        <div
          class="mt-6 w-[75%] mx-auto py-3.5 bg-accent rounded-full text-center text-white text-xs font-medium"
        >
          Показати номер телефону
        </div>
        <div
          class="mt-2.5 w-[75%] mx-auto py-3.5 bg-accent rounded-full text-center text-white text-xs font-medium"
        >
          Написати продавцеві
        </div>
        <div
          class="mt-2.5 w-[75%] mx-auto py-3.5 bg-accent rounded-full text-center text-white text-xs font-medium"
        >
          Додати у кошик
        </div>

        <div class="mt-6 ml-4">
          <div class="text-xs">Спосіб доставки:</div>
          <div class="mt-2.5 flex items-center gap-x-1.5">
            <div class=""><img src="../img/H.svg" alt="" class="h-5" /></div>
            <div class="text-xs">{{ delivery }}</div>
          </div>
        </div>

        <div class="mt-6 p-4 bg-white rounded-2xl">
          <div class="font-bold text-sm">Опис товару</div>
          <div class="mt-2.5 text-xs">
            {{ description }}
          </div>
        </div>

        <div class="mt-4 p-4 bg-white rounded-2xl">
          <div class="font-bold text-sm">Характеристики</div>
          <div class="flex justify-between mt-2.5">
            <div class="flex flex-col space-y-2.5 text-xs">
              <div v-for="item in harNormal1">
                {{ item }}
              </div>
              <div v-for="item in harNormal2">
                {{ item }}
              </div>
            </div>
            <div class="flex flex-col space-y-2.5 text-xs font-bold ml-1.5">
              <div v-for="item in harBold1">
                {{ item }}
              </div>
              <div v-for="item in harBold2">
                {{ item }}
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 bg-white rounded-2xl p-4">
          <div class="font-bold text-sm">Розташування</div>
          <div class="mt-2.5 text-xs">
            {{ adres }}
          </div>
          <div class="mt-2.5">
            <img src="../img/2gis.png" alt="" class="w-full" />
          </div>
        </div>

        <div class="mt-4">
          <div class="flex items-end gap-x-4">
            <div class="shrink-0">
              <img src="../img/maks.png" alt="" class="h-[60px] shrink-0" />
            </div>
            <div class="">
              <div class="font-medium text-[13px]">{{ name }}</div>
              <div class="mt-1 text-[11px]">
                {{ personText }}
              </div>
              <div class="flex items-center mt-1 shrink-0">
                <div
                  class="px-2 border border-accent rounded-full text-[11px] shrink-0"
                >
                  {{ btnText }}
                </div>
                <div class="ml-2 shrink-0">
                  <img src="../img/stars.png" alt="" class="h-3 shrink-0" />
                </div>
                <div class="ml-1 text-sm">(0)</div>
              </div>
            </div>
          </div>
          <a
            class="block mt-1 w-max ml-auto text-[#B73D25] text-[11px] border-b border-dotted border-[#B73D25]"
            href="#"
          >
            Поскаржитись
          </a>
        </div>

        <div class="mt-4 font-bold text-sm">Коментарі</div>
        <div
          class="mt-2.5 bg-[#F2EEF9] px-2.5 py-3 rounded-2xl flex items-center justify-between"
        >
          <div class="text-[10px] text-gray pr-5">
            Додавати коментарі можуть лише авторизовані користувачі
          </div>
          <div>
            <img src="../img/sendsam.svg" alt="" class="h-[18px]" />
          </div>
        </div>

        <div class="mt-4 bg-white rounded-[10px] p-4 pb-3">
          <div class="text-center font-medium text-xs">Онлайн-показ</div>
          <div
            class="mt-2.5 flex items-center gap-x-4 justify-center w-[85%] mx-auto"
          >
            <div class="shrink-0">
              <img src="../img/on-pokaz.png" alt="" class="w-[50px]" />
            </div>
            <div>
              <div class="text-xs">Можна переглянути по відеозв’язку</div>
              <div class="flex items-center gap-x-1.5 mt-2">
                <div class="border-b border-dotted border-gray text-xs">
                  Докладніше
                </div>
                <div
                  class="flex items-center justify-center w-3 h-3 rounded-full bg-accent"
                >
                  <img
                    src="../img/chevron-right-white.svg"
                    alt=""
                    class="w-1.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-[80%] mt-4 mx-auto">
          <img src="../img/phones-mob.png" alt="" class="w-full" />
        </div>
      </div>
    </div>

    <MobileMenu></MobileMenu>
    <Footer></Footer>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
export default {
  components: {
    Head,
    Footer,
    MobileMenu,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation, Pagination],
      prev,
      next,
    };
  },
  data() {
    return {
      title: "Lenovo ideapad 330-15ikb",
      date: "27.07.2022, 17:54",
      price: "8,000 грн.",
      status: "Б/У",
      text: "У наявності",
      btnText: "Приватна особа",
      description:
        "Ноутбук хороший звоните, пишите 0963465090 цена 8000 тора нет. Продаю за бесценок так как срочно.",
      adres: "Одесса, 7C7H+2M Овидиополь, Одесская область, Украина",
      name: "Макс",
      personText: "На Дошка оголошень Vamberi з 24.06.2022",
      delivery: "Нова пошта - от 40 грн.",
      harNormal1: [
        "Приватне-бізнес",
        "Стан товару",
        "Наявність товару",
        "Країна виробника",
        "Термін використання",
      ],
      harNormal2: ["Торг", "Марка", "Діагональ екрану", "Оперативна пам’ять"],
      harBold1: ["Приватне", "Б/У", "В наявності", "Китай", "4 роки і більше"],
      harBold2: ["Ноутбуки", "Lenovo", "від 15” до 16.4”", "8 ГБ"],
    };
  },
};
</script>
