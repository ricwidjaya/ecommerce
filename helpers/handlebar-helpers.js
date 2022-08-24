module.exports = {
  // Simple IF condition to compare if a equals to b
  ifCond: (a, b, options) => {
    if (a === b) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  }
}
