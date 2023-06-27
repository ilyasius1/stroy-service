<template>
  <section class="ss-categories">
    <ssSectionHeader>Строительство любого типа и сложности </ssSectionHeader>
    <div class="ss-categories__items">
      <SsCategory
        v-for="(category, key) in getCategories"
        :key="key"
        :category="category"
      />
    </div>
  </section>
</template>
<script src="./ss-categories.js"></script>
