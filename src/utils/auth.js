export const BASE_URL = 'https://maxx.news.students.nomoreparties.space';

export const getToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
      return res.json().then((data) => Promise.reject(`${res.status} - ${data.error}`));
    })
    .catch((err) => console.log(err));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject((res.status === 400) ? `${res.status} Некорректно заполнено одно из полей` : `Пользователь с таким email не найден ${res.status}`);
    })
    .then((data) => {
      if (data.token){
        localStorage.setItem('token', data.token);
        return data;
      } else {
        return;
      }
     })
    .catch((err) => console.log(err));
};

export const registration = (email, password, name, callback) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })
    .then((res) => {
      if (res.ok) {
        callback({ success: 'Вы успешно зарегистрировались!' });
        return res.json();
      }
      callback({ fail: 'Что-то пошло не так! Попробуйте ещё раз' });
      return Promise.reject((res.status === 400) ? `${res.status} Некорректно заполнено одно из полей` : `Что-то пошло не так ${res.status}`);
    })
    .catch((err) => console.log(err));
};
