<template>
  <div class="column-cards">
    <div :class="`column-header column-header_${column}`">
      <span class="column-header-name">{{columnNames[column]}} </span>
      <span class="column-header-count">количество: {{cards.length}}</span>
    </div>
    <ListCards :cards="cards" :column="column" />
  </div>
</template>

<script>
  import ListCards from './ListCards'

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
        columnNames: ['on-hold', 'in-progress', 'needs-review', 'approved'],
      }
    },
    components: {
      ListCards,
    }
  }
</script>