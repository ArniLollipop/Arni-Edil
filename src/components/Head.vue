<template>
  <header class="container mx-auto px-5 pt-4 xl:pt-6 relative">
    <div class="lg:hidden">
      <div class="flex items-center justify-between">
        <div
          class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0"
        >
          <CIcon
            :icon="icon.cilHamburgerMenu"
            size="sm"
            custom-class-name="w-5 hover:text-accent"
          />
        </div>
        <div class="font-semibold text-lg text-accent ml-8">VamBeri</div>
        <div class="flex item-center space-x-1 shrink-0">
          <div
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white"
          >
            <CIcon
              :icon="icon.cilCart"
              size="sm"
              custom-class-name="w-4 hover:text-accent"
            />
          </div>
          <div
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white"
          >
            <CIcon
              :icon="icon.cilEnvelopeClosed"
              size="sm"
              custom-class-name="w-4 hover:text-accent -mt-0.5"
            />
          </div>
        </div>
      </div>
      <div class="flex mx-4 mt-2 px-3 py-2 bg-white rounded-xl space-x-3">
        <CIcon
          :icon="icon.cilSearch"
          size="sm"
          custom-class-name="w-4 hover:text-accent"
        />
        <input
          type="text"
          class="focus:ring-0 focus:outline-none placeholder:text-sm text-sm w-11/12"
          placeholder="Пошук по оголошенням... "
        />
      </div>
    </div>
    <div class="hidden lg:block">
      <div class="flex justify-between items-center">
        <div class="ml-11 flex">
          <CIcon :icon="icon.cifUa" custom-class-name="w-5" />
          <a href="#" class="ml-2">UA</a>|
          <a href="#">RU</a>
        </div>
        <div class="flex space-x-16">
          <a href="#" class="flex">
            <CIcon :icon="icon.cilLocationPin" custom-class-name="w-4" />
            <div class="ml-0.5">Україна</div>
          </a>
          <a href="#" class="">Магазини</a>
          <a href="#" class="">Пошук на мапі</a>
          <div>
            <a href="#" class="">Увійти</a> |
            <a href="#" class="">Реєстрація</a>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <a
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0 cursor-pointer"
          >
            <CIcon
              :icon="icon.cilUser"
              size="sm"
              custom-class-name="w-5 hover:text-accent"
            />
          </a>
          <button
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0"
          >
            <CIcon
              :icon="icon.cilEnvelopeClosed"
              size="sm"
              custom-class-name="w-5 -mt-1 hover:text-accent"
            />
          </button>
          <button
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0"
          >
            <CIcon
              :icon="icon.cilCart"
              size="sm"
              custom-class-name="w-5  hover:text-accent"
            />
          </button>
          <button
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0"
          >
            <CIcon
              :icon="icon.cilHeart"
              size="sm"
              custom-class-name="w-5  hover:text-accent"
            />
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center mt-5">
        <div class="font-semibold text-4xl text-accent">VamBeri</div>

        <div class="py-1 px-3 flex items-center rounded-3xl bg-white w-1/2">
          <button
            class="px-5 py-3 rounded-3xl bg-accent flex items-center"
            @click="isCategoryOpen = !isCategoryOpen"
          >
            <CIcon :icon="icon.cilCommand" custom-class-name="w-4 text-white" />
            <div class="ml-1 text-sm text-white">Категорії</div>
          </button>
          <input
            type="text"
            class="focus:ring-0 focus:outline-none w-3/5 ml-4 placeholder:text-sm text-sm"
            placeholder="Пошук по оголошенням..."
          />
          <button
            class="px-5 py-3 rounded-3xl bg-accent flex items-center ml-auto"
          >
            <div class="text-sm text-white">Пошук</div>
          </button>
        </div>

        <button class="px-5 py-3 rounded-3xl bg-accent flex items-center">
          <div class="text-sm text-white">Створити оголошення</div>
        </button>
      </div>
      <Category v-if="isCategoryOpen"></Category>
    </div>
  </header>
</template>

<script>
import { CIcon } from "@coreui/icons-vue";
import * as icon from "@coreui/icons";
import Category from "@/components/modal/Category.vue";

export default {
  components: {
    CIcon,
    Category,
  },
  setup() {
    return {
      icon,
    };
  },
  data() {
    return {
      isCategoryOpen: false,
    };
  },
};
</script>
