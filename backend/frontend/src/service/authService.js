import { axiosInstance } from '../config/config'

const API_URL = 'http://localhost:5000/api/users/'


const register = async (userDate) => {
  const response = await axiosInstance.post( userDate)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}
const login = async (userData) => {
  const response = await axiosInstance.post('/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}
const getUsers = async (usersData) => {
  const response = await axiosInstance.get('/usersList' )

  if (response.data) {
    localStorage.setItem('users', JSON.stringify(response.data))
  }

  
  return response.data
}

const logout = () => {
  localStorage.removeItem('user')
}
const authService = {
  register,
  logout,
  getUsers,
  login,
}
export default authService