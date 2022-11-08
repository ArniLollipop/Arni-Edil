<template>
  <Head></Head>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main pb-8 lg:pb-20">
    <div class="flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class="font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
      <p class="font-normal sm:text-sm text-[11px] lg:block hidden">
        Мої оголошення
      </p>
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10] lg:hidden" />
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Акаунт</p>
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
            Вибране
          </p>
          <input
            type="radio"
            id="qwe"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="w-0 peer"
          />
          <label for="qwe" class="" v-show="!isMobileMenuOpen">
            <img
              src="@/img/catalog.svg"
              alt=""
              class="w-[18px] h-[18px] lg:hidden cursor-pointer"
            />
          </label>
          <label for="qwe" class="" v-show="isMobileMenuOpen">
            <img
              src="@/img/modal_x.svg"
              alt=""
              class="w-[18px] h-[18px] lg:hidden cursor-pointer"
            />
          </label>
        </div>
        <Acc_buttons
          v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
          class=""
        ></Acc_buttons>
        <div
          class="md:flex md:space-x-10 text-main"
          v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
        ></div>

        <div class="mt-3 lg:mt-8">
          <div class="flex items-center">
            <div>
              <img
                src="../img/last2P/ava.png"
                alt=""
                class="h-[60px] lg:h-[92px]"
              />
            </div>
            <div class="ml-4 lg:ml-8 text-center">
              <div class="text-sm lg:text-xl font-medium">Макс</div>
              <div class="text-xs lg:text-sm">1 оголошення</div>
            </div>
          </div>
          <div
            class="grid grid-cols-2 gap-x-1.5 gap-y-4 lg:grid-cols-4 lg:gap-x-2 lg:gap-y-5 mt-4 lg:mt-10 auto-rows-[minmax(0px, auto)"
          >
            <div class="flex flex-col" v-for="item in cards">
              <div class="px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white">
                <img
                  :src="require('../img/RecCards/' + item.image)"
                  alt=""
                  class="w-full"
                />
              </div>
              <div
                class="px-3 pb-10 md:pb-10 max-h-[300px] xl:max-h-[1000px] lg:p-3 lg:pb-9 xl:pb-10 rounded-2xl bg-white grow relative pt-4"
              >
                <div class="h-1/3">
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
                <div class="mt-1 lg:mt-3">
                  <div
                    :class="{
                      'text-xs text-red': item.subtitleColor,
                      'text-xs text-green': !item.subtitleColor,
                    }"
                  >
                    {{ item.subtitle }}
                  </div>
                  <div class="flex justify-between items-center mt-1">
                    <div class="md:text-sm text-xs lg:text-base">
                      {{ item.price }}.грн
                    </div>
                    <div
                      class="w-[42px] text-center rounded-3xl bg-accent text-white text-xs lg:w-[66px]"
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
                  <div class="flex items-center">
                    <img src="../img/RecCards/map.svg" alt="" class="h-3" />
                    <div class="text-xs text-gray">{{ item.map }}</div>
                  </div>
                  <div class="text-xs text-gray lg:hidden">{{ item.date }}</div>
                  <div class="flex mt-1 items-center lg:pr-2">
                    <div
                      class="w-[98px] lg:w-[114px] md:py-1 border border-accent rounded-xl text-xs text-center shrink"
                    >
                      {{ item.btnText }}
                    </div>

                    <div
                      class="hidden ml-1.5 lg:block text-[10px] 2xl:text-xs text-gray"
                    >
                      {{ item.date }}
                    </div>

                    <div
                      class="ml-auto lg:-mr-2"
                      @click="item.isLike = !item.isLike"
                    >
                      <img
                        src="../img/RecCards/heart.svg"
                        alt=""
                        :class="['w-3 xl:w-5', { 'w-3 hidden': item.isLike }]"
                      />
                      <img
                        src="../img/RecCards/heartFill.svg"
                        alt=""
                        :class="['w-3 xl:w-5', { 'w-3 hidden': !item.isLike }]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-3 lg:mt-8">
          <div class="flex items-end justify-between">
            <div class="flex items-center">
              <div>
                <img
                  src="../img/last2P/tv.png"
                  alt=""
                  class="h-[60px] lg:h-[92px]"
                />
              </div>
              <div class="ml-4 lg:ml-8 text-center">
                <div class="text-sm lg:text-xl font-medium">TVShop</div>
                <div class="text-xs lg:text-sm">10 оголошення</div>
              </div>
            </div>
            <div class="items-center gap-x-6 hidden lg:flex mr-20">
              <div
                class="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <img src="../img/chevron-left.svg" alt="" class="w-4" />
              </div>
              <div
                class="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <img src="../img/chevron-right.svg" alt="" class="w-4" />
              </div>
            </div>
          </div>

          <div
            class="grid grid-cols-2 gap-x-1.5 gap-y-4 lg:grid-cols-4 lg:gap-x-2 lg:gap-y-5 mt-4 lg:mt-10 auto-rows-[minmax(0px, auto)"
          >
            <div class="flex flex-col" v-for="item in cards1">
              <div class="px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white">
                <img
                  :src="require('../img/RecCards/' + item.image)"
                  alt=""
                  class="w-full"
                />
              </div>
              <div
                class="px-3 pb-10 md:pb-10 max-h-[300px] xl:max-h-[1000px] lg:p-3 lg:pb-9 xl:pb-10 rounded-2xl bg-white grow relative pt-4"
              >
                <div class="h-1/3">
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
                <div class="mt-1 lg:mt-3">
                  <div
                    :class="{
                      'text-xs text-red': item.subtitleColor,
                      'text-xs text-green': !item.subtitleColor,
                    }"
                  >
                    {{ item.subtitle }}
                  </div>
                  <div class="flex justify-between items-center mt-1">
                    <div class="md:text-sm text-xs lg:text-base">
                      {{ item.price }}.грн
                    </div>
                    <div
                      class="w-[42px] text-center rounded-3xl bg-accent text-white text-xs lg:w-[66px]"
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
                  <div class="flex items-center">
                    <img src="../img/RecCards/map.svg" alt="" class="h-3" />
                    <div class="text-xs text-gray">{{ item.map }}</div>
                  </div>
                  <div class="text-xs text-gray lg:hidden">{{ item.date }}</div>
                  <div class="flex mt-1 items-center lg:pr-2">
                    <div
                      class="w-[98px] lg:w-[114px] md:py-1 border border-accent rounded-xl text-xs text-center shrink"
                    >
                      {{ item.btnText }}
                    </div>

                    <div
                      class="hidden ml-1.5 lg:block text-[10px] 2xl:text-xs text-gray"
                    >
                      {{ item.date }}
                    </div>

                    <div
                      class="ml-auto lg:-mr-2"
                      @click="item.isLike = !item.isLike"
                    >
                      <img
                        src="../img/RecCards/heart.svg"
                        alt=""
                        :class="['w-3 xl:w-5', { 'w-3 hidden': item.isLike }]"
                      />
                      <img
                        src="../img/RecCards/heartFill.svg"
                        alt=""
                        :class="['w-3 xl:w-5', { 'w-3 hidden': !item.isLike }]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MobileMenu></MobileMenu>
  <Footer></Footer>
</template>

<script>
import Head from "@/components/Head.vue";
import MobileMenuVue from "@/components/MobileMenu.vue";
import Footer from "@/components/Footer.vue";
import Acc_buttons from "@/components/modal/Acc_buttons.vue";
import SofiaVue from "@/components/Sofia.vue";
export default {
  components: {
    Head,
    MobileMenuVue,
    Footer,
    Acc_buttons,
    SofiaVue
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
          image: "p1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 2,
          pretitle: "Безпечна угода",
          title: "Lenovo ideapad 330-15ikb",
          image: "p2.png",
          subtitle: "Під замовлення",
          subtitleColor: true,
          price: "8000",
          lastPrice: "10000",
          status: "Б/У",
          map: "Одесса",
          btnText: "Б/У",
          date: "27.07.2022",
          isLike: false,
        },
      ],
      cards1: [
        {
          id: 1,
          pretitle: "",
          title: "Тест",
          image: "p1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 2,
          pretitle: "Безпечна угода",
          title: "Lenovo ideapad 330-15ikb",
          image: "p2.png",
          subtitle: "Під замовлення",
          subtitleColor: true,
          price: "8000",
          lastPrice: "10000",
          status: "Б/У",
          map: "Одесса",
          btnText: "Б/У",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 3,
          pretitle: "",
          title: "Стеллаж с полками, в стиле лофт",
          image: "p3.svg",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 4,
          pretitle: "Безпечна угода",
          title: "Lenovo ideapad 330-15ikb",
          image: "p4.svg",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
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
