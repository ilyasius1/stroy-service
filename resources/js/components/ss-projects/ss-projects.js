import { mapActions, mapGetters } from 'vuex';
import SsProject from './ss-project/SsProject.vue';
import SsSectionHeader from '@/elements/ss-section-header/SsSectionHeader.vue';
import SsLoader from '@/elements/ss-loader/SsLoader.vue';
import SsBtn from '@/elements/ss-btn/SsBtn.vue';
export default {
  name: 'SsProjects',
  data() {
    return {
      loading: true,
      projects: {},
    };
  },
  computed: { ...mapGetters(['getProjects']) },
  components: {
    SsProject,
    SsSectionHeader,
    SsLoader,
    SsBtn,
  },
  methods: {
    ...mapActions(['fetchProjects']),
    async loadData() {
      try {
        this.loading = true;
        this.projects = await this.fetchProjects(this.$route.params.id);
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
  beforeRouteUpdate() {
    this.loadData();
  },
  async created() {
    this.loadData();
  },
};
