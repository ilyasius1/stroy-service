// import dataCategories from '@/store/test-data/d-categories.js';
import API from "@/store/helpers/api";

export default {
  state: {
    categories: {},
    category: {},
    isLoaded: false,
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getCategory(state) {
      return state.category;
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_CATEGORY(state, category) {
      state.category = category;
    },
    SET_IS_LOADED(state, isLoaded) {
        state.isLoaded = isLoaded;
    },
  },
  actions: {
    async fetchCategories(ctx) {
      ctx.commit('SET_IS_LOADED', false);
      const categories = await API('get-category');
      await ctx.commit('SET_CATEGORIES', categories);
      ctx.commit('SET_IS_LOADED', true);
    },
    async fetchCategory(ctx, id) {
      ctx.commit('SET_IS_LOADED', false);
      const category = await API('get-category',id);
      await ctx.commit('SET_CATEGORY', category);
      await ctx.commit('SET_IS_LOADED', true);
    },
  },
};
