<template>
  <Head></Head>
  <Banner></Banner>
  <section class="2xl:w-[1400px] 2xl:mx-auto mx-auto sm:px-4 px-3 py-4 text-dark">
    <div
      class="flex items-center justify-between gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1"
    >
      <div class="flex items-center gap-x-1">
        <p class="font-normal sm:text-sm text-[11px]">Головна</p>
        <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
        <p class="font-normal sm:text-sm text-[11px]">О нас</p>
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
            Інформація про нашу компанію Vamberi, Ми працюємо для вас
          </h1>
          <router-link to="/blog">
            <button class="bg-white rounded-[10px] border-main border w-full">
              <span class="px-1">Блог</span>
            </button>
          </router-link>
          <router-link to="/aboutUs">
            <button
              class="bg-white rounded-[10px] border-main border my-2 w-full shadow-md shadow-accent"
            >
              <span class="px-1">Про нас</span>
            </button>
          </router-link>
          <router-link to="/contacts">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
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
          <h1
            class="lg:text-3xl md:text-[20px] text-[16px] font-medium lg:text-start text-center lg:relative absolute top-0 lg:block hidden"
          >
            Інформація про нашу компанію Vamberi, Ми працюємо для вас
          </h1>
          <div class="md:text-sm text-[12px] w-[94%]">
            <p class="sm:mt-3 lg:my-9 md:my-6 sm:my-4 my-2 font-medium">
              Сайт Vamberi - Дошка оголошень України та майданчик для
              інтернет-магазинів, та приватних оголошень.
            </p>
            <p class="">
              Купити та продати з VamBeri стало набагато простіше! Ми створили
              максимально зручний інтерфейс та щодня удосконалюємо для
              максимального Вашого комфорту! <br />
              Потреба в меблів є абсолютно у кожної людини, причиною може бути
              її відсутність у новому приміщенні, бажання змінити інтер'єр або
              просто примха купити щось новеньке, - і це чудово! Оголошення
              меблів на замовлення, нових готових, а також б.у., завдяки чому
              можна підібрати предмет меблів, що цікавить, за найприйнятнішою
              для Вас ціною. Всі оголошення розділені на категорії для легкого
              додавання та пошуку товару: <br />
              Меблі для дитячої, Меблі для спальні, Меблі для гардеробу, Меблі
              для кухні, Меблі для офісів
            </p>
            <p class="sm:mt-3 lg:my-9 md:my-6 sm:my-4 my-2 font-medium">
              Меблі для торгових приміщень (Торгове обладнання)
            </p>
            <p>Ресепшен, стійки продавця та столи адміністратора.</p>
            <p>
              Дитячі товари, одяг та взуття. Вакансії від роботодавців та резюме
              від професіоналів, послуги та бізнес пропозиції.
            </p>
            <p>
              Купити авто та продати машину - автобазар на сторінках
              інтернет-мережі. Запчастини на автомобілі та інший транспорт.
            </p>
            <p>
              Купити будинок, зняти квартиру, здати кімнату, продаж нерухомості,
              оренда приміщень та безліч подібних оголошень.
            </p>
            <p>
              Електроніка, товари для дому та саду, мобільні аксесуари та інші
              гаджети.
            </p>
            <p>
              Наша спеціалізація – допомога у продажу та купівлі товарів. Дошка
              оголошень України користується величезною популярністю, на добу її
              відвідують багато клієнтів. Кожна людина, яка хоче долучитися до
              онлайн-продажів, хоче донести інформацію про товар потенційному
              покупцю. Будь-який бажаючий може заявити про продаж меблів або
              матраців на дошці оголошень України. Ми пропонуємо послуги
              розміщення оголошень. Опублікувати інформацію просто і легко,
              витративши кілька хвилин. Якщо ви покупець, наша дошка оголошень
              стане унікальною пропозицією. Адже тут розміщено багато товарів,
              Ви завжди знайдете те, що вам потрібно. Тільки тут можна вигідно
              продати чи купити товар. Розміщена інформація на веб-сайті
              доступна для перегляду в будь-якому куточку країни.
            </p>
            <p>
              Продаж, купівля, оренда, обмін, віддати задарма, послуги -
              будь-які оголошення Ви можете розмістити або знайти на сайті
              Вамбері.
            </p>
            <p>
              Вигідного продажу та приємних покупок з сайтом безкоштовних
              оголошень ВАМ?-БЕРІТЕ! 😉🙏🏼🙂
            </p>
            <p>
              Сайт Vamberi - Дошка оголошень Україна та майданчик для
              інтернет-магазинів.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Mobilemenu></Mobilemenu>
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
