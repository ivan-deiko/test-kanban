<template>
  <div class="autorization-form-container">
    <form 
      class="autorization-form"
      @submit.prevent="submitForm"
    >
      <UserNameField
        @username="handlerUsername($event)"
      />
      <input 
        type="password"
        placeholder="password*"
        class="form-password form-input"
        v-model="password"
      />
      <input 
        type="password"
        placeholder="confirm password*"
        class="form-password form-input"
        v-model="confirmPassword"
      />
      <input 
        type="email"
        placeholder="email"
        class="form-password form-input"
        v-model="email"
      />
      <button
        class="autorization-btn"
        :disabled="validateForm"
      > 
        <SpinnerLoading v-if="autorization.isLoading" /> 
        <span v-if="!autorization.isLoading">Регистрация</span>
      </button>
    </form>
    <ErrContainer
      v-if="autorization.error.status"
      :errors="autorization.error.errMessages"
    />
  </div>
</template>

<script>
  import { formMixin } from '@/mixins';
  import { CREATE_USER } from '@/store/modules/autorization/actions';

  export default {
    mixins: [ formMixin ],
    data() {
      return {
        email: '',
        confirmPassword: '',
      }
    },
    computed: {
      validateForm() {
        if (this.validUsername) {
          if (this.password.trim()) return !(this.password.trim() === this.confirmPassword.trim());
        }
        return true; // disabled form btn
      }
    },
    methods: {
      submitForm() {
        this.$store.dispatch(CREATE_USER, {
          username: this.username,
          password: this.password,
          email: this.email,
        })
          .then(() => {
            if (!this.autorization.error.status) this.$router.push('/');
          })
      }
    },
  }
</script>