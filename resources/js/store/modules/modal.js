import * as url from 'url';

export default {
  state: {
    isOpen: false,
    header: 'Оформление заказа',
    isPhoneCallRequest: false,
  },
  getters: {
    isModalOpen(state) {
      return state.isOpen;
    },
    getHeader(state) {
      return state.header;
    },
    getButtonName(state) {
        return state.isPhoneCallRequest ? 'Заказать звонок' : 'Отправить заявку'
    },
    isPhoneCallRequest(state) {
        return state.isPhoneCallRequest;
    }
  },
  mutations: {
    SET_STATUS(state, status) {
      state.isOpen = status;
    },
    SET_HEADER(state, header) {
      state.header = header;
    },
    SET_IS_PHONE_CALL_REQUEST(state, isPhoneCallRequest) {
        state.isPhoneCallRequest = isPhoneCallRequest;
    }
  },
  actions: {
    openModal(ctx, { header = null, house = null, isPhoneCallRequest = false }) {
      if (header) {
        ctx.commit('SET_HEADER', header);
      }
      else if(isPhoneCallRequest) {
        ctx.commit('SET_HEADER', 'Заказать звонок');
      }
      else {
        ctx.commit('SET_HEADER', 'Оформление заказа');
      }
      if(isPhoneCallRequest) {
          ctx.commit('SET_IS_PHONE_CALL_REQUEST', true);
      }
      ctx.commit('SET_STATUS', true);
    },
    closeModal(ctx) {
      ctx.commit('SET_STATUS', false);
      ctx.commit('SET_HEADER', null);
      ctx.commit('SET_IS_PHONE_CALL_REQUEST', false);
    },
  },
};
