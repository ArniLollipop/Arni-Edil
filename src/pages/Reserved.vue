<template>
  <Head></Head>
  <Banner></Banner>
  <section class="2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div
      class="flex items-center justify-between gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1"
    >
      <div class="flex items-center gap-x-1">
        <p class="font-normal sm:text-sm text-[11px]">Головна</p>
        <img src="@/img/Blog_right.svg" alt="" class="w-[10] h-[10]" />
        <p class="font-normal sm:text-sm text-[11px] hidden sm:block">
          Заборонені до публікації товари та послуги
        </p>
        <p class="font-normal sm:text-sm text-[11px] sm:hidden">
          Заборонені до публікації т...
        </p>
      </div>
      <div class="flex items-center">
        <div @click="isMobileMenuOpen = !isMobileMenuOpen">
          <div v-if="!isMobileMenuOpen">
            <img
              src="@/img/catalog.svg"
              alt=""
              class="w-[18px] h-[18px] lg:hidden cursor-pointer"
            />
          </div>
          <div v-if="isMobileMenuOpen">
            <img
              src="@/img/modal_x.svg"
              alt=""
              class="w-[18px] h-[18px] lg:hidden cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
    <Acc_buttonsVue
      v-if="isMobileMenuOpen"
      @mobileModalStatus="acceptMobileModalStatus"
      class=""
    ></Acc_buttonsVue>
    <div
      class="md:flex md:space-x-10 text-main"
      v-show="!isMobileMenuOpen"
      @mobileModalStatus="acceptMobileModalStatus"
    >
      <div class="lg:flex gap-x-5 relative">
        <div
          class="lg:w-[25%] w-full sm:px-9 md:px-12 lg:px-2 py-3 lg:bg-pink rounded-[10px] h-fit xl:text-sm text-center sm:text-[14px] text-[12px] lg:pt-2"
        >
          <h1
            class="lg:text-3xl md:text-[20px] sm:text-base text-[14px] font-medium text-start lg:relative lg:hidden lg:mb-5 mb-2 h-fit"
          >
            Заборонені до публікації товари/послуги відповідно до законодавства
            України на дошці Вамбері
          </h1>
          <router-link to="/blog">
            <button class="bg-white rounded-[10px] border-main border w-full">
              <span class="px-1">Блог</span>
            </button>
          </router-link>
          <router-link to="/aboutUs">
            <button
              class="bg-white rounded-[10px] border-main border my-2 w-full"
            >
              <span class="px-1">Про нас</span>
            </button>
          </router-link>
          <router-link to="/contacts">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Контакти</span>
            </button>
          </router-link>
          <router-link to="/agree">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Безпечна угода</span>
            </button>
          </router-link>
          <router-link to="/ugoda">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Угода користувача</span>
            </button>
          </router-link>
          <router-link to="/dogovor">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Договір-оферта</span>
            </button>
          </router-link>
          <router-link to="/dropshipping">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Дропшипінг</span>
            </button>
          </router-link>
          <router-link to="/politika">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Політика конфіденційності</span>
            </button>
          </router-link>
          <router-link to="/rules">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Правила подання оголошень</span>
            </button>
          </router-link>
          <router-link to="/suggest">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Пропозиції для покращення сайту</span>
            </button>
          </router-link>
          <router-link to="/reserved">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full shadow-md shadow-accent"
            >
              <span class="px-1">Заборонені публікації та товари</span>
            </button>
          </router-link>
          <router-link to="/coockie">
            <button
              class="bg-white rounded-[10px] border-main border my-1 w-full"
            >
              <span class="px-1">Політика використання файлів cookie</span>
            </button>
          </router-link>
          <router-link to="/support">
            <button class = "w-full py-3"><img src="@/img/support.svg" alt="" class="w-fit mx-auto sm:block hidden">
              <img src="@/img/support_accent.svg" alt="" class="w-fit mx-auto sm:hidden">
            </button>
          </router-link>
        </div>
        <div class="lg:w-[85%] w-full lg:pt-2">
          <h1
            class="lg:text-3xl md:text-[20px] sm:text-base text-xs font-medium lg:text-start lg:relative absolute top-0 lg:mb-5 mb-2 h-fit lg:block hidden"
          >
            Заборонені до публікації товари/послуги відповідно до законодавства
            України на дошці Вамбері
          </h1>
          <div class="md:text-sm text-xs w-[94%] relative">
            <p class="lg:mt-6 sm:mt-3 mt-2">
              озброєння, боєприпаси щодо нього, військова техніка, запасні
              частини, комплектуючі вироби та прилади до них; вогнепальна та
              холодна зброя, у тому числі мисливська (включаючи мисливські
              ножі), пневматичну, страйкбольну, пейнтбольну та інше, а також
              комплектуючі вироби до неї, копії колекційної зброї, ножі (за
              винятком кухонних, складаних, канцелярських);
            </p>
            <p>
              вибухові речовини; відходи вибухових речовин; засоби підривання;
            </p>
            <p>
              отруйні речовини, засоби захисту від них та нормативно-технічна
              документація на їх виробництво та використання;
            </p>
            <p>
              всі види ракетного палива, спеціальні матеріали та обладнання для
              їх виробництва, спеціальне спорядження особового складу
              воєнізованих організацій та нормативно-технічна продукція на їх
              виробництво та експлуатацію;
            </p>
            <div class="hidden lg:block">
              <p>
                рентгенівське обладнання, радіоактивні речовини, відходи
                радіоактивних матеріалів, прилади та обладнання з використанням
                радіоактивних речовин та ізотопів, урану та інші матеріали, що
                діляться, та вироби з них;
              </p>
              <p>
                результати науково-дослідних та проектних робіт, а також
                фундаментальних пошукових досліджень щодо створення озброєння та
                військової техніки, шифрувальної техніки та нормативно-технічної
                документації на її виробництво та використання;
              </p>
              <p>
                наркотичні засоби та психотропні речовини, їх прекурсори,
                речовини, що змінюють свідомість та психіку, отрути;
              </p>
              <p>
                порнографічні матеріали; послуги та/або робота
                інтимного/еротичного/сексуального характеру;
              </p>
              <p>контрафактні товари та крадене майно;</p>
              <p>
                матеріали, що порушують таємницю приватного життя, посягають на
                честь, гідність та ділову репутацію громадян та юридичних осіб;
                матеріали, що містять державну, банківську, комерційну таємницю;
              </p>
              <p>
                товари, які підлягають обов'язковій сертифікації, за відсутності
                сертифікатів;
              </p>
              <p>
                послуги/товари, якщо така діяльність підлягає ліцензуванню (для
                зайняття певною діяльністю потрібна наявність спеціальних
                дозволів), за відсутності ліцензії (спеціального дозволу);
              </p>
              <p>підроблені грошові знаки;</p>
              <p>
                іноземна валюта та інші валютні цінності, монети та банкноти
                України, що перебувають у обігу (за винятком їх купівлі-продажу
                для нумізматичних цілей).
              </p>
              <p>
                державні нагороди СРСР та України, персональні документи, а
                також бланки цих документів;
              </p>
              <p>акції та інші цінні папери;</p>
              <p>
                чинні або чинні державні посвідчення особи, знаки, перепустки,
                дозволи, сертифікати та ліцензії; проїзні документи, інші
                документи, що надають права або звільняють від прав/обов'язків;
              </p>
              <p>
                готові дипломні роботи та курсові роботи, дипломи, сертифікати
                та інші документи, що підтверджують наявність освіти,
                підготовки, навичок лікарські препарати, лікарські трави,
                біоактивні добавки, у тому числі спортивне харчування,
                ізотонічні напої, засоби для схуднення, вітаміни,
                ботокс-препарати, вироби медичного призначення, для використання
                яких потрібна спеціальна підготовка; медична техніка; лікарська
                сировина, що отримується від північного оленів (панти та
                ендокринна сировина).
              </p>
              <p>
                етиловий спирт, спиртні напої та тютюн, курильні суміші,
                кальяни, електронні сигарети та витратні матеріали до них;
              </p>
              <p class="lg:my-6 sm:my-3 my-2">
                людські органи та тканини, донорські послуги (здам/куплю
                кров/сперму тощо);
              </p>
              <p>послуги сурогатних матерів (пошук та пропозиція);</p>
              <p>
                дорогоцінні метали, відходи, що містять дорогоцінні та
                рідкоземельні метали; ікла моржа, бивні слона і мамонта,
                дорогоцінне каміння над виробі;
              </p>
              <p>
                тварини та птиці, занесені до Червоної книги України та Червоні
                книги суб'єктів України, а також тварини та рослини, що
                охороняються міжнародними договорами України;
              </p>
              <p>
                рибальські мережі, електровудки, капкани, матеріали для їх
                виготовлення, а також послуги з їх виготовлення;
              </p>
              <p>
                екстремістські матеріали, матеріали, що закликають до масових
                заворушень, здійснення терористичної діяльності та
                екстремістської діяльності, до участі в масових публічних
                заходах, розпалювання міжнаціональної та міжконфесійної
                ворожнечі, предмети з нацистською символікою.
              </p>
              <p>
                спамерські основи; бази даних, що містять у собі конфіденційну
                інформацію (наприклад: з нерухомості, бази E-mail – адрес,
                телефонів, адрес реєстрації та т.п.);
              </p>
              <p>
                документи на транспортні засоби; державні номери на транспортні
                засоби;
              </p>
              <p>
                послуги із заміни ліцензійного програмного забезпечення або
                порушення роботи встановлених правовласником засобів технічного
                захисту телефонів, смартфонів, ноутбуків, навігаторів,
                персональних комп'ютерів та ін. (у тому числі прошивка, unlock,
                jailbreak та ін.);
              </p>
              <p>
                облікові записи електронної пошти, соціальних мереж, блогів та
                форумів, систем миттєвого обміну повідомленнями, ігор, а також
                інших ресурсів та сервісів;
              </p>
              <p>колекторські та антиколекторські послуги;</p>
              <p>
                трансцендентні послуги, метою яких є заподіяння будь-якої шкоди
                (чаклунство, псування, приворот);
              </p>
              <p>
                інші товари/послуги, що суперечать чинному законодавству України
                та розцінюються чинним законодавством України як вилучені з
                обігу або обмежені в обігу;
              </p>
              <p>
                забороняються до розміщення оголошення, що містять у собі
                заклики до насильства та протиправних дій; заняття проституцією;
                дискримінацію за національною, расовою, релігійною, статевою та
                іншими ознаками; ненормативну лексику; образливі висловлювання,
                у тому числі Українського та релігійного характеру; шахрайство
                та вимагання.
              </p>
              <p>
                Власник залишає за собою право на доповнення та зміну списку
                заборонених до публікації товарів/послуг.
              </p>
            </div>
          </div>
          <button
            class="text-[10px] sm:text-[12px] underline decoration-dashed underline-offset-4 block md:hidden float-right pb-3 hover:text-accent"
          >
            Читати далі
          </button>
        </div>
      </div>
    </div>
  </section>
  <MobileMenu></MobileMenu>
  <Footer></Footer>
</template>

<script>
import Head from "@/components/Head.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Mobilemenu from "@/components/MobileMenu.vue";
import Acc_buttonsVue from "@/components/modal/Acc_buttons.vue";
export default {
  components: {
    Head,
    Banner,
    Footer,
    Mobilemenu,
    Acc_buttonsVue,
  },
  data() {
    return {
      isCategoryOpen: false,
      isTruckOpen: false,
      isMobileMenuOpen: false,
    };
  },
  methods: {
    acceptModalStatus(data) {
      this.isTruckOpen = data;
    },
    acceptMobileModalStatus(data) {
      this.isMobileMenuOpen = data;
    },
  },
};
</script>
