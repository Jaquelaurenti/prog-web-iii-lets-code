import axios from 'axios'


// utilizando o axios para se conectar na nossa api de backend

const api = axios.create({
  baseURL: 'http://localhost:3001/api/'
});

export default api;
