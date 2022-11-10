<template>
  <HeadVue></HeadVue>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main pb-10 lg:pb-20">
    <div class="flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class="font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
      <p class="font-normal sm:text-sm text-[11px] lg:block hidden">
        Мої оголошення
      </p>
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
            Статистика
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
          class="text-main"
          v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
        ></div>

        <div class="">
          <div
            class="flex flex-col lg:flex-row gap-y-2 items-center justify-between w-full lg:w-[60%]"
          >
            <div
              class="basis-1 lg:basis-[45%] bg-white w-full py-1 text-center border border-accent rounded-[10px] relative"
            >
              <div class="text-sm">За місяць</div>
              <div class="absolute right-2 top-2.5">
                <img src="../img/new7/Xs.svg" alt="" class="w-3" />
              </div>
            </div>
            <div
              class="basis-1 lg:basis-[45%] bg-white w-full py-1 text-center border border-accent rounded-[10px] relative"
            >
              <div class="text-sm">Загальна статистика</div>
              <div class="absolute right-2 top-2.5">
                <img src="../img/new7/arrowRight.svg" alt="" class="w-2.5" />
              </div>
            </div>
          </div>

          <div
            class="mt-4 lg:mt-10 flex flex-wrap items-center gap-x-4 gap-y-1.5 lg:gap-x-8"
          >
            <div class="flex items-center gap-x-1 lg:gap-x-2">
              <div
                class="w-3.5 h-3.5 lg:w-[18px] lg:h-[18px] rounded-full bg-[#008CFA]"
              ></div>
              <div class="text-xs lg:text-sm">Покази</div>
            </div>
            <div class="flex items-center gap-x-1 lg:gap-x-2">
              <div
                class="w-3.5 h-3.5 lg:w-[18px] lg:h-[18px] rounded-full bg-[#04E29B]"
              ></div>
              <div class="text-xs lg:text-sm">Перегляди</div>
            </div>
            <div class="flex items-center gap-x-1 lg:gap-x-2">
              <div
                class="w-3.5 h-3.5 lg:w-[18px] lg:h-[18px] rounded-full bg-[#F6AF3E]"
              ></div>
              <div class="text-xs lg:text-sm">Додали до обраного</div>
            </div>
            <div class="flex items-center gap-x-1 lg:gap-x-2">
              <div
                class="w-3.5 h-3.5 lg:w-[18px] lg:h-[18px] rounded-full bg-[#FF4B5E]"
              ></div>
              <div class="text-xs lg:text-sm">Переглянули телефон</div>
            </div>
            <div class="flex items-center gap-x-1 lg:gap-x-2">
              <div
                class="w-3.5 h-3.5 lg:w-[18px] lg:h-[18px] rounded-full bg-[#7956C6]"
              ></div>
              <div class="text-xs lg:text-sm">Продажів</div>
            </div>
            <div class="flex items-center gap-x-1 lg:gap-x-2">
              <div
                class="w-3.5 h-3.5 lg:w-[18px] lg:h-[18px] rounded-full bg-[#008CFB]"
              ></div>
              <div class="text-xs lg:text-sm">Додали до корзини</div>
            </div>
          </div>

          <div class="mt-6 lg:mt-12 lg:w-[80%]">
            <img src="../img/new7/grafik.png" alt="" />
          </div>

          <div class="mt-3 lg:mt-8">
            <div class="lg:text-2xl font-medium">Активні користувачі</div>
            <div
              class="mt-3 lg:mt-8 flex flex-wrap lg:w-2/3 gap-x-2 gap-y-2 lg:gap-x-6"
            >
              <div
                class="basis-[30%] bg-white rounded-[10px] flex flex-col py-1 lg:py-2.5 px-3 lg:px-6"
              >
                <div class="mx-auto">
                  <img src="../img/new7/emptyAva.png" alt="" />
                </div>
                <div class="mt-1 lg:mt-2 text-sm lg:text-base text-center">
                  Ольга
                </div>
                <div
                  class="mt-2 lg:mt-4 w-full bg-accent rounded-[20px] py-1 text-white text-xs lg:text-sm text-center"
                >
                  Докладніше
                </div>
              </div>
              <div
                class="basis-[30%] bg-white rounded-[10px] flex flex-col py-1 lg:py-2.5 px-3 lg:px-6"
              >
                <div class="mx-auto">
                  <img src="../img/new7/emptyAva.png" alt="" />
                </div>
                <div class="mt-1 lg:mt-2 text-sm lg:text-base text-center">
                  Ольга
                </div>
                <div
                  class="mt-2 lg:mt-4 w-full bg-accent rounded-[20px] py-1 text-white text-xs lg:text-sm text-center"
                >
                  Докладніше
                </div>
              </div>
              <div
                class="basis-[30%] bg-white rounded-[10px] flex flex-col py-1 lg:py-2.5 px-3 lg:px-6"
              >
                <div class="mx-auto">
                  <img src="../img/new7/emptyAva.png" alt="" />
                </div>
                <div class="mt-1 lg:mt-2 text-sm lg:text-base text-center">
                  Ольга
                </div>
                <div
                  class="mt-2 lg:mt-4 w-full bg-accent rounded-[20px] py-1 text-white text-xs lg:text-sm text-center"
                >
                  Докладніше
                </div>
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
