import axios from 'axios'

const KEY = 'AIzaSyD9CCt8MX7AD7OL8BmbMunVvMjpwRYyHpc'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }
});