<template>
  <HeadVue></HeadVue>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main pb-10 lg:pb-20">
    <div class="flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class="font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
      <p class="font-normal sm:text-sm text-[11px] lg:block hidden">Гаманець</p>
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10] lg:hidden" />
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Мої замовлення</p>
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
            Планувальник завдань
          </p>
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
        <Acc_buttons
          v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
          class=""
        ></Acc_buttons>
        <div
          class="text-main"
          v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
        ></div>

        <div class="">
          <div class="flex bg-accentLight rounded-[10px] p-2 lg:p-4">
            <div class="basis-1/2 text-sm font-medium">Оголошення</div>
            <div class="basis-1/2 text-sm font-medium">
              Найближче продовження
            </div>
          </div>

          <div class="mt-4 lg:mt-6 p-2 lg-p4 space-y-4">
            <div
              :class="[
                'flex justify-between items-center',
                { 'hidden text-center': !item.isBe },
              ]"
              v-for="item in task"
            >
              <div class="text-[#5477E7] basis-1/2 text-sm font-medium">
                {{ item.text1 }}
              </div>
              <div
                class="flex justify-between items-center basis-1/2 text-sm font-medium"
              >
                <div>{{ item.text2 }}</div>
                <button
                  @click="item.isBe = false"
                  class="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0"
                >
                  <img src="../img/new7/X.svg" alt="" class="w-2.5" />
                </button>
              </div>
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
import HeadVue from "@/components/Head.vue";
import MobileMenuVue from "@/components/MobileMenu.vue";
import FooterVue from "@/components/Footer.vue";
import Acc_buttons from "@/components/modal/Acc_buttons.vue";
import Orders_card from "@/components/Orders_card.vue";
import SofiaVue from "@/components/Sofia.vue";
export default {
  components: {
    HeadVue,
    MobileMenuVue,
    FooterVue,
    Acc_buttons,
    Orders_card,
    SofiaVue,
  },
  data() {
    return {
      isCategoryOpen: false,
      isTruckOpen: false,
      isMobileMenuOpen: false,
      task: [
        {
          text1: "Домик стеллаж ЭКО",
          text2: "24 листопада 2022, 16:58",
          isBe: true,
        },
        {
          text1: "Домик стеллаж ЭКО",
          text2: "24 листопада 2022, 16:58",
          isBe: true,
        },
        {
          text1: "Домик стеллаж ЭКО",
          text2: "24 листопада 2022, 16:58",
          isBe: true,
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
