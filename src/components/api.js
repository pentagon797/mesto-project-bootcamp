const config = {
  url: 'https://mesto.nomoreparties.co/v1/wbf-cohort-5',
  headers: {
    "Content-Type": "application/json",
    authorization: "130e180b-af72-4664-9c14-e441c3c93356"
  }
}

export function onResponse(res) {
  return res.ok
    ? res.json()
    : res.json().then((data) => Promise.reject(data));
}

export function getAllCards() {
  return fetch(`${config.url}/cards`, {
    method: "GET",
    headers: config.headers
  }).then(onResponse)
}

export function addCard(body) {
  return fetch(`${config.url}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(body)
  }).then(onResponse)
}

export function removeCard(idTask) {
  return fetch(`${config.url}/cards/${idTask}`, {
    method: "DELETE",
    headers: config.headers
  })
    .then(onResponse)
}

export function getUserProfile() {
  return fetch(`${config.url}/users/me`, {
    method: "GET",
    headers: config.headers
  })
    .then(onResponse)
}

export const editUserProfile = (profile) => {
  return fetch(`${config.url}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(profile)
  })
    .then(onResponse);
}

export const editUserAvatar = (avatar) => {
  return fetch(`${config.url}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(avatar)
  })
    .then(onResponse);
}

export function putLike(idCard, liked) {
  return fetch(`${config.url}/cards/likes/${idCard}`, {
    method: liked ? "DELETE" : "PUT",
    headers: config.headers,
  }).then(onResponse)
}

export function getAllInfo() {
  return Promise.all([getAllCards(), getUserProfile()])
}
