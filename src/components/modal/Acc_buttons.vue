<template>
  <div class = "w-[100%] rounded-[10px] py-4 px-4 bg-white h-fit ">
    <router-link to="/create">
      <button class = "w-[70%] mx-auto flex justify-center items-center rounded-full bg-accent py-3">
        <p class = "text-white text-xs">Створити оголошення</p>
      </button>
    </router-link>
    <router-link to="/account">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/person_acc1.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Акаунт [Базовий]</p>
      </button>
    </router-link>
    <router-link to="/account">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/moi_acc.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Мої оголошення</p>
      </button>
    </router-link>
    <router-link to="/orders">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/acc_zamovleni.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Мої замовлення</p>
      </button>
    </router-link>
    <router-link to="/chat">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/acc_notifications.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Повідомлення</p>
      </button>
    </router-link>
    <router-link to="/tarif">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/acc_magazine.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Магазин та послуги</p>
      </button>
    </router-link>
    <router-link to="/purse">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/acc_wallet.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Гаманець [0 грн.]</p>
      </button>
    </router-link>
    <router-link to="/settings">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/acc_settings.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Налаштування</p>
      </button>
    </router-link>
    <router-link to="/favorites">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/acc_like.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Вибране</p>
      </button>
    </router-link>
    <router-link to="/subscription">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/acc_podpiski.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Мої підписки</p>
      </button>
    </router-link>
    <router-link to="/account">
      <button class = "w-[95%] mt-4 mx-auto flex items-center space-x-4 px-4 rounded-[10px] border border-opacity-60 border-accent py-2">
        <img src="@/img/acc_leave.svg" alt="" class = "w-[15px]">
        <p class = "text-xs">Вихід</p>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    sendModalStatus() {
      this.$emit("mobileModalStatus", false);
    },
  },
};
</script>
