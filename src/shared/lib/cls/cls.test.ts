import {cls} from './cls'
describe('cls', () => {
  test('one/first param', () => {
    expect(cls('class')).toBe('class')
  })
  test('one/second param', () => {
    expect(cls('', {clickable: true})).toBe('clickable')
  })
  test('one/third param', () => {
    expect(cls('', {}, ['bordered'])).toBe('bordered')
  })
})