import { findThreeEntriesToSum } from '../findThreeEntriesToSum'

const mockData = [23, 45, 12, 84, 8, 15]

describe('findThreeEntriesToSum', () => {
  it('should return values for specific sum', () => {
    const expected = {
      value1: 12,
      value2: 8,
      value3: 15,
      result: 35,
    }

    const result = findThreeEntriesToSum(mockData, 35)

    expect(result).toEqual(expected)
  })
})
