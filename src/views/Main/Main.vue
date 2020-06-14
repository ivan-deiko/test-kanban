<template>
  <div class="main">
    <button class="main-add-card" @click="isModal = true"> Добавить таск </button>
    <div class="main-header">
      <h1 class="main-header-logo">
        logo
      </h1>
      <div class="main-info-user">
        <h3 class="main-header-username">{{ autorization.username }}</h3>
        <span class="main-header-logout" @click="logOut"> Выйти </span>
      </div>
    </div>
    <div class="main-container" v-if="cards.cards">
      <ColumnCards
        v-for="(listCard, index) in cards.cards"
        :key="index"
        :cards="listCard"
        :column="index"
      />
    </div>
    <SpinnerHeart v-if="!cards.cards" />
    <AddCardForm v-if="isModal" @close="isModal = false" />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { SET_USERNAME_ACTION } from '@/store/modules/autorization/actions/';
  import { GET_CARDS } from '@/store/modules/cards/actions/';
  import ColumnCards from '@/components/MainPage/components/ColumnCards.vue';
  import AddCardForm from '@/components/MainPage/components/AddCardForm.vue';
  import SpinnerHeart from '@/components/Spinners/SpinnerHeart';

  export default {
    data() {
      return {
        isModal: false
      }
    },
    computed: {
      ...mapState(['autorization', 'cards'])
    },
    methods: {
      logOut() {
        localStorage.removeItem('token');
        this.$router.push('/autorization');
      }
    },
    mounted() {   
      this.$store.dispatch(SET_USERNAME_ACTION);
      if (!this.cards.cards) {
        this.$store.dispatch(GET_CARDS).catch(() => {
          localStorage.removeItem('token');
          this.$router.push('/autorization');
        });
      }
    },
    components: {
      ColumnCards,
      AddCardForm,
      SpinnerHeart,
    }
  }
</script>
