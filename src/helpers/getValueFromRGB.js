const getValueFromRGB = ({ r, g, b } = {}) => {
  r = r / 255
  g = g / 255
  b = b / 255

  const maxRGB = Math.max(r, Math.max(g, b))
  const minRGB = Math.min(r, Math.min(g, b))

  const v = (0.5 * (maxRGB + minRGB)) / 100
  return v
}

export default getValueFromRGB
