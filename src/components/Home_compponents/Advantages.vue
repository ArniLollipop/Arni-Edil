<template>
  <section class="mt-20 md:mt-[17px] px-6 pb-4">
  <div class=" bg-no-repeat flex justify-between bg-contain md:block bg-boxes bg-right">
    <div class = "w-[75%]">
      <h1 class="font-bold text-[40px] max-w-[75%] leading-[52px] mb-14 md:hidden">Майданчик для інтернет-магазинів та дошка для приватних оголошень</h1>
      <p class="max-w-[67%] leading-[35px] text-xl mb-[37px] md:hidden">Він заощаджує час пошуку необхідних спеціалістів, товарів, послуг. А ще це місце, де перевірені магазини можуть знайти нових вдячних клієнтів.</p>
      <a href="#" class="hover:text-accent md:hidden">
        <span class="underline decoration-dotted underline-offset-8">Всі оголошення</span>
        <span class="ml-1 w-5 h-5 inline-flex items-center justify-center bg-accent rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white"
          class="w-[7px] h-[7px] rotate-180">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        </span>
      </a>
    </div>
    <div class="w-[24%] overflow-hidden h-full  bg-white shadow-md shadow-dark flex flex-col justify-between items-center rounded-[10px] -translate-y-9 pt-[64px] pb-1 pr-2 min-w-[324px] min-h-[357px] md:bg-transparent md:rounded-none md:items-start md:min-h-[105px] md:px-0 md:translate-y-0 md:pt-0">
      <ul class="flex flex-col gap-6 md:gap-2 md:items-start">
        <li class="flex items-center gap-[23px]"><img src="@/img/galochka.svg" alt="check" class="md:hidden w-[20px] h-[22px]"><span class="advantages-item">Безпечні угоди</span></li>
        <li class="flex items-center gap-[23px]"><img src="@/img/galochka.svg" alt="check" class="md:hidden w-[20px] h-[22px]"><span class="advantages-item">Онлайн-магазини</span></li>
        <li class="flex items-center gap-[23px]"><img src="@/img/galochka.svg" alt="check" class="md:hidden w-[20px] h-[22px]"><span class="advantages-item">Турбо продаж</span></li>
        <li class="flex items-center gap-[23px]"><img src="@/img/galochka.svg" alt="check" class="md:hidden w-[20px] h-[22px]"><span class="advantages-item">Оголошення на карті</span></li>
        <li class="flex items-center gap-[23px]"><img src="@/img/galochka.svg" alt="check" class="md:hidden w-[20px] h-[22px]"><span class="advantages-item">Допомога ЗСУ</span></li>
      </ul>
      <div class="w-[52px] h-[52px] rounded-full bg-accent flex items-center justify-center ml-auto md:hidden">
        <img src="@/img/like.svg" alt="like" class = "w-[26px] h-[26px]">

      </div>

    </div>
  </div>
  <!-- banner -->
  <div class="flex max-h-[156px] gap-[22px] mt-8 mx-auto md:mt-[15px] sm:max-h-[42px] sm:max-w-[290px]">
    <img class="w-[75%] md:w-full h-[156px]" src="@/img/Баннер-1.png" alt="banner help ukraine">
    <img class="w-[24%] md:hidden h-[156px]" src="@/img/Баннер-2.png" alt="banner buy sell">
  </div>
</section>
</template>