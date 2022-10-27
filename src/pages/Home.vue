<template>
  <section class = "mt-10">
    <img src="@/img/Баннер.png" alt="" class = "w-full">
    <div class="mt-16 grid grid-cols-9 gap-y-3 gap-x-14 md:hidden xl:grid-cols-6 lg:gap-x-2 xl:gap-y-5">
      <div class = "mx-auto text-center text-base w-[130px]" v-for="rec in recomendation" >
        <div v-for="source in list_of_images" :rec="source">
          <img :src="source.image" alt="">
        </div>
        <a href = "#" class = "hover:text-accent">{{ rec }}</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    data(){
      return {
        list_of_images : [
          {id:1, image : '@/img/Medved.jpg'}
        ],
        recomendation:['Дитячі товари', 'Нерухомість', 'Для дому та комерції', 'Робота', 'Послуги та фріланс', 'Авто', 'Запчастини для транспорту', 'Тварини', 'Електроніка', 'Допомога', 'Спорт і відпочинок', 'Обладнання та сировина', 'Будматеріали та інструменти', 'Мода та стиль', 'Краса і здоров’я', 'Обмін', 'Для бізнесу', 'Хобі та розваги']
      }
    }
  }
</script>