<template>
  <div class="err-container">
    <span 
      v-for="err in errors"
      :key="err"
    >
      {{ err }}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      errors: {
        type: Array,
        required: true,
        validator: errors => errors.every(err => typeof err === 'string'),
      }
    }
  }
</script>