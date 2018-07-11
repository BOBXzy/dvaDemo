import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export async function getRouteList() {
  return request('http://localhost:8999/api/getRouteList');
}
