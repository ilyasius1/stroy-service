import SsLoader from '@/elements/ss-loader/SsLoader.vue';
import SsSectionHeader from '@/elements/ss-section-header/SsSectionHeader.vue';
import SsModalGallery from '@/components/ss-modal-gallery/SsModalGallery.vue';
import SsBtn from '@/elements/ss-btn/SsBtn.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'SsHouse',
  components: {
    SsLoader,
    SsSectionHeader,
    SsBtn,
    SsModalGallery,
  },
  data() {
    return {
      loading: true,
      house: {},
      sizes: {},
      currentImage: 0,
      zoom: false,
      window: document.querySelector('body'),
    };
  },
  computed: {
    ...mapGetters(['getHouse', 'getCategory']),
    images() {
      return this.house.images;
    },
  },
  methods: {
    ...mapActions(['fetchHouse', 'fetchCategory', 'openModal']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchHouse(this.$route.params.id);
        this.house = this.getHouse;
        await this.fetchCategory(this.house.idCategory);
        this.sizes = this.getCategory.sizes;
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    formattedPrice(string) {
      return new Intl.NumberFormat('ru-RU').format(string);
    },

    setNextImage() {
      if (this.currentImage < this.images.length - 1) {
        this.currentImage++;
      } else {
        this.currentImage = 0;
      }
    },
    setPrevImage() {
      if (this.currentImage > 0) {
        this.currentImage--;
      } else {
        this.currentImage = this.images.length - 1;
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
  },
  async created() {
    this.loadData();
  },
  mounted() {},
};
