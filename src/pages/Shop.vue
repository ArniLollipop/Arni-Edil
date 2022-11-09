<template>
  <HeadVue></HeadVue>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main pb-10 lg:pb-20">
    <div class="lg:hidden">
      <img src="../img/mob-banner.png" alt="" class="w-full" />
    </div>
    <div
      class="mt-6 lg:mt-14 bg-accentLight py-4 px-3 lg:pt-10 lg:pb-8 lg:pl-8 lg:pr-6 flex flex-col lg:flex-row"
    >
      <div class="flex items-start gap-x-3 lg:gap-x-5">
        <div class="basis-[45%]">
          <img src="../img/new7/shopp1.png" alt="" />
        </div>
        <div class="flex flex-col lg:flex-col-reverse gap-y-3 lg:gap-y-2">
          <div class="text-xs lg:text-sm">
            На Дошка оголошень Vamberi з 12.02.2022
          </div>
          <div class="flex items-center gap-x-2 font-medium">
            <div class="text-xs lg:text-lg">Мебель Платон</div>
            <div class="flex items-center text-xs lg:hidden">
              <div>
                <img src="../img/new7/S.svg" alt="" class="w-3" />
              </div>
              <div class="ml-1">0.0</div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex items-center justify-between mt-1 lg:ml-auto lg:-mb-6 lg:mt-auto gap-x-2 lg:gap-x-5"
      >
        <div class="text-xs lg:text-sm">
          <span class="font-medium mr-1">0</span>відгуків
        </div>
        <div class="text-xs lg:text-sm">
          <span class="font-medium mr-1">132</span>оголошення
        </div>
        <div class="text-xs lg:text-sm">
          <span class="font-medium mr-1">45</span>підписник
        </div>
        <div
          class="hidden lg:block ml-6 py-2.5 px-5 bg-pink2 rounded-full text-center text-sm text-white"
        >
          Підписатися
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between mt-3 lg:mt-8">
      <div class="flex items-center gap-x-0.5 lg:gap-x-1">
        <div class="text-[13px] lg:text-lg font-medium">Оголошення</div>
      </div>
      <input
        type="radio"
        id="qwe"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="w-0 peer"
      />
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

    <div class="grid lg:grid-cols-5 lg:gap-x-8 mt-3 lg:mt-6">
      <div class="lg:col-span-4">
        <div class="hidden lg:flex items-center w-[80%] justify-between">
          <div
            class="basis-[22%] bg-white rounded-xl w-full py-1 text-center text-sm shadow-md shadow-accent"
          >
            Всі оголошення
          </div>
          <div
            class="basis-[22%] bg-white rounded-xl w-full py-1 text-center text-sm"
          >
            За замовчуванням
          </div>
          <div
            class="basis-[22%] bg-white rounded-xl w-full py-1 text-center text-sm"
          >
            За новизною
          </div>
          <div
            class="basis-[22%] bg-white rounded-xl w-full py-1 text-center text-sm"
          >
            За вартістю
          </div>
        </div>

        <div
          class="grid grid-cols-2 gap-x-1.5 gap-y-4 lg:grid-cols-4 lg:gap-x-2 lg:gap-y-5 mt-4 lg:mt-10 auto-rows-[minmax(0px, auto)"
        >
          <div class="flex flex-col" v-for="item in cards">
            <div class="px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white">
              <img
                :src="require('../img/RecCards/' + item.image)"
                alt=""
                class="w-full"
              />
            </div>
            <div
              class="px-3 pb-9 md:pb-11 max-h-[300px] xl:max-h-[1000px] lg:p-3 lg:pb-9 xl:pb-10 rounded-2xl bg-white grow relative pt-4"
            >
              <div class="h-1/3">
                <div
                  class="text-green text-[12px] lg:text-[14px] mb-3 absolute top-0"
                >
                  {{ item.pretitle }}
                </div>
                <div
                  :class="[
                    'text-xs lg:text-sm mt-2',
                    { '': item.pretitle.length === 0 },
                  ]"
                >
                  {{ item.title }}
                </div>
              </div>
              <div class="mt-1 lg:mt-3">
                <div
                  :class="{
                    'text-xs text-red': item.subtitleColor,
                    'text-xs text-green': !item.subtitleColor,
                  }"
                >
                  {{ item.subtitle }}
                </div>
                <div class="flex justify-between items-center mt-1">
                  <div class="md:text-sm text-xs lg:text-base">
                    {{ item.price }}.грн
                  </div>
                  <div
                    class="w-[42px] text-center rounded-3xl bg-accent text-white text-xs lg:w-[66px]"
                  >
                    {{ item.status }}
                  </div>
                </div>
                <div
                  :class="[
                    'md:text-sm text-xs lg:text-base text-red line-through mb-4',
                    { 'text-green invisible': item.lastPrice.length === 0 },
                  ]"
                >
                  {{ item.lastPrice }}.грн
                </div>
                <div class="flex items-center">
                  <img src="../img/RecCards/map.svg" alt="" class="h-3" />
                  <div class="text-xs text-gray">{{ item.map }}</div>
                </div>
                <div class="text-xs text-gray lg:hidden">{{ item.date }}</div>
                <div class="flex mt-1 items-center lg:pr-2">
                  <div
                    class="w-[98px] lg:w-[114px] md:py-1 border border-accent rounded-xl text-xs text-center shrink"
                  >
                    {{ item.btnText }}
                  </div>

                  <div
                    class="hidden ml-1.5 lg:block text-[10px] 2xl:text-xs text-gray"
                  >
                    {{ item.date }}
                  </div>

                  <div
                    class="ml-auto lg:-mr-2"
                    @click="item.isLike = !item.isLike"
                  >
                    <img
                      src="../img/RecCards/heart.svg"
                      alt=""
                      :class="['w-3 xl:w-5', { 'w-3 hidden': item.isLike }]"
                    />
                    <img
                      src="../img/RecCards/heartFill.svg"
                      alt=""
                      :class="['w-3 xl:w-5', { 'w-3 hidden': !item.isLike }]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:col-span-1">
        <div class="p-4 bg-accentLight rounded-xl">
          <div class="flex flex-col gap-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="4" class="" />
              <label for="4" class="ml-2 text-sm">VIP оголошення</label>
            </div>

            <div class="mt-3 flex items-center">
              <div class="text-sm">Ціна</div>
              <div class="ml-2">
                <img src="../img/arrowDown.svg" alt="" class="w-2.5" />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <input
                type="text"
                placeholder="від"
                class="w-[45%] rounded-full placeholder:text-sm placeholder:text-gray px-2"
              />
              <input
                type="text"
                placeholder="до"
                class="w-[45%] rounded-full placeholder:text-sm placeholder:text-gray px-2"
              />
            </div>
            <div class="mt-3 flex items-center">
              <div class="text-sm">Термін розміщення</div>
              <div class="ml-2">
                <img src="../img/arrowDown.svg" alt="" class="w-2.5" />
              </div>
            </div>

            <div class="mt-2 flex flex-col gap-x-1.5">
              <div class="">
                <input type="radio" name="time" id="1r" />
                <label for="1r" class="text-sm ml-2">за 24 години</label>
              </div>
              <div class="">
                <input type="radio" name="time" id="2r" />
                <label for="2r" class="text-sm ml-2">за 7 днів</label>
              </div>
              <div class="">
                <input type="radio" name="time" id="3r" checked />
                <label for="3r" class="text-sm ml-2">за весь час </label>
              </div>
            </div>

            <div
              class="mt-5 mx-auto w-2/3 bg-accent py-2.5 rounded-full text-center text-white text-sm"
            >
              Застосувати
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-col items-center">
          <div class="flex flex-col items-center text-red text-xs">
            <div class="border-b border-dotted border-gray w-max text-center">
              Поскаржитись
            </div>
            <div
              class="border-b border-dotted border-gray w-max mt-2 text-center"
            >
              Заблокувати
            </div>
          </div>
          <div class="mt-6 flex flex-col items-center">
            <div class="text-xs text-center">Поділитися</div>
            <div class="flex items-center gap-x-2 mt-1">
              <div><img src="../img/new7/face.svg" alt="" /></div>
              <div><img src="../img/new7/tele.svg" alt="" /></div>
              <div><img src="../img/new7/twit.svg" alt="" /></div>
              <div><img src="../img/new7/what.svg" alt="" /></div>
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
      cards: [
        {
          id: 1,
          pretitle: "",
          title: "Тест",
          image: "p1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 2,
          pretitle: "Безпечна угода",
          title: "Lenovo ideapad 330-15ikb",
          image: "p2.png",
          subtitle: "Під замовлення",
          subtitleColor: true,
          price: "8000",
          lastPrice: "10000",
          status: "Б/У",
          map: "Одесса",
          btnText: "Б/У",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 3,
          pretitle: "",
          title: "Стеллаж с полками, в стиле лофт",
          image: "p3.svg",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 4,
          pretitle: "Безпечна угода",
          title: "Lenovo ideapad 330-15ikb",
          image: "p4.svg",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 5,
          pretitle: "Безпечна угода",
          title: "Продам дерево обрабатывающий центр чпу, ROVER 342",
          image: "p_5.svg",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "400,000",
          lastPrice: "600,000 ",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
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
