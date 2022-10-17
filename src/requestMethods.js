import axios from "axios"

const BASE_URL = 'http://localhost:3001/api'
const TOKEN = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDBhYjRiN2IxY2RkZmRiNWY3MGFiNSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjUxODI1NjQsImV4cCI6MTY2NTQ0MTc2NH0.Zv3MLsKt_gZ8JN3d9GbLGHYm32Imywbw0ASjE5_GtBE"
  export const publicRequest  = axios.create({
    baseURL:BASE_URL,
  });
  export const userRequest  = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
  });