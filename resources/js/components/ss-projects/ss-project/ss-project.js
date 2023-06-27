import SsBtn from '@/elements/ss-btn/SsBtn.vue';

export default {
  name: 'SsProject',
  props: ['project'],
  components: {
    SsBtn,
  },
  computed: {},
  methods: {
    formattedPrice(string) {
      return new Intl.NumberFormat('ru-RU').format(string);
    },
  },
};
