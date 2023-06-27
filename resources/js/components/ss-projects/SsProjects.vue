<template>
  <SsSectionHeader>Выберите Ваш будущий проект</SsSectionHeader>
  <SsLoader v-if="loading" />
  <div class="ss-projects__items" v-if="gi!loading">
    <SsProject
      v-for="(project, key) in getProjects"
      :key="key"
      :project="project[0]"
    />
  </div>
</template>
<script src="./ss-projects.js"></script>
