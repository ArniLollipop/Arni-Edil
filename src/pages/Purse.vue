<template>
  <HeadVue></HeadVue>
  <section class = "container mx-auto px-4 pt-4 xl:pt-6 text-main">
    <div class = "flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
      <p class = "font-normal sm:text-sm text-[11px] lg:block hidden">Гаманець</p>
      <p class = "font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10] lg:hidden">
      <p class = "font-normal sm:text-sm text-[11px] lg:hidden">Гаманець</p>
    </div>
    <div class = "lg:flex lg:space-x-10 mb-4">
      <SofiaVue></SofiaVue>
      <div class = "lg:w-[75%] w-full relative">
        <div class = "w-full rounded-[10px] px-3 pt-4 pb-2 bg-banner text-main flex justify-between relative">
          <div class = "w-[65%]">
            <p class = "sm:text-xl text-[13px] font-medium">Не дайте себе обдурити!</p>
            <p class = "sm:text-sm text-xs font-medium mt-5">Дізнайтеся, як уберегти свій гамаанець від зловмисників</p>
            <p class = "text-blue text-xs font-medium sm:text-sm lg:mt-10 mt-2">Поради з безпеки</p>
          </div>
          <img src="@/img/acc_banner_img.svg" alt="" class = "sm:w-fit sm:h-[90%] sm:block absolute top-3 right-3 w-[125px] h-[114px]">
          <button class = "absolute top-4 right-3"><img src="@/img/banner_x.svg" alt="" class = "w-fit"></button>
        </div>
        <div class = "flex items-center justify-between">
          <p class = "lg:text-3xl sm:text-2xl text-[13px] font-medium sm:my-10 my-4 ml-1 text-main">Гаманець</p>
          <button id="qwe123" @click="isMobileMenuOpen = !isMobileMenuOpen" class = "w-0 invisible" ></button>
          <label for="qwe123" class = "" v-show="!isMobileMenuOpen">
            <img src="@/img/catalog.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
          </label>
          <label for="qwe123" class = "" v-show="isMobileMenuOpen">
            <img src="@/img/modal_x.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
          </label>
        </div>
        <Acc_buttons v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus" class = ""></Acc_buttons>
        <div class = "text-main " v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus">
          <div class = "xl:w-[80%] w-full">
            <div class = "flex gap-x-5">
              <button class ="w-[200px] bg-white py-2 border border-accent shadow-md shadow-accent rounded-[10px]">
                <p class = "text-center text-sm sm:block hidden">Поповнення балансу</p>
                <p class = "text-xs sm:hidden">Поповнення</p>
              </button>
              <button class ="w-[200px] bg-white py-2 border border-accent rounded-[10px]">
                <p class = "text-center sm:text-sm text-xs">Історія платежів</p>
              </button>
            </div>
            <div class = "flex my-5 items-center gap-x-2">
              <p class = "bg-accent w-5 h-5 sm:text-sm text-xs flex items-center justify-center rounded-full text-white">1</p>
              <p class = "sm:text-sm text-xs">Оберіть спосіб оплати</p>
            </div>
            <div class = "flex gap-x-2">
              <button class = "bg-white rounded-[10px] px-2 py-1 border border-accent overflow-hidden">
                <img src="@/img/purse_1.png" alt="">
              </button>
              <button class = "bg-white rounded-[10px] px-2 py-1 border border-accent overflow-hidden">
                <img src="@/img/purse_2.png" alt="">
              </button>
            </div>
            <div class = "flex my-5 items-center gap-x-2">
              <p class = "bg-accent w-5 h-5 sm:text-sm text-xs flex items-center justify-center rounded-full text-white">2</p>
              <p class = "sm:text-sm text-xs">Сума поповнення</p>
            </div>
            <div class = "grid w-full md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-3">
              <div class = "sm:w-[220px] sm:h-[110px] bg-white border text-center py-6 border-accent rounded-[10px]">
                <p class = "lg:text-2xl sm:text-base text-sm font-medium">100 грн</p>
                <p class = "sm:text-base text-sm text-green">+ 30 грн. бонус</p>
              </div>
              <div class = "sm:w-[220px] sm:h-[110px] bg-white border text-center py-6 border-accent rounded-[10px]">
                <p class = "lg:text-2xl sm:text-base text-sm font-medium">300 грн</p>
                <p class = "sm:text-base text-sm text-green">+ 90 грн. бонус</p>
              </div>
              <div class = "sm:w-[220px] sm:h-[110px] bg-white border text-center py-6 border-accent rounded-[10px]">
                <p class = "lg:text-2xl sm:text-base text-sm font-medium">500 грн</p>
                <p class = "sm:text-base text-sm text-green">+ 150 грн. бонус</p>
              </div>
              <div class = "sm:w-[220px] sm:h-[110px] bg-white border text-center py-6 border-accent rounded-[10px] relative">
                <p class = "lg:text-2xl sm:text-base text-sm font-medium">1000 грн</p>
                <p class = "sm:text-base text-sm text-green">+ 300 грн. бонус</p>
                <p class = "text-white text-xs bg-green px-[6px] sm:py-0.5 w-fit rounded-[5px] absolute top-0 sm:left-3 right-3">Популярний вибір</p>
              </div>
              <div class = "sm:w-[220px] sm:h-[110px] bg-white border text-center  py-8 border-accent rounded-[10px]">
                <p class = "lg:text-2xl sm:text-base text-sm font-medium">Довільна сума</p>
              </div>
            </div>
            <button class = "text-white bg-accent rounded-full sm:block mx-auto hidden mt-6 px-4 py-2">
              <p class = "text-sm">Перейти до оплати</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MobileMenuVue></MobileMenuVue>
  <FooterVue></FooterVue>
</template>

<script>
  import HeadVue from '@/components/Head.vue';
  import MobileMenuVue from '@/components/MobileMenu.vue';
  import FooterVue from '@/components/Footer.vue';
  import Acc_buttons from '@/components/modal/Acc_buttons.vue';
  import Orders_card from '@/components/Orders_card.vue';
  import SofiaVue from '@/components/Sofia.vue';
  export default{
    components:{
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
  }
</script>