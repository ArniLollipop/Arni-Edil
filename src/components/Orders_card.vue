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
          <div class = "bg-white rounded-[10px] sm:px-10 sm:py-10 sm:mt-10 px-3 py-4 mt-4">
            <p class = "sm:text-xl text-xs font-medium">Замовлення №11211749 </p>
            <div class = "sm:flex items-center mt-4 pb-4 sm:border-b-[0.5px] border-gray">
              <p class = "sm:text-sm  mt-1 sm:mt-0 text-xs w-[20%]">Статус</p>
              <div>
                <p class = "font-medium sm:text-sm mt-1 sm:mt-0  text-xs">Нове замовлення</p>
                <p class = " mt-1 sm:mt-0 text-xs">створено сьогодні в 16:30</p>
              </div>
            </div>
            <div class = "sm:flex items-center mt-4 pb-4 border-b-[0.5px] border-gray">
              <p class = "sm:text-sm text-xs w-[20%] sm:mb-0 mb-1">Продавець</p>
              <div class = "flex items-center space-x-3">
                <img src="@/img/slider_img2.svg" alt="" class = "w-[50px] h-[50px] rounded-full">
                <div >
                  <p class = "text-blue font-medium sm:text-sm text-xs">Анна</p>
                  <p class = "sm:text-sm text-xs">На Дошка оголошень Vamberi з 13.02.2022</p>
                </div>
              </div>
            </div>
            <div class = "sm:flex items-center mt-4 pb-4 border-b-[0.5px] border-gray">
              <p class = "sm:text-sm text-xs w-[20%] sm:mb-0 mb-1">Товари</p>
              <div class = "flex items-center space-x-3">
                <img src="@/img/RecCards/p1.png" alt="" class = "w-[57px] h-[36px] rounded-[10px]">
                <div >
                  <p class = "text-blue font-medium sm:text-sm text-xs">Тест</p>
                  <div class = "flex space-x-5">
                  <p class = "sm:text-sm text-xs">Кількість: 1</p>
                  <p class = "sm:text-sm text-xs">Сумма: 1 грн.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class = "sm:flex items-center mt-5 relative">
              <p class = "sm:text-sm text-xs w-[20%]">Всього</p>
              <div>
                <p class = "font-medium sm:text-sm sm:block text-xs  absolute">1 грн.</p>
              </div>
              <p class = "text-red sm:text-sm text-xs underline underline-offset-2 absolute right-0">Видалити замовлення</p>
            </div>
            <p class = "sm:text-base text-xs font-medium sm:mt-10 mt-10">Повідомлення</p>
            <div class = "w-full bg-pink px-2 py-2 relative flex items-center mt-5 rounded-[10px]">
              <button><img src="@/img/file.svg" alt="" class = "sm:w-fit w-7"></button>
              <input type="text" placeholder="Додавати коментарі можуть лише авторизовані користувачі" class = "h-fit w-full px-2 rounded-[10px] bg-pink py-2 md:text-sm sm:text-[12px] text-[10px] placeholder:text-gray focus:outline-none placeholder:sm:w-full placeholder:w-[105px]">
              <button><img src="@/img/send.svg" alt="" class = "sm:w-fit w-7"></button>
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
  import HeadVue from '@/components/Head.vue';
  import MobileMenuVue from '@/components/MobileMenu.vue';
  import FooterVue from '@/components/Footer.vue';
  import Acc_buttons from '@/components/modal/Acc_buttons.vue';
  import Orders_card from '@/components/Orders_card.vue';
  import SofiaVue from './Sofia.vue';
  export default{
    components:{
      HeadVue,
      MobileMenuVue,
      FooterVue,
      Acc_buttons,
      Orders_card,
      SofiaVue
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