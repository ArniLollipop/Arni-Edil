<template>
  <div class="lg:hidden mt-3 relative z-50">
    <div class="p-4 bg-white">
      <div class="flex flex-col gap-y-2">
        <div class="flex items-center">
          <input type="checkbox" id="1" class="" />
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
