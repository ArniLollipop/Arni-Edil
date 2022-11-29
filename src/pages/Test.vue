<template>
  <div
    class="grid grid-cols-2 gap-x-1.5 gap-y-4 lg:grid-cols-4 lg:gap-x-2 lg:gap-y-5 mt-4 lg:mt-10 auto-rows-[minmax(0px, auto)"
  >
    <router-link
      to="/"
      v-for="item in cards"
      v-show="item.id >= 1"
      class="flex flex-col"
    >
      <div
        v-if="item.id == 2 || item.id == 5"
        class="w-full h-fit px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white overflow-hidden relative shadow-gray shadow-sm"
      >
        <swiper
          :slides-per-view="1"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :space-between="20"
          :modules="modules"
          class="w-full h-full relative"
        >
          <swiper-slide class="">
            <img
              :src="require('../img/RecCards/' + item.image)"
              alt=""
              class="w-full"
            />
          </swiper-slide>
          <button class="swiper-button-prev invisible shadow-md shadow-accent">
            <img
              src="@/img/mini_left.svg"
              alt=""
              class="visible bg-white px-1 py-1 absolute -left-2 rounded-full"
            />
          </button>
          <button class="swiper-button-next invisible">
            <img
              src="@/img/mini_right.svg"
              alt=""
              class="visible bg-white px-1 py-1 absolute -right-2 rounded-full"
            />
          </button>
        </swiper>
      </div>
      <div
        v-else
        class="px-1.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white shadow-gray shadow-md"
      >
        <img
          :src="require('../img/RecCards/' + item.image)"
          alt=""
          class="w-full"
        />
      </div>
      <div
        class="px-1.5 pt-[14px] pb-1 lg:px-3 lg:pt-4 flex flex-col justify-between shadow-gray shadow-md bg-white rounded-2xl break-all grow overflow-hidden relative z-20"
      >
        <div class="">
          <div
            class="text-green text-[12px] lg:text-[14px] mb-3 absolute top-0"
          >
            {{ item.pretitle }}
          </div>
          <div
            :class="[
              'text-xs lg:text-sm mt-2',
              { '': item.pretitle.length === 0 },
            ]"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="mt-1 lg:mt-3 flex flex-col justify-between">
          <div
            :class="{
              'text-xs text-red': item.subtitleColor,
              'text-xs text-green': !item.subtitleColor,
            }"
          >
            {{ item.subtitle }}
          </div>
          <div class="relative mt-1">
            <div class="md:text-sm text-xs lg:text-base pr-[50px] lg:pr-[70px]">
              {{ item.price }}.грн
            </div>
            <div
              class="absolute top-0 right-0 w-[42px] lg:py-1 text-center rounded-3xl bg-accent text-white text-xs lg:w-[66px] shrink-0"
            >
              {{ item.status }}
            </div>
          </div>
          <div
            :class="[
              'md:text-sm text-xs lg:text-base text-red line-through mb-4',
              { 'text-green invisible': item.lastPrice.length === 0 },
            ]"
          >
            {{ item.lastPrice }}.грн
          </div>
          <div class="flex items-center mt-auto">
            <img src="../img/RecCards/map.svg" alt="" class="h-3" />
            <div class="text-xs text-gray">{{ item.map }}</div>
          </div>
          <div class="text-xs text-gray lg:hidden">{{ item.date }}</div>
          <div class="flex mt-1 items-center lg:pr-2">
            <div
              class="w-[98px] lg:w-[114px] md:py-1 border-[0.5px] border-accent rounded-[10px] text-xs text-center shrink"
            >
              {{ item.btnText }}
            </div>

            <div
              class="hidden ml-1.5 lg:block text-[10px] 2xl:text-xs text-gray shrink-0"
            >
              {{ item.date }}
            </div>

            <button
              type="checkbox"
              value="1"
              class="ml-auto -mr-px lg:-mr-2 shrink-0 relative z-50"
              @click="item.isLike = !item.isLike"
            >
              <img
                src="../img/RecCards/heart.svg"
                alt=""
                :class="[
                  'w-3 lg:w-[22px] shrink-0',
                  { 'w-3 hidden': item.isLike },
                ]"
              />
              <img
                src="../img/RecCards/heartFill.svg"
                alt=""
                :class="[
                  'w-3 lg:w-[22px] shrink-0',
                  { 'w-3 hidden': !item.isLike },
                ]"
              />
            </button>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
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
    return {};
  },
};
</script>
