<template>
  <Head></Head>
  <Banner></Banner>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div class = "flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
      <p class = "font-normal sm:text-sm text-[11px]">Служба підтримки</p>
      <img src="@/img/catalog.svg" alt="" class = "w-[18px] h-[18px] sm:hidden absolute right-0">
    </div>
    <div class = "lg:flex gap-x-5 relative">
      <div class = "lg:w-[25%] w-full sm:px-9 md:px-12 lg:px-2 lg:py-3 pb-3 lg:bg-pink rounded-[10px] h-fit xl:text-sm text-center sm:text-[14px] text-[12px]">
        <button class = "bg-white rounded-[10px] border-main border w-full">
          <p class = " px-1">Блог</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-2 w-full">
          <p class = "px-1">Про нас</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Контакти</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Безпечна угода</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Угода користувача</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Договір-оферта</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Дропшипінг</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Політика конфіденційності</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Правила подання оголошень</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Пропозиції для покращення сайту</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Заборонені публікації та товари</p>
        </button>
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full">
          <p class = "px-1">Політика використання файлів cookie</p>
        </button>
        <button class = "w-full py-3"><img src="@/img/support.svg" alt="" class="w-fit mx-auto"></button>
      </div>
      <div class = "lg:w-[85%] w-full lg:pt-2">
        <h1 class = "lg:text-3xl md:text-xl text-base font-medium">Питання до служби підтримки</h1>
        <div class = "md:text-sm text-xs w-full md:my-9 sm:my-6 my-3">
          <div class = "w-full md:px-12 md:py-8 sm:px-6 sm:py-4 md:bg-white rounded-[10px]">
            <p class = "lg:text-xl sm:text-base text-sm mb-4">Часто задавані питання</p>
            <div class = "bg-pink rounded-[10px] px-3 py-5 relative">
              <p class = "font-medium mb-2">Як найшвидше продати товар?</p>
              <p>Виділити своє оголошення із загальної  маси дуже просто, для цього ви можете підкоючити до свого оголошення платну послугу або пакет послуг <span class = "text-blue"> Турбо продаж </span> ваше оголошення буде піднято у стрічці та виділено маркером, ви точно не пропустите свого покупця!</p>
              <img src="@/img/strelka_up.svg" alt="" class = "w-fit absolute top-5 right-3">
            </div>
            <div class = "bg-pink rounded-[10px] px-3 py-4 relative my-5">
              <p class = "font-medium">Моє оголошення заблоковане</p>
              <img src="@/img/strelka_down.svg" alt="" class = "w-fit absolute top-5 right-3">
            </div>
            <div class = "bg-pink rounded-[10px] px-3 py-4 relative my-5">
              <p class = "font-medium">Мій обліковий запис заблокований адміністрацією</p>
              <img src="@/img/strelka_down.svg" alt="" class = "w-fit absolute top-5 right-3">
            </div>
            <div class = "bg-pink rounded-[10px] px-3 py-4 relative my-5">
              <p class = "font-medium">Чому для мого товару недоступна безпечна угода?</p>
              <img src="@/img/strelka_down.svg" alt="" class = "w-fit absolute top-5 right-3">
            </div>
            <div class = "bg-pink rounded-[10px] px-3 py-4 relative my-5">
              <p class = "font-medium">Протягом якого часу здійснюється повернення коштів за безпечною угодою?</p>
              <img src="@/img/strelka_down.svg" alt="" class = "w-fit absolute top-5 right-3">
            </div>
            <p class = "lg:text-xl sm:text-base text-sm mb-4">Не знайшли відповідь? Напишіть нам!</p>
            <div class = "md:flex block md:w-[70%] w-full items-center gap-x-2">
              <div class = "md:w-[40%] md:my-0 w-full my-4">
                <p>Виберіть тему звернення (повідомлення)</p>
              </div>
              <div class = "md:w-[70%] w-full ">
                <div class = "bg-pink w-full px-3 py-4 rounded-[10px] relative">
                  <p class = "text-gray">Не обрано</p>
                  <img src="@/img/strelka_down.svg" alt="" class = "w-fit absolute top-5 right-3">
                </div>
              </div>
            </div>
            <div class = "md:flex block md:w-[70%] w-full gap-x-2 items-center my-5">
              <div class = "md:w-[40%] md:my-0 w-full my-4">
                <p>Звернення</p>
              </div>
              <div class = "md:w-[70%] w-full ">
                <div class = "bg-pink w-full h-28  rounded-[10px] relative">

                </div>
              </div>
            </div>
            <div class = "md:flex block md:w-[70%] w-full gap-x-2 items-center my-5">
              <div class = "md:w-[40%] md:my-0 w-full my-4">
                <p>Як до Вас можно звертатись? </p>
              </div>
              <div class = "md:w-[70%] w-full ">
                <div class = "bg-pink w-full h-11 rounded-[10px] relative">

                </div>
              </div>
            </div>
            <div class = "md:flex block md:w-[70%] w-full gap-x-2 items-center my-5">
              <div class = "md:w-[40%] md:my-0 w-full my-4">
                <p>Пошта, на яку ми відповімо</p>
              </div>
              <div class = "md:w-[70%] w-full ">
                <div class = "bg-pink w-full h-11 rounded-[10px] relative">

                </div>
              </div>
            </div>
            <div class = "md:flex block md:w-[70%] w-full gap-x-2 items-center my-5">
              <div class = "md:w-[40%] md:my-0 w-full my-4">
                <p>Вкажіть код перевірки</p>
              </div>
              <div class = "w-[90%] flex gap-x-9 h-11">
                <img src="@/img/code.svg" alt="" class = "lg:w-fit sm:w-1/2 w-1/3 ">
                <div class = "bg-pink xl:w-1/4 lg:w-1/3 w-1/2 h-11 rounded-[10px]">
                </div>
              </div>
            </div>
            <div class= "w-full flex justify-center">
              <button class = "bg-accent w-fit px-4 py-3 text-white rounded-full "><span> Надіслати звернення</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Head from '@/components/Head.vue';
  import Banner from '@/components/Banner.vue';
  import Footer from '@/components/Footer.vue';
  export default{
    components:{
      Head,
      Banner,
      Footer,
    }
  }
</script>