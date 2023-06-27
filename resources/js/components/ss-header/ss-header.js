import SsSocial from '@/components/ss-social/SsSocial.vue';
import SsBtn from '@/elements/ss-btn/SsBtn.vue';
import { mapActions } from 'vuex';
export default {
  name: 'SsHeader',
  components: {
    SsSocial,
    SsBtn,
  },
  data() {
    return {
      isHeader: true,
    };
  },
  methods: {
    ...mapActions(['openModal']),
  },
};
