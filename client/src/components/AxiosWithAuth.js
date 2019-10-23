import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // return an instance of axios
  return axios.create({
    baseURL: 'https://school-in-cloud.herokuapp.com/api/',
    headers: {
      authorization: token
    }
  });
}

export default axiosWithAuth
