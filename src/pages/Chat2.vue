<template>
  <HeadVue></HeadVue>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main">
    <div class="flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class="font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
      <p class="font-normal sm:text-sm text-[11px] lg:block hidden">
        Повідомлення
      </p>
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10] lg:hidden" />
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Акаунт</p>
    </div>
    <div class="lg:flex lg:space-x-10 mb-4">
      <SofiaVue></SofiaVue>
      <div
        class="lg:w-[75%] w-full relative text-main lg:bg-white lg:px-10 lg:py-10 rounded-[10px]"
      >
        <div class="w-[40%] float-left lg:block hidden">
          <div class="flex items-center justify-between">
            <p class="lg:text-3xl sm:text-2xl text-[13px] font-medium ml-1">
              Повідомлення
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
          <div
            class="bg-white rounded-[10px] border px-4 py-2 border-accent w-full my-8"
          >
            <input
              type="text"
              placeholder="Пошук по повідомленням"
              class="bg-white w-full placeholder:text-sm text-sm placeholder:text-gray outline-none"
            />
          </div>
          <router-link to="/support">
            <div
              class="bg-accent w-full py-4 my-10 rounded-[10px] text-white text-center"
            >
              <p class="text-lg">Підтримка VamBeri</p>
              <p class="text-base">Будемо раді вам допомогти!</p>
            </div>
          </router-link>
          <router-link to="/chat2">
            <div
              class="w-full pl-3 pt-4 pb-2 border-[0.25px] border-gray rounded-[20px] border-opacity-60 mt-6 hover:bg-pink focus:bg-pink"
            >
              <div class="flex items-center">
                <div class="w-fit relative">
                  <img
                    src="@/img/anonymus.svg"
                    alt=""
                    class="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
                  />
                  <div
                    class="w-5 h-5 mt-[2px] bg-accent absolute bottom-0 right-0 rounded-full text-white text-xs flex items-center justify-center"
                  >
                    <p>2</p>
                  </div>
                </div>
                <div class="ml-2">
                  <p class="text-base font-medium">Иван Семенов</p>
                  <p>Здравствйте! Да, решили не меня...</p>
                </div>
              </div>
              <p class="text-sm text-gray">Шкаф кровать трансформер</p>
            </div>
          </router-link>
          <router-link to="/chat2">
            <div
              class="w-full pl-3 pt-4 pb-2 border-[0.25px] border-gray rounded-[20px] border-opacity-60 mt-8 hover:bg-pink focus:bg-pink"
            >
              <div class="flex items-center">
                <div class="w-fit relative">
                  <img
                    src="@/img/anonymus.svg"
                    alt=""
                    class="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
                  />
                </div>
                <div class="ml-2">
                  <p class="text-base font-medium">TVShop</p>
                  <p>Здравствйте! Да, решили не меня...</p>
                </div>
              </div>
              <p class="text-sm text-gray">Шкаф кровать трансформер</p>
            </div>
          </router-link>
          <router-link to="/chat2">
            <div
              class="w-full pl-3 pt-4 pb-2 border-[0.25px] border-gray rounded-[20px] border-opacity-60 mt-8 hover:bg-pink focus:bg-pink"
            >
              <div class="flex items-center">
                <div class="w-fit relative">
                  <img
                    src="@/img/anonymus.svg"
                    alt=""
                    class="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
                  />
                </div>
                <div class="ml-2">
                  <p class="text-base font-medium">Семен Петров</p>
                  <p>Здравствйте! Да, решили не меня...</p>
                </div>
              </div>
              <p class="text-sm text-gray">Шкаф кровать трансформер</p>
            </div>
          </router-link>
          <router-link to="/chat2">
            <div
              class="w-full pl-3 pt-4 pb-2 border-[0.25px] border-gray rounded-[20px] border-opacity-60 mt-8 hover:bg-pink focus:bg-pink"
            >
              <div class="flex items-center">
                <div class="w-fit relative">
                  <img
                    src="@/img/anonymus.svg"
                    alt=""
                    class="sm:h-[50px] sm:w-[50px] h-[40px] w-[40px]"
                  />
                </div>
                <div class="ml-2">
                  <p class="text-base font-medium">Ирина Дмитрова</p>
                  <p>Здравствйте! Да, решили не меня...</p>
                </div>
              </div>
              <p class="text-sm text-gray">Шкаф кровать трансформер</p>
            </div>
          </router-link>
        </div>
        <div class="flex items-center justify-between lg:hidden mb-3">
          <p class="lg:text-3xl sm:text-2xl text-[13px] font-medium ml-1">
            Повідомлення
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
          class="text-main h-full"
          v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
        >
          <div
            class="lg:bg-pink h-full mt-1 lg:w-[58%] w-full lg:px-4 lg:float-right lg:py-4 rounded-[10px] relative"
          >
            <div
              class="bg-white w-full block mx-auto py-2 sm:px-4 px-2 sm:rounded-[20px] rounded-[10px]"
            >
              <div class="flex items-center">
                <div class="w-fit relative">
                  <img src="@/img/anonymus.svg" alt="" />
                </div>
                <div class="ml-2 w-full">
                  <div class="w-full lg:flex items-center justify-between">
                    <p class="sm:text-base text-sm font-medium">
                      Ирина Дмитрова
                    </p>
                    <p class="text-green sm:text-sm text-xs lg:block hidden">
                      Сейчас онлайн
                    </p>
                  </div>
                  <div class="w-full flex items-center justify-between">
                    <p class="sm:text-sm text-xs text-gray sm:mt-2">
                      Шкаф кровать трансформер
                    </p>
                    <div
                      class="sm:flex w-1/4 hidden items-center gap-x-3 justify-center"
                    >
                      <button><img src="@/img/chat_1.svg" alt="" /></button>
                      <button><img src="@/img/chat_2.svg" alt="" /></button>
                      <button><img src="@/img/chat_3.svg" alt="" /></button>
                      <button><img src="@/img/chat_4.svg" alt="" /></button>
                    </div>
                  </div>
                  <div class="w-full lg:hidden flex justify-between">
                    <p class="text-green sm:text-sm text-xs">Сейчас онлайн</p>
                    <div class="flex w-1/2 items-center gap-x-3 justify-end">
                      <button><img src="@/img/chat_1.svg" alt="" /></button>
                      <button><img src="@/img/chat_2.svg" alt="" /></button>
                      <button><img src="@/img/chat_3.svg" alt="" /></button>
                      <button><img src="@/img/chat_4.svg" alt="" /></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex mt-6">
              <div class="">
                <img
                  src="@/img/Sofia.svg"
                  alt=""
                  class="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
                />
                <p class="text-sm text-center">14:30</p>
              </div>
              <div
                class="bg-white sm:border-none border-[0.25px] border-accent lg:py-4 py-2 lg:px-5 px-2 rounded-b-[10px] rounded-r-[10px] mt-3 ml-1 lg:w-[78%] w-full relative"
              >
                <p class="sm:text-base text-sm font-medium">Софія Смірнова</p>
                <p class="sm:text-base text-xs">
                  Здравствуйте! Скажите,пожалуйста, выдвижные ли нижние полочки
                  и можете прислать еще фото?
                </p>
                <img
                  src="@/img/chat_galochka.svg"
                  alt=""
                  class="absolute top-3 right-2"
                />
                <img
                  src="@/img/chat_galochka.svg"
                  alt=""
                  class="absolute top-3 right-3"
                />
              </div>
            </div>
            <div class="flex mt-4">
              <div class="invisible xl:block hidden">
                <img
                  src="@/img/Sofia.svg"
                  alt=""
                  class="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
                />
                <p class="text-sm text-center">14:30</p>
              </div>
              <div
                class="bg-white sm:border-none border-[0.25px] border-accent lg:py-4 py-2 lg:px-5 pl-4 rounded-b-[10px] rounded-l-[10px] mt-3 ml-1 lg:w-[78%] w-full relative"
              >
                <p class="sm:text-base text-sm font-medium">Иван Семенов</p>
                <p class="sm:text-base text-xs">
                  Добрый день! Да, шкафчики выдвижные. Фото прикрепил.
                </p>
                <img
                  src="@/img/chat_galochka.svg"
                  alt=""
                  class="absolute top-3 right-2"
                />
                <img
                  src="@/img/chat_galochka.svg"
                  alt=""
                  class="absolute top-3 right-3"
                />
                <img
                  src="@/img/chat_img.png"
                  alt=""
                  class="mt-1 sm:w-[157px] sm:h-[108px] w-1/2 h-[71px]"
                />
              </div>
              <div class="ml-2">
                <img
                  src="@/img/anonymus.svg"
                  alt=""
                  class="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
                />
                <p class="text-sm text-center">16:26</p>
              </div>
            </div>
            <div class="flex mt-4">
              <div class="">
                <img
                  src="@/img/Sofia.svg"
                  alt=""
                  class="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
                />
                <p class="text-sm text-center">19:00</p>
              </div>
              <div
                class="bg-white sm:border-none border-[0.25px] border-accent lg:py-4 py-2 lg:px-5 px-2 rounded-b-[10px] rounded-r-[10px] mt-3 ml-1 lg:w-[78%] w-full relative"
              >
                <p class="sm:text-base text-sm font-medium">Софія Смірнова</p>
                <p class="sm:text-base text-xs">
                  Спасибо, поняла. Буду думать)
                </p>
                <img
                  src="@/img/chat_galochka.svg"
                  alt=""
                  class="absolute top-3 right-2"
                />
                <img
                  src="@/img/chat_galochka.svg"
                  alt=""
                  class="absolute top-3 right-3"
                />
              </div>
            </div>
            <div class="flex mt-4">
              <div class="xl:block hidden invisible">
                <img
                  src="@/img/Sofia.svg"
                  alt=""
                  class="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
                />
                <p class="text-sm text-center">14:30</p>
              </div>
              <div
                class="bg-white mb-4 sm:border-none border-[0.25px] border-accent lg:py-4 py-2 lg:px-5 pl-4 rounded-b-[10px] rounded-l-[10px] mt-3 ml-1 lg:w-[78%] w-full relative"
              >
                <p class="sm:text-base text-sm font-medium">Иван Семенов</p>
                <p class="sm:text-base text-xs">Буду ждать ответа</p>
                <img
                  src="@/img/chat_galochka.svg"
                  alt=""
                  class="absolute top-3 right-2"
                />
              </div>
              <div class="ml-2">
                <img
                  src="@/img/anonymus.svg"
                  alt=""
                  class="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
                />
                <p class="text-sm text-center">20:40</p>
              </div>
            </div>
            <div
              class="bg-white my-4 flex border-accent sm:border-2 border lg:w-[95%] w-full rounded-[10px] mt-2 lg:absolute sm:py-2 sm:px-4 px-2 bottom-4"
            >
              <button>
                <img src="@/img/file.svg" alt="" class="sm:w-fit w-[15px]" />
              </button>
              <input
                type="text"
                placeholder="Ваше повідомлення..."
                class="h-fit w-full px-2 rounded-[10px] bg-white py-2 md:text-sm sm:text-[12px] text-[10px] placeholder:text-gray focus:outline-none placeholder:sm:w-full placeholder:w-[105px]"
              />
              <button>
                <img src="@/img/send.svg" alt="" class="sm:w-fit w-[15px]" />
              </button>
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
