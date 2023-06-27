<template>
  <div class="ss-category">
    <router-link :to="`/project/${category.id}`" class="ss-category__view-more">
      <div class="ss-category__top">
        <img :src="category.imgSrc" alt="" class="ss-category__image" />
        <p class="ss-category__text">{{ category.name }}</p>
      </div>
    </router-link>
    <router-link :to="`/project/${category.id}`" class="ss-category__view-more"
      ><SsBtn class="ss-category__btn">Смотреть подробнее</SsBtn></router-link
    >
  </div>
</template>
<script src="./ss-category.js"></script>
