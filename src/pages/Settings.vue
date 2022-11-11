<template>
  <HeadVue></HeadVue>
  <section class="container mx-auto px-4 pt-4 xl:pt-6 text-main">
    <div class="flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class="font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
      <p class="font-normal sm:text-sm text-[11px] lg:block hidden">
        Налаштування
      </p>
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Софія Смирнова</p>
      <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10] lg:hidden" />
      <p class="font-normal sm:text-sm text-[11px] lg:hidden">Налаштування</p>
    </div>
    <div class="lg:flex lg:space-x-10 mb-4">
      <SofiaVue></SofiaVue>
      <div class="lg:w-[75%] w-full relative">
        <div class="flex items-center justify-between">
          <p
            class="lg:text-3xl sm:text-2xl text-[13px] font-medium my-4 ml-1 text-main"
          >
            Особисті дані
          </p>
          <div @click="isMobileMenuOpen = !isMobileMenuOpen">
            <div v-if="!isMobileMenuOpen">
              <img
                src="@/img/catalog.svg"
                alt=""
                class="w-[18px] h-[18px] lg:hidden cursor-pointer"
              />
            </div>
            <div v-if="isMobileMenuOpen">
              <img
                src="@/img/modal_x.svg"
                alt=""
                class="w-[18px] h-[18px] lg:hidden cursor-pointer"
              />
            </div>
          </div>
        </div>
        <Acc_buttons
          v-if="isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
          class=""
        ></Acc_buttons>
        <div
          class="text-main"
          v-show="!isMobileMenuOpen"
          @mobileModalStatus="acceptMobileModalStatus"
        >
          <div
            class="md:bg-white md:border-[1px] border-accent rounded-[10px] w-full lg:px-10 sm:px-6 px-2 sm:py-6 py-2"
          >
            <div
              class="sm:flex items-center sm:space-x-5 border-b border-gray border-opacity-60 sm:pb-6 pb-2"
            >
              <div class="sm:w-[20%] w-full sm:text-center">
                <p class="sm:w-[50%] sm:mx-auto block">Я</p>
              </div>
<<<<<<< HEAD
              <div class = "sm:hidden flex mt-2 ml-3">
                <input type="radio" id = "biznec1" name = "biznec" class = "peer w-0">
                <label for="biznec1" class = "flex cursor-pointer">
                  <p class = "text-xs cursor-pointer mt-[2px]">Приватна особа</p>
                </label>
              </div>
              <div class = "sm:hidden flex my-2 ml-3">
                <input type="radio" id = "biznec2" name = "biznec" class = "peer w-0">
                <label for="biznec2" class = "flex cursor-pointer">
                  <p class = "text-xs cursor-pointer mt-[2px]">Приватна особа</p>
                </label>
              </div>
              <div  class = "sm:flex hidden">
                <input type="radio" id = "biznec3" name = "biznes" class = "peer absolute w-0" checked>
                <label for = "biznec3" class = "border-[0.5px] border-accent py-1 w-[135px] rounded-[10px] peer-checked:shadow-md peer-checked:shadow-accent cursor-pointer">
                  <p class = "text-sm text-center">Приватна особа</p>
                </label>
              </div>
              <div class = "sm:flex hidden">
                <input type="radio" id = "biznec4" name = "biznes" class = "peer absolute w-0">
                <label for="biznec4" class = "border-[0.5px] border-accent py-1 w-[135px] rounded-[10px] peer-checked:shadow-md peer-checked:shadow-accent cursor-pointer">
                  <p class = "text-sm text-center">Бізнес</p>
=======
              <div class="sm:hidden flex mt-2">
                <input
                  type="radio"
                  id="biznec1"
                  name="biznec"
                  class="peer w-0"
                />
                <label
                  for="biznec1"
                  class="flex before:w-4 before:h-4 before:p-1 before:bg-white before:border cursor-pointer peer-checked:after:opacity-100 after:opacity-0 after:transition-all after:duration-150 before:border-accent before:rounded-full after:absolute after:rounded-full after:bg-accent after:w-[10px] after:h-[10px] after:top-[3px] after:left-[3px] relative"
                >
                  <p class="text-xs ml-2 cursor-pointer">Приватна особа</p>
                </label>
              </div>
              <div class="sm:hidden flex mt-2">
                <input
                  type="radio"
                  id="biznec2"
                  name="biznec"
                  class="peer w-0"
                />
                <label
                  for="biznec2"
                  class="flex before:w-4 before:h-4 before:p-1 before:bg-white before:border cursor-pointer peer-checked:after:opacity-100 after:opacity-0 after:transition-all after:duration-150 before:border-accent before:rounded-full after:absolute after:rounded-full after:bg-accent after:w-[10px] after:h-[10px] after:top-[3px] after:left-[3px] relative"
                >
                  <p class="text-xs ml-2 cursor-pointer">Приватна особа</p>
                </label>
              </div>
              <div class="sm:flex hidden">
                <input
                  type="radio"
                  id="biznec3"
                  name="biznes"
                  class="peer absolute top-0 w-0"
                  checked
                />
                <label
                  for="biznec3"
                  class="border-[0.5px] border-accent py-1 w-[135px] rounded-[10px] peer-checked:shadow-md peer-checked:shadow-accent cursor-pointer"
                >
                  <p class="text-sm text-center">Приватна особа</p>
                </label>
              </div>
              <div class="sm:flex hidden">
                <input
                  type="radio"
                  id="biznec4"
                  name="biznes"
                  class="peer absolute top-0 w-0"
                />
                <label
                  for="biznec4"
                  class="border-[0.5px] border-accent py-1 w-[135px] rounded-[10px] peer-checked:shadow-md peer-checked:shadow-accent cursor-pointer"
                >
                  <p class="text-sm text-center">Бізнес</p>
>>>>>>> c9e056ff35523e652c9102fc34b44f008bc597b6
                </label>
              </div>
            </div>
            <div
              class="sm:flex items-center sm:space-x-5 border-b border-gray border-opacity-60 sm:pb-6 pb-2 sm:mt-6 mt-2"
            >
              <div class="sm:w-[20%] sm:text-center">
                <p
                  class="sm:w-[50%] mx-auto block md:text-base sm:text-sm text-xs"
                >
                  Ім’я
                </p>
              </div>
              <input
                type="text"
                class="bg-pink mt-1 text-xs sm:py-2 py-1 px-4 w-full sm:w-1/2 rounded-[10px] outline-none"
              />
            </div>
            <div
              class="sm:flex items-center sm:space-x-5 border-b border-gray border-opacity-60 sm:pb-6 pb-2 sm:mt-6 mt-2"
            >
              <div class="sm:w-[20%] sm:text-center">
                <p
                  class="sm:w-[50%] mx-auto block md:text-base sm:text-sm text-xs"
                >
                  Прізвище
                </p>
              </div>
              <input
                type="text"
                class="bg-pink mt-1 text-xs sm:py-2 py-1 px-4 w-full sm:w-1/2 rounded-[10px] outline-none"
              />
            </div>
            <div
              class="xl:flex items-center xl:space-x-5 border-b border-gray border-opacity-60 sm:pb-6 sm:mt-6 pb-2 mt-2 relative"
            >
              <div class="xl:w-[20%] xl:text-center">
                <p class="mx-auto block md:text-base sm:text-sm text-xs">
                  Номер телефону
                </p>
              </div>
              <input
                type="text"
                placeholder="Вкажіть номер телефону, щоб покупці змогли зв'язатися з вами"
                class="bg-white lg:block hidden py-2 w-[80%] rounded-[10px] outline-none placeholder:text-gray text-sm"
              />
              <div class="flex lg:hidden items-center sm:w-1/2 w-2/3">
                <input
                  type="text"
                  class="bg-pink mt-1 text-xs sm:py-2 py-1 px-4 w-full lg:hidden rounded-[10px] outline-none"
                />
              </div>
              <button class="absolute sm:bottom-6 bottom-2 right-0">
                <p
                  class="text-accent lg:text-base sm:text-sm text-xs underline underline-offset-4 decoration-dotted"
                >
                  Змінити
                </p>
              </button>
            </div>
            <div
              class="xl:flex items-center xl:space-x-5 border-b border-gray border-opacity-60 sm:pb-6 sm:mt-6 pb-2 mt-2 relative"
            >
              <div class="xl:w-[20%] xl:text-center">
                <p class="mx-auto block md:text-base sm:text-sm text-xs">
                  E-mail
                </p>
              </div>
              <input
                type="text"
                placeholder="Вкажіть вашу пошту, щоб покупці змогли зв'язатися з вами"
                class="bg-white lg:block hidden py-2 w-[80%] rounded-[10px] outline-none placeholder:text-gray lg:text-sm text-xs"
              />
              <div class="flex items-center w-2/3 lg:hidden relative">
                <label for="text" class="relative">
                  <input
                    type="text"
                    id="text"
                    class="peer hidden active:block focus:block outline-none text-xs py-1 mt-1"
                  />
                  <p
                    class="text-gray text-xs z-10 peer-active:hidden peer-focus:hidden cursor-pointer"
                  >
                    Вкажіть e-mail та отримайте 20 грн. на свій бонусний рахунок
                  </p>
                </label>
              </div>
              <button class="absolute sm:bottom-6 bottom-2 right-0">
                <p
                  class="text-accent lg:text-base sm:text-sm text-xs underline underline-offset-4 decoration-dotted"
                >
                  Змінити
                </p>
              </button>
            </div>
            <div
              class="flex lg:justify-start justify-between items-center sm:space-x-5 border-b border-gray border-opacity-60 sm:pb-6 sm:mt-6 pb-2 mt-2 relative"
            >
              <div class="sm:w-[20%] sm:text-center">
                <p class="mx-auto block md:text-base sm:text-sm text-xs">
                  Пароль
                </p>
              </div>
              <button class="">
                <p
                  class="text-accent lg:text-base sm:text-sm text-xs underline underline-offset-4 decoration-dotted"
                >
                  Змінити
                </p>
              </button>
            </div>
            <div
              class="sm:flex items-center sm:space-x-5 border-b border-gray border-opacity-60 sm:pb-6 pb-2 sm:mt-6 mt-2"
            >
              <div class="sm:w-[20%] sm:text-center">
                <p
                  class="sm:w-[50%] mx-auto block md:text-base sm:text-sm text-xs"
                >
                  Місто
                </p>
              </div>
              <input
                type="text"
                class="bg-pink mt-1 text-xs sm:py-2 py-1 px-4 w-full sm:w-1/2 rounded-[10px] outline-none"
              />
            </div>
            <div class="sm:flex sm:space-x-5 mt-6">
              <div class="sm:w-[20%] sm:text-center">
                <p class="mx-auto block md:text-base sm:text-sm text-xs">
                  Коротоке ім’я
                </p>
              </div>
              <div class="sm:w-1/2 w-full">
                <input
                  type="text"
                  class="bg-pink mt-1 text-xs sm:py-2 py-1 px-4 w-full rounded-[10px] outline-none"
                />
                <p class="md:text-sm text-xs text-gray mt-1">
                  Вкажіть коротку адресу вашої сторінки, щоб вона стала
                  зручнішою і запам'ятовується
                </p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <p class = "sm:text-2xl text-sm font-medium sm:my-8 my-3 sm:px-0 px-2">Загальні налаштування</p>
          <div class = "md:bg-white md:border-[1px] border-accent rounded-[10px] w-full md:px-10 sm:px-4 px-2 py-6">
            <div class = "sm:flex items-center sm:space-x-5 border-b border-gray border-opacity-60 sm:pb-6 pb-4 sm:mt-6 relative">
              <div class = "sm:w-[28%] sm:text-center w-[90%]">
                <p class = "mx-auto block md:text-base sm:text-sm text-xs">Показувати мій телефон в оголошеннях</p>
              </div>
              <label for="checked-toggle1" class=" inline-flex w-fit sm:relative items-center cursor-pointer sm:block absolute top-0 right-0">
                <input type="checkbox" value="" id="checked-toggle1" class="sr-only peer" checked>
                <div class="sm:w-8 w-6 sm:h-4 h-2 sm:translate-y-0 translate-y-2 bg-gray bg-opacity-40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-accent after:content-[''] after:absolute after:-top-0.5 peer-checked:after:left-[2px] after:-left-[2px] after:bg-white peer-checked:after:bg-accent after:border-gray after:border after:rounded-full sm:after:h-5 sm:after:w-5 after:h-3 after:w-3 after:transition-all peer-checked:bg-pink"></div>
              </label>
            </div>
            <div class = "sm:flex items-center justify-between w-full border-b border-gray border-opacity-60 sm:pb-6 sm:mt-6 pb-2 mt-2 relative">
              <div class = "sm:w-[25%] sm:text-center">
                <p class = "mx-auto block md:text-base sm:text-sm text-xs">Безпечні угоди</p>
              </div>
              <label for="checked-toggle2" class="sm:translate-y-0 -translate-y-1 inline-flex w-fit sm:relative items-center cursor-pointer sm:block absolute top-0 right-0">
                <input type="checkbox" value="" id="checked-toggle2" class="sr-only peer" checked>
                <div class="sm:w-8 w-6 sm:h-4 h-2 sm:translate-y-0 translate-y-2 bg-gray bg-opacity-40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-accent after:content-[''] after:absolute after:-top-0.5 peer-checked:after:left-[2px] after:-left-[2px] after:bg-white peer-checked:after:bg-accent after:border-gray after:border after:rounded-full sm:after:h-5 sm:after:w-5 after:h-3 after:w-3 after:transition-all peer-checked:bg-pink"></div>
=======
          <p class="sm:text-2xl text-sm font-medium sm:my-8 my-3">
            Загальні налаштування
          </p>
          <div
            class="md:bg-white md:border-[1px] border-accent rounded-[10px] w-full md:px-10 sm:px-4 px-2 py-6"
          >
            <div
              class="sm:flex items-center sm:space-x-5 border-b border-gray border-opacity-60 sm:pb-6 pb-4 sm:mt-6 relative"
            >
              <div class="sm:w-[28%] sm:text-center w-[90%]">
                <p class="mx-auto block md:text-base sm:text-sm text-xs">
                  Показувати мій телефон в оголошеннях
                </p>
              </div>
              <label
                for="checked-toggle1"
                class="inline-flex w-fit sm:relative items-center cursor-pointer sm:block absolute top-0 right-0"
              >
                <input
                  type="checkbox"
                  value=""
                  id="checked-toggle1"
                  class="sr-only peer"
                  checked
                />
                <div
                  class="sm:w-11 w-8 sm:h-6 h-4 bg-gray bg-opacity-40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-accent after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white peer-checked:after:bg-accent after:border-gray after:border after:rounded-full sm:after:h-5 sm:after:w-5 after:h-3 after:w-3 after:transition-all peer-checked:bg-pink"
                ></div>
              </label>
            </div>
            <div
              class="sm:flex items-center justify-between w-full border-b border-gray border-opacity-60 sm:pb-6 sm:mt-6 pb-2 mt-2 relative"
            >
              <div class="sm:w-[26%] sm:text-center">
                <p class="mx-auto block md:text-base sm:text-sm text-xs">
                  Безпечні угоди
                </p>
              </div>
              <label
                for="checked-toggle2"
                class="inline-flex w-fit sm:relative items-center cursor-pointer sm:block absolute top-0 right-0"
              >
                <input
                  type="checkbox"
                  value=""
                  id="checked-toggle2"
                  class="sr-only peer"
                  checked
                />
                <div
                  class="sm:w-11 w-8 sm:h-6 h-4 bg-gray bg-opacity-40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-accent after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white peer-checked:after:bg-accent after:border-gray after:border after:rounded-full sm:after:h-5 sm:after:w-5 after:h-3 after:w-3 after:transition-all peer-checked:bg-pink"
                ></div>
>>>>>>> c9e056ff35523e652c9102fc34b44f008bc597b6
              </label>
              <div class="sm:w-[57%] xl:w-[60%] w-full mt-2">
                <p class="sm:text-sm text-gray text-xs">
                  Активуйте тумблер, щоб ваші товари були доступні для продажу
                  безпечної угоди з онлайн оплатою.
                  <button
                    class="text-accent underline decoration-dashed underline-offset-4 inline-block"
                  >
                    Докладніше
                  </button>
                </p>
              </div>
            </div>
            <div
              class="sm:flex items-center space-x-5 w-full border-b border-gray border-opacity-60 sm:pb-6 sm:mt-6 pb-2 mt-2 relative"
            >
              <div class="sm:w-[28%] sm:text-center">
                <p class="mx-auto block md:text-base sm:text-sm text-xs">
                  Коментарі в оголошеннях
                </p>
              </div>
<<<<<<< HEAD
              <label for="checked-toggle3" class="sm:translate-y-0 -translate-y-1 inline-flex w-fit sm:relative items-center cursor-pointer sm:block absolute top-0 right-0">
                <input type="checkbox" value="" id="checked-toggle3" class="sr-only peer" checked>
                <div class="sm:w-8 w-6 sm:h-4 h-2 sm:translate-y-0 translate-y-2 bg-gray bg-opacity-40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-accent after:content-[''] after:absolute after:-top-0.5 peer-checked:after:left-[2px] after:-left-[2px] after:bg-white peer-checked:after:bg-accent after:border-gray after:border after:rounded-full sm:after:h-5 sm:after:w-5 after:h-3 after:w-3 after:transition-all peer-checked:bg-pink"></div>
=======
              <label
                for="checked-toggle3"
                class="inline-flex w-fit sm:relative items-center cursor-pointer sm:block absolute top-0 right-0"
              >
                <input
                  type="checkbox"
                  value=""
                  id="checked-toggle3"
                  class="sr-only peer"
                  checked
                />
                <div
                  class="sm:w-11 w-8 sm:h-6 h-4 bg-gray bg-opacity-40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-accent after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white peer-checked:after:bg-accent after:border-gray after:border after:rounded-full sm:after:h-5 sm:after:w-5 after:h-3 after:w-3 after:transition-all peer-checked:bg-pink"
                ></div>
>>>>>>> c9e056ff35523e652c9102fc34b44f008bc597b6
              </label>
            </div>
            <div
              class="sm:flex items-center justify-between w-full border-b border-gray border-opacity-60 sm:pb-6 sm:mt-6 pb-2 mt-2 relative"
            >
              <div class="sm:w-[30%] sm:text-center">
                <p class="mx-auto block md:text-base sm:text-sm text-xs">
                  Рахунок
                </p>
              </div>
              <div>
                <button
                  class="text-accent text-sm sm:text-xs underline decoration-dashed underline-offset-4 sm:relative absolute top-0 right-0"
                >
                  Додати
                </button>
              </div>
              <div class="sm:w-[57%] xl:w-[60%] w-full mt-2">
                <p class="text-gray sm:text-sm text-xs mt-2 sm:mt-0">
                  Додайте рахунок для отримання оплати за безпечною угодою
                </p>
              </div>
            </div>
            <div
              class="sm:flex items-center sm:space-x-5 sm:mt-6 mt-2 relative"
            >
              <div class="sm:w-[30%] sm:text-center">
                <p class="mx-auto block md:text-base sm:text-sm text-xs">
                  Сповіщення
                </p>
              </div>
              <div>
                <button
                  class="text-accent text-sm sm:text-xs underline decoration-dashed underline-offset-4 sm:relative absolute top-0 right-0"
                >
                  Змінити
                </button>
              </div>
            </div>
          </div>
          <button
            class="bg-accent lg:py-4 sm:py-3 py-2 lg:px-14 sm:px-10 px-6 rounded-full text-sm text-white w-fit block mx-auto md:mt-10 sm:mt-6 mt-4"
          >
            Зберегти
          </button>
        </div>
      </div>
    </div>
  </section>
  <MobileMenuVue></MobileMenuVue>
  <FooterVue></FooterVue>
</template>

<script>
import HeadVue from "@/components/Head.vue";
import MobileMenuVue from "@/components/MobileMenu.vue";
import FooterVue from "@/components/Footer.vue";
import Acc_buttons from "@/components/modal/Acc_buttons.vue";
import Orders_card from "@/components/Orders_card.vue";
import SofiaVue from "@/components/Sofia.vue";
export default {
  components: {
    HeadVue,
    MobileMenuVue,
    FooterVue,
    Acc_buttons,
    Orders_card,
    SofiaVue,
  },
  data() {
    return {
      isCategoryOpen: false,
      isTruckOpen: false,
      isMobileMenuOpen: false,
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
