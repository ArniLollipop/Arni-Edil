<template>
  <Head></Head>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main pb-8 lg:pb-20">
    <div class="flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class="font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
      <p class="font-normal sm:text-sm text-[11px] lg:block hidden">
        Мої підписки
      </p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
      <p class="font-normal sm:text-sm text-[11px] lg:block hidden">Магазины</p>
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10] lg:hidden" />
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Акаунт</p>
    </div>
    <div class="lg:flex lg:space-x-10 mb-4">
      <SofiaVue></SofiaVue>
      <div class="lg:w-[75%] w-full relative">
        <div
          class="w-full rounded-[10px] px-3 pt-4 pb-2 bg-banner text-main flex justify-between relative"
        >
          <div class="w-[65%]">
            <p class="sm:text-xl text-[13px] font-medium">
              Не дайте себе обдурити!
            </p>
            <p class="sm:text-sm text-xs font-medium mt-5">
              Дізнайтеся, як уберегти свій гамаанець від зловмисників
            </p>
            <p class="text-blue text-xs font-medium sm:text-sm lg:mt-10 mt-2">
              Поради з безпеки
            </p>
          </div>
          <img
            src="@/img/acc_banner_img.svg"
            alt=""
            class="sm:w-fit sm:h-[90%] sm:block absolute top-3 right-3 w-[125px] h-[114px]"
          />
          <button class="absolute top-4 right-3">
            <img src="@/img/banner_x.svg" alt="" class="w-fit" />
          </button>
        </div>
        <div class="flex items-center justify-between">
          <p
            class="lg:text-3xl sm:text-2xl text-[13px] font-medium sm:my-10 my-4 ml-1 text-main"
          >
            Мої підписки
          </p>
          <button id="qwe" @click="isMobileMenuOpen = !isMobileMenuOpen" class = "w-0 invisible" ></button>
          <label for="qwe" class="" v-show="!isMobileMenuOpen">
            <img
              src="@/img/catalog.svg"
              alt=""
              class="w-[18px] h-[18px] lg:hidden cursor-pointer"
            />
          </label>
          <label for="qwe" class="" v-show="isMobileMenuOpen">
            <img
              src="@/img/modal_x.svg"
              alt=""
              class="w-[18px] h-[18px] lg:hidden cursor-pointer"
            />
          </label>
        </div>
        <Acc_buttons
          v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
          class=""
        ></Acc_buttons>
        <div
          class="md:flex md:space-x-10 text-main"
          v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
        ></div>

        <div>
          <div class="flex items-center gap-x-2.5 lg:gap-x-6">
            <div
              @click="isButton = false"
              :class="[
                'w-[40%] sm:w-[30%] lg:w-[152px] text-center text-xs lg:text-sm border border-accent bg-white rounded-[10px] py-1 lg:py-1.5',
                { 'shadow-md shadow-accent': !isButton },
              ]"
            >
              Пошуки
            </div>
            <div
              @click="isButton = true"
              :class="[
                'w-[40%] sm:w-[30%] lg:w-[152px] text-center text-xs lg:text-sm border border-accent bg-white rounded-[10px] py-1 lg:py-1.5',
                { 'shadow-md shadow-accent': isButton },
              ]"
            >
              Магазини
            </div>
          </div>
          <div
            class="mt-4 lg:mt-8 flex flex-col gap-y-4 lg:gap-y-8"
            v-if="!isButton"
          >
            <div
              v-for="(item, key) in poshuki"
              class="p-2 pb-3.5 relative lg:px-3 lg:py-6 lg:pr-8 flex flex-col lg:flex-row lg:items-center lg:justify-between w-full lg:w-1/2 xl:w-[40%] bg-white border border-accent rounded-[10px]"
            >
              <div class="absolute bottom-3 right-3">
                <img
                  :src="require('../img/last2P/' + item.image)"
                  alt=""
                  class="w-3.5"
                />
              </div>
              <div class="lg:text-center">
                <div class="text-sm font-medium">{{ item.title }}</div>
                <div class="text-xs">{{ item.date }}</div>
              </div>
              <div class="mt-1 ml-3 lg:ml-0 lg:mt-0 space-y-1">
                <div v-for="checkItem in item.check">
                  <input type="checkbox" :id="checkItem.id" />
                  <label :for="checkItem.id" class="text-xs lg:text-sm ml-1">{{
                    checkItem.text
                  }}</label>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mt-4 lg:mt-8 flex flex-col gap-y-6 lg:gap-y-8 relative"
            v-if="isButton"
          >
            <div
              v-for="item in magazini"
              class="p-2 lg:px-2.5 flex items-end justify-between w-full bg-white border border-accent rounded-[10px]"
            >
              <div class="absolute lg:hidden top-2 right-2">
                <img src="../img/last2P/X.svg" alt="" class="w-3.5" />
              </div>
              <div class="flex gap-x-4 lg:gap-x-10">
                <div>
                  <img
                    :src="require('../img/last2P/' + item.image)"
                    alt=""
                    class="h-[70px] lg:h-[180px]"
                  />
                </div>
                <div
                  class="py-2 lg:py-5 flex flex-col items-start justify-between"
                >
                  <div class="flex flex-col items-center">
                    <div class="text-xs lg:text-lg">{{ item.title }}</div>
                    <div class="lg:mt-1 text-xs lg:text-sm">{{ item.col }}</div>
                    <div class="hidden lg:block mt-1">
                      <img
                        :src="require('../img/last2P/' + item.stars)"
                        alt=""
                        class="h-4"
                      />
                    </div>
                  </div>
                  <div class="hidden lg:block text-sm">{{ item.subtitle }}</div>
                </div>
              </div>
              <div class="flex flex-col items-center lg:gap-y-3.5">
                <div class="text-[11px] lg:text-sm">{{ item.date }}</div>
                <div
                  class="hidden lg:block bg-[#E358A6] py-2 w-[200px] text-center text-white text-sm font-medium rounded-[20px]"
                >
                  Відписатися
                </div>
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
import MobileMenuVue from "@/components/MobileMenu.vue";
import Footer from "@/components/Footer.vue";
import Acc_buttons from "@/components/modal/Acc_buttons.vue";
import SofiaVue from "@/components/Sofia.vue";
export default {
  components: {
    Head,
    MobileMenuVue,
    Footer,
    Acc_buttons,
    SofiaVue,
  },
  data() {
    return {
      isCategoryOpen: false,
      isTruckOpen: false,
      isMobileMenuOpen: false,
      isButton: false,
      magazini: [
        {
          id: 1,
          title: "Анна",
          col: "114 оголошення",
          stars: "stars.png",
          subtitle: "Производство торгового оборудования",
          date: "сьогодні в 16:01",
          image: "magp1.png",
        },
        {
          id: 2,
          title: "Анна",
          col: "114 оголошення",
          stars: "stars.png",
          subtitle: "Производство торгового оборудования",
          date: "сьогодні в 16:01",
          image: "magp1.png",
        },
        {
          id: 3,
          title: "Анна",
          col: "114 оголошення",
          stars: "stars.png",
          subtitle: "Производство торгового оборудования",
          date: "сьогодні в 16:01",
          image: "magp1.png",
        },
      ],
      poshuki: [
        {
          id: 1,
          title: "Lenovo",
          date: "сьогодні в 16:01",
          check: [
            {
              id: 1,
              text: "Раз в день",
            },
            {
              id: 2,
              text: "Відразу під час публікації",
            },
          ],
          image: "basket.svg",
        },
        {
          id: 2,
          title: "Lenovo",
          date: "сьогодні в 16:01",
          check: [
            {
              id: 3,
              text: "Раз в день",
            },
            {
              id: 4,
              text: "Відразу під час публікації",
            },
          ],
          image: "basket.svg",
        },
        {
          id: 3,
          title: "Lenovo",
          date: "сьогодні в 16:01",
          check: [
            {
              id: 5,
              text: "Раз в день",
            },
            {
              id: 6,
              text: "Відразу під час публікації",
            },
          ],
          image: "basket.svg",
        },
      ],
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
