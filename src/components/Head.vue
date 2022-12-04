<template>
  <header class="container mx-auto px-4 pt-4 xl:pt-6 relative">
    <div class="lg:hidden">
      <mobileMenu
        v-if="isMobileMenuOpen"
        @mobileModalStatus="acceptMobileModalStatus"
      ></mobileMenu>
      <div class="flex items-center justify-between">
        <div
          @click="isMobileMenuOpen = true"
          class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0"
        >
          <img src="../img/mobilemenu/burger.svg" alt="" class="w-5 h-5" />
        </div>
        <div class="font-semibold text-lg text-accent ml-8">VamBeri</div>
        <div class="flex item-center space-x-1 shrink-0">
          <div
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white z-100"
            @click="isTruckOpen = true"
          >
            <img src="../img/mobilemenu/korzina.svg" alt="" class="w-5 h-5" />
          </div>
          <router-link
            to="/chat"
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white z-100 relative"
          >
            <img src="../img/mobilemenu/message.svg" alt="" class="w-5 h-5" />
            <div
              v-if="kolMessage"
              class="w-3 h-3 absolute bottom-0 right-0 bg-accent rounded-full text-white text-center text-[8px]"
            >
              {{ kolMessage }}
            </div>
          </router-link>
        </div>
      </div>
      <div
        class="flex mt-2 lg:px-3 px-2 py-3 bg-white rounded-xl space-x-2 relative"
      >
        <img src="../img/header/search.svg" alt="" class="w-5" />
        <input
          type="text"
          class="focus:ring-0 focus:outline-none placeholder:text-sm text-sm w-[80%]"
          placeholder="Пошук по оголошенням... "
        />
        <button
          class="flex absolute top-2 right-2 top items-center justify-center rounded-full bg-accent w-[30px] h-[30px] lg:hidden"
        >
          <img src="@/img/category.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="hidden lg:block">
      <div class="flex justify-between items-center">
        <div class="ml-11 flex">
          <img src="../img/header/flag.svg" alt="" class="w-[22px]" />
          <a href="#" class="ml-2">UA</a>|
          <a href="#">RU</a>
        </div>
        <div class="flex space-x-16">
          <div
            :class="[
              'ml-0.5 flex w-max cursor-pointer hover:text-accent focus:text-accent',
              {
                'underline underline-offset-4 decoration-accent text-accent transition-all duration-500':
                  isSearchOpen,
              },
            ]"
            @click="isSearchOpen = !isSearchOpen"
          >
            <img src="../img/header/map.svg" alt="" class="w-4" />
            <div class="ml-0.5">Україна</div>
          </div>
          <a href="#" class="hover:text-accent focus:text-accent">Магазини</a>
          <a href="#" class="hover:text-accent focus:text-accent"
            >Пошук на мапі</a
          >
          <div>
            <router-link to="/login" class="hover:text-accent focus:text-accent"
              >Увійти</router-link
            >
            |
            <router-link to="/sign" class="hover:text-accent focus:text-accent"
              >Реєстрація</router-link
            >
          </div>
        </div>
        <div class="flex items-center space-x-3 mr-5">
          <router-link to="/account">
            <a
              class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0 cursor-pointer"
            >
              <img src="../img/header/user.svg" alt="" class="w-4" />
            </a>
          </router-link>
          <router-link to="/chat">
            <button
              class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0 relative"
            >
              <img src="../img/header/message.svg" alt="" class="w-4" />
              <div
                v-if="kolMessage"
                class="w-3 h-3 absolute bottom-0 right-0 bg-accent rounded-full text-white text-center text-[8px]"
              >
                {{ kolMessage }}
              </div>
            </button>
          </router-link>
          <button
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0"
            @click="isTruckOpen = !isTruckOpen"
          >
            <img src="../img/header/korzina.svg" alt="" class="w-5" />
          </button>
          <button
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white shrink-0"
          >
            <img src="../img/header/like.svg" alt="" class="w-4" />
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center mt-5">
        <div class="font-semibold text-4xl text-accent">VamBeri</div>

        <div class="py-1 px-3 flex items-center rounded-3xl bg-white w-1/2">
          <button
            class="px-5 py-3 rounded-[20px] bg-accent flex items-center"
            @click="isCategoryOpen = !isCategoryOpen"
          >
            <img src="../img/header/category.svg" alt="" class="w-3.5" />
            <div class="ml-1 text-sm text-white">Категорії</div>
          </button>
          <input
            type="text"
            class="focus:ring-0 focus:outline-none w-3/5 ml-4 placeholder:text-sm text-sm"
            placeholder="Пошук по оголошенням..."
          />
          <button
            class="px-5 py-3 rounded-[20px] bg-accent flex items-center ml-auto"
          >
            <div class="text-sm text-white">Пошук</div>
          </button>
        </div>

        <button class="px-5 py-3 rounded-[20px] bg-accent flex items-center">
          <div class="text-sm text-white">Створити оголошення</div>
        </button>
      </div>
      <div class="w-full flex justify-center">
        <Search v-if="isSearchOpen"></Search>
      </div>
      <Category v-if="isCategoryOpen"></Category>
    </div>
    <Truck v-if="isTruckOpen" @modalStatus="acceptModalStatus"></Truck>
  </header>
</template>

<script>
import Category from "@/components/modal/Category.vue";
import Search from "@/components/modal/Search.vue";
import Truck from "@/components/modal/Truck.vue";
import mobileMenu from "@/components/modal/mobileMenu.vue";

export default {
  components: {
    Category,
    Truck,
    mobileMenu,
    Search,
  },
  setup() {
    return {};
  },
  props: {
    kolMessage: "",
  },
  data() {
    return {
      isCategoryOpen: false,
      isTruckOpen: false,
      isMobileMenuOpen: false,
      isSearchOpen: false,
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
};
</script>
