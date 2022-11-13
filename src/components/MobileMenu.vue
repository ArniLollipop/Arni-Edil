<template>
  <div
    class="sticky z-20 inset-x-0 bottom-0 lg:hidden bg-white pb-1 pt-1.5 px-4 md:px-5"
  >
    <div class="flex items-center gap-x-5 justify-between">
      <router-link to="/">
        <a href="" class="shrink-0"
          ><div class="flex flex-col items-center shrink-0">
            <img src="@/img/home.svg" alt="" />
            <div class="text-dark text-xs">Головна</div>
          </div></a
        >
      </router-link>
      <router-link to="/favorites" class="shrink-0"
        ><div class="flex flex-col items-center shrink-0">
          <img src="@/img/like2.svg" alt="" />
          <div class="text-dark text-xs">Вибране</div>
        </div></router-link
      >
      <router-link to="/create">
        <a href="" class="shrink-0"
          ><div class="flex flex-col items-center shrink-0">
            <img src="@/img/plus.svg" alt="" />
            <div class="text-dark text-xs">Подати</div>
          </div></a
        >
      </router-link>
      <router-link to="/chat">
        <a href="" class="shrink-0"
          ><div class="flex flex-col items-center shrink-0">
            <img src="@/img/message.svg" alt="" />
            <div class="text-dark text-xs">Чат</div>
          </div></a
        >
      </router-link>
      <router-link to="/account">
        <a href="" class="shrink-0"
          ><div class="flex flex-col items-center shrink-0">
            <img src="@/img/profile.svg" alt="" />
            <div class="text-dark text-xs">Профіль</div>
          </div></a
        >
      </router-link>
    </div>
  </div>
</template>
