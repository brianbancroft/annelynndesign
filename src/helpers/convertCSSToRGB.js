const convertCSStoRGB = ({ color } = {}) => {
  let r
  if (color.length === 7) {
    r = {
      r: parseInt(color.substr(1, 2), 16),
      g: parseInt(color.substr(3, 4), 16),
      b: parseInt(color.substr(5, 6), 16),
    }
  } else if (color.length === 4) {
    r = {
      r: parseInt(`${color.substr(1, 1)}${color.substr(1, 1)}`, 16),
      g: parseInt(`${color.substr(2, 2)}${color.substr(2, 2)}`, 16),
      b: parseInt(`${color.substr(3, 3)}${color.substr(3, 3)}`, 16),
    }
  }

  return r
}

export default convertCSStoRGB
