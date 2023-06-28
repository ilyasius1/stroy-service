<template>
    <div>
        <p>Произошла ошибка загрузки данных</p>
        <SsBtn>Повторить</SsBtn>
    </div>
</template>

<script>
import SsBtn from '@/elements/ss-btn/SsBtn.vue';

export default {
    name: 'SsNetworkError',
    components: { SsBtn }
};
</script>

<style scoped>

</style>
