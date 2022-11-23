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
        <p class="font-normal sm:text-sm text-[11px]">Служба підтримки</p>
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
          class="lg:w-[25%] w-full sm:px-9 md:px-12 lg:px-2 py-3 lg:bg-pink rounded-[10px] h-fit xl:text-sm text-center sm:text-[14px] text-[12px] lg:pt-2"
        >
          <h1
            class="lg:text-3xl md:text-[20px] sm:text-base text-[14px] font-medium text-start lg:relative lg:hidden lg:mb-5 mb-2 h-fit"
          >
            Питання до служби підтримки
          </h1>
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
        <div class="lg:w-[85%] w-full lg:pt-2">
          <h1 class="lg:text-3xl md:text-xl text-base font-medium lg:block hidden">
            Питання до служби підтримки
          </h1>
          <div class="md:text-sm text-xs w-full md:my-9 sm:my-6 my-3">
            <div
              class="w-full md:px-12 md:py-8 sm:px-6 sm:py-4 md:bg-white rounded-[10px]"
            >
              <p class="lg:text-xl sm:text-base text-sm mb-4">
                Часто задавані питання
              </p>
              <div v-for="index in indexes" class="my-4">
                <div class="bg-pink rounded-[10px] px-3 py-5 relative h-fit">
                  <p class="font-medium">{{ index.title }}</p>
                  <p v-show="index.VisibleOrNot" class="mt-2">
                    Виділити своє оголошення із загальної маси дуже просто, для
                    цього ви можете підкоючити до свого оголошення платну
                    послугу або пакет послуг
                    <span class="text-blue"> Турбо продаж </span> ваше
                    оголошення буде піднято у стрічці та виділено маркером, ви
                    точно не пропустите свого покупця!
                  </p>
                  <button
                    v-show="index.VisibleOrNot"
                    @click="index.VisibleOrNot = !index.VisibleOrNot"
                    class="w-fit absolute top-6 right-3"
                  >
                    <img src="@/img/strelka_up.svg" alt="" class="" />
                  </button>
                  <button
                    v-show="!index.VisibleOrNot"
                    @click="index.VisibleOrNot = !index.VisibleOrNot"
                    class="w-fit absolute top-6 right-3"
                  >
                    <img src="@/img/strelka_down.svg" alt="" class="" />
                  </button>
                </div>
              </div>
              <p class="lg:text-xl sm:text-base text-sm mb-4">
                Не знайшли відповідь? Напишіть нам!
              </p>
              <div class="md:flex block md:w-[70%] w-full items-center gap-x-2">
                <div class="md:w-[40%] md:my-0 w-full my-4">
                  <p>Виберіть тему звернення (повідомлення)</p>
                </div>
                <div class="md:w-[70%] w-full">
                  <div class = "bg-pink w-full px-3 rounded-[10px] overflow-hidden">
                    <select id="countries" class="text-main  bg-pink text-sm rounded-lg w-full h-[45px] focus:outline-none block overflow-hidden">
                      <option v-for="choice in choices" :value="choice">{{choice}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                class="md:flex block md:w-[70%] w-full gap-x-2 items-center my-5"
              >
                <div class="md:w-[40%] md:my-0 w-full my-4">
                  <p>Звернення</p>
                </div>
                <div class="md:w-[70%] w-full">
                  <textarea
                    type="text"
                    class="bg-pink outline-none p-2 w-full h-28 rounded-[10px] relative"
                  >
                  </textarea>
                </div>
              </div>
              <div
                class="md:flex block md:w-[70%] w-full gap-x-2 items-center my-5"
              >
                <div class="md:w-[40%] md:my-0 w-full my-4">
                  <p>Як до Вас можно звертатись?</p>
                </div>
                <div class="md:w-[70%] w-full">
                  <input
                    class="bg-pink outline-none px-2 w-full h-11 rounded-[10px] relative"
                  />
                </div>
              </div>
              <div
                class="md:flex block md:w-[70%] w-full gap-x-2 items-center my-5"
              >
                <div class="md:w-[40%] md:my-0 w-full my-4">
                  <p>Пошта, на яку ми відповімо</p>
                </div>
                <div class="md:w-[70%] w-full">
                  <input
                    class="bg-pink outline-none px-2 w-full h-11 rounded-[10px] relative"
                  />
                </div>
              </div>
              <div
                class="md:flex block md:w-[70%] w-full gap-x-2 items-center my-5"
              >
                <div class="md:w-[40%] md:my-0 w-full my-4">
                  <p>Вкажіть код перевірки</p>
                </div>
                <div class="w-[90%] flex gap-x-9 h-11">
                  <img
                    src="@/img/code.svg"
                    alt=""
                    class="lg:w-fit sm:w-1/2 w-1/3"
                  />
                  <input
                    class="bg-pink outline-none px-2 xl:w-1/4 lg:w-1/3 w-1/2 h-11 rounded-[10px]"
                  />
                </div>
              </div>
              <div class="w-full flex justify-center">
                <button
                  class="bg-accent w-fit px-4 py-3 text-white rounded-full"
                >
                  <span> Надіслати звернення</span>
                </button>
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
import Head from "@/components/Head.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Mobilemenu from "@/components/MobileMenu.vue";
import Acc_buttonsVue from "@/components/modal/Acc_buttons.vue";
import { useState } from "@/composables/state";
export default {
  setup() {
    const [index, setIndex] = useState(0);
    return {
      index,
      setIndex,
    };
  },
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
      choiceVisible: false,
      indexes: [
        { id: 1, title: "Як найшвидше продати товар?", VisibleOrNot: true },
        { id: 2, title: "Моє оголошення заблоковане", VisibleOrNot: false },
        {
          id: 3,
          title: "Мій обліковий запис заблокований адміністрацією",
          VisibleOrNot: false,
        },
        {
          id: 4,
          title: "Чому для мого товару недоступна безпечна угода?",
          VisibleOrNot: false,
        },
        {
          id: 5,
          title:
            "Протягом якого часу здійснюється повернення коштів за безпечною угодою?",
          VisibleOrNot: false,
        },
      ],
      choices: ["Не обрано", "Текст 1", "Текст 2", "Текст 3", "Текст 4"],
    };
  },
  methods: {
    Visible(VisibleOrNot) {
      VisibleOrNot = !VisibleOrNot;
    },
    Checked(TrueOrFalse) {
      TrueOrFalse = !TrueOrFalse;
      this.choiceVisible = false;
    },
    acceptModalStatus(data) {
      this.isTruckOpen = data;
    },
    acceptMobileModalStatus(data) {
      this.isMobileMenuOpen = data;
    },
  },
};
</script>
