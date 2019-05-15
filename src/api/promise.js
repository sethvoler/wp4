import axios from 'axios'

const request = (url, method = 'GET', params = {}, config = {}) => {
  const data = (method === 'GET') ? 'params' : 'data';
  let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  };
  if (config.headers) {
    headers = {
      ...headers,
      ...config.headers
    }
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      [data]: params,
      headers,
    }).then(resolve)
      .catch(error => {
        console.dir(error);
        Message.error(typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data));
        reject(error);
      });
  });
}

export default request