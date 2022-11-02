<template>
  <section class="text-dark 2xl:max-w-[1440px] 2xl:mx-auto">
    <Head></Head>
    <Banner></Banner>
    <Recomendation></Recomendation>
    <Advan></Advan>
    <Magazini></Magazini>
    <RecCards></RecCards>
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
    return {};
  },
};
</script>
