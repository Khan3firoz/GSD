import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./components/CSS/Theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}
