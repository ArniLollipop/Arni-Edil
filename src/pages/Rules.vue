<template>
  <Head></Head>
  <Banner></Banner>
  <section class = "2xl:w-[1400px] 2xl:mx-auto mx-auto px-4 py-4 text-dark">
    <div class = "flex items-center gap-x-1 pb-4 relative lg:my-6 md:my-4 my-1">
      <p class = "font-normal sm:text-sm text-[11px]">Головна</p>
      <img src="@/img/Blog_right.svg" alt="" class = "w-[10] h-[10]">
      <p class = "font-normal sm:text-sm text-[11px]">Правила подання оголошень</p>
      <img src="@/img/catalog.svg" alt="" class = "w-[18px] h-[18px] sm:hidden absolute right-0">
    </div>
    <div class = "lg:flex gap-x-5 relative w-full">
      <div class = "lg:w-[25%] w-full sm:px-9 md:px-12 lg:px-2 py-3 lg:bg-pink rounded-[10px] h-fit xl:text-sm text-center sm:text-[14px] text-[12px] lg:pt-2 sm:pt-14 pt-12">
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
        <button class = "bg-white rounded-[10px] border-main border my-1 w-full shadow-md shadow-accent">
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
        <h1 class = "lg:text-3xl md:text-[20px] sm:text-base text-[14px] font-medium text-center lg:text-start lg:relative absolute top-0 lg:mb-5 mb-2 h-fit">Дотримуйтесь правил подачі оголошень. на сайті Vamberi</h1>
        <div class = "md:text-sm text-[12px] w-[94%]">
          <p class = "">При реєстрації на даному сайті Користувач погоджується з цими правилами* та приймає на себе вказані у них права та обов'язки, пов'язані з поданням оголошень на сайт.</p>
          <p class = "my-1">Увага! Дані правила відносяться як до безкоштовних, так і до платних оголошень (Преміум, VIP оголошення), які публікуються на сайті https://vamberi.com.ua. Сплачені оголошення також можуть бути заблоковані під час виявлення порушень.</p>
          <p class = "my-1">За наявності інформації про те, що розміщені оголошення порушують правила Сайту, чинне законодавство та/або права третіх осіб, https://vamberi.com.ua має право в будь-який момент перевірити та/або видалити такі оголошення, а також обмежити дії Користувача, який розмістив ці оголошення на сайті.</p>
          <p class = "my-1">Адміністрація сайту залишає за собою право відмовити в публікації оголошення при систематичному порушенні Користувачем правил сайту та підтвердженні скарг на оголошення від інших користувачів.</p>
          <div class = "hidden lg:block">
            <div>
              <p class = "font-medium md:text-sm text-[12px] mt-4">Загальні положення</p>
              <ul>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Зміст рекламних оголошень не має суперечити закону України</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не розміщуйте https://vamberi.com.uaservices/prohibited товари та послуги.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Забороняються до публікації оголошення від користувачів, які не мають пропонованого об'єкта/послуги, або не мають документально підтвердженого права на здійснення юридичної угоди.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Користувач може мати лише одну реєстрацію (обліковий запис) на сайті. Не реєструйтесь повторно на інший e-mail.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не подавайте одне й те саме оголошення (про пропозицію одного і того ж товару чи послуги) повторно, незалежно від того, чи розміщуєте ви їх у різних регіонах чи категоріях.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Розміщуйте один певний товар/послуги в одному оголошенні. Виняток становить пропозиція «комплекту», що продається/здається цілком, із зазначенням ціни за весь комплект.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не розміщуйте оголошення загального рекламного характеру, оголошення про рекламу інтернет-ресурсів (порталів, форумів, сайтів знайомств тощо), бізнесу (магазинів, компаній).</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не розміщуйте оголошення з проханням про матеріальну допомогу, збирання коштів на лікування, прийняття в дар та ін.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не допускаються до публікації оголошення, що містять свідомо неправдиву інформацію, рекламу фінансових «пірамід» та інші сумнівні способи отримання доходу.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Вибирайте розділ, що максимально відповідає тематиці Вашого оголошення, а також регіон, що відповідає фактичному місцезнаходження вашого товару.</li>
                <p class = "md:ml-3 ml-2 my-1">Наприклад: "1-кімн. Квартира в Києві", регіон, вказаний в оголошенні, має бути Київ, а не Харків, і т.д.</p>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Якщо Ваша пропозиція не актуальна, то обов'язково знімайте оголошення з публікації відразу після здійснення угоди.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Оголошення приймаються до публікації тільки російською та українською мовами та написані кирилицею, виняток складає рубрика «Робота», оголошення в якій можуть бути розміщені англійською мовою.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Оголошення мають відповідати нормам російської та української мови, тобто в них не повинно бути орфографічних, пунктуаційних та стилістичних помилок.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не допускається реклама, в якій відсутня частина суттєвої інформації про товар, що рекламується, про умови його придбання або використання, якщо при цьому спотворюється зміст інформації і вводяться в оману споживачі реклами.</li>
              </ul>
            </div>
            <div>
              <p class = "font-medium md:text-sm text-[12px] mt-4">Вимоги до заповнення полів оголошення:</p>
              <ul>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Заголовок</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Заголовок оголошення має відповідати його змісту.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не використовуйте запитання, оклику та інші знаки, що повторюються, а також слова, що привертають увагу, наприклад, «Терміново!!!», «Продам!», «Куплю!», «Вигідна пропозиція» тощо.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не вказуйте контактну інформацію (номер телефону, фізичну/юридичну/електронну адресу (e-mail), назву сайту (посилання), ICQ, skype, назву компанії тощо).</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не пишіть заголовок верхнім регістром, виняток становлять перші літери великих слів та власних назв. Цілком у верхньому регістрі можуть бути написані лише абревіатури. Приклад неправильного написання: «ТЕРМІНОВО КУПЛЮ IPHONE 11 PRO MAX».</li>
              </ul>
            </div>
            <div>
              <p class = "font-medium md:text-sm text-[12px] mt-4">Опис</p>
              <ul>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Оголошення має містити максимально докладну інформацію про конкретний товар/послугу, яку Ви пропонуєте/шукаєте. Допустимо вказівку супутньої інформації: умов та варіантів придбання, доставки, інформації про знижки та подарунки, встановлення та монтаж товару, що купується, та ін.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не допускається опис можливостей предмета продажу, що має рекламний характер.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Текст оголошення не повинен містити контактну інформацію (номер телефону, фізичну/юридичну/електронну адресу (e-mail), назву сайту (посилання), ICQ, skype тощо).</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не допускається використання верхнього регістру, крім перших літер великих слів і власних назв.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Неприпустимим є використання в описі ключових слів для полегшення пошуку оголошень продавця, перерахування кількох товарів, розміщення прайс-листів.</li>
              </ul>
            </div>
            <div>
              <p class = "font-medium md:text-sm text-[12px] mt-4">Ціна</p>
              <ul>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Ціна має відповідати фактичній ціні об'єкта/послуги.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Ціна має бути цілим числом, не допускається вказівка ​​слів, що замінюють ціну (Наприклад, «дорого», «недорого», «символічна ціна» тощо).</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Ціна має бути вказана за весь предмет продажу/оренди. (Наприклад, при продажу предмета на виплат, ціна повинна бути вказана повністю, а не залежно від терміну розстрочки платежу. Вкажіть інформацію про розстрочку в тексті.)</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Не вказуйте ціну в заголовку або текст оголошення - для цього є окреме поле.</li>
              </ul>
            </div>
            <div>
              <p class = "font-medium md:text-sm text-[12px] mt-4">Фотографії</p>
              <ul>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Фото, що демонструє товар/послугу, пропоновані Вами, має відповідати заголовку та тексту оголошення.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Фотографія не може містити елементи інтерфейсу користувача, абстрактні малюнки, рамки та інші деталі, намальовані за допомогою графічних редакторів.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Фото не повинно містити колаж як заголовна фотографія, логотип, бренд, копірайт, водяний знак, назви компанії, телефон, E-mail, посилання на сайт і т.д.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Фотографія повинна бути хорошої якості, предмет, що зображується, повинен бути помітним, оптимальний розмір: ширина – 1024 пікселів, висота – 800 пікселів, розмір до 500 Кб.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">На фото допускається утермарк із зображенням ПІБ. Для Інтернет-партнерів може бути використаний утермарк з назвою компанії або логотипом компанії. Вотермарк не повинен займати більше 25% площі фотографії, а також не повинен спотворювати зображення об'єкта.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">В оголошеннях про продаж та купівлю товарів допускається використання лише реальних фотографій пропонованого об'єкту.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Оголошення щодо надання послуг можуть містити будь-які графічні зображення, що підходять за тематикою, але не порушують чиїсь інтелектуальні права.</li>
                <li class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Забороняється використовувати фотографії, що містять зображення алкогольних напоїв, тютюнових виробів, зброї чи інших подібних предметів.</li>
              </ul>
            </div>
            <div class = "mt-6">
              <p>Після розміщення (публікації) оголошення стає видимим для всіх користувачів і перевіряється модератором. Якщо модератор виявить помилку, оголошення буде відхилено з обов'язковим зазначенням причини відхилення.</p>
              <p class ="my-3">Відхилення оголошення — це лише повідомлення про помилку. Автор оголошення може виправити помилку та знову опублікувати оголошення.</p>
              <p class = "md:mt-3 md:text-sm text-[12px] my-1 md:ml-3 ml-2 relative before:absolute before:md:top-2 before:top-[6px] before:md:-left-3 before:-left-[6px] before:w-1 before:h-1 before:bg-dark before:rounded-full">Погоджуючись із цими правилами, Ви також підтверджуєте, що ознайомилися та згодні з наступними розділами «умов та правил» даного сайту.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
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