export const findThreeEntriesToSum = (list: number[], sumValue: number) => {
  const result = list.reduce((acc: {}, currentValue1: number) => {
    const result = list.reduce((acc: {}, currentValue2: number) => {
      const sums = list.map((mapValue: number) => {
        return {
          value1: mapValue,
          value2: currentValue2,
          value3: currentValue1,
          result: currentValue1 + currentValue2 + mapValue,
        }
      })

      const isCorrectSumValue = sums.find((value) => value.result === sumValue)

      return {
        ...acc,
        ...isCorrectSumValue,
      }
    }, {})

    return {
      ...acc,
      ...result,
    }
  }, {})

  return result
}
