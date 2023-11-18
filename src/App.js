import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./components/css/Theme";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "200px !importent", // Adjust this value to match the height of your AppBar
    [theme.breakpoints.up("md")]: {
      marginTop: "60px", // Adjust this value for larger screens if needed
    },
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div className={classes.content}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
}
