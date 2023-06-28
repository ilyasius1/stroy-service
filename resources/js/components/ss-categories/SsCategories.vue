<template>
  <section class="ss-categories">
    <ssSectionHeader>Строительство любого типа и сложности </ssSectionHeader>
    <SsLoader v-if="loading" />
    <div class="ss-categories__items" v-if='!loading && !hasError'>
      <SsCategory
        v-for="(category, key) in getCategories"
        :key="key"
        :category="category"
      />
    </div>
    <SsNetworkError v-if='hasError'/>
  </section>
</template>
<script src="./ss-categories.js"></script>

