<template>
  <section class = "mt-10">
    <img src="@/img/Баннер.png" alt="" class = "w-full">
    <div class = "grid grid-cols-9 mt-10">
      <div class = "mx-auto text-center">
        <div class = "w-[100px] h-[100px] bg-white rounded-full rec">
        </div>
        <div v-for="rec in recomendation">{{ rec }}</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    data(){
      return {
        recomendation:['qwe']
      }
    }
  }
</script>