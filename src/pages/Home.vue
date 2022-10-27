<template>
  <section class = "mt-10">
    <img src="@/img/Баннер.png" alt="" class = "w-full">
    <div class="mt-16 grid grid-cols-9 gap-y-3 gap-x-14 md:hidden xl:grid-cols-6 lg:gap-x-2 xl:gap-y-5">
      <div class = "mx-auto text-center text-base w-[130px]" v-for="rec in recomendation" >
        <div class = "py-8 px-8 bg-white rounded-full flex items-center justify-center">
          <img :src="rec.image" alt="" class = "">
        </div>
        <a href = "#" class = "hover:text-accent">{{ rec.title }}</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    data(){
      return {
        recomendation:[
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
          {title: 'Дитячі товари', image: '@/img/Medved.svg'},
        ],
        images:[
          '@/img/Medved.jpg',
          '@/img/Medved.svg'
        ]
      }
    }
  }
</script>