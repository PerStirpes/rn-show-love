function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function randomUnit(chars = "0123456789ABCDEF") {
  return chars[Math.floor(Math.random() * 16)]
}

function randomHex(color = "#", i = 0) {
  while (i < 6) {
    color += randomUnit()
    i++
  }
  return color
}

export { getRandomInt, randomHex }
