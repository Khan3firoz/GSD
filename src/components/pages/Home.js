import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";

const Home = () => {
  const { classes } = useStyles();
  return (
    <div>
      <Container maxWidth={false} className={classes.mainContainer}>
        <Grid container className={classes.mainGrid}>
          <Grid item md={5} xs={12} className={classes.columnsGrid}>
            <Typography className={classes.mainText}>
              Virtual Private Assistant Services
            </Typography>
            <Typography className={classes.secondHeading}>
              We Make your business thrive.
            </Typography>
            <Box className={classes.exploreBox}>
              <Typography className={classes.exploreLink}>Explore</Typography>
              <ArrowForwardIcon
                sx={{ color: pallete.parimayBlue, fontSize: "20px" }}
              />
            </Box>
          </Grid>
          <Grid item md={7} xs={12} className={classes.columnsGridRight}>
            <img alt="boy" src="/assets/images/homemen.png" />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false}>
        <Box sx={{ margin: "50px 0" }} className={classes.serviceBox}>
          <Typography align="center" className={classes.serviceText}>
            Our Services
          </Typography>
          <Typography align="center" className={classes.serveceBelo}>
            <Typography
              className={classes.serveceBelo}
              style={{ color: "#6800D7" }}
            >
              Experience the power of
            </Typography>{" "}
            Virtual Assistance
          </Typography>
          <img
            alt="service"
            src="assets/images/service.png"
            className={classes.serviceImg}
          />
          <Button variant="contained" className={classes.contactUsBtn}>
            Contact Us
          </Button>
          <Typography align="center" className={classes.serveceBelo}>
            <span style={{ color: "#6800D7" }}>Trusted by</span> thousands of{" "}
            <br />
            businesses
          </Typography>
          <Grid container md={8} xs={10}>
            <Grid item md={3} sm={6} xs={12}>
              <img alt="" src="assets/images/c1.svg" />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <img alt="" src="assets/images/c2.svg" />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <img alt="" src="assets/images/c3.svg" />
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <img alt="" src="assets/images/c4.svg" />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth={false} className={classes.service2Conatiner}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item md={6} className={classes.serviceLftGrid}>
            <img
              alt="dots"
              src="assets/images/dots.png"
              className={classes.dotsImg}
            />
            <img
              alt="mens"
              src="assets/images/twomen.png"
              className={classes.twomenImg}
            />
            <img
              alt="dots"
              src="assets/images/dots.png"
              className={classes.dotsbottomImg}
            />
            <img
              alt="mens"
              src="assets/images/onewomen.png"
              className={classes.onewomenImg}
            />
          </Grid>
          <Grid item md={6} className={classes.serviceRightTextBox}>
            <Box>
              <Typography className={classes.serviceText}>
                Our Services
              </Typography>
              <Typography className={classes.serveceBelo}>
                <span style={{ color: "#6800D7" }}>Simplify your </span>{" "}
                Business <br />
                operations.
              </Typography>
              <Typography className={classes.paraText}>
                We provide a range of services tailored to your needs, including
                virtual private assistance services, virtual receptionist
                services, healthcare admin services, and sales outsourcing
                services.
              </Typography>
              <Button variant="contained" className={classes.contactUsBtn}>
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.efficiencyCon}>
        <Grid container>
          <Grid item md={6} sx={{ margin: "auto" }}>
            <Box className={classes.efficiencyBoxLeft}>
              <Typography className={classes.serviceText}>
                Efficiency is
              </Typography>
              <Typography className={classes.serveceBelo}>
                <span style={{ color: "#6800D7" }}>Streamlined solutions </span>{" "}
                For <br />
                your business.
              </Typography>
              <Typography className={classes.paraText}>
                Our streamlined approach to business enables us to deliver
                high-quality services without unnecessary complexity or clutter.
                We focus on what’s important, and our client appreciate the
                efficiency and effectiveness of our services.
              </Typography>
              <Button variant="contained" className={classes.contactUsBtn}>
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              alt=""
              src="assets/images/team.png"
              className={classes.teamImg01}
            />
            <img
              alt=""
              src="assets/images/team2.png"
              className={classes.teamImg02}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.service2Conatiner}>
        <Grid container sx={{ height: "100%" }}>
          <Grid item md={6} className={classes.serviceLftGrid}>
            <img alt="dots" src="assets/images/coolboys.png" />
          </Grid>
          <Grid item md={6} className={classes.serviceRightTextBox}>
            <Box>
              <Typography className={classes.serviceText}>
                Tailored solutions for every business
              </Typography>
              <Typography className={classes.serveceBelo}>
                <span style={{ color: "#6800D7" }}>We cater to </span>{" "}
                businesses of <br />
                all sizes.
              </Typography>
              <Typography className={classes.paraText}>
                Whether you’re a small startup or a large corporation, we have
                solutions that can help your business achieve its goals. We work
                closely with our clients to understand their unique needs.
              </Typography>
              <Button variant="contained" className={classes.contactUsBtn}>
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

const useStyles = makeStyles()((theme) => {
  return {
    efficiencyBoxLeft: {
      padding: "100px 20px",
    },
    teamImg01: {
      padding: "0 10px",
    },
    teamImg02: {
      padding: "0 10px",
    },
    efficiencyCon: {},
    serviceRightTextBox: {
      margin: "auto",
      padding: "20px 60px",
    },
    paraText: {
      color: "#030303",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
    },
    onewomenImg: {
      position: "absolute",
      right: "0px",
      top: "170px",
    },
    twomenImg: {
      position: "absolute",
      left: "70px",
      top: "50px",
    },
    dotsbottomImg: {
      position: "absolute",
      right: "280px",
      top: "480px",
    },
    dotsImg: {
      position: "absolute",
    },
    serviceLftGrid: {
      position: "relative",
      padding: "30px 15px",
    },
    service2Conatiner: {
      backgroundColor: "#F0E6FB",
      height: "590px",
      margin: "50px 0",
    },
    contactUsBtn: {
      ...styles.buttonMain,
      padding: "12px 40px",
      marginTop: "30px",
      marginBottom: "80px",
    },
    serviceImg: {
      height: "500px",
      width: "1000px",
      margin: "20px 0",
    },
    serviceBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    serveceBelo: {
      // color: '#6800D7',
      // textAlign: "center",
      // fontVariantNumeric: 'lining-nums proportional-nums',
      // fontFamily: 'Montserrat',
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      textTransform: "capitalize",
    },
    serviceText: {
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
    },
    exploreLink: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      color: pallete.parimayBlue,
      margin: "auto 0",
    },
    secondHeading: {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "40px",
      color: "#333333",
      margin: "20px 0px",
    },
    exploreBox: {
      display: "flex",
      flexDirection: "row",
      margin: "20px 0px",
    },
    columnsGrid: {
      margin: "auto 0px",
    },
    columnsGridRight: {
      display: "flex",
      flexDirection: "center",
    },
    mainGrid: {
      height: "100%",
    },
    mainText: {
      background: "linear-gradient(93deg, #6800D7 0.68%, #DC0155 65.41%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontSize: "65px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    mainContainer: {
      marginTop: "110px",
      height: "100vh",
    },
  };
});
