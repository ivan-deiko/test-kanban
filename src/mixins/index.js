import { mapState } from 'vuex';
import UserNameField from '@/components/AutorizationPage/components/UsernameField.vue';
import ErrContainer from '@/components/AutorizationPage/components/ErrContainer.vue';
import SpinnerLoading from '@/components/Spinners/SpinnerLoading'

export const formMixin = {
  data() {
    return {
      username: '',
      password: '',
      validUsername: false,
    }
  },
  computed: {
    ...mapState(['autorization']),
  },
  methods: {
    handlerUsername({ value, isValid }) {
      this.username = value;
      this.validUsername = isValid;
    },
  },
  components: {
    UserNameField,
    ErrContainer,
    SpinnerLoading,
  }
}