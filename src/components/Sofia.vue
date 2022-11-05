<template>
    <div class = "lg:w-[25%]">
        <div class = "w-full px-5 h-[275px] lg:bg-white bg-transparent pt-4 rounded-t-[15px] rounded-b-[25px]">
          <img src="@/img/Sofia.svg" alt="" class = "w-fit mx-auto">
          <p class = "text-xl text-center mt-4">Софія Смірнова</p>
          <p class = "text-sm my-2 lg:text-left text-center">На Пропозиції для покращення з 10.09.2022</p>
          <div class = "flex items-center justify-center text-sm space-x-4">
            <div class = "flex space-x-1">
              <img src="@/img/Star.svg" alt="">
              <p class = "font-medium">0.0</p>
            </div>
            <div class = "flex space-x-1">
              <p class = "font-medium">0</p>
              <p>відгуків</p>
            </div>
            <div class = "flex space-x-1">
              <p class = "font-medium">0</p>
              <p>оголошень</p>
            </div>
          </div>
        </div>
        <div class = "w-full lg:block hidden bg-white h-[340px] pb-4 px-10 rounded-t-[25px] rounded-b-[15px]">
          <div class = "-translate-y-10 hidden lg:block">
            <router-link to="/account" class = "flex items-center space-x-2">
              <img src="@/img/person_acc.svg" alt="" class = "w-fit">
              <p class = "text-sm hover:text-accent">Акаунт [Базовий]</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/moi_acc.svg" alt="">
              <p class = "text-sm hover:text-accent">Мої оголошення</p>
            </router-link>
            <router-link to="/orders" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_zamovleni.svg" alt="">
              <p class = "text-sm hover:text-accent">Мої замовлення</p>
            </router-link>
            <router-link to="/chat" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_notifications.svg" alt="">
              <p class = "text-sm hover:text-accent">Повідомлення</p>
            </router-link>
            <router-link to="/tarif" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_magazine.svg" alt="">
              <p class = "text-sm hover:text-accent">Магазин та послуги</p>
            </router-link>
            <router-link to="/purse" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_wallet.svg" alt="">
              <p class = "text-sm hover:text-accent">Гаманець [0 грн.]</p>
            </router-link>
            <router-link to="/settings" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_settings.svg" alt="">
              <p class = "text-sm hover:text-accent">Налаштування</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_like.svg" alt="">
              <p class = "text-sm hover:text-accent">Вибране</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_podpiski.svg" alt="">
              <p class = "text-sm hover:text-accent">Мої підписки</p>
            </router-link>
            <router-link to="/account" class = "flex mt-3 hover:text-accent items-center space-x-2">
              <img src="@/img/acc_leave.svg" alt="">
              <p class = "text-sm hover:text-accent">Вихід</p>
            </router-link>
          </div>
        </div>
        <div class = "w-fit mx-auto mt-7 lg:block hidden">
          <p class = "text-sm ">Поділитесь профілем</p>
          <div class = "flex space-x-3 justify-center mt-3">
            <button><img src="@/img/facebook.svg" alt=""></button>
            <button><img src="@/img/telegram.svg" alt=""></button>
            <button><img src="@/img/twitter.svg" alt=""></button>
            <button><img src="@/img/viber.svg" alt=""></button>
          </div>
        </div>
      </div>
</template>