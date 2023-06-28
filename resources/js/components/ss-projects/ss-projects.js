import { mapActions, mapGetters } from 'vuex';
import SsProject from './ss-project/SsProject.vue';
import SsSectionHeader from '@/elements/ss-section-header/SsSectionHeader.vue';
import SsLoader from '@/elements/ss-loader/SsLoader.vue';
import SsBtn from '@/elements/ss-btn/SsBtn.vue';
import SsNetworkError from '@/components/ss-network-error/SsNetworkError.vue';
export default {
  name: 'SsProjects',
  data() {
    return {
      loading: true,
      hasError: false,
    };
  },
  components: {
      SsProject,
      SsSectionHeader,
      SsLoader,
      SsBtn,
      SsNetworkError,
  },
  computed: { ...mapGetters(['getProjects']) },
  methods: {
    ...mapActions(['fetchProjects']),
    async loadData() {
      try {
        this.loading = true;
        this.fetchProjects(this.$route.params.id)
            .then(()=> {
                this.loading = false;
            })
      } catch (e) {
          this.loading = false;
          this.hasError = true;
          console.log(e);
      }
    },
  },
  async beforeRouteUpdate() {
      await this.loadData();
  },
  async beforeMount() {
     await this.loadData();
  },
};
