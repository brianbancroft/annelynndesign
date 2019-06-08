const convertCSStoRGB = ({ color } = {}) => {
  if (color.length === 7) {
    return {
      r: (color.substr(1, 2), 16),
      g: (color.substr(3, 4), 16),
      b: (color.substr(5, 6), 16),
    }
  } else if (color.length === 4) {
    return {
      r: (`${color.substr(1, 1)}${color.substr(1, 1)}`, 16),
      g: (`${color.substr(2, 2)}${color.substr(2, 2)}`, 16),
      b: (`${color.substr(3, 3)}${color.substr(3, 3)}`, 16),
    }
  }
}

export default convertCSStoRGB
