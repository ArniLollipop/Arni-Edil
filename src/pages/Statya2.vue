<template>
  <Head></Head>
  <Banner></Banner>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div class = "flex items-center justify-between gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <div class = "flex items-center gap-x-1">
        <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
        <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
        <p class = "font-normal sm:text-sm text-[11px]">Блог</p>
        <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
        <p class = "font-normal sm:text-sm text-[11px]">Новини компанії Vamberi</p>
      </div>
      <div class = "flex items-center">
        <input type="radio" id="qwe" @click="isMobileMenuOpen = !isMobileMenuOpen" class = "w-0 peer" >
        <label for="qwe" class = "" v-show="!isMobileMenuOpen">
          <img src="@/img/catalog.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
        </label>
        <label for="qwe" class = "" v-show="isMobileMenuOpen">
          <img src="@/img/modal_x.svg" alt="" class = "w-[18px] h-[18px] lg:hidden cursor-pointer">
        </label>
      </div>
    </div>
    <Acc_buttonsVue v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus" class = ""></Acc_buttonsVue>
        <div class = "md:flex md:space-x-10 text-main" v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus">
      <div class = "lg:flex mb-6">
        <div class = "lg:w-[80%] lg:pr-9 w-full">
          <div class = "relative">
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px]">Каталог объявлений — быстрый удобный поиск</h2>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px]">Каталог оголошень — зручно структурований розділ сайту, де зібрані оголошення різних типів. Ми постаралися виділити категорії, які користуються великим попитом серед користувачів інтернету, тому з нами буде зручно. А в блозі надаємо інформацію, яка допоможе ближче познайомитись з особливостями роботи ресурсу. Крім того, блог розкриває важливі моменти, корисні фішки для купівлі та продажу, пошуку спеціалістів.</p>          
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px]">Як користуватися пошуком</h2>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px]">Каталог свіжих оголошень - майданчик, який підвищує шанси продати, купити, обміняти щось на вигідних для вас умовах. Інтерфейс сайту створений максимально зручно: вам потрібно просто вибрати тематичну категорію у верхньому лівому кутку та скористатися пошуком усередині неї. <br>Щоб ваш запит дав результати, потрібно прописати його дуже лаконічно, але точно. Зайві слова можуть заплутати алгоритм, і ви побачите менше результатів, ніж їх є насправді. Наприклад, якщо ви шукаєте дзеркальну камеру, спробуйте спочатку ввести запит «Фотоапарат».</p>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px]">У розділі "Категорії" є фільтр відображення, а також функція "Пошук по карті" та "Подписка на пошук". «Пошук по карті» буде корисним, якщо ви хочете купувати при особистій зустрічі, а не за допомогою пересилки. А «Підписка» дозволить швидко відстежувати нові пропозиції.</p>
            <p class = "sm:mt-3 lg:mt-12 md:mt-6 mt-3 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px]">Менше водного тексту, ціннішої інформації — ці нюанси підвищують шанси на успіх. Концентрація уваги читача складає 3 секунди: добре підготуйте фото до публікації та продумайте вдалий заголовок для тексту, щоб він привертав увагу. Розміщуючи в каталог товарів оголошення, постарайтеся уявити себе дома покупця. Подумайте, що ви самі хотіли б знати про товар, якби збиралися його купити. Людям часто цікаво:</p>
            <ul>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-[10px] before:top-2 before:md:-left-3 before:-left-[6px] before:w-[3px] before:h-[3px] before:bg-dark before:rounded-full">стан товару;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-[10px] before:top-2 before:md:-left-3 before:-left-[6px] before:w-[3px] before:h-[3px] before:bg-dark before:rounded-full">термін потенційної служби;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-[10px] before:top-2 before:md:-left-3 before:-left-[6px] before:w-[3px] before:h-[3px] before:bg-dark before:rounded-full">дефекти (якщо вони є);</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-[10px] before:top-2 before:md:-left-3 before:-left-[6px] before:w-[3px] before:h-[3px] before:bg-dark before:rounded-full">вигоди, які товар принесе;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-[10px] before:top-2 before:md:-left-3 before:-left-[6px] before:w-[3px] before:h-[3px] before:bg-dark before:rounded-full">причина продажу;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-[10px] before:top-2 before:md:-left-3 before:-left-[6px] before:w-[3px] before:h-[3px] before:bg-dark before:rounded-full">повний функціонал;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-[10px] before:top-2 before:md:-left-3 before:-left-[6px] before:w-[3px] before:h-[3px] before:bg-dark before:rounded-full">візуалізація.</li>
            </ul>
            <p class = "sm:mt-3 lg:mt-6 mt-3 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px]">Не скупиться на фото в різних ракурсах, чесно опишіть дефекти, поставте адекватну ціну порівнявши вашу пропозицію з аналогічними в каталозі приватних оголошень. Якщо продаж терміновий, вкажіть можливість торгу, це підвищує шанси швидко продати.</p>
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px] mt-8 hidden md:block">Типи оголошень на сайті</h2>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px] hidden md:block">Продаж товарів – не єдиний напрямок на ресурсі. Сайт-каталог дошка оголошень також використовується для:</p>
            <ul class = "hidden mmd:block">
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">розміщення вакансій;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">купівлі чи продажу нерухомості, авто, меблів;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">вигідного обміну товарами;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">пошуку роботи;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">розміщення пропозицій щодо надання послуг;</li>
            </ul>
            <p class = "sm:mt-3 lg:mt-6 mt-3 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px] hidden md:block">Тут також можна віддати задарма зайві речі.</p>
            <button class = "text-[10px] sm:text-[12px] underline decoration-dashed underline-offset-4 block md:hidden float-right hover:text-accent">Читати далі</button>
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px] mt-8">Коментарі</h2>
            <div class = "w-full bg-pink px-2 py-2 relative flex mt-6 rounded-[10px]">
              <input type="text" placeholder="Додавати коментарі можуть лише авторизовані користувачі" class = "h-fit w-full px-2 rounded-[10px] bg-pink py-2 md:text-sm sm:text-[12px] text-[10px] placeholder:text-gray focus:outline-none placeholder:sm:w-full placeholder:w-[105px]">
              <button><img src="@/img/send.svg" alt=""></button>
            </div>
          </div>
        </div>
        <div class = "lg:w-[25%] lg:py-0 pt-4 w-full lg:grid-cols-1 grid grid-cols-2 lg:text-base md:text-sm text-[12px] text-center lg:text-start">
          <div class = "col-span-1 lg:px-0 px-4 lg:h-fit">
            <img src="@/img/right_section_1.png" alt="" class = "w-full h-[60%]">
            <p class = "mt-2">Каталог оголошеннь - швидкий зручний пошук</p>
          </div>
          <div class = "col-span-1 lg:px-0 px-4 lg:h-fit">
            <img src="@/img/right_section_2.png" alt="" class = "w-full h-[60%]">
            <p class = "mt-2">Як купити авто, транспорт на Vamberi?</p>
          </div>
          <div class = "col-span-1 lg:px-0 px-4 lg:h-fit">
            <img src="@/img/right_section_3.png" alt="" class = "w-full h-[60%]">
            <p class = "mt-2">Чому варто вибрати Вамбері.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MobileMenu></MobileMenu>
  <Footer></Footer>
</template>

<script>
  import Head from '@/components/Head.vue';
  import Banner from '@/components/Banner.vue';
  import Footer from '@/components/Footer.vue';
  import MobileMenu from '@/components/MobileMenu.vue';
  import Acc_buttonsVue from '@/components/modal/Acc_buttons.vue';
  export default{
    components:{
      Head,
      Banner,
      Footer,
      MobileMenu,
      Acc_buttonsVue
    },
    data(){
      return{
        isCategoryOpen: false,
        isTruckOpen: false,
        isMobileMenuOpen: false
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
  }
</script>