<template>
  <footer class="bg-dark text-white sticky">
    <div class="container mx-auto px-5 h-full">
      <div class="hidden lg:flex justify-between gap-x-10 pt-14 pb-12 h-full">
        <div class="flex flex-col justify-between">
          <div class="text-accent font-semibold text-2xl">VamBeri</div>
          <div>
            <div class="flex items-center space-x-2.5">
              <a href="#" class=""
                ><img class="h-5 w-5" src="@/img/inst.svg" alt="instagram"
              /></a>
              <a href="#" class=""
                ><img class="h-5 w-5" src="@/img/facebook.svg" alt="fb"
              /></a>
              <a href="#" class=""
                ><img class="h-5 w-5" src="@/img/youtube.svg" alt="youtube"
              /></a>
              <a href="#" class=""
                ><img class="h-5 w-5" src="@/img/telegram.svg" alt="telegram"
              /></a>
              <a href="#" class=""
                ><img class="h-5 w-5" src="@/img/twitter.svg" alt="twitter"
              /></a>
              <a href="#" class=""
                ><img class="h-5 w-5" src="@/img/viber.svg" alt="viber"
              /></a>
            </div>
            <div class="mt-2 lg:text-base text-xs">vamberi.sms@gmail.com</div>
          </div>
        </div>
        <div class="space-y-2.5">
          <div><router-link to="/aboutUs">Про нас</router-link></div>
          <div><router-link to="/ugoda">Безпечна угода</router-link></div>
          <div>
            <router-link to="rules">Правила подання оголошеннь</router-link>
          </div>
          <div>
            <router-link to="/suggest"
              >Пропозиції для покаращення сайту</router-link
            >
          </div>
          <div>
            <router-link to="/politika">Політики конфіденційності</router-link>
          </div>
        </div>
        <div class="space-y-2.5">
          <div><router-link to="/blog">Блог</router-link></div>
          <div><router-link to="/dropShipping">Дропшипінг </router-link></div>
          <div><router-link to="/rules">Правила сервісу</router-link></div>
          <div><router-link to="/agree">Угода користвувача</router-link></div>
          <div><router-link to="/support">Служба підтримки</router-link></div>
        </div>
        <div class="flex flex-col items-center justify-between">
          <button
            class="w-[60px] h-[60px] rounded-full border border-accent flex items-center justify-center"
          >
            <img src="@/img/footer-btn.svg" alt="" />
          </button>
          <div class="">© 2022 Доска объявлений vamberi.com.ua</div>
        </div>
      </div>
      <div class="lg:hidden pt-4 pb-2 flex flex-col justify-between gap-y-6">
        <div class="flex justify-between items-center">
          <div class="text-sm text-accent">VamBeri</div>
          <button
            class="w-[30px] h-[30px] rounded-full border border-accent flex items-center justify-center"
          >
            <img src="@/img/footer-btn.svg" alt="" />
          </button>
        </div>
        <div class="flex justify-between items-end text-xs">
          <div class="space-y-1">
            <div><router-link to="/aboutUs">Про нас</router-link></div>
            <div><router-link to="/blog">Блог </router-link></div>
            <div><router-link to="/ugoda">Безпечна угода</router-link></div>
            <div><router-link to="/dropShipping">Дропшипінг </router-link></div>
          </div>
          <div class="space-y-1">
            <div><router-link to="/agree">Угода користвувача</router-link></div>
            <div><router-link to="/rules">Правила сервісу </router-link></div>
            <div><router-link to="/support">Служба підтримки</router-link></div>
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex gap-x-1">
            <a href="#" class=""
              ><img
                class="h-[15px] w-[15px]"
                src="@/img/inst.svg"
                alt="instagram"
            /></a>
            <a href="#" class=""
              ><img class="h-[15px] w-[15px]" src="@/img/facebook.svg" alt="fb"
            /></a>
            <a href="#" class=""
              ><img
                class="h-[15px] w-[15px]"
                src="@/img/youtube.svg"
                alt="youtube"
            /></a>
            <a href="#" class=""
              ><img
                class="h-[15px] w-[15px]"
                src="@/img/telegram.svg"
                alt="telegram"
            /></a>
            <a href="#" class=""
              ><img
                class="h-[15px] w-[15px]"
                src="@/img/twitter.svg"
                alt="twitter"
            /></a>
            <a href="#" class=""
              ><img class="h-[15px] w-[15px]" src="@/img/viber.svg" alt="viber"
            /></a>
          </div>
          <div class="text-xs">vamberi.sms@gmail.com</div>
        </div>
      </div>
    </div>
  </footer>
</template>
