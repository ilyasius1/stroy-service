import SsLoader from '@/elements/ss-loader/SsLoader.vue';
import SsSectionHeader from '@/elements/ss-section-header/SsSectionHeader.vue';
import SsModalGallery from '@/components/ss-modal-gallery/SsModalGallery.vue';
import SsBtn from '@/elements/ss-btn/SsBtn.vue';
import { mapActions, mapGetters } from 'vuex';
import SsNetworkError from '@/components/ss-network-error/SsNetworkError.vue';

export default {
  name: 'SsHouse',
  components: {
    SsLoader,
    SsSectionHeader,
    SsBtn,
    SsModalGallery,
    SsNetworkError,
  },
  data() {
    return {
      loading: false,
      hasError: false,
      house: {},
      sizes: [],
      currentImage: 0,
      zoom: false,
      window: document.querySelector('body'),
    };
  },
  computed: {
    ...mapGetters(['getHouse', 'getCategory', 'getSizes']),
    images() {
      return this.getHouse?.images;
    },
  },
  methods: {
    ...mapActions(['fetchHouse', 'fetchCategory', 'fetchSizes', 'openModal']),
    async loadData() {
      try {
        this.loading = true;
        this.fetchHouse(this.$route.params.id)
            .then(() => {
                this.house = this.getHouse;
                this.fetchSizes()
                    .then(() => {
                        this.sizes = this.getSizes;
                        this.loading = false;
                    })
            });
      } catch (e) {
          this.hasError = true;
        console.log(e);
      }
    },
    formattedPrice(string) {
      return new Intl.NumberFormat('ru-RU').format(string);
    },

    setNextImage() {
      if (this.currentImage < this.images?.length - 1) {
        this.currentImage++;
      } else {
        this.currentImage = 0;
      }
    },
    setPrevImage() {
      if (this.currentImage > 0) {
        this.currentImage--;
      } else {
        this.currentImage = this.images?.length - 1;
      }
    },
    openGallery(imgNumber) {
      this.currentImage = imgNumber;
      this.zoom = true;
      this.window.style.overflow = 'hidden';
    },
    closeGallery() {
      this.zoom = false;
      this.window.style.overflow = 'scroll';
    },
    findSize(id) {
      return this.sizes.find(size => size.id === id);
    }
  },
  async created() {
    await this.loadData();
  },

};
