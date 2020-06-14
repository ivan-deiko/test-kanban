<template>
  <div class="modal">
    <div class="background-opacity"></div>
    <form @submit.prevent="add" class="add-form">
      <input type="text" v-model="text" class="add-form-input" placeholder="текст задачи" />
      <select v-model="row" class="add-form-input">
        <option selected disabled value="-1">Выберите колонку</option>
        <option value="0">on-hold</option>
        <option value="1">in-progress</option>
        <option value="2">needs-review</option>
        <option value="3">approved</option>
      </select>
      <button type="submit" :disabled="checkForm" class="add-form-btn">Добавить карту</button>
      <button @click.prevent="$emit('close')" class="add-form-close">&#10006;</button>
    </form>
  </div>
</template>

<script>
  import { CREATE_CARD } from '@/store/modules/cards/actions'

  export default {
    data() {
      return {
        row: '-1',
        text: '',
      }
    },
    computed: {
      checkForm() {
        return !(this.row !== '-1' && this.text.trim());
      }
    },
    methods: {
      add() {
        this.$store.dispatch(CREATE_CARD, { row: this.row, text: this.text }).catch(() => {
          localStorage.removeItem('token');
          this.$router.push('/autorization');
        });
      }
    }
  }
</script>