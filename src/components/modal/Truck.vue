<template>
  <div class="fixed inset-0 z-50">
    <div
      class="fixed inset-0 bg-slate-800 opacity-50"
      @click="sendModalStatus"
    ></div>
    <div
      class="fixed overflow-y-scroll z-50 p-4 pt-[26px] pb-12 lg:px-[80px] xl:px-[135px] inset-x-0 h-[100vh] lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-1/2 lg:min-h-[200px] lg:h-[560px] bg-white lg:rounded-xl flex flex-col items-center lg:gap-y-8 justify-between"
    >
      <button
        class="absolute top-5 left-5 bg-[#f5f5f5] rounded-full flex items-center justify-center lg:hidden w-8 h-8"
        @click="sendModalStatus"
      >
        <img src="../../img/chevron-left.svg" alt="" class="w-4" />
      </button>
      <div
        v-if="card1 || card2"
        class="text-sm font-semibold lg:text-2xl xl:text-3xl"
      >
        Кошик товарів
      </div>
      <div class="w-full mt-4" v-if="card1 || card2">
        <div class="space-y-2.5 w-full">
          <div
            v-if="card1"
            class="flex pt-5 pb-3 pl-3 pr-5 bg-accentLight rounded-lg items-center"
          >
            <div
              class="w-[76px] h-[56px] xl:w-[106px] xl:h-[70px] rounded-xl overflow-hidden"
            >
              <img
                src="../../img/RecCards/p2.png"
                alt=""
                class="object-cover h-full"
              />
            </div>
            <div class="ml-2 w-full">
              <div class="flex justify-between items-center">
                <div class="font-medium text-xs xl:text-sm">
                  Lenovo ideapad 330-15ikb
                </div>
                <button class="" @click="card1 = false">
                  <img src="../../img/X.svg" alt="" class="w-2.5" />
                </button>
              </div>
              <div class="mt-1.5 text-blueText text-xs xl:text-sm font-medium">
                Макс
              </div>
              <div class="mt-2 flex justify-between items-end">
                <div class="flex items-center space-x-1">
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>-</div>
                  </button>
                  <div class="text-xs">1</div>
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>+</div>
                  </button>
                </div>
                <div class="text-xs font-medium xl:text-sm">
                  Итого: 8000 грн.
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="card2"
            class="flex pt-5 pb-3 pl-3 pr-5 bg-accentLight rounded-lg items-center"
          >
            <div
              class="w-[76px] h-[56px] xl:w-[106px] xl:h-[70px] rounded-xl overflow-hidden"
            >
              <img
                src="../../img/RecCards/p2.png"
                alt=""
                class="object-cover h-full"
              />
            </div>
            <div class="ml-2 w-full">
              <div class="flex justify-between items-center">
                <div class="font-medium text-xs xl:text-sm">
                  Lenovo ideapad 330-15ikb
                </div>
                <button class="" @click="card2 = false">
                  <img src="../../img/X.svg" alt="" class="w-2.5" />
                </button>
              </div>
              <div class="mt-1.5 text-blueText text-xs font-medium xl:text-sm">
                Макс
              </div>
              <div class="mt-2 flex justify-between items-end">
                <div class="flex items-center space-x-1">
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>-</div>
                  </button>
                  <div class="text-xs">1</div>
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>+</div>
                  </button>
                </div>
                <div class="text-xs font-medium xl:text-sm">
                  Итого: 8000 грн.
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="card2"
            class="flex pt-5 pb-3 pl-3 pr-5 bg-accentLight rounded-lg items-center"
          >
            <div
              class="w-[76px] h-[56px] xl:w-[106px] xl:h-[70px] rounded-xl overflow-hidden"
            >
              <img
                src="../../img/RecCards/p2.png"
                alt=""
                class="object-cover h-full"
              />
            </div>
            <div class="ml-2 w-full">
              <div class="flex justify-between items-center">
                <div class="font-medium text-xs xl:text-sm">
                  Lenovo ideapad 330-15ikb
                </div>
                <button class="" @click="card2 = false">
                  <img src="../../img/X.svg" alt="" class="w-2.5" />
                </button>
              </div>
              <div class="mt-1.5 text-blueText text-xs font-medium xl:text-sm">
                Макс
              </div>
              <div class="mt-2 flex justify-between items-end">
                <div class="flex items-center space-x-1">
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>-</div>
                  </button>
                  <div class="text-xs">1</div>
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>+</div>
                  </button>
                </div>
                <div class="text-xs font-medium xl:text-sm">
                  Итого: 8000 грн.
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="card2"
            class="flex pt-5 pb-3 pl-3 pr-5 bg-accentLight rounded-lg items-center"
          >
            <div
              class="w-[76px] h-[56px] xl:w-[106px] xl:h-[70px] rounded-xl overflow-hidden"
            >
              <img
                src="../../img/RecCards/p2.png"
                alt=""
                class="object-cover h-full"
              />
            </div>
            <div class="ml-2 w-full">
              <div class="flex justify-between items-center">
                <div class="font-medium text-xs xl:text-sm">
                  Lenovo ideapad 330-15ikb
                </div>
                <button class="" @click="card2 = false">
                  <img src="../../img/X.svg" alt="" class="w-2.5" />
                </button>
              </div>
              <div class="mt-1.5 text-blueText text-xs font-medium xl:text-sm">
                Макс
              </div>
              <div class="mt-2 flex justify-between items-end">
                <div class="flex items-center space-x-1">
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>-</div>
                  </button>
                  <div class="text-xs">1</div>
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>+</div>
                  </button>
                </div>
                <div class="text-xs font-medium xl:text-sm">
                  Итого: 8000 грн.
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="card2"
            class="flex pt-5 pb-3 pl-3 pr-5 bg-accentLight rounded-lg items-center"
          >
            <div
              class="w-[76px] h-[56px] xl:w-[106px] xl:h-[70px] rounded-xl overflow-hidden"
            >
              <img
                src="../../img/RecCards/p2.png"
                alt=""
                class="object-cover h-full"
              />
            </div>
            <div class="ml-2 w-full">
              <div class="flex justify-between items-center">
                <div class="font-medium text-xs xl:text-sm">
                  Lenovo ideapad 330-15ikb
                </div>
                <button class="" @click="card2 = false">
                  <img src="../../img/X.svg" alt="" class="w-2.5" />
                </button>
              </div>
              <div class="mt-1.5 text-blueText text-xs font-medium xl:text-sm">
                Макс
              </div>
              <div class="mt-2 flex justify-between items-end">
                <div class="flex items-center space-x-1">
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>-</div>
                  </button>
                  <div class="text-xs">1</div>
                  <button
                    class="flex items-center justify-center border border-gray w-4 h-4 rounded-md"
                  >
                    <div>+</div>
                  </button>
                </div>
                <div class="text-xs font-medium xl:text-sm">
                  Итого: 8000 грн.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="card1 || card2"
        class="mx-auto mt-10 py-2.5 px-6 bg-accent rounded-3xl text-xs text-white font-medium w-max xl:text-sm xl:py-3.5 xl:px-11"
      >
        Оформити замовлення
      </div>

      <div
        v-if="card1 === false && card2 === false"
        class="lg:hidden text-sm font-semibold"
      >
        Кошик товарів
      </div>
      <div
        v-if="card1 === false && card2 === false"
        class="h-full flex flex-col justify-center gap-y-4 lg:gap-0 lg:justify-between items-center pt-4"
      >
        <div class="text-[13px] font-medium text-center lg:text-[28px]">
          Кошик порожній
        </div>
        <div class="h-[30%] lg:h-[80%]">
          <img src="../../img/truck.svg" alt="" class="h-full" />
        </div>
        <div class="text-xs lg:text-[20px] text-center">
          Але це ніколи не пізно виправити:)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendModalStatus() {
      this.$emit("modalStatus", false);
    },
  },
  data() {
    return {
      card1: true,
      card2: true,
    };
  },
};
</script>
