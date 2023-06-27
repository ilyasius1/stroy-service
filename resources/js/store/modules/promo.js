import dataPromo from '@/store/test-data/d-promo.js';
import API from "@/store/helpers/api";
export default {
  state: {
    promo: [],
    isLoaded: false,
  },
  getters: {
    getPromo(state) {
      return state.promo;
    },
  },
  mutations: {
    SET_PROMO(state, promo) {
      state.promo = promo;
    },
      SET_IS_LOADED(state, isLoaded) {
          state.isLoaded = isLoaded;
      },
  },
  actions: {
    async fetchPromo(ctx) {
        ctx.commit('SET_IS_LOADED', false);
        const promo = await API();
      ctx.commit('SET_PROMO', promo);
        ctx.commit('SET_IS_LOADED', true);
    },
  },
};
