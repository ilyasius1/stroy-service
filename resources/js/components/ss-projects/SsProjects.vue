<template>
    <section class="ss-projects">
      <SsSectionHeader>Выберите Ваш будущий проект</SsSectionHeader>
      <SsLoader v-if="loading" />
      <div class="ss-projects__items" v-if="!loading && !hasError">
        <SsProject
          v-for="(project, key) in getProjects"
          :key="key"
          :project="project"
        />
      </div>
      <SsNetworkError v-if='hasError'/>
    </section>

</template>
<script src="./ss-projects.js"></script>
