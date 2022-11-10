<template>
  <div class="hidden sm:block">
    <Create2></Create2>
  </div>
  <div class="sm:hidden">
    <Head></Head>
    <section class="px-4 text-dark">
      <div class="w-full sm:hidden flex justify-between items-center my-2">
        <router-link to="/"
          ><img src="@/img/strelka_left.svg" alt="" class="w-fit"
        /></router-link>
        <router-link
          to="/"
          class="text-sm underline underline-offset-4 decoration-dashed text-red"
          >скасувати</router-link
        >
      </div>
      <p
        class="lg:text-3xl md:text-2xl sm:text-lg text-sm font-medium sm:hidden my-2"
      >
        Оголошення
      </p>
    </section>
  </div>
  <section class="2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-2 text-dark">
    <div class="lg:w-[70%] md:w-full">
      <p class="my-2 md:text-sm sm:text-xs text-[10px]">
        Тарифи магазину: Базовый
      </p>
      <p class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2">
        Назва
      </p>
      <input
        type="text"
        class="outline-none bg-white rounded-[10px] placeholder:sm:text-sm placeholder:text-[10px] sm:text-sm text-[10px] placeholder:text-dark px-2 py-3 w-full"
      />
      <p class="mt-1 mb-4 text-gray text-xs text-[10px]">Символів 0 з 70</p>
      <p class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2">
        Фотографії
      </p>
      <div
        class="sm:px-4 px-[10px] min-h-[66px] py-3 w-full flex items-center bg-aqua rounded-[10px] gap-x-3 relative"
      >
        <img
          src="@/img/vopros.svg"
          alt=""
          class="sm:w-fit sm:relative sm:top-0 w-[14px] h-[14px] absolute top-[14px] left-2"
        />
        <p class="md:text-sm sm:text-xs text-[11px] ml-5">
          Перше фото відображатиметься в результатах пошуку, виберіть найбільш
          вдале. Ви можете завантажити до 8 фотографій у форматі JPG або PNG.
          Максимальний розмір фото — 25mb.
        </p>
      </div>
      <button
        class="xl:py-11 lg:py-9 py-7 w-full text-center border border-dashed border-dark rounded-[10px] my-4 text-gray md:text-sm sm:text-xs text-[10px] hover:opacity-60"
      >
        Виберіть або перетягніть зображення
      </button>
      <p class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2">
        Відео
      </p>
      <div
        class="sm:px-4 px-[10px] min-h-[50px] py-3 w-full sm:flex sm:items-center bg-aqua rounded-[10px] gap-x-3 relative"
      >
        <img
          src="@/img/vopros.svg"
          alt=""
          class="sm:w-fit sm:relative sm:top-0 w-[14px] h-[14px] absolute top-[14px] left-2"
        />
        <p class="md:text-sm sm:text-xs text-[11px] ml-5">
          Можна додати посилання на відео у Youtube чи Vimeo
        </p>
      </div>
      <input
        type="text"
        class="outline-none bg-white rounded-[10px] placeholder:sm:text-sm placeholder:text-[10px] sm:text-sm text-[10px] placeholder:text-dark px-2 py-3 w-full my-2"
      />
      <p
        class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 sm:mt-4"
      >
        Опис
      </p>
      <div
        class="lg:h-[300px] md:h-[260px] sm:h-[200px] h-[160px] px-4 py-2 bg-transparent outline-none w-full border border-gray rounded-[10px] my-2"
      ></div>
      <p class="mt-1 mb-4 text-gray sm:text-xs text-[10px]">
        Символів 0 з 2000
      </p>
      <p
        class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 sm:mt-4"
      >
        Термін публікації
      </p>
      <div
        @click="isDatetOpen = !isDatetOpen"
        class="bg-white rounded-[10px] max-w-[403px] h-[45px] my-2 px-4 py-3 w-full flex items-center justify-between relative"
      >
        <p class="sm:text-sm text-xs">{{ date[dateIndex] }}</p>
        <img src="@/img/strelka_down.svg" alt="" class="w-fit" />
        <div
          v-if="isDatetOpen"
          class="absolute z-[100] top-full -mt-3 inset-x-0 bg-white py-3 rounded-b-[10px] cursor-pointer"
        >
          <div
            v-for="(item, key) in date"
            class="text-xs sm:text-sm p-3 hover:bg-slate-400 cursor-pointer"
            @click="setDateIndex(key)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <p
        class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 sm:mt-4"
      >
        Характеристики
      </p>
      <div
        class="sm:px-4 px-[10px] min-h-[50px] py-3 w-full sm:flex sm:items-center bg-aqua rounded-[10px] gap-x-3 relative sm:my-0 my-2"
      >
        <img
          src="@/img/vopros.svg"
          alt=""
          class="sm:w-fit sm:relative sm:top-0 w-[14px] h-[14px] absolute top-[14px] left-2"
        />
        <p class="md:text-sm sm:text-xs text-[11px] ml-5">
          Вкажіть якнайбільше параметрів - це підвищить інтерес до оголошення.
        </p>
      </div>
      <div class="w-full">
        <div
          class="sm:w-[70%] w-full sm:flex items-center"
          v-for="(item, key) in harakters"
        >
          <div class="sm:w-[40%] w-full sm:text-sm text-xs">
            {{ item.title }}
          </div>
          <div
            @click="item.isOpen = !item.isOpen"
            class="bg-white rounded-[10px] max-w-[403px] h-[45px] my-2 px-4 py-3 w-full flex items-center justify-between relative z-0"
          >
            <div class="md:text-sm text-xs">{{ item.mas[copy[key]] }}</div>
            <div class="">
              <img src="@/img/strelka_down.svg" alt="" class="w-fit" />
            </div>
            <div
              v-if="item.isOpen"
              class="absolute z-[5000] top-full -mt-3 inset-x-0 py-3 bg-white rounded-b-[10px]"
            >
              <div
                class="md:text-sm text-xs p-3 hover:bg-slate-400"
                v-for="(el, ind) in item.mas"
                @click="
                  () => {
                    copy[key] = ind;
                  }
                "
              >
                {{ el }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 mt-4"
      >
        Ціна
      </p>
      <div class="sm:flex items-center gap-x-2">
        <input
          type="text"
          class="bg-white rounded-[10px] max-w-[403px] h-[45px] sm:my-2 px-4 py-3 w-full sm:text-sm text-xs flex items-center justify-between outline-none"
        />
        <div class="flex items-center sm:mt-0 mt-2 gap-x-1">
          <input type="checkbox" name="btn" id="price" class="w-4 h-4 peer" />
          <label for="price" class="cursor-pointer sm:text-sm text-xs pt-[2px]"
            >Віддам даром</label
          >
        </div>
      </div>
      <p
        class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 mt-4"
      >
        В наявності
      </p>
      <div class="sm:flex items-center gap-x-2">
        <input
          type="text"
          class="bg-white rounded-[10px] max-w-[403px] h-[45px] sm:my-2 px-4 py-3 w-full sm:text-sm text-xs flex items-center justify-between outline-none"
        />
        <div class="flex items-center sm:mt-0 mt-2 gap-x-1">
          <input type="checkbox" name="btn1" id="price1" class="w-4 h-4 peer" />
          <label for="price1" class="cursor-pointer sm:text-sm text-xs pt-[2px]"
            >Не обмежено</label
          >
        </div>
      </div>
      <p
        class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 mt-4"
      >
        Можливий онлайн-показ
      </p>
      <div
        class="sm:px-4 px-[10px] min-h-[50px] py-3 w-full sm:flex sm:items-center bg-aqua rounded-[10px] gap-x-3 relative sm:my-0 my-2"
      >
        <img
          src="@/img/vopros.svg"
          alt=""
          class="sm:w-fit sm:relative sm:top-0 w-[14px] h-[14px] absolute top-[14px] left-2"
        />
        <p class="md:text-sm sm:text-xs text-[11px] ml-5">
          Виберіть, якщо готові показати товароб'єкт за допомогою відеодзвінка -
          наприклад, через WhatsApp, Viber, Skype або інший сервіс
        </p>
      </div>
      <div class="flex items-center gap-x-1 sm:my-1">
        <input type="checkbox" name="btn2" id="price2" class="w-4 h-4 peer" />
        <label for="price2" class="cursor-pointer sm:text-sm text-xs pt-[2px]"
          >Готові показати онлайн</label
        >
      </div>
      <p
        class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 mt-4"
      >
        Місто
      </p>
      <input
        type="text"
        class="outline-none bg-white h-[45px] rounded-[10px] placeholder:sm:text-sm placeholder:text-xs sm:text-sm text-xs placeholder:text-dark px-2 py-3 sm:my-2 my-1 w-full"
      />
      <p
        class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 mt-4"
      >
        Адреса
      </p>
      <label class="relative">
        <input
          type="text"
          class="outline-none bg-white h-[45px] rounded-[10px] placeholder:sm:text-sm sm:text-sm text-xs peer placeholder:text-xs placeholder:text-dark px-2 py-3 sm:my-2 my-1 w-full sm:hidden"
        />
        <p
          class="mt-1 mb-4 text-gray sm:text-xs sm:bg-transparent text-[10px] sm:relative sm:left-0 absolute top-0 left-2 peer-focus:hidden"
        >
          Почніть вводити адресу, а потім виберіть її зі списку
        </p>
      </label>
      <div
        class="w-full xl:h-[217px] lg:h-44 h-40 relative bg-map rounded-[10px] bg-no-repeat bg-cover bg-center my-2"
      >
        <div
          class="flex p-3 md:gap-x-3 gap-x-1 md:relative absolute bottom-0 right-0"
        >
          <button
            class="sm:text-sm text-xs md:py-2 md:w-[110px] w-[80px] py-1 bg-white rounded-full z-10"
          >
            Карта
          </button>
          <button
            class="sm:text-sm text-xs md:py-2 md:w-[110px] w-[80px] py-1 bg-white rounded-full z-10"
          >
            Супутник
          </button>
        </div>
        <button>
          <img
            src="@/img/google.svg"
            alt=""
            class="z-10 w-fit md:absolute md:bottom-3 md:left-3 px-3 py-4"
          />
        </button>
        <button class="absolute top-3 right-3 rounded-full">
          <img src="@/img/full.svg" alt="" class="md:w-fit" />
        </button>
        <div class="md:flex absolute bottom-3 right-3 gap-x-2 hidden">
          <button><img class="w-fit" src="@/img/minus.svg" alt="" /></button>
          <button>
            <img class="w-fit" src="@/img/create_plus.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="flex items-center sm:mt-4 gap-x-3">
        <p
          class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 mt-[19px]"
        >
          Автопублікація
        </p>

        <label
          for="checked-toggle1"
          class="inline-flex mt-[18px] relative items-center cursor-pointer"
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
        class="sm:px-4 px-[10px] min-h-[50px] py-3 w-full sm:flex sm:items-center bg-aqua rounded-[10px] gap-x-3 relative sm:my-0 my-2"
      >
        <img
          src="@/img/vopros.svg"
          alt=""
          class="sm:w-fit sm:relative sm:top-0 w-[14px] h-[14px] absolute top-[14px] left-2"
        />
        <p class="md:text-sm sm:text-xs text-[11px] ml-5">
          Ваше оголошення опублікується повторно, коли закінчиться термін
          розміщення
        </p>
      </div>
      <p
        class="font-medium lg:text-2xl md:text-xl sm:text-base text-xs my-2 mt-4"
      >
        Номер телефону
      </p>
      <div
        class="px-4 min-h-[144px] w-full md:py-6 py-3 bg-aqua rounded-[10px] my-2"
      >
        <p class="sm:text-sm text-xs">
          Для публікації оголошення необхідно вказати номер телефону. Приховати
          його або змінити Ви зможете у налаштуваннях профілю.
        </p>
        <div class="w-full md:flex items-center gap-x-20">
          <input
            type="text"
            placeholder="+38 (0__) ___ ____"
            class="outline-none bg-white rounded-[10px] placeholder:sm:text-sm placeholder:text-xs placeholder:text-gray px-2 py-3 my-2 md:w-[541px] w-full"
          />
          <button class="px-7 py-2 bg-accent rounded-full hidden md:block">
            <p class="text-white text-sm font-medium">Підтвердити</p>
          </button>
        </div>
      </div>
      <div class="w-full xl:flex-none flex justify-center">
        <button class="px-7 py-2 bg-pink2 rounded-full my-4">
          <p class="text-white text-sm font-medium">Опубліковати</p>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import Head from "@/components/Head.vue";
import Create from "@/components/Create_components/Create.vue";
import Create2 from "@/components/Create_components/Create_2.vue";
import { useState } from "@/composables/state";
export default {
  setup() {
    const [dateIndex, setDateIndex] = useState(0);
    const [arr, setValue] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [index, setIndex] = useState(0);
    return {
      index,
      setIndex,
      dateIndex,
      setDateIndex,
      arr,
      setValue,
    };
  },
  components: {
    Head,
    Create,
    Create2,
  },
  data() {
    return {
      copy: Object.assign([], this.arr),
      isDatetOpen: false,
      date: ["7 днів", "1 месяц", "6 месяцев", "год", "1 днів"],
      harakters: [
        {
          id: 0,
          isOpen: false,
          title: "Виберіть тип моделі",
          mas: ["Не обрано", "Текст 1", "Текст 2", "Текст 3", "Текст 4"],
        },
        {
          id: 1,
          isOpen: false,
          title: "Приватне-Бізнес",
          mas: ["Не обрано", "Текст 1", "Текст 2", "Текст 3", "Текст 4"],
        },
        {
          id: 2,
          isOpen: false,
          title: "Стан товару",
          mas: ["Не обрано", "Текст 1", "Текст 2", "Текст 3", "Текст 4"],
        },
        {
          id: 3,
          isOpen: false,
          title: "Наявність товару ",
          mas: ["Не обрано", "Текст 1", "Текст 2", "Текст 3", "Текст 4"],
        },
        {
          id: 4,
          isOpen: false,
          title: "Матеріал",
          mas: ["Не обрано", "Текст 1", "Текст 2", "Текст 3", "Текст 4"],
        },
        {
          id: 5,
          isOpen: false,
          title: "Країна виробника",
          mas: ["Не обрано", "Текст 1", "Текст 2", "Текст 3", "Текст 4"],
        },
        {
          id: 6,
          isOpen: false,
          title: "Торг ",
          mas: ["Не обрано", "Текст 1", "Текст 2", "Текст 3", "Текст 4"],
        },
      ],
    };
  },
};
</script>
