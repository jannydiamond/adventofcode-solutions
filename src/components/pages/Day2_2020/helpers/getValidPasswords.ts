export const getValidPasswords = (passwords: string[]) => {
  const validPasswords = passwords.reduce((acc: string[], value: string) => {
    const splittedValue = value.split(/[\s-:]/)

    const min = parseInt(splittedValue[0])
    const max = parseInt(splittedValue[1])
    const testChar = splittedValue[2]
    const pwd = splittedValue[4]

    const filteredTestChar = pwd
      .split('')
      .filter((char: string) => char === testChar)
      .join('')

    const testCharCount = filteredTestChar.length

    if (testCharCount >= min && testCharCount <= max) return [...acc, value]

    return acc
  }, [])

  return validPasswords
}
