class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _getCallbackWithRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`error${res.status}`);
  }

  getAllArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'GET',
      headers: this._headers
    })
      .then(res => {
        return this._getCallbackWithRes(res);
      });
  }

  saveArticle(keyword, image, date, title, text, source, link) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        keyword, image, date, title, text, source, link
      })
    })
      .then(res => {
        return this._getCallbackWithRes(res);
      });
  }

  deleteArticle(id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => {
        return this._getCallbackWithRes(res);
      });
  }
}

export const api = new Api({
  baseUrl: 'https://maxx.news.students.nomoreparties.space',
  headers: {
    authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
