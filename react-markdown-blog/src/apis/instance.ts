import axios from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/karpitony/caps-react-study/refs/heads/main/react-markdown-blog/src/posts',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default api;