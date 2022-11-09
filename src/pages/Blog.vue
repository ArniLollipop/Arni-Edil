<template>
  <Head></Head>
  <Banner></Banner>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div class = "flex items-center justify-between gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <div class = "flex items-center gap-x-1">
        <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
        <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
        <p class = "font-normal sm:text-sm text-[11px]">Блог</p>
      </div>
      <div class = "flex items-center">
        <input type="radio" id="qwe" @click="isMobileMenuOpen = !isMobileMenuOpen" class = "w-0 peer" >
        <label for="qwe" class = "" v-show="!isMobileMenuOpen">
          <img src="@/img/catalog.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
        </label>
        <label for="qwe" class = "" v-show="isMobileMenuOpen">
          <img src="@/img/modal_x.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
        </label>
      </div>
    </div>
    <Acc_buttonsVue v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus" class = ""></Acc_buttonsVue>
        <div class = "md:flex md:space-x-10 text-main " v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus">
      <div class = "sm:flex items-center md:gap-x-7 sm:gap-x-3 hidden">
        <button class = "w-[210px] h-[34px] rounded-[10px] bg-white text-sm text-center border border-accent shadow-md shadow-accent">Всі категорії</button>
        <router-link to="/statya1" class = "w-[210px] h-[34px] rounded-[10px] py-1 bg-white text-sm text-center border border-accent">Новини компанії Vamberi</router-link>
        <button class = "w-[210px] h-[34px] rounded-[10px] bg-white text-sm text-center border border-accent">Нерухомість</button>
      </div>
      <div class = "sm:grid grid-cols-1 md:pt-10 sm:pt-5 gap-y-6">
        <div class = "sm:bg-white bg-transparent w-full sm:px-5 sm:py-5 rounded-[10px] min-h-[260px]" v-for="text in texts">
          <div class = "w-full h-full sm:grid sm:grid-cols-5 relative sm:gap-x-6 pb-20 md:pb-0 block">
            <div class = "lg:col-span-1 sm:col-span-2 overflow-hidden sm:pt-0 pt-11">
              <img :src="require('../img/' + text.img)" alt="" class = "w-full sm:h-full sm:min-h-[190px] h-[160px] rounded-[10px] ">
            </div>
            <div class = "lg:col-span-4 sm:col-span-3 md:relative">
              <h2 class = "lg:text-[26px] sm:text-base text-[13px] font-medium lg:pb-6 sm:pb-3 pb-1 absolute top-0 sm:relative">{{text.h2}}</h2>
              <p class = "sm:text-sm font-normal text-[12px] pb-0 mt-1">{{text.title}}</p>
              <div class = "absolute left-0 sm:bottom-0 -bottom-[7px]">
                <p class = "text-gray lg:text-base sm:text-sm text-[11px] pb-4 lg:hidden">{{text.b_title}}</p>
                <div class = "flex items-center pb-3 gap-x-2">
                  <img src="@/img/clock.svg" alt="">
                  <p class = "sm:text-sm text-[11px]">{{text.date}}</p>
                  <img src="@/img/eye.svg" alt="">
                  <p class = "sm:text-sm text-[11px]">{{text.look}}</p>
                </div>
                <p class = "text-gray lg:text-base sm:text-sm text-[11px] hidden lg:block">{{text.b_title}}</p>
              </div>
            </div>
            <button class = "sm:px-10 sm:py-3 px-6 py-1 bg-accent text-white hover:text-opacity-80 rounded-full absolute bottom-0 right-0">Читати</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MobileMenu></MobileMenu>
  <Footer></Footer>
</template>
<script>
  import Head from '@/components/Head.vue';
  import Banner from '@/components/Banner.vue';
  import Footer from '@/components/Footer.vue';
  import MobileMenu from '@/components/MobileMenu.vue';
  import Acc_buttonsVue from '@/components/modal/Acc_buttons.vue';
  export default{
    components:{
      Head,
      Banner,
      Footer,
      MobileMenu,
      Acc_buttonsVue
    },
    data(){
      return{
        texts :[
          {img: 'right_section_2.png',h2: 'Як купити авто, транспорт на Vamberi?', title : 'Как купить авто, б/у и новое, через доску частных объявлений Vamberi?', date:'25.04.2022', look:'24', b_title:'Новини компанії Vamberi • 25 червня 2022'},
          {img: 'right_section_1.png',h2: 'Каталог оголошень — швидкий зручний пошук', title : 'Каталог свежих объявлений ➔ Как работать с каталогом✔ Советы по составлению✔ Разные типы объявлений✔ Купить недвижимость✔ Продать авто✔ Найти работу✔ Вакансии ✔Отдать даром✔ Обмен✔ Разместить эффективное объявление прямо сейчас★ ', date:'25.02.2022', look:'92', b_title:'Новини компанії Vamberi • 25 лютого 2022'},
          {img: 'right_section_3.png',h2: 'Чому варто вибрати Вамбері.', title : 'Сайт объявлений Украина ➔ Покупка недвижимости✔ Продажа авто ✔Выгодный обмен ✔Купить машину б.у. ✔Купить мебель ✔Отдать даром вещи✔ Купить питомца✔ Бесплатные объявления✔ Работа✔ Вакансии✔ Онлайн-покупки ★Полезная информация★ Размещайте объявления уже сейчас ☎', date:'23.02.2022', look:'74', b_title:'Новини компанії Vamberi • 23 лютого 2022'},
        ],
        isCategoryOpen: false,
        isTruckOpen: false,
        isMobileMenuOpen: false
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