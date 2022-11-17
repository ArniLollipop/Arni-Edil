<template>
  <div class = "flex items-center justify-center min-h-[100vh] bg-pink sm:bg-transparent">
    <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark sm:bg-transparent bg-pink h-fit">
      <router-link to="/" class="font-semibold text-4xl text-accent float-left">
        Vamberi
      </router-link>
      <div class = "float-right sm:mt-4 mt-3">
        <div class="ml-11 flex items-center">
          <img src="@/img/ukraine.png" alt="" class = "w-5 h-3">
          <a href="#" class="ml-2">UA</a>|
          <a href="#">RU</a>
        </div>
      </div>
      <div class = "xl:mt-40 lg:mt-32 sm:mt-16 mt-8  xl:px-40 lg:px-32 md:px-20">
        <div class = "sm:bg-pink pt-14 rounded-[10px] sm:border border-gray sm:mx-0 sm:w-full w-fit mx-auto block">
          <div class = "flex w-full justify-between relative overflow-hidden">
            <div class = "sm:w-[60%] pl-10 xl:block hidden">
              <p class="text-2xl ">Доска объявлений vamberi.com.ua</p>
              <p class = "mt-11 text-sm w-[80%]">Зручний сервіс, який дозволяє швидко та безпечно продавати та купувати товари онлайн.</p>
              <div class = "grid grid-cols-2">
                <div class ="w-full flex items-center gap-x-2 mt-11">
                  <img src="@/img/galochka.svg" alt="" class = "w-[20px] h-[18px] mt-1">
                  <div class = "text-sm">
                    <p class = "font-medium">Спілкуйтесь</p>
                    <p>за оголошеннями в чатах</p>
                  </div>
                </div>
                <div class ="w-full flex items-center gap-x-2 mt-11">
                  <img src="@/img/galochka.svg" alt="" class = "w-[20px] h-[18px] mt-1">
                  <div class = "text-sm">
                    <p class = "font-medium">Продавайте товари</p>
                    <p>Просто та безпечно</p>
                  </div>
                </div>
                <div class ="w-full flex items-center gap-x-2 mt-11">
                  <img src="@/img/galochka.svg" alt="" class = "w-[20px] h-[18px] mt-1">
                  <div class = "text-sm">
                    <p class = "font-medium">Розміщуйте</p>
                    <p>объявления в топ</p>
                  </div>
                </div>
                <div class ="w-full flex items-center gap-x-2 mt-11">
                  <img src="@/img/galochka.svg" alt="" class = "w-[20px] h-[18px] mt-1">
                  <div class = "text-sm">
                    <p class = "font-medium">Купуйте зі знижкою</p>
                    <p>з безпечної угоди</p>
                  </div>
                </div>
              </div>
            </div>
            <div class = "xl:w-[40%] w-full pb-6 sm:px-6 sm:pr-10">
              <div class = "flex justify-between gap-x-4">
                <router-link to="/login" class = "py-2 md:w-36 sm:w-32 w-[120px] bg-white border border-gray rounded-[10px]">
                  <p class = "text-sm text-center">Увійти</p>
                </router-link>
                <button class = "py-2 md:w-36 sm:w-32 w-[120px] bg-white border border-gray rounded-[10px] shadow-md shadow-accent">
                  <p class = "text-sm text-center">Реєстрація</p>
                </button>
              </div>
              <p class = "text-sm sm:mt-7 my-4 text-center">Вкажіть дані для входу на сайт</p>
              <input type="text" placeholder="Телефон або електронна пошта" class = "outline-none bg-white rounded-[10px] placeholder:sm:text-sm placeholder:text-gray placeholder:text-sm sm:text-sm text-xs sm:px-4 px-2 py-3 w-full mt-2">
              <button class = "w-[180px] py-3 bg-accent rounded-full block mx-auto lg:mt-32 md:mt-24 mt-10"><p class = "text-white text-sm font-medium text-center">Продовжити</p></button>
              <p class = "text-xs mt-5 text-center">або через соцмережу </p>
              <button class = "w-[150px] py-3 bg-white rounded-full mx-auto mt-3 flex items-center justify-between px-7">
                <img src="@/img/google_icon.svg" alt="">
                <p class = "text-sm">Google</p>
              </button>
            </div>
            <img src="@/img/boxes.svg" alt="" class = "absolute -bottom-9 -left-20 hidden lg:block w-[279px] h-[168px]">
          </div>
        </div>
        <p class = "w-[70%] mx-auto text-center mt-6 text-sm hidden lg:block">Авторизуючись на сайті, Ви приймаєте умови <router-link to="/agree" class = "text-blue">Угоди користувача,</router-link> <router-link to="/politika" class = "text-blue">Політики конфіденційності та</router-link> підтверджуєте згоду на передачу та обробку своїх даних</p>
      </div>
    </section>
  </div>
</template>

<script>
  import { CIcon } from "@coreui/icons-vue";
  import * as icon from "@coreui/icons";
  export default {
    components: {
      CIcon,
    },
    setup() {
      return {
        icon,
      };
    },
  };
</script>