const color = {
  primary: '#1e9dba',
  secondary: '#006a77',
  tertiary: '#19D2C5',
  green: '#8EC73F',
  light: '#fff',
  dark: '#444',
  default: '#222',
  formBackground: 'rgba(30, 157, 186, 0.1)',
  formSubmitBackground: 'rgba(30, 157, 186, 0.25)',
  copy: '#151515',
}

const theme = {
  color: { ...color },
  mobileBreakpoint: '770px',
  mobile: {
    sectionDividerMargin: '30px',
  },
  footer: {
    paddingTop: '5px',
    height: '100px',
    mobile: {
      height: '90px',
    },
  },
  fontFamily: `'Raleway', sans-serif`,
  h1: {
    fontFamily: `'Raleway', sans-serif`,
    textTransform: 'uppercase',
    transform: 'scale(1, 1.2)',
    fontWeight: '100',
    textShadow: 'white 0.1em 0.1em 0.1em',
    fontSize: '90px',
    lineHeight: '90px',
    mobile: {
      fontSize: '14vw',
      letterSpacing: '-0.39px',
      textShadow: '0 0 0.2em #fff',
    },
    color: {
      primary: color.primary,
      secondary: color.secondary,
      tertiary: color.tertiary,
      green: color.green,
      light: color.light,
      default: color.default,
      formBackground: color.formBackground,
      formSubmitBackground: color.formSubmitBackground,
    },
  },
  h2: {
    fontFamily: `'Raleway', sans-serif`,
    textTransform: 'uppercase',
    fontWeight: '100',
    fontSize: '50px',
    letterSpacing: '-0.39px',
    lineHeight: '49px',
    textShadow: '0 0 0.2em #fff',
    textAlign: 'center',
    color: {
      primary: color.primary,
      secondary: color.secondary,
      tertiary: color.tertiary,
      green: color.green,
      light: color.light,
      default: color.default,
      formBackground: color.formBackground,
      formSubmitBackground: color.formSubmitBackground,
    },
  },
  h3: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '25px',
    lineHeight: '28px',
    fontWeight: '600',
    mobile: {
      fontSize: '1.6rem',
      fontWeight: '600',
      lineHeight: '2rem',
    },
    color: {
      primary: color.primary,
      secondary: color.secondary,
      tertiary: color.tertiary,
      green: color.green,
      light: color.light,
      default: color.default,
      formBackground: color.formBackground,
      formSubmitBackground: color.formSubmitBackground,
    },
  },
  h4: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '20px',
    lineHeight: '25px',
    fontWeight: '600',
    mobile: {
      lineHeight: '22px',
    },
    color: {
      primary: color.primary,
      secondary: color.secondary,
      tertiary: color.tertiary,
      green: color.green,
      light: color.light,
      default: color.default,
      formBackground: color.formBackground,
      formSubmitBackground: color.formSubmitBackground,
    },
  },
  copy: {
    fontFamily: `'Raleway', sans-serif`,
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '22px',
    mobile: {
      fontWeight: '400',
      fontSize: '19px',
    },
    portfolioHeader: {
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '21px',
    },
    portfolioItem: {
      fontSize: '17px',
      fontWeight: '400',
      lineHeight: '21px',
    },
    color: {
      primary: color.primary,
      secondary: color.secondary,
      tertiary: color.tertiary,
      green: color.green,
      light: color.light,
      default: color.default,
      formBackground: color.formBackground,
      formSubmitBackground: color.formSubmitBackground,
    },
  },
  label: {},
}

export default theme
