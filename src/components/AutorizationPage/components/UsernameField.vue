<template>
  <input
    type="text"
    placeholder="login"
    :class="`form-username form-input ${isValid ? '' : 'form-username_invalid'}`"
    @input="getUserName($event)"
  />
</template>

<script>
  export default {
    data() {
      return {
        isValid: true,
      }
    },
    methods: {
      getUserName({target: { value }}) {
        this.isValid = this.validateField(value);

        this.$emit('username', {
          value,
          isValid: this.isValid,
        });
      },
      validateField: text =>  /^[\w.@+-]+$/.test(text),
    }
  }
</script>