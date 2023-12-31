import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./components/css/Theme";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer"
import { makeStyles } from "tss-react/mui";
import AboutUs from "./components/pages/AboutUs";
import Career from "./components/pages/Career";
import MeetTheTeam from "./components/pages/MeetTheTeam";
import BlogPage from "./components/pages/Blog";
import PaymentPage from "./components/pages/PaymentPage";
import Demo from "./components/pages/Demo";
import ContactUs from "./components/pages/ContactUs";
import Services from "./components/pages/Services";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "0 !importent",
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
            <Route exact path="/career" element={<Career />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/meet-team" element={<MeetTheTeam />} />
            <Route exact path="/blogs" element={<BlogPage />} />
            <Route exact path="/payments" element={<PaymentPage />} />
            <Route exact path="/book-demo" element={<Demo />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  );
}
