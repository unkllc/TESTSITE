import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://ibranet.ibraeducacional.com.br/api',
});

export default Api;
