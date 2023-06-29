import API from "@/store/helpers/api";
import router from '@/router';
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
  },
  actions: {
    async fetchHouse( ctx , id) {
      await API('house',id)
        .then((house)=>{
          ctx.commit('SET_HOUSE', house);
        })
        .catch((e) => {
          if(e.response.status === 404 ) {
            router.push('/notFound');
          }
        });
    },
    async fetchHousesOnPromo(ctx) {
      const housesOnPromo = await API('promo-house');
      ctx.commit('SET_HOUSES_ON_PROMO', housesOnPromo);
    },
    async fetchProjects({ commit }, id) {
      await API('project', id)
        .then((projects) => {
          commit('SET_PROJECTS', projects);
        })
        .catch((e) => {
          if(e.response.status === 404 ) {
            router.push('/notFound');
          }
        });

    },
    unsetHouse(ctx) {
        ctx.commit('SET_HOUSE', null);
    },
  },
};
