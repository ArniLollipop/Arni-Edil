<template>
  <div
    class="w-[70%] h-max border rounded-xl bg-white absolute top-36 z-20 px-1 pb-4 left-1/2 -translate-x-1/2"
  >
    <div
      class="py-4 px-4 flex items-center justify-between w-full"
      v-if="oblast"
    >
      <div
        class="w-[150px] text-center py-1 border border-accent rounded-full text-sm cursor-pointer"
        @click="oblast = false"
      >
        Змінити область
      </div>
      <div
        class="w-[150px] text-center py-1 border border-accent rounded-full text-sm cursor-pointer"
        @click="oblast = false"
      >
        Вся область
      </div>
    </div>
    <div class="border-x border-accent flex items-center" v-if="oblast">
      <div class="w-1/3 space-y-3.5 px-3 border-r border-accent">
        <div class="flex items-center justify-between" v-for="item in city1">
          <div class="text-sm cursor-pointer">{{ item }}</div>
          <div class="">
            <img src="../../img/searchArrow.svg" alt="" class="w-2.5" />
          </div>
        </div>
      </div>
      <div class="w-1/3 space-y-3.5 px-3 border-r border-accent">
        <div class="flex items-center justify-between" v-for="item in city2">
          <div class="text-sm cursor-pointer">{{ item }}</div>
          <div class="">
            <img src="../../img/searchArrow.svg" alt="" class="w-2.5" />
          </div>
        </div>
      </div>
      <div class="w-1/3 space-y-3.5 px-3">
        <div class="flex items-center justify-between" v-for="item in city3">
          <div class="text-sm cursor-pointer">{{ item }}</div>
          <div class="">
            <img src="../../img/searchArrow.svg" alt="" class="w-2.5" />
          </div>
        </div>
      </div>
    </div>
    <div class="border-x border-accent flex items-center mt-3" v-if="!oblast">
      <div class="w-1/3 space-y-3.5 px-3 border-r border-accent">
        <div class="flex items-center justify-between" v-for="item in oblast1">
          <div class="text-sm cursor-pointer">{{ item }}</div>
          <div class="">
            <img src="../../img/searchArrow.svg" alt="" class="w-2.5" />
          </div>
        </div>
      </div>
      <div class="w-1/3 space-y-3.5 px-3 border-r border-accent">
        <div class="flex items-center justify-between" v-for="item in oblast2">
          <div class="text-sm cursor-pointer">{{ item }}</div>
          <div class="">
            <img src="../../img/searchArrow.svg" alt="" class="w-2.5" />
          </div>
        </div>
      </div>
      <div class="w-1/3 space-y-3.5 px-3">
        <div class="flex items-center justify-between" v-for="item in oblast3">
          <div class="text-sm cursor-pointer">{{ item }}</div>
          <div class="">
            <img src="../../img/searchArrow.svg" alt="" class="w-2.5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oblast: true,
      city1: ["Вінниця", "Бар", "Козятін", "Ладижин", "Іллінці", "Шаргород"],
      city2: ["Вінниця", "Бар", "Козятін", "Ладижин", "Іллінці", "Шаргород"],
      city3: ["Вінниця", "Бар", "Козятін", "Ладижин", "Іллінці", "Шаргород"],
      oblast1: [
        "Вінницька область",
        "Донецька область",
        "Запорізька область",
        "Кіровоградська область",
        "Миколаївська область",
        "Рівненська область",
        "Харківська область",
        "Черкаська область",
      ],
      oblast2: [
        "Вінницька область",
        "Донецька область",
        "Запорізька область",
        "Кіровоградська область",
        "Миколаївська область",
        "Рівненська область",
        "Харківська область",
        "Черкаська область",
      ],
      oblast3: [
        "Вінницька область",
        "Донецька область",
        "Запорізька область",
        "Кіровоградська область",
        "Миколаївська область",
        "Рівненська область",
        "Харківська область",
        "Черкаська область",
      ],
    };
  },
};
</script>
