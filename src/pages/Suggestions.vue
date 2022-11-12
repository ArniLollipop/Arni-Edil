<template>
  <Head></Head>
  <Banner></Banner>
  <section class="2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div
      class="flex items-center justify-between gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1"
    >
      <div class="flex items-center gap-x-1">
        <p class="font-normal sm:text-sm text-[11px]">Головна</p>
        <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
        <p class="font-normal sm:text-sm text-[11px]">
          Пропозиції для покращення сайту
        </p>
      </div>
      <div class="flex items-center">
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
    </div>
    <Acc_buttonsVue
      v-if="isMobileMenuOpen"
      @mobileModalStatus="acceptMobileModalStatus"
      class=""
    ></Acc_buttonsVue>
    <div
      class="md:flex md:space-x-10 text-main"
      v-show="!isMobileMenuOpen"
      @mobileModalStatus="acceptMobileModalStatus"
    >
      <div class="lg:flex gap-x-5 relative">
        <div
          class="lg:w-[25%] w-full sm:px-9 md:px-12 lg:px-2 py-3 lg:bg-pink rounded-[10px] h-fit xl:text-sm text-center sm:text-[14px] text-[12px] lg:pt-2 sm:pt-14 pt-12"
        >
          <router-link to="/blog">
            <button class="bg-white rounded-[10px] border-main border w-full">
              <p class="px-1">Блог</p>
            </button>
          </router-link>
          <router-link to="/aboutUs">
            <button
              class="bg-white rounded-[10px] border-main border my-2 w-full"
            >
              <p class="px-1">Про нас</p>
            </button>
          </router-link>
          <router-link to="/contacts">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <p class="px-1">Контакти</p>
            </button>
          </router-link>
          <router-link to="/agree">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <p class="px-1">Безпечна угода</p>
            </button>
          </router-link>
          <router-link to="/ugoda">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <p class="px-1">Угода користувача</p>
            </button>
          </router-link>
          <router-link to="/dogovor">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <p class="px-1">Договір-оферта</p>
            </button>
          </router-link>
          <router-link to="/dropshipping">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <p class="px-1">Дропшипінг</p>
            </button>
          </router-link>
          <router-link to="/politika">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <p class="px-1">Політика конфіденційності</p>
            </button>
          </router-link>
          <router-link to="/rules">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <p class="px-1">Правила подання оголошень</p>
            </button>
          </router-link>
          <router-link to="/suggest">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full shadow-md shadow-accent"
            >
              <p class="px-1">Пропозиції для покращення сайту</p>
            </button>
          </router-link>
          <router-link to="/reserved">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <p class="px-1">Заборонені публікації та товари</p>
            </button>
          </router-link>
          <router-link to="/coockie">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <p class="px-1">Політика використання файлів cookie</p>
            </button>
          </router-link>
          <router-link to="/support">
            <button class = "w-full py-3"><img src="@/img/support.svg" alt="" class="w-fit mx-auto sm:block hidden">
              <img src="@/img/support_accent.svg" alt="" class="w-fit mx-auto sm:hidden">
            </button>
          </router-link>
        </div>
        <div class = "lg:w-[85%] w-full lg:pt-2">
          <h1 class = "lg:text-3xl md:text-[20px] sm:text-base text-[14px] font-medium text-center lg:text-start lg:relative absolute top-0 lg:mb-5 mb-2 h-fit">Запропонуйте варіанти покращення роботи на сайті для Вашого комфорту</h1>
          <div class = "md:text-sm text-xs w-[94%] relative">
            <p class = "">Дякую, що вибрали VAMBERI !!!</p>
            <p class = "my-1">Ми створили саму багатофункціональну, максимально зручну та просту у використанні майданчик для оголошень та інтернет-магазинів. З VAMBERI купувати легко та безпечно, продавати швидко та зручно!</p>
            <p class = "my-1">За наявності інформації про те, що розміщені оголошення порушують правила Сайту, чинне законодавство та/або права третіх осіб, https://vamberi.com.ua має право в будь-який момент перевірити та/або видалити такі оголошення, а також обмежити дії Користувача, який розмістив ці оголошення на сайті.</p>
            <p class = "my-4">Ми прагнемо до вдосконалення кожен день, для цього відкрили новий канал зв'язку для ПРОПОЗИЦІЙ (посилання), де Ви можете запропонувати додати нову функцію, нові групи або фільтри, щоб Ваша робота з VAMBERI стала ще комфортнішою та продуктивнішою!</p>
            <p class = "my-1">Ми чекаємо на Ваші коментарі та пропозиції, і хочемо стати не просто вибором №1 для Вас, а єдиними!</p>
            <div class = "pt-4 flex items-end sm:justify-start justify-center">
              <div class = "w-[60%] sm:w-[80%] float-left">
                <span class = "mb-2 sm:mb-0">Почта для предложений:</span>
                <span class = "text-blue mt-2"> vamberi.sms@gmail.com</span>
              </div>
              <img src="@/img/thankYou.svg" alt="" class="sm:w-[20%] w-[42px] sm:float-right translate-y-2 lg:translate-y-6 xl:translate-y-9">
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
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Mobilemenu from "@/components/MobileMenu.vue";
import Acc_buttonsVue from "@/components/modal/Acc_buttons.vue";
export default {
  components: {
    Head,
    Banner,
    Footer,
    Mobilemenu,
    Acc_buttonsVue,
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
