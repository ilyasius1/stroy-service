<template>
    <div class="ss-page-not-found container">
        <h1 class="ss-page-not-found__title">404</h1>
        <h2 class="ss-page-not-found__desc">Страница не найдена</h2>
        <p class="ss-page-not-found__text">Страница, которую вы ищите, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке.</p>
        <router-link to='/' class='ss-btn ss-btn--green ss-page-not-found__btn'>Вернуться на главную</router-link>
    </div>
</template>

<script>
export default {
    name: "PageNotFound"
}
</script>

<style scoped>

</style>
