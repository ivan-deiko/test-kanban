<template>
  <div class="column-cards-list">
    <draggable
      class="cards-list"
      group="cards"
      :list="arr"
      @end="dragNdropHandler"
      :sort="false"
      :data-column="column"
    >
      <Card
        v-for="card in arr"
        :card="card"
        :key="card.id"
      />
    </draggable>
  </div>
</template>

<script>
  import { UPDATE_CARD_ACTION } from '@/store/modules/cards/actions';
  import draggable from 'vuedraggable';
  import Card from './Card';

  export default {
    props: {
      cards: {
        type: Array,
        required: true,
      },
      column: {
        type: Number,
        required: true,
      }
    },
    data() {
      return {
        arr: [...this.cards],
      }
    },
    watch: {
      cards(val) {
        this.arr = [...val];
      }
    },
    methods: {
      dragNdropHandler({ from, to, oldIndex, newIndex }) {
        this.arr.sort((a, b) => a.seq_num - b.seq_num);

        if (to.dataset.column === from.dataset.column) return false;

        const card = {
          oldCol: from.dataset.column,
          newCol: to.dataset.column,
          newIndex,
          oldIndex,
        };

        this.$store.dispatch(UPDATE_CARD_ACTION, card).catch(() => {
          localStorage.removeItem('token');
          this.$router.push('/autorization');
        });
      },
    },
    components: {
      Card,
      draggable,
    }
  }
</script>
