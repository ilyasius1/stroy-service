import { createStore } from 'vuex';
import categories from './modules/categories.js';
import house from './modules/house.js';
import promo from './modules/promo.js';
import modalModule from './modules/modal';
import sizes from '@/store/modules/sizes';

export default createStore({
  modules: {
    categories,
    house,
    promo,
    modalModule,
    sizes,
  },
});
