import { findTwoEntriesToSum } from '../findTwoEntriesToSum'

const mockData = [23, 45, 12, 84]

describe('findTwoEntriesToSum', () => {
  it('should return values for specific sum', () => {
    const expected = {
      value1: 23,
      value2: 12,
      result: 35,
    }

    const result = findTwoEntriesToSum(mockData, 35)

    expect(result).toEqual(expected)
  })
})
