<template>
  <div class="lg:hidden mt-3 relative z-50">
    <div class="p-4 bg-white">
      <div class="flex flex-col gap-y-2">
        <div class="mt-3 flex items-center">
          <div class="text-sm">Пошук по: області</div>
        </div>

        <div class="relative">
          <div class="absolute top-2 left-2">
            <img src="../../img/serachMap.svg" alt="" class="w-3.5" />
          </div>
          <input
            type="text"
            placeholder="Україна"
            class="px-3 pl-5 py-1 text-sm placeholder:text-sm rounded-full w-[70%] focus:outline-none border border-gray placeholder:text-gray"
          />
        </div>

        <div class="mt-3 flex items-center">
          <div class="text-sm">Пошук по: місту</div>
        </div>

        <div class="relative">
          <div class="absolute top-2 left-2">
            <img src="../../img/serachMap.svg" alt="" class="w-3.5" />
          </div>
          <input
            type="text"
            placeholder="Україна"
            class="px-3 pl-5 py-1 text-sm placeholder:text-sm rounded-full w-[70%] focus:outline-none border border-gray placeholder:text-gray"
          />
        </div>

        <div class="mt-3 flex items-center">
          <div class="text-sm">Категорія</div>
        </div>

        <div class="relative">
          <input
            type="text"
            placeholder="Не вибрано"
            class="px-3 pl-5 py-1 text-sm placeholder:text-sm rounded-full w-[70%] focus:outline-none border border-gray placeholder:text-gray"
          />
        </div>

        <div class="mt-3 flex items-center">
          <div class="text-sm">Ціна</div>
          <div class="ml-2">
            <img src="../../img/arrowDown.svg" alt="" class="w-2.5" />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <input
            type="text"
            placeholder="від"
            class="w-[45%] rounded-full placeholder:text-sm placeholder:text-gray px-2 focus:outline-none border border-gray text-sm"
          />
          <input
            type="text"
            placeholder="до"
            class="w-[45%] rounded-full placeholder:text-sm placeholder:text-gray px-2 focus:outline-none border border-gray text-sm"
          />
        </div>

        <div class="mt-3 flex items-center">
          <div class="text-sm">Статус</div>
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
          <div class="text-sm">Термін розміщення</div>
          <div class="ml-2">
            <img src="../../img/arrowDown.svg" alt="" class="w-2.5" />
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
  </div>
</template>

<script>
export default {};
</script>
