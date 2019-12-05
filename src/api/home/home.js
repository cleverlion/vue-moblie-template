import fetch from 'utils/fetch';

export function getDemo (query) {
  return fetch({
    url: '/api/demo/demo',
    method: 'get',
    params: query
  });
}

export function postDemo (obj) {
  return fetch({
    url: '/api/postDemo/postDemo',
    method: 'post',
    data: obj
  });
}
