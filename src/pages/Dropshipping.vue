<template>
  <Head></Head>
  <Banner></Banner>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div class = "flex items-center justify-between gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <div class = "flex items-center gap-x-1">
        <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
        <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
        <p class = "font-normal sm:text-sm text-[11px]">Дропшипінг</p>
      </div>
      <div class = "flex items-center">
        <button id="qwe" @click="isMobileMenuOpen = !isMobileMenuOpen" class = "w-0 invisible" ></button>
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
        <div class = "md:flex md:space-x-10 text-main" v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus">
      <div class = "lg:flex gap-x-5 relative">
        <div class = "lg:w-[25%] w-full sm:px-9 md:px-12 lg:px-2 py-2 lg:bg-pink rounded-[10px] h-fit xl:text-sm text-center sm:text-[14px] text-[12px] lg:pt-2 sm:pt-2">
          <router-link to="/blog">
            <button class = "bg-white rounded-[10px] border-main border w-full">
              <p class = " px-1">Блог</p>
            </button>
          </router-link>
          <router-link to="/aboutUs">
            <button class ="bg-white rounded-[10px] border-main border my-2 w-full">
              <p class = "px-1">Про нас</p>
            </button>
          </router-link>
          <router-link to="/contacts">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Контакти</p>
            </button>
          </router-link>
          <router-link to="/agree">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Безпечна угода</p>
            </button>
          </router-link>
          <router-link to="/ugoda">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Угода користувача</p>
            </button>
          </router-link>
          <router-link to="/dogovor">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Договір-оферта</p>
            </button>
          </router-link>
          <router-link to="/dropshipping">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full shadow-md shadow-accent">
              <p class = "px-1">Дропшипінг</p>
            </button>
          </router-link>
          <router-link to="/politika">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Політика конфіденційності</p>
            </button>
          </router-link>
          <router-link to="/rules">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Правила подання оголошень</p>
            </button>
          </router-link>
          <router-link to="/suggest">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Пропозиції для покращення сайту</p>
            </button>
          </router-link>
          <router-link to="/reserved">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Заборонені публікації та товари</p>
            </button>
          </router-link>
          <router-link to="/coockie">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Політика використання файлів cookie</p>
            </button>
          </router-link>
          <router-link to="/support">
            <button class = "w-full py-3"><img src="@/img/support.svg" alt="" class="w-fit mx-auto"></button>
          </router-link>
        </div>
        <div class = "lg:w-[85%] w-full lg:pt-2">
          <div class = "md:text-sm text-xs w-[94%] relative">
            <p>Vamberi 2 пропонує співпрацю за системою дропшипінг. Ми додаємо Ваші позиції на Вас, приймаємо замовлення від клієнтів та передаємо Вам на відправлення.</p>
            <p>Як це відбувається:</p>
            <p>1) Ви надсилаєте заявку на пошту, де мають бути зазначені такі дані:</p>
            <ul>
              <li>• телефон для зв'язку (бажано той, що використовується у Viber/Telegram)</li>
              <li>• Посилання на Ваш сайт</li>
              <li>• фото, опис, ціни на товар.</li>
            </ul>
            <p>2) Наш менеджер зв'язується з Вами, щоб обговорити деталі співпраці.</p>
            <p>3) Менеджер додає усі Ваші позиції на Vamberi з урахуванням націнки до 10%.</p>
            <p>4) Після оформлення замовлення менеджер надсилає Вам дані для відправки клієнту.</p>
            <p>5) Ви надсилаєте нам ТТН (товарно-транспортну накладну)</p>
            <p>Робота з Vamberi за системою дропшипінг -, ще один плюс, - не потрібно платити за розміщення оголошення, не потрібно витрачати дорогоцінний час на розміщення товарів на сайт, ми зробимо це за Вас, за прийнятний % після вдалої угоди.</p>
            <div class = "xl:flex items-center justify-between lg:mt-9 sm:my-5 my-2 w-[95%]">
              <p class = "lg:my-9 sm:my-6 my-4">С Vamberi продавать легко! </p>
              <div class = "flex items-center my-1">
                <img src="@/img/geo.svg" alt="" class = "w-fit mr-2">
                <p>Україна,Одеська область, Одеса. </p>
              </div>
              <div class = "flex items-center">
                <img src="@/img/email.svg" alt="" class = "w-fit mr-2">
                <p>E-mail: vamberi.sms@gmail.com</p>
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
  import Head from '@/components/Head.vue';
  import Banner from '@/components/Banner.vue';
  import Footer from '@/components/Footer.vue';
  import Mobilemenu from '@/components/MobileMenu.vue';
  import Acc_buttonsVue from '@/components/modal/Acc_buttons.vue';
  export default{
    components:{
      Head,
      Banner,
      Footer,
      Mobilemenu,
      Acc_buttonsVue
    },
    data(){
      return{
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