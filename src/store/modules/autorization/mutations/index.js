// const mutations
export const SET_USERNAME_MUTATION = 'SET_USERNAME_MUTATION';
export const SET_ERR_MUTATION = 'SET_ERR_STATUS';
export const SET_LOADING_MUTATION = 'SET_LOADING_STATUS';

export default {
  [SET_USERNAME_MUTATION]: (state, payload) => state.username = payload,
  [SET_LOADING_MUTATION]: (state, payload) => state.isLoading = payload,
  [SET_ERR_MUTATION]: (state, payload) => state.error = payload,
}
