import { getValidPasswords } from '../getValidPasswords'

const mockData = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']

describe('getValidPasswords', () => {
  it('should return valid passwords', () => {
    const expected = ['1-3 a: abcde', '2-9 c: ccccccccc']

    const result = getValidPasswords(mockData)

    expect(result).toEqual(expected)
  })
})
