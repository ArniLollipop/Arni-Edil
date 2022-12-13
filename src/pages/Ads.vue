<template>
  <HeadVue></HeadVue>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main">
    <div class="flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class="font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
      <p class="font-normal sm:text-sm text-[11px] lg:block hidden">Гаманець</p>
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10] lg:hidden" />
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Мої замовлення</p>
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
        <div class="flex items-center justify-between">
          <p
            class="lg:text-3xl sm:text-2xl text-[13px] font-medium sm:my-10 my-4 ml-1 text-main"
          >
            Мої оголошення
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
          <div class="flex space-x-4 w-full lg:w-[60%] xl:w-[50%]">
            <button
              class="shrink-0 flex items-center space-x-2 bg-white rounded-[10px] justify-center sm:py-2 py-1 basis-1/3 border border-accent shadow-md shadow-accent"
            >
              <p class="sm:text-sm text-xs">У продажу</p>
              <p class="text-xs px-[5px] bg-accent rounded-full text-white">
                1
              </p>
            </button>
            <button
              class="flex items-center space-x-2 bg-white rounded-[10px] justify-center sm:py-2 py-1 basis-1/3 border border-accent"
            >
              <p class="sm:text-sm text-xs">Продано</p>
            </button>

            <button
              class="flex items-center space-x-2 bg-white rounded-[10px] justify-center sm:py-2 py-1 basis-1/3 border border-accent"
            >
              <p class="sm:text-sm text-xs">В архіві</p>
            </button>
          </div>
          <router-link to="/orders/card">
            <div
              class="hidden lg:grid grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-1.5 lg:gap-y-8 mt-4 lg:mt-10 pb-10 lg:pb-20"
            >
              <div
                v-for="item in cards"
                class="bg-white flex relative rounded-[10px] flex-col lg:flex-row lg:justify-between py-2 px-1.5 lg:p-4 basis-1/2"
              >
                <div
                  class="hidden absolute top-5 right-4 lg:flex justify-end items-center"
                >
                  <div>
                    <img src="../img/new7/circle.svg" alt="" class="w-3.5" />
                  </div>
                  <div class="ml-4">
                    <img src="../img/new7/dotes.svg" alt="" />
                  </div>
                </div>
                <div>
                  <img
                    :src="require('../img/new7/' + item.image)"
                    alt=""
                    class="w-full"
                  />
                </div>

                <div
                  class="bg-green h-max rounded-full px-2 py-[3px] text-white text-xs lg:text-sm mt-2 lg:mt-1 w-max xl:-ml-5"
                >
                  {{ item.status }}
                </div>
                <div
                  class="lg:hidden ont-semibold text-sm lg:text-base mt-2 lg:mt-1"
                >
                  Інформація<span class="lg:hidden">:</span>
                </div>
                <div
                  class="flex flex-wrap lg:flex-col self-strech lg:gap-0 lg:items-center gap-x-3 lg:mt-1"
                >
                  <div
                    class="font-semibold text-sm lg:text-base hidden lg:block"
                  >
                    Інформація<span class="lg:hidden">:</span>
                  </div>

                  <div
                    class="flex lg:flex-col flex-wrap lg:flex-nowrap lg:gap-y-3.5 lg:mt-3 lg:gap-x-0 gap-x-5"
                  >
                    <div class="text-[#70CAF1] text-sm">
                      {{ item.i1 }}
                    </div>
                    <div class="text-sm font-semibold">
                      {{ item.i2 }}
                    </div>
                    <div class="text-sm">{{ item.i3 }}</div>
                    <div class="text-sm flex gap-x-0.5 text-gray items-center">
                      <div>
                        <img src="../img/new7/map.svg" alt="" class="w-3" />
                      </div>
                      <div>{{ item.i4 }}</div>
                    </div>
                  </div>
                </div>
                <div
                  class="lg:hidden ont-semibold text-sm lg:text-base mt-2 lg:mt-1"
                >
                  Статистика<span class="lg:hidden">:</span>
                </div>
                <div
                  class="flex flex-wrap lg:flex-col self-strech lg:gap-0 lg:items-center gap-x-3 lg:mt-1"
                >
                  <div
                    class="font-semibold text-sm lg:text-base hidden lg:block"
                  >
                    Статистика<span class="lg:hidden">:</span>
                  </div>

                  <div
                    class="flex lg:flex-col flex-wrap lg:flex-nowrap lg:gap-y-[19px] lg:mt-3 lg:gap-x-0 gap-x-3"
                  >
                    <div
                      class="text-[10px] lg:text-xs flex items-center gap-x-0.5 lg:gap-x-1.5"
                    >
                      <div><img src="../img/new7/eye.svg" alt="" /></div>
                      <div>{{ item.s1 }}</div>
                    </div>
                    <div
                      class="text-[10px] lg:text-xs flex items-center gap-x-0.5 lg:gap-x-1.5"
                    >
                      <div><img src="../img/new7/up.svg" alt="" /></div>
                      <div>{{ item.s2 }}</div>
                    </div>
                    <div
                      class="text-[10px] lg:text-xs flex items-center gap-x-0.5 lg:gap-x-1.5"
                    >
                      <div><img src="../img/new7/heart.svg" alt="" /></div>
                      <div>{{ item.s3 }}</div>
                    </div>
                    <div
                      class="text-[10px] lg:text-xs flex items-center gap-x-0.5 lg:gap-x-1.5"
                    >
                      <div><img src="../img/new7/cal.svg" alt="" /></div>
                      <div>{{ item.s4 }}</div>
                    </div>
                  </div>
                </div>

                <div
                  class="flex lg:flex-col shrink-0 self-strech lg:justify-end lg:items-center"
                >
                  <div class="hidden lg:block shrink-0">
                    <div
                      class="bg-accent py-2 w-full text-center text-white rounded-full text-[13px]"
                    >
                      Редагувати
                    </div>
                    <div
                      class="bg-pink2 mt-2 py-2 px-3 w-full shrink-0 text-center text-white rounded-full text-[13px]"
                    >
                      Продати швидше
                    </div>
                  </div>
                  <div
                    class="flex lg:hidden w-full mt-3 justify-between items-center"
                  >
                    <div
                      class="bg-pink2 px-1.5 py-1 text-center text-white rounded-full text-[10px]"
                    >
                      Продати швидше
                    </div>

                    <div class="w-3">
                      <img src="../img/new7/pen.svg" alt="" class="w-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="lg:hidden grid grid-cols-2 gap-x-1.5 gap-y-4 lg:grid-cols-4 lg:gap-x-2 lg:gap-y-5 mt-4 lg:mt-10 auto-rows-[minmax(0px, auto)"
            >
              <router-link
                to="/"
                v-for="item in cards2"
                v-show="item.id >= 1"
                class="flex flex-col"
              >
                <div
                  v-if="item.id == 2 || item.id == 5"
                  class="w-full h-fit px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white overflow-hidden relative shadow-gray shadow-sm"
                >
                  <swiper
                    :slides-per-view="1"
                    :loop="true"
                    :navigation="{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }"
                    :space-between="20"
                    :modules="modules"
                    class="w-full h-full relative"
                  >
                    <swiper-slide class="">
                      <img
                        :src="require('../img/new7/' + item.image)"
                        alt=""
                        class="w-full"
                      />
                    </swiper-slide>
                    <button
                      class="swiper-button-prev invisible shadow-md shadow-accent"
                    >
                      <img
                        src="@/img/mini_left.svg"
                        alt=""
                        class="visible bg-white px-1 py-1 absolute -left-2 rounded-full"
                      />
                    </button>
                    <button class="swiper-button-next invisible">
                      <img
                        src="@/img/mini_right.svg"
                        alt=""
                        class="visible bg-white px-1 py-1 absolute -right-2 rounded-full"
                      />
                    </button>
                  </swiper>
                </div>
                <div
                  v-else
                  class="px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white shadow-gray shadow-md"
                >
                  <img
                    :src="require('../img/new7/' + item.image)"
                    alt=""
                    class="w-full"
                  />
                </div>
                <div
                  class="px-1.5 pt-[14px] pb-1 lg:px-3 lg:pt-4 flex flex-col justify-between shadow-gray shadow-md bg-white rounded-2xl break-all grow overflow-hidden relative z-20"
                >
                  <div class="">
                    <div
                      class="text-green text-[12px] lg:text-[14px] mb-3 absolute top-0"
                    >
                      {{ item.pretitle }}
                    </div>
                    <div
                      :class="[
                        'text-xs lg:text-sm mt-2',
                        { '': item.pretitle.length === 0 },
                      ]"
                    >
                      {{ item.title }}
                    </div>
                  </div>
                  <div class="mt-1 lg:mt-3 flex flex-col justify-between">
                    <div
                      :class="{
                        'text-xs text-red': item.subtitleColor,
                        'text-xs text-green': !item.subtitleColor,
                      }"
                    >
                      {{ item.subtitle }}
                    </div>
                    <div class="relative mt-1 flex items-center">
                      <div
                        class="md:text-sm text-xs lg:text-base pr-[50px] lg:pr-[70px]"
                      >
                        {{ item.price }}.грн
                      </div>
                      <div
                        class="absolute top-0 right-0 w-[42px] lg:py-1 text-center rounded-3xl bg-accent text-white text-xs lg:w-[66px] shrink-0"
                      >
                        {{ item.status }}
                      </div>
                    </div>
                    <div
                      :class="[
                        'md:text-sm text-xs lg:text-base text-red line-through mb-4',
                        { 'text-green invisible': item.lastPrice.length === 0 },
                      ]"
                    >
                      {{ item.lastPrice }}.грн
                    </div>
                    <div class="flex items-center mt-auto">
                      <img src="../img/RecCards/map.svg" alt="" class="h-3" />
                      <div class="text-xs text-gray">{{ item.map }}</div>
                    </div>
                    <div
                      class="flex lg:flex-col flex-wrap lg:flex-nowrap lg:gap-y-[19px] lg:mt-3 lg:gap-x-0 gap-x-3"
                    >
                      <div
                        class="text-[10px] lg:text-xs flex items-center gap-x-0.5 lg:gap-x-1.5"
                      >
                        <div><img src="../img/new7/eye.svg" alt="" /></div>
                        <div>{{ item.s1 }}</div>
                      </div>
                      <div
                        class="text-[10px] lg:text-xs flex items-center gap-x-0.5 lg:gap-x-1.5"
                      >
                        <div><img src="../img/new7/up.svg" alt="" /></div>
                        <div>{{ item.s2 }}</div>
                      </div>
                      <div
                        class="text-[10px] lg:text-xs flex items-center gap-x-0.5 lg:gap-x-1.5"
                      >
                        <div><img src="../img/new7/heart.svg" alt="" /></div>
                        <div>{{ item.s3 }}</div>
                      </div>
                      <div
                        class="text-[10px] lg:text-xs flex items-center gap-x-0.5 lg:gap-x-1.5"
                      >
                        <div><img src="../img/new7/cal.svg" alt="" /></div>
                        <div>{{ item.s4 }}</div>
                      </div>
                    </div>
                    <div
                      class="flex lg:hidden w-full mt-1.5 justify-between items-center"
                    >
                      <div
                        class="bg-pink2 px-1.5 py-1 text-center text-white rounded-full text-[10px]"
                      >
                        Продати швидше
                      </div>

                      <div class="w-3">
                        <img src="../img/new7/pen.svg" alt="" class="w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </router-link>
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
    };
  },
  data() {
    return {
      isCategoryOpen: false,
      isTruckOpen: false,
      isMobileMenuOpen: false,
      cards: [
        {
          id: 1,
          pretitle: "",
          title: "Тест",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          image: "sp1.png",
          status: "Активно",
          i1: "Тест",
          i2: "1 грн.",
          i3: "Нове",
          i4: "Одесса",
          s1: "54",
          s2: "41",
          s3: "0",
          s4: "10",
        },
        {
          id: 2,
          pretitle: "",
          title: "Lenovo ideapad 330-15ikb",
          subtitle: "Під замовлення",
          subtitleColor: true,
          price: "8000",
          lastPrice: "10000",
          status: "Б/У",
          map: "Одесса",
          image: "sp1.png",
          status: "Активно",
          i1: "Тест",
          i2: "1 грн.",
          i3: "Нове",
          i4: "Одесса",
          s1: "54",
          s2: "41",
          s3: "0",
          s4: "10",
        },
        {
          id: 3,
          pretitle: "",
          title: "Lenovo ideapad 330-15ikb",
          subtitle: "Під замовлення",
          subtitleColor: true,
          price: "8000",
          lastPrice: "10000",
          status: "Б/У",
          map: "Одесса",
          image: "sp1.png",
          status: "Активно",
          i1: "Тест",
          i2: "1 грн.",
          i3: "Нове",
          i4: "Одесса",
          s1: "54",
          s2: "41",
          s3: "0",
          s4: "10",
        },
      ],
      cards2: [
        {
          id: 3,
          pretitle: "",
          title: "Стеллаж с полками, в стиле лофт",
          image: "sp1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          s1: "54",
          s2: "41",
          s3: "0",
          s4: "10",
        },
        {
          id: 4,
          pretitle: "Безпечна угода",
          title: "Lenovo ideapad 330-15ikb",
          image: "sp1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          s1: "54",
          s2: "41",
          s3: "0",
          s4: "10",
        },
      ],
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
