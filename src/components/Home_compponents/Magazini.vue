<template>
  <section class = "px-8 mb-14">
    <div class = "w-[15%] py-6">
      <p class = "font-semibold text-black text-3xl">Магазини</p>
      <div class = "flex items-center pl-[2px]">
        <a href="#" class="hover:text-accent z-10">
          <span class="underline decoration-dotted underline-offset-8">Всі магазини</span>
          <span class="ml-1 w-5 h-5 inline-flex items-center justify-center bg-accent rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white"
            class="w-[7px] h-[7px] rotate-180">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          </span>
        </a>
      </div>
    </div>
    <div class = "h-[170px] w-full">
      <div class = "flex items-center h-full gap-x-5 overflow-hidden">
        <button @click="prevSlide" href="#" class = "overflow-hidden z-50 bg-white min-w-[20px] py-[30px] px-1 rounded-3xl"><img src="@/img/Стрелка_left.png" alt=""></button>
        <div class = "w-full overflow-hidden">
          <div class = "flex gap-x-4 overflow-hidden slider transition-all duration-500">
            <div class = "bg-white text-center px-6 py-9 rounded-[10px] flex items-center min-w-[330px] h-full" v-for="slide in slides">
              <div class = "h-[80px]">
                <img :src="require('../../img/' + slide.img)" alt="" class = "pr-4 w-[130px] h-[56px]">
                <div class = "flex items-center mx-auto ml-5">
                  <img src="@/img/Star.svg" alt="" class = "w-[16px] h-[16px]">
                  <img src="@/img/Star.svg" alt="" class = "w-[16px] h-[16px]">
                  <img src="@/img/Star.svg" alt="" class = "w-[16px] h-[16px]">
                  <img src="@/img/Star.svg" alt="" class = "w-[16px] h-[16px]">
                  <img src="@/img/Star.svg" alt="" class = "w-[16px] h-[16px]">
                </div>
              </div>
              <div class = "mx-auto gap-x-9">
                <p class = "text-base">{{slide.title_text}}<br>{{slide.title_br}}</p>
                <p class = "text-accent text-[10px] underline decoration-dashed mt-1">Докладніше</p>
              </div>
            </div>
          </div>
        </div>
        <button @click="nextSlide" class = "bg-white min-w-[20px] py-[30px] px-1 rounded-3xl"><img src="@/img/Стрелка_right.png" alt=""></button>
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    data(){
      return{
        slides: [
          {id: 0, img: 'slider_img1.svg', title_text: 'Мебель Платон', title_br: '49 оголошень'},
          {id: 1, img: 'slider_img2.svg', title_text: 'TVShop', title_br: '10 оголошень'},
          {id: 2, img: 'slider_img3.svg', title_text: 'Лия', title_br: '104 оголошень'},
          {id: 3, img: 'slider_img4.svg', title_text: 'dsfsdf', title_br: '0 оголошень'},
          {id: 4, img: 'slider_img3.svg', title_text: 'Лия', title_br: '200 оголошень'},
          {id: 5, img: 'slider_img3.svg', title_text: 'Лия', title_br: '200 оголошень'},
          {id: 6, img: 'slider_img4.svg', title_text: 'dsfsdf', title_br: '200 оголошень'},
        ],
        x : 0,
      }
    },
    methods:{
      prevSlide(){
        console.log(this.slides.length)
        if (this.x < 0){
          this.x += 25.2;
          document.querySelector('.slider').style = `margin-left:${this.x}%`;
        }
        else {
          this.x = -25.2* (this.slides.length-4);
          document.querySelector('.slider').style = `margin-left:${this.x}%`;
        }
      },
      nextSlide(){
        if(this.x <= 0 && this.x > (-25.2 * (this.slides.length - 4))){
          this.x -= 25.2;
          document.querySelector('.slider').style = `margin-left:${this.x}%`;
        }
        else{
          this.x = 0;
          document.querySelector('.slider').style = `margin-left:${this.x}%`;
        }
      },
    }
    
  }
</script>