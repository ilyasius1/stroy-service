import SsHouse from '@/components/ss-house/SsHouse.vue';

export default {
  name: 'HousePage',
  components: {
    SsHouse,
  },

  data() {
    return {};
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('unsetHouse');
    next();
  },
};
