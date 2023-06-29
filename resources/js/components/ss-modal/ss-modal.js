import SsBtn from '@/elements/ss-btn/SsBtn.vue';
import { mapActions, mapGetters } from 'vuex';
import SsLoader from '@/elements/ss-loader/SsLoader.vue';
export default {
  name: 'SsModal',
  components: {
    SsBtn,
    SsLoader,
  },
  data() {
    return {
        sendingError: false,
        sending: false,
        isDataSent: false,
        showNotification: false,
        validity: {
            isValid: true,
            fio: null,
            email: null,
            phone: null,
            comment: null,
        },
        fio: null,
        email: null,
        phone: null,
        comment: null,
    };
  },
  methods: {
    ...mapActions(['closeModal']),
    async sendRequest() {

        if(!this.validateForm()) {
            return;
        }
        this.sending = true;
        this.sendingError = false
        const requestData = {
            fio: this.fio,
            email: this.email,
            phone: this.phone ,
            comments: this.phone,
        };
        let url = '/api/';
        if(this.isPhoneCallRequest) {
            url += 'add-call';
        }
        else {
            url += 'add-order';
            requestData.project_id = this.getHouse?.id ?? null;
        }
        try {
            axios.post(url, requestData).then((data)=>{
              this.sending = false;
              this.sendingError = false;
              this.isDataSent = true;
              this.showNotification = true;
              setTimeout(()=> {
                  this.showNotification = false;
                  this.closeModal();
              }, 5000);
          });
        }
        catch (e) {
            this.sending = false;
            this.sendingError = true;
            console.log(e);
        }
        this.sendingError = true;
    },
      validateForm() {
        for(let i in this.validity) {
            this.validity[i] = null;
        }
        this.validity.isValid = true;
        if(!this.fio) {
            this.validity.isValid = false;
            this.validity.fio = 'Укажите ФИО';
        }
        if(!this.email) {
            this.validity.isValid = false;
            this.validity.email = 'Укажите Ваш Email';
        } else if(!this.isEmailValid()) {
            this.validity.isValid = false;
            this.validity.email = 'Email должен иметь формат mail@example.com';
        }
        if(!this.phone || this.phone.length < 5) {
            this.validity.isValid = false;
            this.validity.phone = 'Укажите Ваш номер телефона';
        }
        return this.validity.isValid;

      },
      isEmailValid: function () {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(this.email);
      },
  },
  computed: {
    ...mapGetters(['isModalOpen', 'getHeader', 'getHouse', 'getButtonName', 'isPhoneCallRequest']),
  },
};
