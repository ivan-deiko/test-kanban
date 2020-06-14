import HTTP from '@/http';
import { SET_CARDS, ADD_CARD, UPDATE_CARD_MUTATION, DELETE_CARD_MUTATION } from '../mutations';

// consts actinos
export const GET_CARDS = 'GET_CARDS';
export const CREATE_CARD = 'CREATE_CARD'
export const DELETE_CARD_ACTION = 'DELETE_CARD_ACTION';
export const UPDATE_CARD_ACTION = 'UPDATE_CARD_ACTION';

export default {
  [GET_CARDS]: ({ commit }) => HTTP.getAllCards().then(data => commit(SET_CARDS, data)),
  [UPDATE_CARD_ACTION]: ({ state, commit }, payload ) => {
    const card = state.cards[payload.oldCol][payload.oldIndex];

    return HTTP.updateCard(card.id, {
      row: payload.newCol,
      text: card.text,
      seq_num: card.seq_num
    })
      .then(() => commit(UPDATE_CARD_MUTATION, payload))
  },
  [DELETE_CARD_ACTION]: ({ commit }, card) => HTTP.deleteCard(card.id).then(() => commit(DELETE_CARD_MUTATION, card)),
  [CREATE_CARD]: ({ commit }, newCard) => HTTP.createCard(newCard).then((data) => commit(ADD_CARD, data.data))
}
