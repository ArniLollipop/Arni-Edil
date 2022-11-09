<template>
  <Head></Head>
  <Banner></Banner>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div class = "flex items-center justify-between gap-x-1 mb-4 relative lg:my-6 md:my-4 my-1">
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
      <div class = "lg:flex">
        <div class = "lg:w-[80%] lg:pr-9 w-full">
          <div class = "relative">
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px]">Як купити авто, транспорт на Vamberi?</h2>
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px] mt-8">Купівля авто на Vamberi</h2>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px]">Автомобіль - це засіб пересування, який може прослужити не один рік і не одному господареві. До купівлі особистого транспортного засобу варто підходити відповідально та ґрунтовно. Купити авто б/в чи нове в Україні можна на багатьох автобазарах, салонах і навіть за допомогою соцмереж.</p>          
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px]">Як вибрати старий  автомобіль</h2>
            <ol type="1" class = "sm:my-4 lg:my-6 my-2 sm:text-base text-[12px]">
              <li class = "md:my-3 my-1">При покупці машини автолюбителі радять дотримуватися кількох простих правил серфінгу сайтів авто-оголошень.</li>
              <li class = "md:my-3 my-1">1. Визначтеся, навіщо вам потрібна машина і скільки ви готові за неї заплатити.</li>
              <li class = "md:my-3 my-1">2. Знайдіть сумлінного продавця.</li>
              <li class = "md:my-3 my-1">3. Ретельно вивчіть середню вартість ринку, пробіг і фотографії.</li>
              <li class = "md:my-3 my-1"> Це допоможе не купити мотлох[1], а повністю насолодитися покупкою в майбутньому.</li>
            </ol>
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px] mt-8">Де придбати авто в Україні</h2>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px]">Інтернет-майданчик Vamberi — найкраще місце для пошуку нового або старого транспортного засобу. На нашому сайті ви можете швидко і недорого купити машину б/у або підібрати для себе автомобіль із салону.</p>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px]">Дошка оголошень про продаж авто Vamberi пропонує широкий асортимент нового транспорту та з пробігом:</p>
            <ul>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">легкові автомобілі;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">мототехніку;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">спецтехніку;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">автобуси та вантажівки;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">водний транспорт.</li>
            </ul>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px]">Користувач може самостійно відфільтрувати товар, що його цікавить. Залежно від часу розміщення публікації нагорі дошки з'являються машини, які тільки-но вийшли з конвеєра або шукають нового власника. Підписка на повідомлення дасть можливість першим дізнаватися про нові пропозиції. Інтернет-майданчик діє на території всієї України. Купити уживані авто на нашому сайті — легко та безпечно. Оператори онлайн-підтримки дадуть відповідь на питання, що вас цікавлять.</p>
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px] mt-8 hidden md:block">Чому варто розмістити оголошення про продаж машини на Vamberi.</h2>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px] hidden md:block">Сайт оголошень Vamberi пропонує здійснити угоду про продаж на взаємовигідних умовах. Функція безпечної угоди захистить від недоброзичливців. Розмістивши на дошці оголошення про продаж, ви швидко знайдете потенційного покупця.</p>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px] hidden md:block">Легкий функціонал сайту дозволяє легко подати оголошення. Для цього випливає:</p>
            <ul class = "hidden mmd:block">
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">зареєструватися або пройти авторизацію за допомогою Фейсбуку;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">налаштувати особистий профіль;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">подати оголошення, натиснувши кнопку в правому верхньому кутку;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">вибрати розділ «Авто» та підкатегорію;</li>
              <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-3 before:top-2 before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">заповнити інформацію про товар.</li>
            </ul>
            <p class = "sm:mt-3 lg:mt-4 mt-2 lg:mb-9 md:mb-6 sm:mb-4 mb-2 sm:text-base text-[12px] hidden md:block">З Vamberi продаж машин та їх придбання стануть легким заняттям. Це правильний спосіб не тільки купити авто дешево, та й продати його за вигідною ціною.</p>
            <button class = "text-[10px] sm:text-[12px] underline decoration-dashed underline-offset-4 block md:hidden float-right hover:text-accent">Читати далі</button>
            <h2 class = "font-medium lg:text-[26px] sm:text-xl text-[13px] mt-8">Коментарі</h2>
            <div class = "w-full bg-pink px-2 py-2 relative flex mt-5 rounded-[10px]">
              <input type="text" placeholder="Додавати коментарі можуть лише авторизовані користувачі" class = "h-fit w-full px-2 rounded-[10px] bg-pink py-2 md:text-sm sm:text-[12px] text-[10px] placeholder:text-gray focus:outline-none placeholder:sm:w-full placeholder:w-[105px]">
              <button><img src="@/img/send.svg" alt=""></button>
            </div>
          </div>
        </div>
        <div class = "lg:w-[20%] lg:py-0 pt-4 w-full lg:grid-cols-1 lg:block grid grid-cols-2 lg:text-base md:text-sm text-[12px] text-center lg:text-start">
          <div class = "col-span-1 lg:h-[30%] lg:px-0 px-4 lg:w-full">
            <img src="@/img/right_section_1.png" alt="" class = "w-[full] lg:h-[80%] mx-auto h-[60%]">
            <p class = "mt-2">Каталог оголошеннь - швидкий зручний пошук</p>
          </div>
          <div class = "col-span-1 lg:h-[30%] lg:px-0 px-4 lg:w-full">
            <img src="@/img/right_section_2.png" alt="" class = "w-[full] lg:h-[80%] mx-auto h-[60%]">
            <p class = "mt-2">Як купити авто, транспорт на Vamberi?</p>
          </div>
          <div class = "col-span-1 lg:h-[30%] lg:px-0 px-4 lg:w-full">
            <img src="@/img/right_section_3.png" alt="" class = "w-[full] lg:h-[80%] mx-auto h-[60%]">
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