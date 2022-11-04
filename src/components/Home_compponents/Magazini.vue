<template>
  <section class = "px-4 pb-2 sm:pb-4 lg:pb-8">
    <div class = "w-fit py-6 flex sm:flex-col">
      <p class = "font-semibold text-black sm:text-3xl text-sm">Магазини</p>
      <div class = "flex items-center lg:pl-[2px] pl-2 pt-[2px] text-[12px] sm:text-sm">
        <a href="#" class="hover:text-accent z-10">
          <span class="sm:underline decoration-dotted underline-offset-8">Всі магазини</span>
          <span class="ml-1 w-3 h-3 sm:w-5 sm:h-5 inline-flex items-center justify-center bg-accent rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white"
            class="w-[7px] h-[7px] rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          </span>
        </a>
      </div>
    </div>
    <div class = "h-[170px] w-full relative">
      <swiper 
        :slides-per-view="1"
        :loop="true"
        :breakpoints="{
          1280:{
            slidesPerView:4,
            spaceBetween:20
          },
          1024:{
            slidesPerView:3,
            spaceBetween:20
          },
          550:{
            slidesPerView:2,
            spaceBetween:50
          }
        }"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
        
        :space-between="20"
        :modules="modules"
        class = "xl:w-[95%] lg:w-[90%] md:w-[85%] w-[80%] relative">
        <swiper-slide class = "bg-white rounded-xl w-fit flex py-2 px-2 items-center min-h-[152px]" 
          v-for="slide in slides"
        >
          <div class = "w-fit flex-col items-center pl-[1%]">
            <img :src="require('../../img/' + slide.img)" alt="" class = "w-[130px] h-[56px]">
            <div class = "flex justify-center pt-1">
              <img src="@/img/Star.svg" alt="">
              <img src="@/img/Star.svg" alt="">
              <img src="@/img/Star.svg" alt="">
              <img src="@/img/Star.svg" alt="">
              <img src="@/img/Star.svg" alt="">
            </div>
          </div>
          <div class = "text-center mx-auto">
            <p class = "lg:text-[18px] text-[13px]">{{slide.title_text}} <br> <span class = " lg:text-sm text-[12px]"> {{slide.title_br}} </span></p>
            <button class = "text-[10px] underline decoration-dashed text-accent hover:opacity-75 ">Докладніше</button>
          </div>
        </swiper-slide> 
        
      
      </swiper>
      <button ref="prev" class = "px-[0.7%] py-[3%] md:px-2 md:py-6 bg-white rounded-full z-10 absolute left-0  top-1/2 -translate-y-1/2"><img src="@/img/Стрелка_left.png" alt=""  class = "w-[7px] h-[7px]"></button>
      <button ref="next" class = "px-[0.7%] py-[3%] md:px-2 md:py-6 bg-white rounded-full z-10 absolute right-0 top-1/2 -translate-y-1/2"><img src="@/img/Стрелка_right.png" alt="" class = "w-[7px] h-[7px]"></button> 
    </div>
  </section>
</template>

<script>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation } from 'swiper';
  export default{
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const prev = ref(null);
      const next = ref(null);
      return {
        modules: [Navigation],
        prev,
        next,
      };
    },
    data(){
      return{
        slides: [
          {id: 0, img: 'slider_img1.svg', title_text: 'Мебель Платон', title_br: '49 оголошень'},
          {id: 1, img: 'slider_img2.svg', title_text: 'TVShop', title_br: '10 оголошень'},
          {id: 2, img: 'slider_img3.svg', title_text: 'Лия', title_br: '104 оголошень'},
          {id: 3, img: 'slider_img4.svg', title_text: 'dsfsdf', title_br: '0 оголошень'},
        ],
        x : 0,
      }
    },
  }
</script>