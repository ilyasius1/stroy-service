import API from "@/store/helpers/api";
export default {
  state: {
    house: null,
    isLoaded: false,
    housesOnPromo: [],
    projects: [],
  },
  getters: {
    getHouse(state) {
      return state.house;
    },
    getHousesOnPromo(state) {
      return state.housesOnPromo;
    },
    getProjects(state) {
      return state.projects;
    },
  },
  mutations: {
    SET_HOUSE(state, house) {
      state.house = house;
    },
    SET_HOUSES_ON_PROMO(state, housesOnPromo) {
      state.housesOnPromo = housesOnPromo;
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    async fetchHouse( ctx , id) {
      const house = await API('house',id);
        ctx.commit('SET_HOUSE', house);
    },
    async fetchHousesOnPromo(ctx) {
      const housesOnPromo = await API('promo-house');
      ctx.commit('SET_HOUSES_ON_PROMO', housesOnPromo);
    },
    async fetchProjects({ commit }, id) {
      const projects = await API('project', id);
      commit('SET_PROJECTS', projects);
    },
    unsetHouse(ctx) {
        ctx.commit('SET_HOUSE', null);
    },
  },
};
