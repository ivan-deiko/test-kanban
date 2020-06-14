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
      <button
        class="autorization-btn"
        :disabled="validateForm"
      > 
        <SpinnerLoading v-if="autorization.isLoading" /> 
        <span v-if="!autorization.isLoading">Войти</span>
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
  import { LOGIN } from '@/store/modules/autorization/actions';

  export default {
    mixins: [ formMixin ],
    computed: {
      validateForm() {
        if (this.validUsername) return !this.password.trim();
        return true; // disabled form btn
      }
    },
    methods: {
      submitForm() {
        this.$store.dispatch(LOGIN, {
          username: this.username,
          password: this.password,
        })
        .then(() => {
            if (!this.autorization.error.status) this.$router.push('/')
        })
      },
    },
  }
</script>