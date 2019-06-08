const getValueFromRGB = ({ r, g, b } = {}) => {
  //remove spaces from input RGB values, convert to int
  r = parseInt(('' + r).replace(/\s/g, ''), 10)
  g = parseInt(('' + g).replace(/\s/g, ''), 10)
  b = parseInt(('' + b).replace(/\s/g, ''), 10)

  if (r == null || g == null || b == null || isNaN(r) || isNaN(g) || isNaN(b)) {
    alert('Please enter numeric RGB values!')
    return
  }
  if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
    alert('RGB values must be in the range 0 to 255.')
    return
  }
  r = r / 255
  g = g / 255
  b = b / 255
  var maxRGB = Math.max(r, Math.max(g, b))

  return maxRGB
}

export default getValueFromRGB
