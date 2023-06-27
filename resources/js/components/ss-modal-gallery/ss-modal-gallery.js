import SsBtn from '@/elements/ss-btn/SsBtn.vue';
export default {
  name: 'SSModalGallery',
  props: [
    'currentImage',
    'images',
    'closeGallery',
    'setPrevImage',
    'setNextImage',
  ],
  components: {
    SsBtn,
  },
};
