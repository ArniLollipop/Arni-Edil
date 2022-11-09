<template>
  <div class="fixed inset-0 z-50 overflow-auto flex flex-col">
    <div class="bg-[#e7e7e7] px-4 py-4">
      <div class="flex items-center justify-between">
        <div
          @click="sendModalStatus"
          class="flex items-center transition-all duration-500 justify-center w-8 h-8 rounded-full bg-white shrink-0"
        >
          <img src="../../img/mobilemenu/close.svg" alt="" class="w-5 h-5" />
        </div>
        <div class="font-semibold text-lg text-accent ml-8">VamBeri</div>
        <div class="flex item-center space-x-1 shrink-0">
          <div
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white"
          >
            <img
              src="../../img/mobilemenu/korzina.svg"
              alt=""
              class="w-5 h-5"
            />
          </div>
          <div
            class="flex items-center justify-center w-8 h-8 rounded-full bg-white"
          >
            <img
              src="../../img/mobilemenu/message.svg"
              alt=""
              class="w-5 h-5"
            />
          </div>
        </div>
      </div>
      <div class="mt-5 px-2">
        <div
          class="bg-accentLight flex flex-col items-center justify-center py-3 rounded-lg"
        >
          <div>
            <img src="../../img/mobilemenu/ava.svg" alt="" class="h-[60px]" />
          </div>
          <div class="mt-2.5 text-sm font-medium">Софія Смірнова</div>
          <div class="mt-4 flex items-center">
            <router-link to="/account" @click="sendModalStatus">
              <div
                class="px-6 py-1.5 bg-accent rounded-full text-white text-xs font-medium"
              >
                Профіль
              </div>
            </router-link>
            <div class="ml-2.5">
              <img src="../../img/mobilemenu/exit.svg" alt="" class="w-5" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex">
        <img src="../../img/mobilemenu/flag.svg" alt="" class="w-5" />
        <a href="#" class="ml-2">UA </a>
        <span class="ml-px">|</span>
        <a href="#" class="ml-px"> RU</a>
      </div>
      <div class="mt-3 grid grid-cols-2 gap-x-1.5 gap-y-3">
        <router-link to="/" @click="sendModalStatus">
          <div
            class="bg-accentLight text-center text-xs border-[0.25px] border-accent rounded-xl py-px"
          >
            Головна
          </div>
        </router-link>
        <div
          class="bg-accentLight text-center text-xs border-[0.25px] border-accent rounded-xl py-px"
        >
          Пошук на мапі
        </div>
        <div
          class="bg-accentLight text-center text-xs border-[0.25px] border-accent rounded-xl py-px"
        >
          Магазини
        </div>
        <router-link to="/agree" @click="sendModalStatus">
          <div
            class="bg-accentLight text-center text-xs border-[0.25px] border-accent rounded-xl py-px"
          >
            Додати оголошення
          </div>
        </router-link>
      </div>
    </div>
    <div class="bg-white px-5 py-2.5 -mt-1 grow">
      <router-link to="/agree" @click="sendModalStatus">
        <div class="text-sm border-b border-gray w-max">Правила сервісу</div>
      </router-link>
      <router-link to="/ugoda" @click="sendModalStatus">
        <div class="text-sm border-b border-gray w-max">Угода користувача</div>
      </router-link>
      <router-link to="/support" @click="sendModalStatus">
        <div class="text-sm border-b border-gray w-max">Служба підтримки</div>
      </router-link>
      <router-link to="/politika" @click="sendModalStatus">
        <div class="text-sm border-b border-gray w-max">
          Політика конфіденційності
        </div>
      </router-link>
      <router-link to="/suggest" @click="sendModalStatus">
        <div class="text-sm border-b border-gray w-max">
          Пропозиції для покращення сайту
        </div>
      </router-link>
      <router-link to="/rules" @click="sendModalStatus">
        <div class="text-sm border-b border-gray w-max">
          Правила подання оголошення
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendModalStatus() {
      this.$emit("mobileModalStatus", false);
    },
  },
};
</script>
