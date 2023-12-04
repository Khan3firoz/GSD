import { Container, Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const { classes } = useStyles();
  const navigate  = useNavigate();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
    <div>
      <Container maxWidth={false} className={classes.mainContainer}>
        <Grid container>
          <Grid md={6} className={classes.AboutUsTOpLeftGrid}>
            <Typography className={classes.serviceText}>About US</Typography>
            <Typography className={classes.serveceBelo}>
              <Typography
                className={classes.serveceBelo}
                style={{ color: pallete.primaryPurple }}
              >
                Your trusted partner
              </Typography>{" "}
              in virtual private assistant service
            </Typography>
            <Typography className={classes.aboutusPara}>
              We provide virtual assistant service, virtual receptionist
              services, healthcare admin services, and sales outsourcing
              service. Join Assistify today and Experience the benefits of
              streamlined operations and Productional.
            </Typography>
          </Grid>
          <Grid md={6}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                className={classes.pinIconBtn}
                src="assets/images/abfTOp.png"
                alt="Descriptive Alt Text"
              />
              <Box>
                <Box
                  component="img"
                  className={classes.sortImg}
                  src="assets/images/abft.png"
                  alt="Descriptive Alt Text"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.midContainer}>
        <Grid container>
          <Grid item md={6}>
            <Box sx={{ position: "relative" }}>
              <img alt="" src="assets/images/absGrils.png" />
              <Box className={classes.playMidBox}>
                <img
                  alt=""
                  src="assets/icons/playIconABs.svg"
                  className={classes.playIcon}
                />
                <Typography className={classes.servmissionBox}>
                  Our Mission to Serve You
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sx={{ margin: "auto 0", padding: "0 70px" }}>
            <Typography className={classes.paraText}>Our Mission</Typography>
            <Typography className={classes.serveceBelo}>
              <Typography
                className={classes.serveceBelo}
                style={{ color: pallete.primaryPurple }}
              >
                Our Mission at
              </Typography>{" "}
              Virtual private assistant serives
            </Typography>
            <Typography className={classes.paraText}>
              At Assistify, we are committed to providing excellent services to
              our client and helping them achieve their goals. We believe in
              making a positive impact on businesses and communities. Our
              dedicated team is always looking for ways to improve and innovate.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth={false}
        sx={{ margin: "100px 0", position: "relative" }}
      >
        <img
          alt=""
          src="assets/icons/appbg.png"
          className={classes.appbgleft}
        />
        <Grid container>
          <Grid item md={6} sx={{ margin: "auto", padding: "0 50px" }}>
            <Typography className={classes.serveceBelo}>
              <Typography
                className={classes.serveceBelo}
                style={{ color: pallete.primaryPurple }}
              >
                Get Started
              </Typography>
              With GSD Today
            </Typography>
            <Typography className={classes.paraText}>
              Start Optimizing Your Process Today
            </Typography>
            <Button onClick={() => navigate("/book-demo")} variant="contained" className={classes.contactUsBtn}>
              Contact Us
            </Button>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ position: "relative" }}>
              <img
                alt=""
                src="assets/images/bbabs.png"
                className={classes.bbabdimg}
              />
              <img
                alt=""
                src="assets/images/bdabs.png"
                className={classes.bdabdimg}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;

const useStyles = makeStyles()((theme) => {
  return {
    AboutUsTOpLeftGrid: {
      margin: "auto",
      padding: "0 50px",
      [theme.breakpoints.down("sm")]: {
        padding: "10px",
      },
    },
    pinIconBtn: {
      ...styles.imagesBox,
    },
    appbgleft: {
      position: "absolute",
      left: 0,
      top: "-15px",
    },
    bbabdimg: {
      width: "532.388px",
      height: "580px",
    },
    bdabdimg: {
      left: "-152px",
      top: "75px",
      position: "absolute",
    },
    contactUsBtn: {
      ...styles.buttonMain,
      padding: "12px 40px",
      marginTop: "30px",
      marginBottom: "80px",
    },
    playIcon: {
      height: "70px",
      width: "70px",
    },
    servmissionBox: {
      padding: "10px 30px 0 30px",
      color: "#D4005B",
      textAlign: "center",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      fontFamily: "Roboto",
    },
    playMidBox: {
      bottom: "10px",
      right: "-45px",
      position: "absolute",
      width: "190px",
      height: "172px",
      borderRadius: "25px",
      background: "rgba(255, 255, 255, 0.90)",
      boxShadow: "0px 0px 50px 0px rgba(1, 63, 107, 0.25)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    paraText: {
      color: "#030303",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      fontFamily: "Roboto",
    },
    midContainer: {
      padding: "50px 0",
      backgroundColor: "#F0E6FB",
    },
    aboutusPara: {
      color: "#030303",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      padding: "10px 70px 0 0",
      fontFamily: "Roboto",
      [theme.breakpoints.down("sm")]: {
        padding: "10px 0",
      }
    },
    sortImg: {
      position: "absolute",
      bottom: "-130px",
      left: "-60px",
      [theme.breakpoints.down("sm")]: {
        bottom: "-160px",
        left: "-20px",
      }
    },
    serveceBelo: {
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    serviceText: {
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontFamily: "Roboto",
      fontWeight: 700,
      lineHeight: "24px",
    },
    mainContainer: {
      marginTop: "150px",
      height: "100vh",
    },
  };
});
