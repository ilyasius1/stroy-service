<template>
  <SsHeader />
  <main>
    <SsBtn
      @click="
        openModal({
          header: 'Заказать звонок',
        })
      "
      class="ss-btn--callback-mob"
      >Заказать звонок +7 777 777 77 77</SsBtn
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
