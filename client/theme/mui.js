import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

const sheets = new ServerStyleSheets();

const primaryColor = "#007bff";

const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const typographyMap = () => {
  var style = (fontSize = "16px", margin = "0 0 0.5rem 0") => {
    return {
      fontSize: fontSize,
      margin: margin,
      fontWeight: "bold"
    }
  };
  return {
    h1: style('2rem'),
    h2: style('1.5rem'),
    h3: style('1.17rem'),
    h4: style('1rem'),
    h5: style('.83rem'),
    h6: style('.67rem')
  }
}

const buttonMap = {
  text: {
    textTransform: 'none'
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    contrastThreshold: 3,
    tonalOffset: 0.05
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif, color-emoji`
  },
  breakpoints: { values: breakpointValues },
  overrides: {
    MuiButton: buttonMap,
    MuiTypography: typographyMap()
  }
});

export default function (props) {
  return sheets.collect(<ThemeProvider theme={theme}>{props.children}</ThemeProvider>)
}