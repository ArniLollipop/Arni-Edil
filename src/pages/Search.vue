<template>
  <Head></Head>
  <Banner></Banner>
  <div class="mt-3 lg:mt-10">
    <div class="flex items-center justify-between container mx-auto px-5">
      <div class="flex items-center gap-x-0.5 lg:gap-x-1">
        <div class="text-[11px] lg:text-sm">Головна</div>
        <div>
          <img src="../img/arrowRight.svg" alt="" class="w-2 lg:w-2.5" />
        </div>
        <div class="text-[11px] lg:text-sm">Оголошення - Україна</div>
      </div>
      <div class="lg:hidden" @click="qwe = !qwe">
        <img src="../img/catalogMenu.svg" alt="" class="w-5" />
      </div>
    </div>
    <CatalogMenu v-if="qwe"></CatalogMenu>
  </div>
  <div class="container mx-auto px-5 pb-10 lg:pb-20">
    <div class="flex gap-x-10 mt-6 xl:mt-12">
      <div class="hidden lg:block w-[25%]">
        <div class="p-4 bg-accentLight rounded-[10px]">
          <div class="flex flex-col gap-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="4" class="" />
              <label for="4" class="ml-2 text-sm">VIP оголошення</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="5" class="" />
              <label for="5" class="ml-2 text-sm">Приватне</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="6" class="" />
              <label for="6" class="ml-2 text-sm">Бізнес</label>
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

        <div class="mt-14 bg-white rounded-[10px] px-3 py-6">
          <div class="flex justify-center">
            <div><img src="../img/kolokol.svg" alt="" class="w-[94px]" /></div>
          </div>

          <div class="mt-3 text-center text-sm">
            <span class="font-medium">Оформіть підписку</span> на пошук та
            отримуйте першим нові оголошення за Вашими параметрами
          </div>

          <div
            class="mt-5 mx-auto w-2/3 py-2 bg-accent rounded-full text-center text-white text-sm"
          >
            Підписатися
          </div>
        </div>
      </div>
      <div class="w-full lg:w-[72%]">
        <div class="flex items-center justify-between">
          <div>
            <div
              class="lg:hidden flex items-center gap-x-1 relative"
              @click="ogol = !ogol"
            >
              <div class="text-sm">Всі оголошення</div>
              <div><img src="../img/arrowDown.svg" alt="" class="w-2" /></div>
              <Vseogol v-if="ogol"></Vseogol>
            </div>
            <div class="hidden lg:flex items-center gap-x-6">
              <div
                class="w-[125px] xl:w-[163px] bg-white py-1 rounded-[10px] text-center text-xs xl:text-sm shadow-md shadow-accent"
              >
                Всі оголошення
              </div>
              <div
                class="w-[125px] xl:w-[163px] bg-white py-1 rounded-[10px] text-center text-xs xl:text-sm"
              >
                За замовчуванням
              </div>
              <div
                class="w-[125px] xl:w-[163px] bg-white py-1 rounded-[10px] text-center text-xs xl:text-sm"
              >
                За новизною
              </div>
              <div
                class="w-[125px] xl:w-[163px] bg-white py-1 rounded-[10px] text-center text-xs xl:text-sm"
              >
                За вартістю
              </div>
            </div>
          </div>
          <div class="flex items-center gap-x-2.5">
            <div>
              <img src="../img/catalogMap.svg" alt="" class="w-5 lg:w-6" />
            </div>
            <div>
              <img src="../img/catalogBell.svg" alt="" class="w-5 lg:w-6" />
            </div>
            <div>
              <img src="../img/catalog4kv.svg" alt="" class="w-5 lg:w-6" />
            </div>
            <div>
              <img src="../img/catalogMenu.svg" alt="" class="w-5 lg:w-6" />
            </div>
          </div>
        </div>
        <div class="space-y-10 mt-8">
          <div
            class="flex flex-row p-4 items-stretch bg-white rounded-[10px]"
            v-for="item in cards"
          >
            <div class="h-full">
              <img
                :src="require('../img/new7/' + item.image)"
                alt=""
                class="h-full"
              />
            </div>
            <div
              class="ml-4 w-full self-stretch flex-col justify-between hidden lg:flex"
            >
              <div
                class="flex flex-col sm:flex-row items-start justify-between"
              >
                <div class="mt-3 sm:mt-0">
                  <div class="font-medium">{{ item.title }}</div>
                  <div class="flex items-center mt-1 gap-x-6">
                    <div
                      class="bg-accent lg:py-1 w-[66px] rounded-full text-center text-white text-sm"
                    >
                      {{ item.status }}
                    </div>
                    <div class="text-green text-xs">{{ item.pretitle }}</div>
                  </div>
                </div>
                <div class="sm:text-right">
                  <div class="font-medium">{{ item.price }}</div>
                  <div
                    v-if="item.lastPrice"
                    class="text-red text-xs font-medium line-through"
                  >
                    {{ item.lastPrice }}
                  </div>
                  <div
                    :class="{
                      'text-xs text-red': item.subtitleColor,
                      'text-xs text-green': !item.subtitleColor,
                    }"
                  >
                    {{ item.subtitle }}
                  </div>
                </div>
              </div>
              <div class="">
                <div class="mt-1 flex items-center justify-between shrink-0">
                  <div class="flex items-center">
                    <div
                      class="w-[122px] py-[3px] text-center border-0.5 border-accent rounded-lg text-xs"
                    >
                      {{ item.btnText }}
                    </div>
                    <div class="ml-6 text-gray text-sm">{{ item.map }}</div>
                    <div class="ml-4 text-gray text-sm">{{ item.date }}</div>
                  </div>
                  <div>
                    <button
                      type="checkbox"
                      value="qwe"
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full justify-between ml-4 lg:hidden">
              <div class="flex flex-col justify-between">
                <div>
                  <div class="text-xs font-medium">{{ item.title }}</div>
                  <div
                    :class="{
                      'text-xs text-red': item.subtitleColor,
                      'text-xs text-green': !item.subtitleColor,
                    }"
                  >
                    {{ item.subtitle }}
                  </div>
                </div>

                <div>
                  <div class="text-gray text-sm">{{ item.map }}</div>
                  <div class="text-gray text-sm">{{ item.date }}</div>
                  <div
                    class="mt-1 w-[110px] py-[3px] text-center border-[0.5px] border-accent rounded-lg text-xs"
                  >
                    {{ item.btnText }}
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-between ml-2">
                <div class="shrink-0">
                  <div class="text-sm font-medium shrink-0">
                    {{ item.price }}
                  </div>
                  <div
                    v-if="item.lastPrice"
                    class="text-red text-xs font-medium line-through shrink-0"
                  >
                    {{ item.lastPrice }}
                  </div>
                </div>
                <div
                  class="bg-accent w-[42px] rounded-full text-center text-white text-[11px]"
                >
                  {{ item.status }}
                </div>
                <div class="w-full">
                  <div class="flex justify-end">
                    <button
                      type="checkbox"
                      value="qwe"
                      class="ml-auto"
                      @click="item.isLike = !item.isLike"
                    >
                      <img
                        src="../img/RecCards/heart.svg"
                        alt=""
                        :class="['w-3.5 xl:w-5', { 'w-3 hidden': item.isLike }]"
                      />
                      <img
                        src="../img/RecCards/heartFill.svg"
                        alt=""
                        :class="[
                          'w-3.5 xl:w-5',
                          { 'w-3 hidden': !item.isLike },
                        ]"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-4 lg:mt-10">
          <div
            class="w-8 h-8 lg:w-[60px] lg:h-[60px] rounded-full bg-accent flex items-center justify-center"
          >
            <img
              src="../img/arrowDownWhite.svg"
              alt=""
              class="w-4 lg:w-[30px]"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 lg:mt-12">
      <img src="../img/categoryImage.png" alt="" class="w-full" />
    </div>
  </div>

  <MobileMenu></MobileMenu>
  <Footer></Footer>
</template>

<script>
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import Banner from "@/components/Banner.vue";
import CatalogMenu from "@/components/modal/CatalogMenu.vue";
import CategoryMob from "@/components/modal/CategoryMob.vue";
import SearchMob from "@/components/modal/SearchMob.vue";
import Vseogol from "@/components/modal/Vseogol.vue";
export default {
  components: {
    Head,
    Footer,
    MobileMenu,
    CatalogMenu,
    CategoryMob,
    SearchMob,
    Vseogol,
  },
  data() {
    return {
      qwe: false,
      ogol: false,
      cards: [
        {
          id: 1,
          pretitle: "",
          title: "Тест",
          image: "sp1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1 грн.",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Приватна особа",
          date: "27.07.2022",
          isLike: false,
          text: "Тест платежной системы",
        },
        {
          id: 1,
          pretitle: "",
          title: "Тест",
          image: "sp1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1 грн.",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Приватна особа",
          date: "27.07.2022",
          isLike: false,
          text: "Тест платежной системы",
        },
        {
          id: 1,
          pretitle: "",
          title: "Тест",
          image: "sp1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1 грн.",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Приватна особа",
          date: "27.07.2022",
          isLike: false,
          text: "Тест платежной системы",
        },
        {
          id: 1,
          pretitle: "",
          title: "Тест",
          image: "sp1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1 грн.",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Приватна особа",
          date: "27.07.2022",
          isLike: false,
          text: "Тест платежной системы",
        },
      ],
    };
  },
};
</script>
