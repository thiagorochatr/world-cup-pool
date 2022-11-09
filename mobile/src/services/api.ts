import axios from "axios";

export const api = axios.create({
  // VERIFICAR O ENDEREÇO IP PELO NPX EXPO START
  baseURL: 'http://192.168.0.20:3333'
})