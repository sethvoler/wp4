import {urls} from './apiURL'
import request from './promise'

export const test = (id) => {
  return request(urls.test, 'POST', {id})
}