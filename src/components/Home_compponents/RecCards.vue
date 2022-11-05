<template>
  <div class="mt-10 lg:mt-20 container mx-auto px-5">
    <div class="font-semibold lg:text-3xl">Рекомендации для вас</div>
    <div
      class="mt-4 lg:mt-11 grid grid-cols-2 gap-x-1.5 gap-y-4 lg:gap-y-8 md:grid-cols-3 md:gap-x-10 lg:grid-cols-5 lg:gap-x-6 auto-rows-[minmax(0px, auto)]"
    >
      <div v-for="item in cards" v-show="item.id >= 1" class="flex flex-col overflow-hidden">
        <div v-if="item.id==2||item.id==4" class = "w-full h-full px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white overflow-hidden relative">
          <swiper
          :slides-per-view="1"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          :space-between="20"
          :modules="modules"
            class = "w-full h-full relative">
            <swiper-slide class="">
              <img
                :src="require('../../img/RecCards/' + item.image)"
                alt=""
                class="w-full"
              />
            </swiper-slide>
            <button class = "swiper-button-prev invisible"><img src="@/img/mini_left.svg" alt="" class = "visible bg-white px-1 py-1 absolute -left-2 rounded-full"></button>
            <button class = "swiper-button-next invisible"><img src="@/img/mini_right.svg" alt="" class = "visible bg-white px-1 py-1 absolute -right-2 rounded-full"></button>
          </swiper>
        </div>
        <div v-else class="px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white">
          <img
            :src="require('../../img/RecCards/' + item.image)"
            alt=""
            class="w-full"
          />
        </div>
        <div
          class="px-3 pt-2 pb-7 lg:p-3 lg:pb-3 xl:pb-5 rounded-2xl bg-white grow"
        >
          <div class="h-1/3">
            <div class="text-green text-xs lg:text-sm">
              {{ item.pretitle }}
            </div>
            <div
              :class="[
                'text-xs lg:text-sm',
                { 'pt-2': item.pretitle.length === 0 },
              ]"
            >
              {{ item.title }}
            </div>
          </div>
          <div class="mt-1 lg:mt-3">
            <div
              :class="{
                'text-xs text-red': item.subtitleColor,
                'text-xs text-green': !item.subtitleColor,
              }"
            >
              {{ item.subtitle }}
            </div>
            <div class="flex justify-between items-center mt-1">
              <div class="text-sm lg:text-base">{{ item.price }}.грн</div>
              <div
                class="w-[42px] text-center rounded-3xl bg-accent text-white text-xs lg:w-[66px]"
              >
                {{ item.status }}
              </div>
            </div>
            <div
              :class="[
                'text-sm lg:text-base text-red line-through',
                { 'text-green invisible': item.lastPrice.length === 0 },
              ]"
            >
              {{ item.lastPrice }}.грн
            </div>
            <div class="flex items-center">
              <img src="../../img/RecCards/map.svg" alt="" class="h-3" />
              <div class="text-xs text-gray">{{ item.map }}</div>
            </div>
            <div class="text-xs text-gray lg:hidden">{{ item.date }}</div>
            <div class="flex mt-1 items-center">
              <div
                class="w-[98px] lg:w-[114px] border border-accent rounded-xl text-xs text-center shrink"
              >
                {{ item.btnText }}
              </div>

              <div
                class="hidden ml-1.5 lg:block text-[10px] 2xl:text-xs text-gray"
              >
                {{ item.date }}
              </div>

              <div class="ml-auto lg:-mr-2" @click="isLike = !isLike">
                <img
                  src="../../img/RecCards/heart.svg"
                  alt=""
                  :class="['w-3 xl:w-5', { 'w-3 hidden': isLike }]"
                />
                <img
                  src="../../img/RecCards/heartFill.svg"
                  alt=""
                  :class="['w-3 xl:w-5', { 'w-3 hidden': !isLike }]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [Navigation],
    };
  },
  props: {
    cards: {},
  },
  data() {
    return {
      isLike: false,
    };
  },
};
</script>
<style>
.swiper-button-next{
}
</style>
