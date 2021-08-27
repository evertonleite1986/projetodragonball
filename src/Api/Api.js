export const Api = {
  baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

  authorization: 'everton_leite25@hotmail.com',

  readAllUrl: () => Api.baseUrl + '/',
  readOneUrl: id => Api.baseUrl + '/' + id,


  readAllUrl: () => Api.baseUrl + '/',
  readOneUrl: (id) => Api.baseUrl + '/' + id,

  createUrl: () => Api.baseUrl + '/',

  deleteAllUrl: () => Api.baseUrl + '/',

  deleteUrl: id => Api.baseUrl + '/' + id,

  updateUrl: (id) => Api.baseUrl + '/' + id, 

  deleteUrl: (id) => Api.baseUrl + '/' + id,

  updateUrl: (id) => Api.baseUrl + '/' + id,

  buildApiGetRequest: (url) => {
    return fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: Api.authorization,
      }),
    });
  },

  buildApiPostRequest: (url, body) => {
    return fetch(url, {
      method: 'POST',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  },


  buildApiPutRequest: (url, body) => {
    return fetch(url, {
      method: 'PUT',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  },


  buildApiDeleteRequest: (url) => {
    return fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: Api.authorization,
      }),
    });
  },
};
