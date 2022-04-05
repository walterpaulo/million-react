import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        token: '123456'
    }
})

export default api