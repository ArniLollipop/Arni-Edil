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
        <div class="text-[11px] lg:text-sm">Дитячі товари</div>
      </div>
      <div class="lg:hidden" @click="qwe = !qwe">
        <img src="../img/catalogMenu.svg" alt="" class="w-5" />
      </div>
    </div>
    <SearchMob v-if="qwe"></SearchMob>
  </div>
  <div class="container mx-auto px-5 pb-10 lg:pb-20">
    <div class="mt-3 lg:mt-5 text-sm lg:text-2xl">
      Продаж дитячих товарів на сайті оголошень Vamberi. 41
    </div>
    <div class="mt-4 lg:mt-10 bg-accentLight rounded-xl">
      <div
        class="flex items-center justify-center gap-x-1 lg:gap-x-2.5 py-2 lg:py-5"
        @click="isCatalogOpen = !isCatalogOpen"
      >
        <div class="text-[13px] lg:text-2xl">Категорії</div>
        <div class="">
          <div v-if="isCatalogOpen">
            <img src="../img/arrowDown.svg" alt="" class="w-[7px] lg:w-3.5" />
          </div>
          <div v-if="!isCatalogOpen">
            <img src="../img/arrowUp.svg" alt="" class="w-[7px] lg:w-3.5" />
          </div>
        </div>
      </div>
      <div
        class="grid lg:grid-cols-4 gap-y-2.5 lg:gap-7 px-6 lg:px-10 mt-3 lg:mt-8 pb-3 lg:pb-8"
        v-if="isCatalogOpen"
      >
        <div
          class="col-span-1 bg-white text-center rounded-full py-1 text-xs lg:text-sm"
          v-for="item in catalog"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="flex gap-x-10 mt-6 xl:mt-12">
      <div class="hidden lg:block w-[25%]">
        <div class="p-4 bg-accentLight rounded-xl">
          <div class="flex flex-col gap-y-2">
            <div class="flex items-center">
              <input type="checkbox" id="1" class="" />
              <label for="1" class="ml-2 text-sm">Безпечна угода</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="2" class="" />
              <label for="2" class="ml-2 text-sm">Аукціонні товари</label>
            </div>
            <div class="flex items-center">
              <input type="checkbox" id="3" class="" />
              <label for="3" class="ml-2 text-sm">Онлайн-показ</label>
            </div>
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

        <div class="mt-14 bg-white rounded-xl px-3 py-6">
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
            <div class="lg:hidden flex items-center gap-x-1">
              <div class="text-sm">Всі оголошення</div>
              <div><img src="../img/arrowDown.svg" alt="" class="w-2" /></div>
            </div>
            <div class="hidden lg:flex items-center gap-x-6">
              <div
                class="w-[125px] xl:w-[163px] bg-white py-1 rounded-full text-center text-xs xl:text-sm shadow-md shadow-accent"
              >
                Всі оголошення
              </div>
              <div
                class="w-[125px] xl:w-[163px] bg-white py-1 rounded-full text-center text-xs xl:text-sm"
              >
                За замовчуванням
              </div>
              <div
                class="w-[125px] xl:w-[163px] bg-white py-1 rounded-full text-center text-xs xl:text-sm"
              >
                За новизною
              </div>
              <div
                class="w-[125px] xl:w-[163px] bg-white py-1 rounded-full text-center text-xs xl:text-sm"
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
        <div
          class="grid grid-cols-2 gap-x-1.5 gap-y-4 lg:grid-cols-4 lg:gap-x-2 lg:gap-y-5 mt-4 lg:mt-10 auto-rows-[minmax(0px, auto)"
        >
          <div
            class="flex flex-col shadow-2xl bg-transparent"
            v-for="item in cards"
          >
            <div class="px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white">
              <img
                :src="require('../img/RecCards/' + item.image)"
                alt=""
                class="w-full"
              />
            </div>
            <div
              class="px-3 pb-9 md:pb-10 max-h-[300px] xl:max-h-[1000px] lg:p-3 lg:pb-9 xl:pb-8 rounded-2xl bg-white grow relative pt-4"
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
      <div class="text-sm font-medium lg:text-xl">Товари для дітей</div>
      <div class="mt-2 lg:mt-3 text-xs lg:text-sm">
        На Vаmberi представлен огромный выбор товаров для детей всех возрастов.
        На нашей доске объявлений можно выбрать и приобрести одежду, игрушки,
        канцтовары, смеси и кашки, детский транспорт и многое другое по
        доступным ценам. Вы можете не только покупать, но и размещать свои
        объявления о продаже на платформе Vamberi.
      </div>
      <div class="lg:mt-1 text-xs lg:text-sm">
        Большой ассортимент товаров для детей.
      </div>
    </div>

    <div class="mt-2 lg:mt-2.5 flex justify-end">
      <div class="w-max border-b border-dotted text-xs lg:text-sm">
        Докладніше
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
export default {
  components: {
    Head,
    Footer,
    MobileMenu,
    CatalogMenu,
    CategoryMob,
    SearchMob,
  },
  data() {
    return {
      isCatalogOpen: false,
      qwe: false,
      catalog: [
        "Дитячі мебелі",
        "Дитячі автокрісла",
        "Товари для навчання",
        "Облаштування дитячої",
        "Дитячий одяг",
        "Іграшки та ігри",
        "Прогулянки та активний відпочинок",
        "Радіо- та відеоняні",
        "Дитяче взуття",
        "Дитячий транспорт ",
        "Здоров’я та догляд ",
        "Товари для мам",
        "Дитячі коляски ",
        "Дитяче харчування та годування ",
        "Розвиток та творчість ",
        "Дитячі товари, інше",
      ],
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
};
</script>
