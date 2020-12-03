import { getValidPasswordsToboggan } from '../getValidPasswordsToboggan'

const mockData = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc',
  '9-10 m: mmmmnxmmmwm',
]

describe('getValidPasswords', () => {
  it('should return valid passwords', () => {
    const expected = ['1-3 a: abcde', '9-10 m: mmmmnxmmmwm']

    const result = getValidPasswordsToboggan(mockData)

    expect(result).toEqual(expected)
  })
})
