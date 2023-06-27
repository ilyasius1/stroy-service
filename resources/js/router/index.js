import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import ProjectPage from '@/pages/ProjectPage/ProjectPage.vue';
import HousePage from '@/pages/HousePage/HousePage.vue';
import PageNotFound from "@/pages/PageNotFound.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/project/:id',
    name: 'project',
    props: (route) => ({ id: route.params.id }),
    component: ProjectPage,
  },
  {
    path: '/house/:id',
    name: 'house',
    props: (route) => ({ id: route.params.id }),
    component: HousePage,
  },
  // {
  //   path: '*',
  //   name: 'notFound',
  //   component: PageNotFound,
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
