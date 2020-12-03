export const findTwoEntriesToSum = (list: number[], sumValue: number) => {
  const result = list.reduce((acc: {}, currentValue: number) => {
    const sums = list.map((mapValue: number) => {
      return {
        value1: mapValue,
        value2: currentValue,
        result: currentValue + mapValue,
      }
    })

    const isCorrectSumValue = sums.find((value) => value.result === sumValue)

    return {
      ...acc,
      ...isCorrectSumValue,
    }
  }, {})

  return result
}
