<template>
  <div class="bg-black2">
    <div class="container mx-auto px-5">
      <Head></Head>
      <div class="lg:hidden">
        <Banner></Banner>
      </div>
      <div class="flex items-center mt-4 lg:mt-10">
        <div class="text-[10px] lg:text-sm flex items-center">
          <a href="">Україна</a>
          <img
            src="../img/arrowRight.svg"
            alt=""
            class="w-2 lg:w-2.5 lg:ml-1"
          />
        </div>
        <div class="text-[10px] lg:text-sm ml-1 flex items-center">
          <a href="">Електроніка</a>
          <img
            src="../img/arrowRight.svg"
            alt=""
            class="w-2 lg:w-2.5 lg:ml-1"
          />
        </div>
        <div class="text-[10px] lg:text-sm ml-1">
          <a href="">Комп’ютери і комплектуючі</a>
        </div>
      </div>
      <div class="hidden items-center justify-end gap-x-3 mt-3 lg:flex">
        <div>У обране</div>
        <div class="">
          <img src="../img/RecCards/heartFill.svg" alt="" class="w-5" />
        </div>
      </div>

      <div class="flex"></div>
      <div
        class="mt-6 lg:mt-3 lg:grid lg:grid-cols-3 lg:grid-rows[30] lg:gap-x-[50px]"
      >
        <div class="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-[10]">
          <div class="lg:grid grid-cols-3 gap-x-3 w-full hidden">
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
          <div class="relative mt-6 lg:hidden">
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
                <img
                  src="../img/productp1.png"
                  alt=""
                  class="w-full h-[200px]"
                />
              </swiper-slide>
              <swiper-slide class="rounded-[10px] overflow-hidden">
                <img
                  src="../img/productp2.png"
                  alt=""
                  class="w-full h-[200px]"
                />
              </swiper-slide>
              <swiper-slide class="rounded-[10px] overflow-hidden">
                <img
                  src="../img/productp3.png"
                  alt=""
                  class="w-full h-[200px]"
                />
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
        </div>
        <div class="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-[10]">
          <div class="lg:hidden">
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

            <div class="mt-2.5 text-center text-green text-xs">
              Безпечна угода
            </div>

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
          </div>
          <div class="hidden lg:block">
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
                <div class="p-1 px-2 border border-accent rounded-lg text-xs">
                  {{ btnText }}
                </div>
                <div class="flex items-center">
                  <div><img src="../img/podelit.svg" alt="" class="w-4" /></div>
                  <div class="ml-1 text-sm text-blueText">Поділитися</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:col-start-3 lg:col-end-4 lg:mt-10">
          <div class="mt-6 lg:mt-0 lg:bg-white lg:rounded-2xl lg:p-5">
            <div
              class="hidden lg:block w-2/3 mx-auto py-3 bg-[#E358A6] rounded-full text-center text-white font-medium text-sm"
            >
              Купити онлайн
            </div>
            <div class="hidden lg:block mt-3 text-center text-sm text-green">
              Безпечна угода
            </div>
            <div class="mt-4 text-xs lg:text-sm">Спосіб доставки:</div>
            <div class="mt-2.5 flex items-center gap-x-1.5">
              <div class="">
                <img src="../img/H.svg" alt="" class="h-5 lg:h-8" />
              </div>
              <div class="text-xs lg:text-sm">{{ delivery }}</div>
            </div>
          </div>
        </div>
        <div
          class="lg:col-start-1 lg:col-end-3 lg:row-start-[8] lg:row-end-[15] lg:mt-10 flex flex-col gap-y-4 lg:gap-y-8"
        >
          <div class="order-1 lg:order-2">
            <div class="mt-6 p-4 lg:p-8 bg-white rounded-[10px]">
              <div class="font-bold text-sm lg:text-xl">Опис товару</div>
              <div class="mt-5 text-xs lg:text-sm">
                {{ description }}
              </div>
            </div>
          </div>
          <div class="order-2 lg:order-1">
            <div
              class="bg-white rounded-[10px] pt-8 pl-8 pr-14 2xl:pr-20 pb-10 mt-4 lg:mt-0"
            >
              <div class="text-sm lg:text-xl font-bold">Характеристики</div>
              <div class="lg:flex hidden mt-8 items-start justify-between">
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
              <div class="flex lg:hidden justify-between mt-2.5">
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
          </div>
        </div>
        <div
          class="lg:col-start-3 lg:col-end-4 lg:row-start-[17] lg:row-end-[20] lg:mt-16"
        >
          <div class="mt-4 lg:mt-0 bg-white rounded-[10px] p-4 lg:py-3 lg:px-5">
            <div class="font-bold text-sm lg:text-xl">Розташування</div>
            <div class="mt-2.5 text-xs lg:mt-3 lg:text-sm">
              {{ adres }}
            </div>
            <div class="mt-2.5 lg:mt-3">
              <img src="../img/2gis.png" alt="" class="w-full" />
            </div>
          </div>
        </div>
        <div
          class="lg:col-start-3 lg:col-end-4 lg:row-start-[13] lg:row-end-[18]"
        >
          <div
            class="mt-4 lg:mt-0 lg:bg-white lg:rounded-[10px] lg:pt-5 lg:pl-2.5 lg:pr-7 lg:pb-3"
          >
            <div class="flex items-end gap-x-4">
              <div class="shrink-0">
                <img
                  src="../img/maks.png"
                  alt=""
                  class="h-[60px] lg:h-[92px] shrink-0"
                />
              </div>
              <div class="">
                <div class="font-medium text-[13px] lg:text-xl">{{ name }}</div>
                <div class="mt-1 text-[11px] lg:mt-2 lg:text-sm">
                  {{ personText }}
                </div>
                <div class="flex items-center mt-1 shrink-0">
                  <div
                    class="lg:hidden p-px px-1.5 border border-accent rounded-full text-[11px] shrink-0"
                  >
                    {{ btnText }}
                  </div>
                  <div class="ml-2 lg:ml-0 shrink-0">
                    <img src="../img/stars.png" alt="" class="h-3 shrink-0" />
                  </div>
                  <div class="ml-1 text-sm">(0)</div>
                </div>
              </div>
            </div>
            <div
              class="mt-1 w-max ml-auto text-[#B73D25] text-[11px] border-b border-dotted border-[#B73D25] lg:border-0 lg:mx-auto lg:mt-5 lg:text-sm"
            >
              Поскаржитись
            </div>
          </div>
        </div>
        <div
          class="lg:col-start-1 lg:col-end-3 lg:row-start-[19] lg:row-end-[26]"
        >
          <div class="mt-4 font-bold text-sm lg:text-xl">Коментарі</div>
          <div
            class="mt-2.5 bg-[#F2EEF9] px-2.5 py-3 lg:p-5 rounded-[10px] flex items-center justify-between"
          >
            <div class="text-[10px] lg:text-sm text-gray pr-5">
              Додавати коментарі можуть лише авторизовані користувачі
            </div>
            <div>
              <img src="../img/sendsam.svg" alt="" class="h-[18px] lg:h-9" />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu></MobileMenu>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Banner from "@/components/Banner.vue";
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
    Banner,
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
