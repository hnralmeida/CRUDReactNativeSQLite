import axios from 'axios';

const api = axios.create({
    baseURL: 'https://siad.com.br/apimobile'
});

export default api;