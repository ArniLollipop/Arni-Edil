<template>
  <header class = "pt-6 md:pt-[15px]">
    <div class = "flex items-center justify-between">
      <div class = "flex items-center justify-center">
        <img src="@/img/ukraine.png" alt="" class = "mr-1 w-[22px] h-[12px]">
        <button class="text-accent hover:opacity-75 text-xl">UA</button>
        <span>|</span>
        <button class="hover:opacity-75 text-xl">RU</button>
      </div>
      <div>
        <nav class="flex items-center gap-20 xl:gap-8 lg:gap-2 flex-wrap md:hidden">
          <a class="border-b border-accent border-opacity-0 hover:border-opacity-100 hover:text-accent" href="#"><span>Україна</span></a>
          <a class="border-b border-accent border-opacity-0 hover:border-opacity-100 hover:text-accent" href="#">Магазини</a>
          <a class="border-b border-accent border-opacity-0 hover:border-opacity-100 hover:text-accent" href="#">Пошук на мапі</a>
          <div>
            <a class="border-b border-accent border-opacity-0 hover:border-opacity-100 hover:text-accent" href="#">Увійти</a>
            <span>|</span>
            <a class="border-b border-accent border-opacity-0 hover:border-opacity-100 hover:text-accent" href="#">Реєстрація</a>
          </div>
        </nav>
      </div>
      <nav class="flex items-center flex-wrap justify-center gap-1 px-2 mr-2">
        <a class="md:hidden px-2 py-2 bg-white rounded-full border border-black border-opacity-0 hover:border-opacity-100" href="#">
          <img class="w-[17px] h-[17px]" src="@/img/user.svg" alt="pr border-b border-black border-opacity-0 hover:border-opacity-100ofile">
        </a>
        <a class=" px-2 py-2 bg-white rounded-full border border-black border-opacity-0 hover:border-opacity-100" href="#">
          <img class="w-[17px] h-[17px] md:w-[24px] md:h-[24px]" src="@/img/mail.svg" alt="mail">
        </a>
        <button class="md:order-first px-2 py-2 bg-white rounded-full border border-black border-opacity-0 hover:border-opacity-100">
          <img class="w-[17px] h-[17px] md:w-[20px] md:h-[20px]" src="@/img/trash.svg" alt="cart">
        </button>
        <a class="md:hidden px-2 py-2 bg-white rounded-full border border-black border-opacity-0 hover:border-opacity-100" href="#">
          <img class="w-[17px] h-[17px]" src="@/img/wishlist.svg" alt="wishlist">
        </a>
      </nav>
    </div>
    <div class="flex justify-between items-center pt-2 gap-2 md:mt-[50px]">
      <div class="text-accent font-semibold text-[40px] lg:text-2xl md:hidden">VamBeri</div>
      <div class="flex max-w-[750px] grow md:gap-2 sm:max-w-[258px] sm:mx-auto md:max-w-none">
        <button class="category-button button inline-flex items-center px-[21px] translate-x-4 z-[11] md:hidden">
          <img class="mr-[3px]" src="@/img/category.svg" alt="category select">
          Категорії
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="hidden relative w-5 h-5 my-auto mr-[-30px] md:inline-block md:translate-x-4">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input class="header-input" type="text" placeholder="Пошук по оголошенням..." onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Пошук по оголошенням...'">
        <button class="button px-[25px] z-[11] -translate-x-4 md:-translate-x-10 sm:hidden">Пошук</button>
      </div>
      <button class="button px-[14px] md:hidden">Створити оголошення</button>
    </div>
  </header>
</template>