<template>
  <SsHeader />
  <main>
    <SsBtn
      @click="
        openModal({
          header: 'Заказать звонок',
          isPhoneCallRequest: true
        })
      "
      class="ss-btn--callback-mob"
      >Заказать звонок 8 800 101 62 34</SsBtn
    >
    <router-view />
  </main>
  <SsContacts />
  <SsFooter />
  <SsModal v-if="isModalOpen" />
</template>
<script src="./app.js"></script>

<style lang="scss">
@import '@assets/scss/main.scss';
</style>
