<template>
  <div class="bg-back2">
    <Head></Head>
    <Banner></Banner>
    <div v-if="isFunc">{{ pol() }}</div>
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
          <div class="p-4 bg-accentLight rounded-[10px]">
            <div class="flex flex-col gap-y-2">
              <div class="flex items-center">
                <input type="checkbox" id="1" class="text-green bg-green" />
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
                  class="w-[45%] rounded-full text-sm py-0.5 placeholder:text-sm placeholder:text-gray px-2"
                />
                <input
                  type="text"
                  placeholder="до"
                  class="w-[45%] rounded-full text-sm py-0.5 placeholder:text-sm placeholder:text-gray px-2"
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
              <div>
                <img src="../img/kolokol.svg" alt="" class="w-[94px]" />
              </div>
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
          <Card :cards="cards"></Card>
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
          На Vаmberi представлен огромный выбор товаров для детей всех
          возрастов. На нашей доске объявлений можно выбрать и приобрести
          одежду, игрушки, канцтовары, смеси и кашки, детский транспорт и многое
          другое по доступным ценам. Вы можете не только покупать, но и
          размещать свои объявления о продаже на платформе Vamberi.
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
  </div>
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
import Card from "@/components/Card.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { tsThisType } from "@babel/types";
export default {
  components: {
    Head,
    Footer,
    MobileMenu,
    CatalogMenu,
    CategoryMob,
    SearchMob,
    Vseogol,
    Swiper,
    SwiperSlide,
    Card,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
    };
  },
  methods: {
    pol(data) {
      this.isFunc = false;
      this.cards.map((item) => {
        this.kol = Math.max(this.kol, item.price.length);
      });
    },
    cons(data) {
      this.cards.map((item) => {
        console.log(item.title.clientHeight);
      });
    },
  },
  data() {
    return {
      kol: 0,
      isFunc: true,
      ogol: false,
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
          title: "ldjbvlzdjfbvlzdkjfbvkdjvkdjfbvzkdfjbdf",
          image: "p1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "123456789123456789123456789",
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
          title: "Lenovo ",
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
        {
          id: 6,
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
      ],
    };
  },
};
</script>
