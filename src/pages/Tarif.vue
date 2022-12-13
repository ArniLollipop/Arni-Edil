<template>
  <HeadVue></HeadVue>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main">
    <div class="flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class="font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
      <p class="font-normal sm:text-sm text-[11px] lg:block hidden">
        Налаштування тирифу
      </p>
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10] lg:hidden" />
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">
        Налаштування тар...
      </p>
    </div>
    <div class="lg:flex lg:space-x-10 mb-4">
      <SofiaVue></SofiaVue>
      <div class="lg:w-[75%] w-full relative">
        <div
          class="w-full rounded-[10px] px-3 pt-4 pb-2 bg-banner text-main flex justify-between relative"
        >
          <div class="w-[65%]">
            <p class="sm:text-xl text-[13px] font-medium">
              Не дайте себе обдурити!
            </p>
            <p class="sm:text-sm text-xs font-medium mt-5">
              Дізнайтеся, як уберегти свій гамаанець від зловмисників
            </p>
            <p class="text-blue text-xs font-medium sm:text-sm lg:mt-10 mt-2">
              Поради з безпеки
            </p>
          </div>
          <img
            src="@/img/acc_banner_img.svg"
            alt=""
            class="sm:w-fit sm:h-[90%] sm:block absolute top-3 right-3 w-[125px] h-[114px]"
          />
          <button class="absolute top-4 right-3">
            <img src="@/img/banner_x.svg" alt="" class="w-fit" />
          </button>
        </div>
        <div class="flex items-center justify-between my-4">
          <p
            class="lg:text-3xl sm:text-2xl text-[13px] font-medium sm:mt-10 text-main"
          >
            Налаштування тарифу
          </p>
          <div @click="isMobileMenuOpen = !isMobileMenuOpen">
            <div v-if="!isMobileMenuOpen">
              <img
                src="@/img/catalog.svg"
                alt=""
                class="w-[18px] h-[18px] lg:hidden cursor-pointer"
              />
            </div>
            <div v-if="isMobileMenuOpen">
              <img
                src="@/img/modal_x.svg"
                alt=""
                class="w-[18px] h-[18px] lg:hidden cursor-pointer"
              />
            </div>
          </div>
        </div>
        <Acc_buttons
          v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
          class=""
        ></Acc_buttons>
        <div
          class="text-main"
          v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
        >
          <div>
            <p class="text-xl my-5">Виберіть тариф</p>
            <div class="sm:grid grid-cols-3 hidden gap-x-10">
              <div
                class="bg-white h-fit py-4 px-4 rounded-[10px] border border-accent"
              >
                <div class="border-b border-gray pb-4 border-opacity-60">
                  <p class="text-xl font-medium">Магазин - Тестовий</p>
                  <p class="my-1 text-base">
                    <span class="font-medium">Безкоштовно</span> на 3 дня
                  </p>
                  <p class="text-base">
                    Протестуйте тариф з усім функціоналом протягом дня
                  </p>
                </div>
                <div class="mt-2">
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">Персональний магазин</p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">
                      Додаткові сторінки у магазині
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">
                      Унікальна адреса магазину
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">
                      Пошук у магазині тільки про ваші товари
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">
                      Приховування конкурентів у ваших оголошеннях
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">Розширена статистика</p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">Планувальник завдань</p>
                  </div>
                </div>
              </div>
              <div
                class="bg-white h-fit py-4 px-4 rounded-[10px] border border-accent"
              >
                <div class="border-b border-gray pb-4 border-opacity-60">
                  <p class="text-xl font-medium">Магазин - Преміум</p>
                  <p class="my-1 text-base">
                    10 грн.
                    <span class="text-red line-through"> 99 грн.</span> за 60
                    днів
                  </p>
                  <p class="text-base">
                    Базовий тариф із початковим функціоналом
                  </p>
                </div>
                <div class="mt-2">
                  <div class="flex space-x-3">
                    <p class="lg:text-base text-sm text-accent">+</p>
                    <p class="lg:text-base text-sm">
                      29 грн. на бонусний рахунок
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">Персональний магазин</p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">Розширена статистика</p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">Планувальник завдань</p>
                  </div>
                </div>
              </div>
              <div
                class="bg-white h-fit py-4 px-4 rounded-[10px] border border-accent"
              >
                <div class="border-b border-gray pb-4 border-opacity-60">
                  <p class="text-xl font-medium">Магазин - Максимум</p>
                  <p class="my-1 text-base">
                    10 грн.
                    <span class="text-red line-through"> 199 грн.</span> за 60
                    днів
                  </p>
                  <p class="text-base">Максимальний тариф функціоналом</p>
                </div>
                <div class="mt-2">
                  <div class="flex space-x-3">
                    <p class="lg:text-base text-sm text-accent">+</p>
                    <p class="lg:text-base text-sm">
                      49 грн. на бонусний рахунок
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">Персональний магазин</p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">
                      Додаткові сторінки у магазині
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">
                      Унікальна адреса магазину
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">
                      Пошук у магазині тільки про ваші товари
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">
                      Приховування конкурентів у ваших оголошеннях
                    </p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">Розширена статистика</p>
                  </div>
                  <div class="flex space-x-3">
                    <img src="@/img/tarif_galochka.svg" alt="" />
                    <p class="lg:text-base text-sm">Планувальник завдань</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="text-white bg-accent rounded-full sm:block mx-auto hidden mt-6 px-4 py-2"
            >
              <p class="text-sm">Мої оголошення</p>
            </button>
            <div class="w-full sm:hidden relative">
              <swiper
                :slides-per-view="1"
                :loop="true"
                :navigation="{
                  prevEl: prev,
                  nextEl: next,
                }"
                :space-between="20"
                :modules="modules"
                class="w-[80%]"
              >
                <swiper-slide
                  class="bg-white h-fit py-4 px-4 rounded-[10px] border border-accent"
                >
                  <div class="border-b border-gray pb-4 border-opacity-60">
                    <p class="text-sm font-medium">Магазин - Тестовий</p>
                    <p class="my-1 text-xs">
                      <span class="font-medium">Безкоштовно</span> на 3 дня
                    </p>
                    <p class="text-xs">
                      Протестуйте тариф з усім функціоналом протягом дня
                    </p>
                  </div>
                  <div class="mt-2">
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Персональний магазин</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Додаткові сторінки у магазині</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Унікальна адреса магазину</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">
                        Пошук у магазині тільки про ваші товари
                      </p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">
                        Приховування конкурентів у ваших оголошеннях
                      </p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Розширена статистика</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Планувальник завдань</p>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="bg-white h-fit py-4 px-4 rounded-[10px] border border-accent"
                >
                  <div class="border-b border-gray pb-4 border-opacity-60">
                    <p class="text-sm font-medium">Магазин - Преміум</p>
                    <p class="my-1 text-xs">
                      10 грн.
                      <span class="text-red line-through"> 99 грн.</span> за 60
                      днів
                    </p>
                    <p class="text-xs">
                      Базовий тариф із початковим функціоналом
                    </p>
                  </div>
                  <div class="mt-2">
                    <div class="flex space-x-3">
                      <p class="lg:text-base text-sm text-accent">+</p>
                      <p class="text-xs">29 грн. на бонусний рахунок</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Персональний магазин</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Розширена статистика</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Планувальник завдань</p>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide
                  class="bg-white h-fit py-4 px-4 rounded-[10px] border border-accent"
                >
                  <div class="border-b border-gray pb-4 border-opacity-60">
                    <p class="text-sm font-medium">Магазин - Максимум</p>
                    <p class="my-1 text-xs">
                      10 грн.
                      <span class="text-red line-through"> 199 грн.</span> за 60
                      днів
                    </p>
                    <p class="text-xs">Максимальний тариф функціоналом</p>
                  </div>
                  <div class="mt-2">
                    <div class="flex space-x-3">
                      <p class="lg:text-base text-sm text-accent">+</p>
                      <p class="text-xs">49 грн. на бонусний рахунок</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Персональний магазин</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Додаткові сторінки у магазині</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Унікальна адреса магазину</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">
                        Пошук у магазині тільки про ваші товари
                      </p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">
                        Приховування конкурентів у ваших оголошеннях
                      </p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Розширена статистика</p>
                    </div>
                    <div class="flex space-x-3">
                      <img src="@/img/tarif_galochka.svg" alt="" />
                      <p class="text-xs">Планувальник завдань</p>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
              <button
                ref="prev"
                class="px-[0.8%] py-[4%] md:px-2 sm:border-none border-[0.25px] border-accent md:py-6 bg-white rounded-full z-10 absolute left-0 top-1/2 -translate-y-1/2"
              >
                <img
                  src="@/img/Стрелка_left.png"
                  alt=""
                  class="w-[7px] h-[7px]"
                />
              </button>
              <button
                ref="next"
                class="px-[0.8%] py-[4%] md:px-2 sm:border-none border-[0.25px] border-accent md:py-6 bg-white rounded-full z-10 absolute right-0 top-1/2 -translate-y-1/2"
              >
                <img
                  src="@/img/Стрелка_right.png"
                  alt=""
                  class="w-[7px] h-[7px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MobileMenuVue></MobileMenuVue>
  <FooterVue></FooterVue>
</template>

<script>
import HeadVue from "@/components/Head.vue";
import MobileMenuVue from "@/components/MobileMenu.vue";
import FooterVue from "@/components/Footer.vue";
import Acc_buttons from "@/components/modal/Acc_buttons.vue";
import Orders_card from "@/components/Orders_card.vue";
import SofiaVue from "@/components/Sofia.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
export default {
  components: {
    HeadVue,
    MobileMenuVue,
    FooterVue,
    Acc_buttons,
    Orders_card,
    SofiaVue,
    Swiper,
    SwiperSlide,
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
  data() {
    return {
      isCategoryOpen: false,
      isTruckOpen: false,
      isMobileMenuOpen: false,
    };
  },
  methods: {
    acceptModalStatus(data) {
      this.isTruckOpen = data;
    },
    acceptMobileModalStatus(data) {
      this.isMobileMenuOpen = data;
    },
  },
};
</script>
