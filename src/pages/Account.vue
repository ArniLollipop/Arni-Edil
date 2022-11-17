<template>
  <HeadVue></HeadVue>
  <section class="xl:max-w-[1400px] mx-auto px-4 pt-4 xl:pt-6 text-main">
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
            <p
              class="text-blueText text-xs font-medium sm:text-sm lg:mt-10 mt-2"
            >
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
            Зміна облікового запису
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
          class="md:flex md:space-x-10 text-main"
          v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
        >
          <div
            class="md:w-[30%] w-full mb-4 bg-white rounded-[10px] px-4 py-4 h-fit relative border border-accent md:border-none"
          >
            <p class="sm:text-xl text-sm font-medium">Базовий</p>
            <p class="sm:text-sm text-xs mt-3">
              Оголошення додаються з оплатою за розміщення
            </p>
            <div class="flex items-center gap-x-1 absolute top-2 right-4">
              <img src="@/img/chat_galochka.svg" alt="" />
              <p class="text-sm text-green">активний</p>
            </div>
          </div>
          <div
            class="md:w-[50%] w-full bg-white rounded-[10px] px-4 py-4 h-fit relative border border-accent md:border-none"
          >
            <p class="sm:text-xl text-sm font-medium">Бізнес</p>
            <p class="sm:text-sm text-xs mt-3">
              Как работает тариф - Бизнес, в нем отсутствует плата за размещение
              объявления и отсутствует плата за создание магазина, отличие
              тарифа бизнес от базовый - тем, что у базового фиксированная цена
              за объявление, а у тарифа бизнес % от продажи, в тарифе бизнес
              будут скрыт номер телефона продавца, а также профиль покупателя до
              момента оплаты, на переписку, между покупателем и продавцом в
              тарифе бизнес, стоит фильтр на запрещенные слова и символы, чтобы
              избежать передачи контактных данных. В момент заполнения
              покупателем профиля перед оплатой, - он указывает свои данные для
              отправки, и они сохраняются там, и не видны до проведения оплаты.
            </p>
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
import SofiaVue from "@/components/Sofia.vue";
import Acc_buttons from "@/components/modal/Acc_buttons.vue";
export default {
  components: {
    HeadVue,
    MobileMenuVue,
    FooterVue,
    Acc_buttons,
    SofiaVue,
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
