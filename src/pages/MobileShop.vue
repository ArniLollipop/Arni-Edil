<template>
  <HeadVue></HeadVue>
  <section class = "container mx-auto px-4 pt-4 xl:pt-6 text-main">
    <div class = "flex items-center justify-between gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <div class = "flex items-center">
        <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
        <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
        <p class = "font-normal sm:text-sm text-[11px]">Магазини</p>
      </div>
      <div class = "h-fit flex items-center">
        <input type="radio" id="qwe" @click="isMobileMenuOpen = !isMobileMenuOpen" class = "w-0 peer" >
        <label for="qwe" class = "" v-show="!isMobileMenuOpen">
          <img src="@/img/catalog.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
        </label>
        <label for="qwe" class = "" v-show="isMobileMenuOpen">
          <img src="@/img/modal_x.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
        </label>
      </div>
    </div>
    <div class = "lg:flex lg:space-x-10 mb-4">
      <div class = "lg:w-[75%] w-full relative">
        <MobileCategory v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus" class = ""></MobileCategory>
        <div class = "text-main " v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus">
          <div class = "w-full mt-4">
            <img src="@/img/mobileShop_1.svg" alt="" class = "w-fit block mx-auto">
            <div class = "flex items-center justify-center -mt-3">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
            </div>
            <p class = "text-xs sm:text-sm">dsfsdf</p>
            <p class = "text-xs sm:text-sm">0 оголошень</p>
            <button class = "w-full py-1 mt-2  border border-accent rounded-[20px] ">
              <p class = "text-xs text-center sm:text-sm">Перейти</p>
            </button>
          </div>
          <div class = "w-full mt-4">
            <img src="@/img/mobileShop_1.svg" alt="" class = "w-fit block mx-auto">
            <div class = "flex items-center justify-center -mt-3">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
            </div>
            <p class = "text-xs sm:text-sm">Лия</p>
            <p class = "text-xs sm:text-sm">104 оголошення</p>
            <p class = "text-xs">Стол-ресепшн - это визитная карточка Вашего заведения. Функциональность стойки ресепшен очень многогранна, в первую очередь это удобство разделения приемной зоны торгового пространства с прикассовой зоной продавца.</p>
            <button class = "w-full py-1 mt-2  border border-accent rounded-[20px] ">
              <p class = "text-xs text-center sm:text-sm">Перейти</p>
            </button>
          </div>
          <div class = "w-full mt-4">
            <img src="@/img/mobileShop_1.svg" alt="" class = "w-fit block mx-auto">
            <div class = "flex items-center justify-center -mt-3">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
            </div>
            <p class = "text-xs sm:text-sm">Анна</p>
            <p class = "text-xs sm:text-sm">114 оголошення</p>
            <p class = "text-xs">Производство торгового оборудования</p>
            <button class = "w-full py-1 mt-2  border border-accent rounded-[20px] ">
              <p class = "text-xs text-center sm:text-sm">Перейти</p>
            </button>
          </div>
          <div class = "w-full mt-4">
            <img src="@/img/mobileShop_1.svg" alt="" class = "w-fit block mx-auto">
            <div class = "flex items-center justify-center -mt-3">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
            </div>
            <p class = "text-xs sm:text-sm">Мебель Платон</p>
            <p class = "text-xs sm:text-sm">49 оголошення</p>
            <p class = "text-xs sm:text-sm">Мебель на заказ любого цвета, размера, дизайна! Быстрые сроки! ЛУЧШИЕ ЦЕНЫ!</p>
            <button class = "w-full py-1 mt-2  border border-accent rounded-[20px] ">
              <p class = "text-xs text-center sm:text-sm">Перейти</p>
            </button>
          </div>
          <div class = "w-full mt-4">
            <img src="@/img/mobileShop_1.svg" alt="" class = "w-fit block mx-auto">
            <div class = "flex items-center justify-center -mt-3">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
              <img src="@/img/Star.svg" alt="" class = "w-[10px]">
            </div>
            <p class = "text-xs sm:text-sm">dsfsdf</p>
            <p class = "text-xs sm:text-sm">0 оголошень</p>
            <button class = "w-full py-1 mt-2  border border-accent rounded-[20px] ">
              <p class = "text-xs text-center sm:text-sm">Перейти</p>
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
import MobileCategory from "@/components/modal/MobileCategory.vue";
  export default{
    components:{
      HeadVue,
      MobileMenuVue,
      FooterVue,
      MobileCategory
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