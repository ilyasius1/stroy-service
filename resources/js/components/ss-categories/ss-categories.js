import SsSectionHeader from '@/elements/ss-section-header/SsSectionHeader.vue';
import SsCategory from './ss-category/SsCategory.vue';
import SsNetworkError from '@/components/ss-network-error/SsNetworkError.vue';
import { mapGetters, mapActions } from 'vuex';
import SsLoader from '@/elements/ss-loader/SsLoader.vue';
export default {
  name: 'SsCategories',
  components: {
    SsSectionHeader,
    SsCategory,
    SsLoader,
    SsNetworkError,
  },
  computed: { ...mapGetters(['getCategories']) },
  data() {
    return {
        loading: true,
        hasError: false,
    };
  },
  methods: {
    ...mapActions(['fetchCategories']),
      async loadData() {
          try {
              this.loading = true;
              this.fetchCategories(this.$route.params.id)
                  .then(()=> {
                      this.loading = false;
                  })
          } catch (e) {
              this.loading = false;
              this.hasError = true;
              console.log(e);
          }
      }
  },
  beforeMount() {
    this.loadData();
  },
};
