<template class="">
  <div class = "bg-back2">
    <section class="text-dark 2xl:max-w-[1400px] 2xl:mx-auto">
      <Head :kolMessage="kolMessage"></Head>
      <Banner></Banner>
      <Recomendation></Recomendation>
      <Advan></Advan>
      <Magazini></Magazini>
      <RecCards :cards="cards"></RecCards>
      <Information></Information>
    </section>
    <MobileMenu></MobileMenu>
    <Footer></Footer>
  </div>
</template>

<script>
import Advan from "@/components/Home_compponents/Advantages.vue";
import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import Magazini from "@/components/Home_compponents/Magazini.vue";
import Recomendation from "@/components/Home_compponents/Recomendation.vue";
import RecCards from "@/components/Home_compponents/RecCards.vue";
import Information from "@/components/Home_compponents/Information.vue";
import Banner from "@/components/Banner.vue";
export default {
  components: {
    Head,
    Footer,
    Advan,
    Magazini,
    RecCards,
    Recomendation,
    Information,
    Banner,
    MobileMenu,
  },
  data() {
    return {
      kolMessage: "2",
      cards: [
        {
          id: 1,
          pretitle: "",
          title: "Тест",
          image: "p1.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 2,
          pretitle: "Безпечна угода",
          title: "Lenovo ideapad 330-15ikb",
          image: "p2.png",
          subtitle: "Під замовлення",
          subtitleColor: true,
          price: "8000",
          lastPrice: "10000",
          status: "Б/У",
          map: "Одесса",
          btnText: "Б/У",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 3,
          pretitle: "",
          title: "Стеллаж с полками, в стиле лофт",
          image: "p3.svg",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 4,
          pretitle: "Безпечна угода",
          title: "Lenovo ideapad 330-15ikb",
          image: "p4.svg",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
        {
          id: 5,
          pretitle: "Безпечна угода",
          title: "Продам дерево обрабатывающий центр чпу, ROVER 342",
          image: "p_5.svg",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "400,000",
          lastPrice: "600,000 ",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
          isLike: false,
        },
      ],
    };
  },
};
</script>
