import { dateParse, weekAgo } from './Date';

class NewsApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getAllArticles(tag) {
    return fetch(`${this._baseUrl}&q=${tag}`, {
      headers: this._headers
    })
      .then(res => {
        return this._getResponseData(res);
      });
  }
}

export const newsApi = new NewsApi({
  baseUrl: 'http://newsapi.org/v2/everything?' +
  `from=${weekAgo}&` +
  `to=${dateParse}&` +
  'sortBy=popularity&' +
  'pageSize=100&' +
  'apiKey=9c8b7d2ba0d44b3c8b14c62a5875a129',
  headers: {
    'Content-Type': 'application/json'
  }
});
