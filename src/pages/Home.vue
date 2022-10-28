<template>
  <Head></Head>
  <section class = "mt-10 px-6 pb-12">
    <img src="@/img/Баннер.png" alt="" class = "w-full h-[200px]">
    <div class="mt-16 grid grid-cols-9 gap-y-3 gap-x-10 md:hidden xl:grid-cols-6 lg:gap-x-2 xl:gap-y-5">
      <div class = "mx-auto text-center text-base w-[130px]" v-for="rec in recomendation" >
        <div class = "px-6 py-8 bg-white rounded-full flex items-center justify-center">
          <img :src="rec.image" alt="" class = "w-[70px] h-[70px]">
        </div>
        <a href = "#" class = "hover:text-accent">{{ rec.title }}</a>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
  import Head from '@/components/Home_compponents/Head.vue'
  import Footer from '@/components/Home_compponents/Footer.vue'
  export default{
    components:{
      Head,
      Footer
    },
    data(){
      return {
        recomendation:[
          {id: 1, title: 'Дитячі товари', image: '@/img/Баннер.png'},
          {id: 1, title: 'Нерухомість', image: '@/img/Баннер.png'},
          {id: 1, title: 'Для дому та комерції ', image: '@/img/Баннер.png'},
          {id: 1, title: 'Робота', image: '@/img/Баннер.png'},
          {id: 1, title: 'Послуги та фріланс', image: '@/img/Баннер.png'},
          {id: 1, title: 'Авто', image: '@/img/Баннер.png'},
          {id: 1, title: 'Запчастини для транспорту', image: '@/img/Баннер.png'},
          {id: 1, title: 'Тварини', image: '@/img/Баннер.png'},
          {id: 1, title: 'Електроніка', image: '@/img/Баннер.png'},
          {id: 1, title: 'Допомога', image: '@/img/Баннер.png'},
          {id: 1, title: 'Спорт і відпочинок', image: '@/img/Баннер.png'},
          {id: 1, title: 'Обладнання та сировина', image: '@/img/Баннер.png'},
          {id: 1, title: 'Будматеріали та інструменти', image: '@/img/Баннер.png'},
          {id: 1, title: 'Мода та стиль', image: '@/img/Баннер.png'},
          {id: 1, title: 'Краса і здоров’я', image: '@/img/Баннер.png'},
          {id: 1, title: 'Обмін', image: '@/img/Баннер.png'},
          {id: 1, title: 'Для бізнесу', image: '@/img/Баннер.png'},
          {id: 1, title: 'Хобі та розваги', image: '@/img/Баннер.png'},
        ],
        images:[
          '@/img/Medved.jpg',
          '@/img/Medved.svg'
        ]
      }
    }
  }
</script>