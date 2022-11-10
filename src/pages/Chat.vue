<template>
  <HeadVue></HeadVue>
  <section class = "container mx-auto px-4 pt-4 xl:pt-6 text-main">
    <div class = "flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
      <p class = "font-normal sm:text-sm text-[11px] lg:block hidden">Повідомлення</p>
      <p class = "font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10] lg:hidden">
      <p class = "font-normal sm:text-sm text-[11px] lg:hidden">Повідомлення</p>
    </div>
    <div class = "lg:flex lg:space-x-10 mb-4">
      <SofiaVue></SofiaVue>
      <div class = "lg:w-[75%] w-full relative text-main lg:bg-white lg:px-10 lg:py-10 sm:px-4 py-4 rounded-[10px]">
        <div class = "lg:w-[40%] lg:float-left w-full">
          <div class = "flex items-center justify-between">
            <p class = "lg:text-3xl sm:text-2xl text-[13px] font-medium ml-1">Повідомлення</p>
            <button id="qwe" @click="isMobileMenuOpen = !isMobileMenuOpen" class = "w-0 invisible" ></button>
            <label for="qwe" class = "" v-show="!isMobileMenuOpen">
              <img src="@/img/catalog.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
            </label>
            <label for="qwe" class = "" v-show="isMobileMenuOpen">
              <img src="@/img/modal_x.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
            </label>
          </div>
          <div class = "text-main h-full" v-show="!isMobileMenuOpen"
            @mobileModalStatus="acceptMobileModalStatus">
            <div class = "bg-white rounded-[10px] flex justify-between items-center border lg:px-4 py-2 border-accent w-full lg:my-8 sm:my-4 px-2 my-2">
              <input type="text" placeholder="Пошук по повідомленням" class = "bg-white w-full placeholder:text-gray placeholder:text-sm sm:text-sm text-xs outline-none">
              <img src="@/img/chat_lupa.svg" alt="" class = "lg:hidden">
            </div>
            <router-link to="/support">
              <div class="bg-accent w-full sm:py-4 py-2  lg:my-10 sm:my-6 my-4 rounded-[10px] text-white text-center">
                <p class="lg:text-lg sm:text-base text-sm">Підтримка VamBeri</p>
                <p class = "lg:text-base sm:text-sm text-xs"> Будемо раді вам допомогти!</p>
              </div>
            </router-link>
            <div class = "flex space-x-4 lg:hidden">
              <button class = "flex items-center space-x-2 bg-white rounded-[10px] justify-center sm:py-2 py-1 sm:px-5 px-2 border border-accent shadow-md shadow-accent">
                <p class = "sm:text-sm text-xs">Покупки</p>
                <p class = "text-xs px-[5px] bg-accent rounded-full text-white">1</p>
              </button>
              <button class = "flex items-center space-x-2 bg-white rounded-[10px] justify-center sm:py-2 py-1 sm:px-8 px-5 border border-accent">
                <p class = "sm:text-sm text-xs">Продажі</p>
              </button>
            </div>
            <router-link to="/chat2">
              <div class = "w-full pl-3 sm:pt-4 pt-2 pb-2 border-[0.25px] relative bg-white border-gray rounded-[20px] border-opacity-60 lg:mt-6 mt-3 hover:bg-pink focus:bg-pink">
                <div class = "flex items-center">
                  <div class = "w-fit relative">
                    <img src="@/img/anonymus.svg" alt="" class = "sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]">
                    <div class = "w-5 h-5 mt-[2px] bg-accent absolute bottom-0 right-0 rounded-full text-white text-xs flex items-center justify-center">
                      <p>2</p>
                    </div>
                  </div>
                  <div class = "ml-2">
                    <p class = "sm:text-base text-sm font-medium">Иван Семенов</p>
                    <p class = "sm:text-base text-xs mt-1">Здравствйте! Да, решили не меня...</p>
                  </div>
                </div>
                <p class = "text-sm text-gray lg:block hidden">Шкаф кровать трансформер</p>
                <p class = "text-xs sm:text-sm lg:hidden absolute top-[10px] text-gray right-2">вчера</p>
              </div>
            </router-link>
            <router-link to="/chat2">
              <div class = "w-full pl-3 sm:pt-4 pt-2 pb-2 border-[0.25px] relative bg-white border-gray rounded-[20px] border-opacity-60 lg:mt-8 sm:mt-4 mt-2 hover:bg-pink focus:bg-pink">
                <div class = "flex items-center">
                  <div class = "w-fit relative">
                    <img src="@/img/anonymus.svg" alt="" class = "sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]">
                  </div>
                  <div class = "ml-2">
                    <p class = "sm:text-base text-sm font-medium">TVShop</p>
                    <p class = "sm:text-base text-xs mt-1">Здравствйте! Да, решили не меня...</p>
                  </div>
                </div>
                <p class = "text-sm text-gray lg:block hidden">Шкаф кровать трансформер</p>
                <p class = "text-xs sm:text-sm lg:hidden absolute top-[10px] text-gray right-2">вчера</p>
              </div>
            </router-link>
            <router-link to="/chat2">
              <div class = "w-full pl-3 sm:pt-4 pt-2 pb-2 border-[0.25px] relative bg-white border-gray rounded-[20px] border-opacity-60 lg:mt-8 sm:mt-4 mt-2 hover:bg-pink focus:bg-pink">
                <div class = "flex items-center">
                  <div class = "w-fit relative">
                    <img src="@/img/anonymus.svg" alt="" class = "sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]">
                  </div>
                  <div class = "ml-2">
                    <p class = "sm:text-base text-sm font-medium">Семен Петров</p>
                    <p class = "sm:text-base text-xs mt-1">Здравствйте! Да, решили не меня...</p>
                  </div>
                </div>
                <p class = "text-sm text-gray lg:block hidden">Шкаф кровать трансформер</p>
                <p class = "text-xs sm:text-sm lg:hidden absolute top-[10px] text-gray right-2">вчера</p>
              </div>
            </router-link>
            <router-link to="/chat2">
              <div class = "w-full pl-3 sm:pt-4 pt-2 pb-2 border-[0.25px] relative bg-white border-gray rounded-[20px] border-opacity-60 lg:mt-8 sm:mt-4 mt-2 hover:bg-pink focus:bg-pink">
                <div class = "flex items-center">
                  <div class = "w-fit relative">
                    <img src="@/img/anonymus.svg" alt="" class = "sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]">
                  </div>
                  <div class = "ml-2">
                    <p class = "sm:text-base text-sm font-medium">Ирина Дмитрова</p>
                    <p class = "sm:text-base text-xs mt-1">Здравствйте! Да, решили не меня...</p>
                  </div>
                </div>
                <p class = "text-sm text-gray lg:block hidden">Шкаф кровать трансформер</p>
                <p class = "text-xs sm:text-sm lg:hidden absolute top-[10px] text-gray right-2">вчера</p>
              </div>
            </router-link>
          </div>
        </div>
        <Acc_buttons v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus" class = "mt-4"></Acc_buttons>
        <div class = "lg:block hidden bg-pink h-full mt-1 pb-20 w-[58%] px-4 float-right py-4 rounded-[10px] relative">
          <div class = "bg-white w-full block mx-auto py-2 px-4 rounded-[20px]">
            <div class = "flex items-center">
              <div class = "w-fit relative">
                <img src="@/img/anonymus.svg" alt="">
              </div>
              <div class = "ml-2 w-full">
                <div class = "w-full flex items-center justify-between">
                  <p class = "text-base font-medium">Ирина Дмитрова</p>
                  <p class = "text-green text-sm">Сейчас онлайн</p>
                </div>
                <div class = "w-full flex items-center justify-between">
                  <p class = "text-sm text-gray mt-2">Шкаф кровать трансформер</p>
                  <div class = "flex w-1/4 items-center gap-x-3 justify-center">
                    <button><img src="@/img/chat_1.svg" alt=""></button>
                    <button><img src="@/img/chat_2.svg" alt=""></button>
                    <button><img src="@/img/chat_3.svg" alt=""></button>
                    <button><img src="@/img/chat_4.svg" alt=""></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class = "flex mt-6">
            <div class = "">
              <img src="@/img/Sofia.svg" alt="" class = "w-[50px] h-[50px]">
              <p class = "text-sm text-center">14:30</p>
            </div>
            <div class = "bg-white py-4 px-5 rounded-b-[20px] rounded-r-[20px] mt-3 ml-1 w-[78%]">
              <p class = "text-base font-medium">Софія Смірнова</p>
              <p>Здравствуйте! Скажите,пожалуйста, выдвижные ли нижние полочки и можете прислать еще фото?</p>
            </div>
          </div>
          <div class = "flex mt-4">
            <div class = "invisible">
              <img src="@/img/Sofia.svg" alt="" class = "w-[50px] h-[50px]">
              <p class = "text-sm text-center">14:30</p>
            </div>
            <div class = "bg-white py-4 px-5 rounded-b-[20px] rounded-l-[20px] mt-3 ml-1 w-[78%]">
              <p class = "text-base font-medium">Иван Семенов</p>
              <p>Добрый день! Да, шкафчики выдвижные. Фото прикрепил. </p>
              <img src="@/img/chat_img.png" alt="" class = "mt-1">
            </div>
            <div class = "ml-2">
              <img src="@/img/anonymus.svg" alt="" class = "w-[50px] h-[50px]">
              <p class = "text-sm text-center">16:26</p>
            </div>
          </div>
          <div class = "flex mt-4">
            <div class = "">
              <img src="@/img/Sofia.svg" alt="" class = "w-[50px] h-[50px]">
              <p class = "text-sm text-center">19:00</p>
            </div>
            <div class = "bg-white py-4 px-5 rounded-b-[20px] rounded-r-[20px] mt-3 ml-1 w-[78%]">
              <p class = "text-base font-medium">Софія Смірнова</p>
              <p>Спасибо, поняла. Буду думать)</p>
            </div>
          </div>
          <div class = "flex mt-4">
            <div class = "invisible">
              <img src="@/img/Sofia.svg" alt="" class = "w-[50px] h-[50px]">
              <p class = "text-sm text-center">14:30</p>
            </div>
            <div class = "bg-white py-4 px-5 rounded-b-[20px] rounded-l-[20px] mt-3 ml-1 w-[78%]">
              <p class = "text-base font-medium">Иван Семенов</p>
              <p>Буду ждать ответа</p>
            </div>
            <div class = "ml-2 ">
              <img src="@/img/anonymus.svg" alt="" class = "w-[50px] h-[50px]">
              <p class = "text-sm text-center">20:40</p>
            </div>
          </div>
          <div class = "bg-white flex border-accent border-2 w-[95%] rounded-[10px] absolute py-2 px-4 bottom-4">
            <button><img src="@/img/file.svg" alt="" class = "sm:w-fit w-7"></button>
            <input type="text" placeholder="Ваше повідомлення..." class = "h-fit w-full px-2 rounded-[10px] bg-white py-2 md:text-sm sm:text-[12px] text-[10px] placeholder:text-gray focus:outline-none placeholder:sm:w-full placeholder:w-[105px]">
            <button><img src="@/img/send.svg" alt="" class = "sm:w-fit w-7"></button>
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