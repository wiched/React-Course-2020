import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID OMatdU4COcIqvzDEBnSWdx-wZWSeq4Puri5qeVLPx3A'
  }
})