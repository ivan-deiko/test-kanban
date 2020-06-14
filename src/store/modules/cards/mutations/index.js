// consts mutations 
export const SET_CARDS = 'SET_CARDS';
export const ADD_CARD = 'ADD_CARD_MUTATION';
export const DELETE_CARD_MUTATION = 'DETELE_CARD_MUTATION';
export const UPDATE_CARD_MUTATION = 'UPDATE_CARD_MUTATION';

export default {
  [SET_CARDS]: (state, payload) => state.cards = payload,
  [ADD_CARD]: (state, payload) => state.cards = state.cards.map((list, index) => {
    if (+payload.row === index) return [...list, payload];
    return list;
  }),
  [DELETE_CARD_MUTATION]: (state, { row, id }) => state.cards = state.cards.map((list, index) => {
      if (index === +row) return list.filter(card => card.id !== id);
      return list;
  }),
  [UPDATE_CARD_MUTATION]: (state, {oldCol, newCol, oldIndex }) => {
    const newCards = [...state.cards];
    const card = newCards[oldCol].splice(oldIndex, 1)[0];
    card.row = newCol;

    return state.cards = newCards.map((list, index) => {
      if (index === +newCol) return [...list, card].sort((a, b) => a.seq_num - b.seq_num);
      return list;  
    });
  }
}