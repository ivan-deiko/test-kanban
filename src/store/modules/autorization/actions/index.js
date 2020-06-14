import HTTP from '@/http';
import { SET_ERR_MUTATION, SET_LOADING_MUTATION, SET_USERNAME_MUTATION } from '../mutations';
import { GET_CARDS } from '../../cards/actions';

// consts actions
export const LOGIN = 'LOGIN';
export const CREATE_USER = 'CREATE_USER';
export const AUTORIZATION_ACTION = 'AUTORIZATION_ACTION';
export const SET_USERNAME_ACTION = 'SET_USERNAME_ACTION';
export const SET_ERR_ACTION = 'SET_ERR_ACTION';
export const SET_LOADING_ACTION = 'SET_LOADING_ACTION';

export default {
  [LOGIN]: async ({ dispatch }, userInfo) => {
    dispatch(SET_LOADING_ACTION, true);
    dispatch(SET_ERR_ACTION, {isError: false, errMessages: null});
   
    return HTTP.logIn(userInfo)
      .then(() => dispatch(GET_CARDS))
      .catch(({ response: { data } }) => dispatch(SET_ERR_ACTION, { status: true, errMessages: data.non_field_errors }))
      .finally(() => dispatch(SET_LOADING_ACTION, false))
  },
  [CREATE_USER]: async ({ dispatch }, userInfo) => {
    dispatch(SET_LOADING_ACTION, true);
    dispatch(SET_ERR_ACTION, {isError: false, errMessages: null});

    return HTTP.createUser(userInfo)
      .then(data => localStorage.setItem('token', data.data.token))
      .catch(({ response: { data } }) => dispatch(SET_ERR_ACTION, { status: true, errMessages: data.password }))
      .finally(() => dispatch(SET_LOADING_ACTION, false))
  },
  [SET_ERR_ACTION]: ({ commit }, payload) => commit(SET_ERR_MUTATION, payload),
  [SET_LOADING_ACTION]: ({ commit }, payload) => commit(SET_LOADING_MUTATION, payload),
  [SET_USERNAME_ACTION]: ({ commit }) => {
    const { username } = HTTP.decodeToken(localStorage.getItem('token'));
    commit(SET_USERNAME_MUTATION, username);
  },
}