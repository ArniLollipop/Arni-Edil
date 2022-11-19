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
        <p class="font-normal sm:text-sm text-[11px]">Контакти</p>
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
              <span class="px-1">Блог</span>
            </button>
          </router-link>
          <router-link to="/aboutUs">
            <button
              class="bg-white rounded-[10px] border-main border my-2 w-full"
            >
              <span class="px-1">Про нас</span>
            </button>
          </router-link>
          <router-link to="/contacts">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full shadow-md shadow-accent"
            >
              <span class="px-1">Контакти</span>
            </button>
          </router-link>
          <router-link to="/agree">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Безпечна угода</span>
            </button>
          </router-link>
          <router-link to="/ugoda">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Угода користувача</span>
            </button>
          </router-link>
          <router-link to="/dogovor">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Договір-оферта</span>
            </button>
          </router-link>
          <router-link to="/dropshipping">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Дропшипінг</span>
            </button>
          </router-link>
          <router-link to="/politika">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Політика конфіденційності</span>
            </button>
          </router-link>
          <router-link to="/rules">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Правила подання оголошень</span>
            </button>
          </router-link>
          <router-link to="/suggest">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Пропозиції для покращення сайту</span>
            </button>
          </router-link>
          <router-link to="/reserved">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Заборонені публікації та товари</span>
            </button>
          </router-link>
          <router-link to="/coockie">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Політика використання файлів cookie</span>
            </button>
          </router-link>
          <router-link to="/support">
            <button class = "w-full py-3"><img src="@/img/support.svg" alt="" class="w-fit mx-auto sm:block hidden">
              <img src="@/img/support_accent.svg" alt="" class="w-fit mx-auto sm:hidden">
            </button>
          </router-link>
        </div>
        <div class="lg:w-[85%] w-full lg:pt-2 ">
          <h1
            class="lg:text-3xl md:text-[20px] text-[16px] font-medium lg:text-start text-center lg:relative absolute top-0"
          >
            Наші телефони, наш кол-центр завжди на зв'язку
          </h1>
          <div class="md:text-sm text-[12px] sm:w-[94%]">
            <div class="flex items-center sm:justify-start justify-center lg:mt-6 mt-0">
              <img src="@/img/geo.svg" alt="" class="w-fit mr-2" />
              <p>Україна,Одеська область, Одеса.</p>
            </div>
            <div class="flex items-center sm:justify-start justify-center my-4">
              <img src="@/img/email.svg" alt="" class="w-fit mr-2" />
              <p>E-mail: vamberi.sms@gmail.com</p>
            </div>
            <div class="flex items-center sm:justify-start justify-center">
              <img src="@/img/phone.svg" alt="" class="w-fit mr-2" />
              <p>+380978064260</p>
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
