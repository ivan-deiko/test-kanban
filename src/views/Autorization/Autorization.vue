<template>
  <div class="autorization-page">
    <router-view />
    <router-link
      :to="to"
      class="autorization-link"
      @click="clearErr"
    > 
      <span @click="clearErr">
        {{ where }}
      </span>
    </router-link>
  </div>
</template>

<script>
import { SET_ERR_ACTION } from '@/store/modules/autorization/actions'

export default {
  data() {
    return {
      to: '/autorization/signup',
      where: 'Регистрация'
    }
  },
  watch: {
    $route(val) {
      this.setData(val.name);
    }
  },
  methods: {
    setData(name) {
      this.to = name === 'signup' ? "/autorization" : "/autorization/signup";
      this.where = name === 'signup' ? 'Залогиниться' : 'Регистрация';
    },
    clearErr() {
      this.$store.dispatch(SET_ERR_ACTION, {status: false, errMessages: null})
    }
  },
  mounted() {
    this.setData(this.$route.name);
  }
}
</script>