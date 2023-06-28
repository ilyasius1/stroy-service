export default {
  state: {
    isOpen: false,
    header: 'Оформление заказа',
    modalHouse: null,
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
    SET_MODAL_HOUSE(state, house) {
      state.modalHouse = house;
    },
  },
  actions: {
    openModal(ctx, { header = null, house = null }) {
      if (header) {
        ctx.commit('SET_HEADER', header);
      }
      else {
        ctx.commit('SET_HEADER', 'Оформление заказа');
      }
      ctx.commit('SET_STATUS', true);
    },
    closeModal(ctx) {
      ctx.commit('SET_STATUS', false);
      ctx.commit('SET_HEADER', null);
    },

  },
};
