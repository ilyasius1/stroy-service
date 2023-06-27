export default {
  state: {
    isOpen: false,
    header: 'Оформление заказа',
  },
  getters: {
    isModalOpen(state) {
      return state.isOpen;
    },
    getHeader(state) {
      return state.header;
    },
  },
  mutations: {
    SET_STATUS(state, status) {
      state.isOpen = status;
    },
    SET_HEADER(state, header) {
      state.header = header;
    },
    SET_HOUSE(state, house) {
      state.house = house;
    },
  },
  actions: {
    openModal(ctx, { header = null }) {
      if (header !== null) {
        ctx.commit('SET_HEADER', header);
      }
      ctx.commit('SET_STATUS', true);
    },
    closeModal(ctx) {
      ctx.commit('SET_STATUS', false);
      ctx.commit('SET_HEADER', 'Оформление заказа');
    },
  },
};
