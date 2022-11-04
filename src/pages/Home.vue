<template class = "">
  <section class="text-dark 2xl:max-w-[1400px] 2xl:mx-auto">
    <Head></Head>
    <Banner></Banner>
    <Recomendation></Recomendation>
    <Advan></Advan>
    <Magazini></Magazini>
    <RecCards :cards="cards"></RecCards>
    <Information></Information>
  </section>
  <MobileMenu></MobileMenu>
  <Footer></Footer>
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
        },
        {
          id: 5,
          pretitle: "Безпечна угода",
          title: "Lenovo ideapad 330-15ikb",
          image: "p2.png",
          subtitle: "У наявності",
          subtitleColor: false,
          price: "1",
          lastPrice: "",
          status: "Нове",
          map: "Одесса",
          btnText: "Бізнес",
          date: "27.07.2022",
        },
      ],
    };
  },
};
</script>
