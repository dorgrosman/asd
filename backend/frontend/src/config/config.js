import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://ey-task-dorgrosman.herokuapp.com/api/users/"
})