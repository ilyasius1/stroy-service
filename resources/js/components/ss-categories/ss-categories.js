import SsSectionHeader from '@/elements/ss-section-header/SsSectionHeader.vue';
import SsCategory from './ss-category/SsCategory.vue';

import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'SsCategories',
  components: {
    SsSectionHeader,
    SsCategory,
  },
  computed: { ...mapGetters(['getCategories']) },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['fetchCategories']),
  },
  beforeMount() {
    this.fetchCategories();
  },
  mounted() {},
};
