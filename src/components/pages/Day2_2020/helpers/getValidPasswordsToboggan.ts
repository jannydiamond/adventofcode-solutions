export const getValidPasswordsToboggan = (passwords: string[]) => {
  const validPasswords = passwords.reduce((acc: string[], value: string) => {
    const splittedValue = value.split(/[\s-:]/)

    const pos1 = parseInt(splittedValue[0])
    const pos2 = parseInt(splittedValue[1])
    const testChar = splittedValue[2]
    const pwd = splittedValue[4]

    const filteredTestChar = pwd
      .split('')
      .filter((char: string) => char === testChar)
      .join('')

    const testCharCount = filteredTestChar.length

    if (
      pwd.charAt(pos1 - 1) === testChar &&
      pwd.charAt(pos2 - 1) !== testChar
    ) {
      return [...acc, value]
    } else if (
      pwd.charAt(pos1 - 1) !== testChar &&
      pwd.charAt(pos2 - 1) === testChar
    ) {
      return [...acc, value]
    }

    return acc
  }, [])

  return validPasswords
}
