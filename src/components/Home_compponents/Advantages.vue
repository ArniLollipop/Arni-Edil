<template>
  <section class = "px-6 md:py-6 mt-4">
    <div class = "w-full min-h-[180px] sm:min-h-[300px] sm:flex relative">
      <img src="@/img/boxes.svg" alt="" class = "absolute md:top-2 bottom-6 xl:right-[10%] lg:right-[5%] z-0 xl:w-[35%] md:h-[95%] md:w-[50%] md:right-[3%] -right-2 w-[162px] h-[105px]">
      <div class = "sm:pt-4 relative">
        <div class = "md:w-[70%] w-full min-h-[50px]">
          <p class = "font-bold sm:text-2xl lg:text-4xl text-[13px]">Майданчик для інтернет-магазинів та  дошка для приватних оголошень</p>
        </div>
        <div class = "w-[50%] xl:mt-7">
          <p class = "font-normal text-[base] hidden xl:block">Він заощаджує час пошуку необхідних спеціалістів, товарів, послуг. А ще це місце, де перевірені магазини можуть знайти нових вдячних клієнтів.</p>
        </div>
        <div class = "absolute bottom-2 left-0 hidden md:block">
          <button class="hover:text-accent">
            <span class = "text-base underline decoration-dotted underline-offset-8"> Всі оголошення</span>
            <span class="ml-1 w-5 h-5 inline-flex items-center justify-center bg-accent rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white"
                class="w-[7px] h-[7px] rotate-180">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
          </button>
          
        </div>
      </div>
      <div class ="md:bg-white xl:px-6 md:py-6 sm:px-4 rounded-xl xl:w-[27%] z-10 md:w-[30%] bg-transparent w-full md:relative absolute bottom-4 md:top-0">
        <div class = "flex flex-col sm:gap-y-2">
          <div class = "flex w-full">
            <img src="@/img/galochka.svg" alt="" class = "w-5 h-8 hidden lg:block">
            <p class ="md:ml-4 md:text-center w-full md:border border-gray rounded-xl sm:py-[6px] py-1 text-xs underline underline-offset-4 decoration-dashed md:text-sm md:no-underline">Безпечні угоди</p>
          </div>
          <div class = "flex w-full">
            <img src="@/img/galochka.svg" alt="" class = "w-5 h-8 hidden lg:block">
            <p class ="md:ml-4 md:text-center w-full md:border border-gray rounded-xl sm:py-[6px] py-1 text-xs underline underline-offset-4 decoration-dashed md:text-sm md:no-underline">Онлайн-магазини</p>
          </div>
          <div class = "flex w-full">
            <img src="@/img/galochka.svg" alt="" class = "w-5 h-8 hidden lg:block">
            <p class ="md:ml-4 md:text-center w-full md:border border-gray rounded-xl sm:py-[6px] py-1 text-xs underline underline-offset-4 decoration-dashed md:text-sm md:no-underline">Турбо продаж</p>
          </div>
          <div class = "flex w-full">
            <img src="@/img/galochka.svg" alt="" class = "w-5 h-8 hidden lg:block">
            <p class ="md:ml-4 md:text-center w-full md:border border-gray rounded-xl sm:py-[6px] py-1 text-xs underline underline-offset-4 decoration-dashed md:text-sm md:no-underline">Оголошення на карті</p>
          </div>
          <div class = "flex w-full">
            <img src="@/img/galochka.svg" alt="" class = "w-5 h-8 hidden lg:block">
            <p class ="md:ml-4 md:text-center w-full md:border border-gray rounded-xl sm:py-[6px] py-1 text-xs underline underline-offset-4 decoration-dashed md:text-sm md:no-underline">Допомога ЗСУ</p>
          </div>
          <div class = "absolute bottom-4 right-6 bg-accent w-[52px] h-[52px] rounded-full xl:flex items-center justify-center hidden">
            <img src="@/img/like.svg" alt="" class = "w-[26px] h-[26px] fill-white">
          </div>
        </div>
      </div>
    </div>
    <div class = "flex items-center gap-x-4 md:mt-9 w-full">
      <img src="@/img/Баннер-1.png" alt="" class = "w-full h-[90%] rounded-sm xl:w-[78%] xl:h-[156px]">
      <img src="@/img/Баннер-2.png" alt="" class = "hidden xl:block rounded-sm xl:w-[21%] h-[156px]">
    </div>
  </section>
</template>