import axios, { AxiosRequestConfig } from 'axios';
import { snakeCase, camelCase, transform } from 'lodash';

import { FOOTBALL_API } from '../constants';

const DEFAULT_API_CONFIG: AxiosRequestConfig = {
  baseURL: FOOTBALL_API,
  timeout: 30000,
  apiVersion: 'v1',
  headers: { 'X-RapidAPI-Key': 'nXQoIhbW6FmshLRcYL1P8vGm8r8vp1MbUu6jsn1P7usxJ4pht0' },
};

function deepMapKeys(obj: Object, mapFunc: Function) {
  return transform(obj, (r, v, k) => {
    let value = v;
    if (v instanceof Array) {
      value = v.map(o => deepMapKeys(o, mapFunc));
    } else if (v instanceof Object) {
      value = deepMapKeys(v, mapFunc);
    }
    r[mapFunc(k)] = value;
  });
}

const customeSnakeCase = (key: String) => {
  const matches = key.match(/\d+$/);
  let number = '';
  let convertKey = key;
  if (matches) {
    number = matches[0]; // eslint-disable-line
    convertKey = key.substring(0, matches.index);
  }
  return snakeCase(convertKey) + number;
};

export default class V1 {
  client: axios;

  constructor(config: Object = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
  }

  _requestInterceptor() {
    this.client.interceptors.request.use(config => {
      if (!this._isFormDataRequest(config)) {
        const keyMapper = key => customeSnakeCase(key);
        config.data = deepMapKeys(config.data, keyMapper);
      }
      return config;
    });
  }

  _isFormDataRequest(config: Object) {
    return config.data && config.data.toString().includes('FormData');
  }

  _responseInterceptor() {
    this.client.interceptors.response.use(res => {
      if (res.data) res.data = deepMapKeys(res.data, key => camelCase(key));
      return res;
    }, error => {
      if (!error.response || error.response.status === 500) {
        throw ({ errror_code: 700, messsage: 'Something went wrong!' });
      }
      throw error.response.data;
    });
  }
}
