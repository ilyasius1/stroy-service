import API from "@/store/helpers/api";

export default {
    state: {
        sizes: {},
    },
    getters: {
        getSizes(state) {
            return state.sizes;
        }
    },
    mutations: {
        SET_SIZES(state, sizes) {
            state.sizes = sizes
        }
    },
    actions: {
        async fetchSizes(ctx) {
            const sizes = await API('sizes');
            ctx.commit('SET_SIZES', sizes);
        }
    },
}
