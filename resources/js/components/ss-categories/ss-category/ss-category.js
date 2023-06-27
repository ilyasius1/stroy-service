import SsBtn from '@/elements/ss-btn/SsBtn.vue';
import { mapActions } from 'vuex';
export default {
  name: 'SsCategory',
  components: {
    SsBtn,
  },
  props: ['category', 'key', 'id'],
  methods: {
    ...mapActions(['fetchProjects']),
  },
};
