const jwtDecode = require('jwt-decode');
import axios from 'axios';

const http = () => {
  let HTTP = axios.create({
    baseURL: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
    timeout: 2000,
    headers: {
      'Authorization': `JWT ${localStorage.getItem('token')}`,
    }
  });

  HTTP.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `JWT ${token}` : '';
    return config;
  });

  return HTTP;
};

const HTTP = http();

export default {
  createUser: async body => await HTTP.post('/users/create/', body),
  logIn: async body => {
    const { data } = await HTTP.post('/users/login/', body);
    localStorage.setItem('token', data.token);
  },
  getCardsRow: async row => await HTTP.post(`/cards?row=${row}`).then(({ data }) => data),
  getAllCards: async function() {
    return await Promise.all([this.getCardsRow(0), this.getCardsRow(1), this.getCardsRow(2), this.getCardsRow(3)]);
  },
  deleteCard: async id => await HTTP.delete(`/cards/${id}`),
  updateCard: async (id, body) => await HTTP.patch(`/cards/${id}/`, body),
  createCard: async body => await HTTP.post('/cards/', body),
  decodeToken: token => jwtDecode(token),
}