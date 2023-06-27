import API from "@/store/helpers/api";
export default {
  state: {
    house: {},
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
    SET_IS_LOADED(state, isLoaded) {
      state.isLoaded = isLoaded;
    },
  },
  actions: {
    async fetchHouse(ctx , id) {
        ctx.commit('SET_IS_LOADED', false);
      const house = await API('house',id);
        ctx.commit('SET_HOUSE', house);
        ctx.commit('SET_IS_LOADED', true);
    },
    async fetchHousesOnPromo(ctx) {
        ctx.commit('SET_IS_LOADED', false);
      const housesOnPromo = await API('promo-house');
        ctx.commit('SET_HOUSES_ON_PROMO', housesOnPromo);
        ctx.commit('SET_IS_LOADED', true);
    },
    async fetchProjects(ctx, id) {
      // const projects = dataProjects.filter((el) => el.idCategory === id);
        ctx.commit('SET_IS_LOADED', false);
        const projects = await API('project', id);
        ctx.commit('SET_PROJECTS', projects);
        ctx.commit('SET_IS_LOADED', true);
    },
  },
};
