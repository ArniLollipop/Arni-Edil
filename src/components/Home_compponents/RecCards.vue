<template>
  <div class="mt-20 lg:mt-[120px] container mx-auto px-5">
    <div class="text-sm font-semibold lg:text-3xl">Рекомендации для вас</div>
    <div class="mt-4 lg:mt-11">
      <div v-for="item in cards">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {},
  },
  data() {
    return {};
  },
};
</script>
