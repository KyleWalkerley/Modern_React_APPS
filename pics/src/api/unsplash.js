import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID C5txd2Vh6pydQtF-t7TK3gs9UnFcKS1alXtVfcgVIvk',
  },
});
