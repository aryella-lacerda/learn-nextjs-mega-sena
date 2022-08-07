export class MegaSena {
  static generate(nOfGuesses: number) {
    const arr = []

    while (arr.length < nOfGuesses) {
      var candidate = Math.floor(Math.random() * 60) + 1
      // Push only unique values
      if (arr.indexOf(candidate) === -1) arr.push(candidate)
    }

    return arr.sort((a, b) => a - b)
  }
}
