<template>
  <HeadVue></HeadVue>
  <section class = "container mx-auto px-4 pt-4 xl:pt-6 text-main">
    <div class = "flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
      <p class = "font-normal sm:text-sm text-[11px] lg:block hidden">Гаманець</p>
      <p class = "font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10] lg:hidden">
      <p class = "font-normal sm:text-sm text-[11px] lg:hidden">Акаунт</p>
    </div>
    <div class = "lg:flex lg:space-x-10 mb-4">
      <div class = "lg:w-[25%]">
        <div class = "w-full px-5 h-[275px] lg:bg-white bg-transparent pt-4 rounded-t-[15px] rounded-b-[25px]">
          <img src="@/img/Sofia.svg" alt="" class = "w-fit mx-auto">
          <p class = "text-xl text-center mt-4">Софія Смірнова</p>
          <p class = "text-sm my-2 lg:text-left text-center">На Пропозиції для покращення з 10.09.2022</p>
          <div class = "flex items-center justify-center text-sm space-x-4">
            <div class = "flex space-x-1">
              <img src="@/img/Star.svg" alt="">
              <p class = "font-medium">0.0</p>
            </div>
            <div class = "flex space-x-1">
              <p class = "font-medium">0</p>
              <p>відгуків</p>
            </div>
            <div class = "flex space-x-1">
              <p class = "font-medium">0</p>
              <p>оголошень</p>
            </div>
          </div>
        </div>
        <div class = "w-full lg:block hidden bg-white h-[340px] pb-4 px-10 rounded-t-[25px] rounded-b-[15px]">
          <div class = "-translate-y-10 hidden lg:block">
            <router-link to="/account" class = "flex items-center space-x-2">
              <img src="@/img/person_acc.svg" alt="" class = "w-fit">
              <p class = "text-sm hover:text-accent">Акаунт [Базовий]</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/moi_acc.svg" alt="">
              <p class = "text-sm hover:text-accent">Мої оголошення</p>
            </router-link>
            <router-link to="/orders" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_zamovleni.svg" alt="">
              <p class = "text-sm hover:text-accent">Мої замовлення</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_notifications.svg" alt="">
              <p class = "text-sm hover:text-accent">Повідомлення</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_magazine.svg" alt="">
              <p class = "text-sm hover:text-accent">Магазин та послуги</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_wallet.svg" alt="">
              <p class = "text-sm hover:text-accent">Гаманець [0 грн.]</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_settings.svg" alt="">
              <p class = "text-sm hover:text-accent">Налаштування</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_like.svg" alt="">
              <p class = "text-sm hover:text-accent">Вибране</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_podpiski.svg" alt="">
              <p class = "text-sm hover:text-accent">Мої підписки</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_leave.svg" alt="">
              <p class = "text-sm hover:text-accent">Вихід</p>
            </router-link>
          </div>
        </div>
        <div class = "w-fit mx-auto mt-7 lg:block hidden">
          <p class = "text-sm ">Поділитесь профілем</p>
          <div class = "flex space-x-3 justify-center mt-3">
            <button><img src="@/img/facebook.svg" alt=""></button>
            <button><img src="@/img/telegram.svg" alt=""></button>
            <button><img src="@/img/twitter.svg" alt=""></button>
            <button><img src="@/img/viber.svg" alt=""></button>
          </div>
        </div>
      </div>
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
          <p class = "lg:text-3xl sm:text-2xl text-[13px] font-medium sm:my-10 my-4 ml-1 text-main">Мої замовлення</p>
          <input type="radio" id="qwe" @click="isMobileMenuOpen = !isMobileMenuOpen" class = "w-0 peer" >
          <label for="qwe" class = "" v-show="!isMobileMenuOpen">
            <img src="@/img/catalog.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
          </label>
          <label for="qwe" class = "" v-show="isMobileMenuOpen">
            <img src="@/img/modal_x.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
          </label>
        </div>
        <Acc_buttons v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus" class = ""></Acc_buttons>
        <div class = "text-main " v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus">
          <div class = "flex space-x-4">
            <button class = "flex items-center space-x-2 bg-white rounded-[10px] justify-center sm:py-2 py-1 sm:px-5 px-2 border border-accent shadow-md shadow-accent">
              <p class = "sm:text-sm text-xs">Покупки</p>
              <p class = "text-xs px-[5px] bg-accent rounded-full text-white">1</p>
            </button>
            <button class = "flex items-center space-x-2 bg-white rounded-[10px] justify-center sm:py-2 py-1 sm:px-8 px-5 border border-accent">
              <p class = "sm:text-sm text-xs">Продажі</p>
            </button>
          </div>
          <router-link to="/orders/card">
            <div class = "bg-white w-full flex rounded-[10px] sm:px-4 pl-2 py-4 mt-10">
              <img src="@/img/RecCards/p1.png" alt="" class = "sm:w-fit sm:h-full w-[117px] h-[68px]">
              <div class = "sm:pb-9 sm:pt-8 ml-4">
                <div class = "bg-pink px-2 py-1 rounded-full w-fit">
                  <p class = "sm:text-xs text-[10px]">Новий</p>
                </div>
                <p class = "text-blue sm:text-sm sm:mt-2 text-xs">Замовлення №11211749</p>
                <p class = "text-xs">створено сьогодні в 16:30</p>
              </div>
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
  import HeadVue from '@/components/Head.vue';
  import MobileMenuVue from '@/components/MobileMenu.vue';
  import FooterVue from '@/components/Footer.vue';
  import Acc_buttons from '@/components/modal/Acc_buttons.vue';
  import Orders_card from '@/components/Orders_card.vue';
  export default{
    components:{
      HeadVue,
      MobileMenuVue,
      FooterVue,
      Acc_buttons,
      Orders_card,
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