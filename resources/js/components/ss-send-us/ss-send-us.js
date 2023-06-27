export default {
  name: 'SsSendUs',
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    },
  },
};
