import {
  add,
} from './add.js'

describe('add() ', () => {
  test('should add up an array of digits.', () => {
    const args = [1, 2]
    const actual = add(args)
    const expected = 3
    expect(actual).toBe(expected)
  })
})
