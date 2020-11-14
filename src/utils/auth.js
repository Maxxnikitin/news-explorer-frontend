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
    body: JSON.stringify({email, password})
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
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

export const registration = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password, name})
  })
    .then((res) => {
      if(res.ok) {
        return res.json();
      }
    })
    .catch((err) => console.log(err));
};
