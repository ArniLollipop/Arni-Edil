<template>
  <div class="sm:hidden">
    <Head></Head>
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
        class="bg-white cursor-pointer rounded-[10px] max-w-[403px] h-[45px] my-2 px-4 py-3 w-full flex items-center justify-between relative"
      >
        <div class="md:text-sm text-xs">{{ item.mas[copy[key]] }}</div>
        <div class="">
          <img src="@/img/strelka_down.svg" alt="" class="w-fit" />
        </div>
        <div
          :class="[
            'absolute z-[5000] top-full -mt-3 inset-x-0 py-3  rounded-b-[10px]',
            item.isOpen ? 'block bg-white' : 'hidden bg-black',
          ]"
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
</template>

<script>
import Head from "@/components/Head.vue";
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
