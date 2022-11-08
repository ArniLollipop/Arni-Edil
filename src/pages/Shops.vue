<template>
  <HeadVue></HeadVue>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main pb-10 lg:pb-20">
    <div class="lg:hidden">
      <img src="../img/mob-banner.png" alt="" class="w-full" />
    </div>
    <div class="flex items-center justify-between mt-3">
      <div class="flex items-center gap-x-0.5 lg:gap-x-1">
        <div class="text-[11px] lg:text-sm">Головна</div>
        <div>
          <img src="../img/arrowRight.svg" alt="" class="w-2 lg:w-2.5" />
        </div>
        <div class="text-[11px] lg:text-sm">Магазини</div>
      </div>
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
      class="text-main"
      v-show="!isMobileMenuOpen"
      @mobileModalStatus="acceptMobileModalStatus"
    ></div>

    <div class="mt-3 lg:mt-10 flex flex-col items-strech gap-y-5 lg:gap-y-7">
      <div
        class="lg:bg-white lg:rounded-xl lg:px-8 lg:py-5 flex flex-col lg:flex-row lg:items-end w-full"
        v-for="item in shops"
      >
        <div class="flex flex-col items-center">
          <div>
            <img :src="require('../img/new7/' + item.image)" alt="" />
          </div>
          <div class="mt-1">
            <img :src="require('../img/new7/' + item.stars)" alt="" />
          </div>
        </div>

        <div class="lg:ml-5 w-full">
          <div class="text-xs lg:text-sm hidden lg:block">{{ item.text }}</div>
          <div
            class="flex flex-col lg:flex-row lg:items-end justify-between mt-4"
          >
            <div>
              <div class="text-sm lg:text-base lg:font-medium">
                {{ item.title }}
              </div>
              <div class="text-xs lg:text-sm mt-1 lg:mt-2">
                {{ item.subtitle }}
              </div>
              <div class="text-xs mt-1 lg:hidden">{{ item.text }}</div>
            </div>

            <div
              class="border border-accent w-full lg:w-max mt-5 lg:mt-0 text-center lg:px-10 py-1 text-sm rounded-full"
            >
              Перейти
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 lg:mt-10">
      <div
        class="mx-auto w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] rounded-full bg-accent flex items-center justify-center"
      >
        <img
          src="../img/arrowDownWhite.svg"
          alt=""
          class="h-[14px] lg:h-[30px]"
        />
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
export default {
  components: {
    HeadVue,
    MobileMenuVue,
    FooterVue,
    Acc_buttons,
    Orders_card,
    SofiaVue,
  },
  data() {
    return {
      isCategoryOpen: false,
      isTruckOpen: false,
      isMobileMenuOpen: false,
      shops: [
        {
          image: "mp1.png",
          stars: "stars.png",
          text: "",
          title: "dsfsdf",
          subtitle: "0 оголошень",
        },
        {
          image: "mp2.png",
          stars: "starsFill.png",
          text: "Мебель на заказ любого цвета, размера, дизайна! Быстрые сроки! ЛУЧШИЕ ЦЕНЫ!!!",
          title: "Мебель Платон",
          subtitle: "49 оголошень",
        },
        {
          image: "mp3.png",
          stars: "stars.png",
          text: "Интернет магазин TOP Shop предлагает весь спектр товаров из телемагазина",
          title: "TVShop",
          subtitle: "10 оголошень",
        },
        {
          image: "mp4.png",
          stars: "stars.png",
          text: "Стол-ресепшен - это визитная карточка Вашего заведения. Функциональность стойки ресепшен очень многогранна, в первую очередь это удобство разделения приемной зоны торгового пространства с прикассовой зоной продавца.",
          title: "Лия",
          subtitle: "104 оголошень",
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
