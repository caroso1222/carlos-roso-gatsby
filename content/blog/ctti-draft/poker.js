function getNumChips(val) {
  let chips = [100, 50, 25, 10, 5, 1]
  let numChips = 0
  for (chip of chips) {
    let num = Math.floor(val / chip)
    val -= chip * num
    numChips += num
  }
  return numChips
}

console.log(getNumChips(293))
