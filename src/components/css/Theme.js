import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const font = "'Plus Jakarta Sans', sans-serif";

export const pallete = {
  black: "#000",
  primaryBlack: "#030303",
  primaryPink: "#DC0155",
  parimayBlue: "#6800D7",
  primaryWhite: "#FFFFFF",
  primaryPurple: "#6800D7",
};

let theme = createTheme({
  palette: {
    primary: { main: pallete.primaryPurple },
    secondary: { main: pallete.primaryPurple },
    error: { main: "#6E353A" },
    warning: { main: "#F5EE9E" },
    info: { main: "#645FF2" },
    success: { main: "#645FF2" },
    background: { default: "#F3F4FD" },
  },
  breakpoints: {
    values: { xs: 600, sm: 800, md: 1000, lg: 1200, xl: 1536 },
  },
  typography: {
    fontFamily: font,
    h5: { fontSize: 20, latterSpacing: "0.03rem", fontWeight: "400" },
    h6: {
      fontSize: 18,
      latterSpacing: "0.03rem",
      fontWeight: "400",
    },
    h4: { fontSize: 16, latterSpacing: "0.02rem", fontWeight: "200" },
    h3: { fontSize: 18, latterSpacing: "0.03rem", fontWeight: "600" },
    h2: {
      color: "#645FF2",
      fontSize: "20px",
      fontWeight: "600",
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: "400",
      padding: "10px 0",
      letterSpacing: "0.03rem",
    },
    subtitle2: { fontSize: 12, letterSpacing: "0.03rem", fontWeight: "400" },
    body1: { fontSize: 14, letterSpacing: "0.03rem" },
    body2: { fontSize: 16, letterSpacing: "0.03rem" },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
