import SsBtn from '@/elements/ss-btn/SsBtn.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'SsModal',
  components: {
    SsBtn,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['closeModal']),
  },
  computed: {
    ...mapGetters(['isModalOpen', 'getHeader', 'getHouse']),
  },
};
