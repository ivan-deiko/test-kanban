<template>
  <div class="card" v-if="!isDelete">
    <span class="card-id">{{card.id}}</span>
    <span class="card-text">{{card.text}}</span>
    <button class="card-delete" @click="deleteCard" v-if="!isDelete">
      <IconDelete />
    </button>
  </div>
  <SpinnerHeart v-else />
</template>

<script>
  import IconDelete from '../../icons/IconDelete';
  import { DELETE_CARD_ACTION } from '@/store/modules/cards/actions';
  import SpinnerHeart from '../../Spinners/SpinnerHeart';

  export default {
    props: {
      card: {
        type: Object,
        required: true,
      }
    },
    data() {
      return {
        isDelete: false,
      }
    },
    methods: {
      deleteCard() {
        if (this.isDelete) return;

        this.isDelete = true;
        this.$store.dispatch(DELETE_CARD_ACTION, this.card)
          .catch(() => {
            localStorage.removeItem('token');
            this.$router.push('/autorization');
          });
      }
    },
    components: {
      IconDelete,
      SpinnerHeart
    }
  }
</script>

