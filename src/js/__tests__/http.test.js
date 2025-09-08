import { httpGet } from "../http";
import { httpPost } from "../http";

test('httpGet', () => {
  expect(() => httpGet('urltest')).toThrow('urltest');
})

test('httpPost', () => {
  expect(() => httpPost('urltest')).toThrow('urltest');
})