import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://seal-app-s3qug.ondigitalocean.app/api'
  });
