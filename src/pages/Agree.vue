<template>
  <Head></Head>
  <Banner></Banner>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div class = "flex items-center justify-between gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <div class = "flex items-center gap-x-1">
        <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
        <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
        <p class = "font-normal sm:text-sm text-[11px]">Безпечна угода</p>
      </div>
      <div class = "flex items-center">
        <button id="qwe" @click="isMobileMenuOpen = !isMobileMenuOpen" class = "w-0 invisible" ></button>
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
      <div class = "lg:flex gap-x-5 relative">
        <div class = "lg:w-[25%] w-full sm:px-9 md:px-12 lg:px-2 py-3 lg:bg-pink rounded-[10px] h-fit xl:text-sm text-center sm:text-[14px] text-[12px] lg:pt-2 sm:pt-14 pt-12">
          <router-link to="/blog">
            <button class = "bg-white rounded-[10px] border-main border w-full">
              <p class = " px-1">Блог</p>
            </button>
          </router-link>
          <router-link to="/aboutUs">
            <button class ="bg-white rounded-[10px] border-main border my-2 w-full">
              <p class = "px-1">Про нас</p>
            </button>
          </router-link>
          <router-link to="/contacts">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Контакти</p>
            </button>
          </router-link>
          <router-link to="/agree">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full shadow-md shadow-accent">
              <p class = "px-1">Безпечна угода</p>
            </button>
          </router-link>
          <router-link to="/ugoda">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Угода користувача</p>
            </button>
          </router-link>
          <router-link to="/dogovor">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Договір-оферта</p>
            </button>
          </router-link>
          <router-link to="/dropshipping">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Дропшипінг</p>
            </button>
          </router-link>
          <router-link to="/politika">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Політика конфіденційності</p>
            </button>
          </router-link>
          <router-link to="/rules">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Правила подання оголошень</p>
            </button>
          </router-link>
          <router-link to="/suggest">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Пропозиції для покращення сайту</p>
            </button>
          </router-link>
          <router-link to="/reserved">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Заборонені публікації та товари</p>
            </button>
          </router-link>
          <router-link to="/coockie">
            <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
              <p class = "px-1">Політика використання файлів cookie</p>
            </button>
          </router-link>
          <router-link to="/support">
            <button class = "w-full py-3"><img src="@/img/support.svg" alt="" class="w-fit mx-auto sm:block hidden">
              <img src="@/img/support_accent.svg" alt="" class="w-fit mx-auto sm:hidden">
            </button>
          </router-link>
        </div>
        <div class = "lg:w-[85%] w-full lg:pt-2">
          <h1 class = "lg:text-3xl md:text-[20px] sm:text-base text-[14px] font-medium text-center lg:text-start lg:relative absolute top-0">Купити улюблені товари безпечно, купити безпечно та швидко</h1>
          <div class = "md:text-sm text-[12px] w-[94%]">
            <p class = "lg:my-9 md:my-6 sm:my-4 my-2 font-medium lg:text-[28px] md:text-[20px] sm:text-base text-[12px]">Купуйте та продавайте товари безпечно!</p>
            <p>Якщо щось піде не так, то гроші повернуться вам на карту. Це допоможе захиститися від шахраїв.</p>
            <p class = "font-medium">Гарантія повернення</p>
            <p>Якщо товар не отримано або він не відповідає опису, гроші буде повернено на картку.</p>
            <p class = "font-medium">Вирішення спорів</p>
            <p>Наші Арбітри допоможуть вирішити суперечку з продавцем, якщо він виник за особистої передачі товару.</p>
            <p class = "font-medium">Безпека</p>
            <p>Усі грошові перекази безпечні, а дані банківських карток захищені.</p>
            <p class = "lg:mt-9 md:mt-6 sm:mt-4 mt-2 font-medium lg:text-[28px] md:text-[20px] sm:text-base text-[12px]">Як купувати за допомогою безпечної угоди?</p>
            <p class = "font-medium md:my-4 my-2">Виберіть товар</p>
            <p>Виберіть товар із позначкою Безпечна угода та сплатіть його.</p>
            <img src="@/img/laptop.svg" alt="" class = "w-[80%] lg:my-10 md:my-6 sm:my-4 my-2">
            <p class = "font-medium md:my-4 my-2">Домовтесь про отримання товару</p>
            <p>Після оплати товару у вас з'явиться спеціальна сторінка, де ви зможете відстежувати процес покупки. Після отримання вами товару та огляду його - вам необхідно підтвердити отримання, і тільки після цього продавець отримає гроші, а якщо вас, що не влаштує, то ви зможете звернутися в арбітраж і запросити повернення грошей.</p>
            <div class = "flex justify-end">
              <img src="@/img/box_person.svg" alt="" class = "w-[80%] lg:my-10 md:my-6 sm:my-4 my-2">
            </div>
            <p class = "font-medium md:my-4 my-2">Відгук</p>
            <p>Після угоди ви зможете залишити відгук про продавця</p>
            <img src="@/img/agree_chat.svg" alt="" class = "w-[80%] lg:my-10 md:my-6 sm:my-4 my-2">
            <div class ="flex justify-center lg:mt-12 mt-6">
              <button class = "px-4 py-2 bg-accent rounded-full w-fit"><p class = "md:text-sm text-[12px] text-white">Подати оголошення</p></button>
            </div>
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
  import Mobilemenu from '@/components/MobileMenu.vue';
  import Acc_buttonsVue from '@/components/modal/Acc_buttons.vue';
  export default{
    components:{
      Head,
      Banner,
      Footer,
      Mobilemenu,
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