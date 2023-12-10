import React from "react";
import { Container, Typography, Box, Grid, Card } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Services = () => {
  const { classes } = useStyles();

  return (
    <>
      <Container maxWidth={false} className={classes.mainContainer}>
        <Box
          component="img"
          className={classes.pinIconBgL}
          src="assets\icons\services\redside.svg"
          alt="Descriptive Alt Text"
        />
        <Grid container className={classes.mainGrid}>
          <Grid item md={6} className={classes.columnsGrid}>
            <Typography className={classes.mainText}>
              Virtual Private Assistant Services
            </Typography>
            <Typography variant="h6">
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.columnsGridRight}>
            <Box
              component="img"
              className={classes.pinIconBtn}
              src="assets\icons\services\serviceImg.png"
              alt="Descriptive Alt Text"
            />
            <Box
              component="img"
              className={classes.cube}
              src="assets\icons\services\cube.png"
              alt="Descriptive Alt Text"
            />
            <Box
              component="img"
              className={classes.pantBig}
              src="assets\icons\services\pantBig.png"
              alt="Descriptive Alt Text"
            />
            <Box
              component="img"
              className={classes.plantSmall}
              src="assets\icons\services\plantSmall.png"
              alt="Descriptive Alt Text"
            />
          </Grid>
        </Grid>
        <Box
          component="img"
          className={classes.pinIconBgR}
          src="\assets\icons\services\purpleside.svg"
          alt="Descriptive Alt Text"
        />
      </Container>
      <Container maxWidth={false} className={classes.conatiner2}>
        <Typography variant="h4" color="primary" align="center">
          Services
        </Typography>
        <Typography variant="h6" align="center">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content.
        </Typography>
        <Grid container sx={{ ...styles.flexDRC, paddingTop: "20px" }}>
          <Grid container md={9}>
            <Grid item md={4} className={classes.serv2grid}>
              <AvTimerIcon className={classes.icons2} />
              <Typography variant="h5" align="center">
                Monitoring 24/7
              </Typography>
              <Typography variant="h6" sx={{ color: "#8794BA" }} align="center">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                Elementum nisi aliquet volutpat.
              </Typography>
            </Grid>
            <Grid item md={4} className={classes.serv2grid}>
              <DisplaySettingsIcon className={classes.icons2} />
              <Typography variant="h5" align="center">
                Widget System
              </Typography>
              <Typography variant="h6" sx={{ color: "#8794BA" }} align="center">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                Elementum nisi aliquet volutpat.
              </Typography>
            </Grid>
            <Grid item md={4} className={classes.serv2grid}>
              <RocketLaunchIcon className={classes.icons2} />
              <Typography variant="h5" align="center">
                Best Performance
              </Typography>
              <Typography variant="h6" sx={{ color: "#8794BA" }} align="center">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                Elementum nisi aliquet volutpat.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.conatiner3}>
        <Typography variant="h4" align="center">
          <Typography variant="h4" color="primary">
            Why Our Product Are
          </Typography>
          Different
        </Typography>
        <Grid container sx={{ ...styles.flexDRC, paddingTop: "20px" }}>
          <Grid container md={9}>
            <Grid item md={4}>
              <Card className={classes.serv2gridCard}>
                <Box
                  component="img"
                  className={classes.products}
                  src="\assets\icons\services\p1.svg"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5" align="center">
                  Lorem ipsum
                </Typography>
                <Typography variant="h6" align="center">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4} position="relative">
              <Box
                component="img"
                className={classes.productsBGImg}
                src="\assets\icons\services\fill.png"
                alt="Descriptive Alt Text"
              />
              <Card
                sx={{ position: "absolute" }}
                className={classes.serv2gridCard}
              >
                <Box
                  component="img"
                  className={classes.products}
                  src="\assets\icons\services\p2.svg"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5" align="center">
                  Lorem ipsum
                </Typography>
                <Typography variant="h6" align="center">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                </Typography>
              </Card>
            </Grid>
            <Grid item md={4}>
              <Card className={classes.serv2gridCard}>
                <Box
                  component="img"
                  className={classes.products}
                  src="\assets\icons\services\p3.svg"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5" align="center">
                  Lorem ipsum
                </Typography>
                <Typography variant="h6" align="center">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.conatiner4}>
        <Typography variant="h4" align="center">
          <span style={{ color: pallete.primaryPurple }}>Our Faithful </span>
          Staff
        </Typography>
        <Grid container sx={{ ...styles.flexDRC, paddingTop: "20px" }}>
          <Grid container md={9}>
            <Grid item md={4}>
              <Box sx={{ margin: "20px" }}>
                <Box
                  component="img"
                  className={classes.staff}
                  src="\assets\icons\services\staff1.png"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5">Member Name</Typography>
                <Typography variant="h6" padding="10px 0">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document.
                </Typography>
                <Box sx={{ ...styles.flexDR, padding: "20px 0" }}>
                  <Box
                    component="img"
                    sx={{
                      height: "16px",
                      width: "16px",
                    }}
                    src="\assets\icons\services\call2.png"
                    alt="Descriptive Alt Text"
                  />
                  <Typography variant="h6" sx={{ margin: "auto 10px" }}>
                    (+89)652 555 320
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box sx={{ margin: "20px", paddingTop: "40px" }}>
                <Box
                  component="img"
                  className={classes.staff}
                  src="\assets\icons\services\staff2.png"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5">Member Name</Typography>
                <Typography variant="h6" padding="10px 0">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document.
                </Typography>
                <Box sx={{ ...styles.flexDR, padding: "20px 0" }}>
                  <Box
                    component="img"
                    sx={{
                      height: "16px",
                      width: "16px",
                    }}
                    src="\assets\icons\services\call2.png"
                    alt="Descriptive Alt Text"
                  />
                  <Typography variant="h6" sx={{ margin: "auto 10px" }}>
                    (+89)652 555 320
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box sx={{ margin: "20px", paddingTop: "80px" }}>
                <Box
                  component="img"
                  className={classes.staff}
                  src="\assets\icons\services\staff3.png"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5">Member Name</Typography>
                <Typography variant="h6" padding="10px 0">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document.
                </Typography>
                <Box sx={{ ...styles.flexDR, padding: "20px 0" }}>
                  <Box
                    component="img"
                    sx={{
                      height: "16px",
                      width: "16px",
                    }}
                    src="\assets\icons\services\call2.png"
                    alt="Descriptive Alt Text"
                  />
                  <Typography variant="h6" sx={{ margin: "auto 10px" }}>
                    (+89)652 555 320
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.conatiner5}>
        <Typography className={classes.transparentText} align="center">
          Why Choose Us ?
        </Typography>
        <Typography color="white" variant="h4" align="center">
          Why Choose Us ?
        </Typography>
        <Typography
          color="white"
          variant="h6"
          align="center"
          className={classes.chooseIspara}
        >
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without relying on meaningful
          content. Lorem ipsum may be used as a placeholder before final copy is
          available
        </Typography>
        <Grid container sx={{ ...styles.flexDRC, paddingTop: "20px" }}>
          <Grid container md={9}>
            <Grid item md={4}>
              <Box sx={{ margin: "20px" }}>
                <Box
                  component="img"
                  className={classes.staff}
                  src="\assets\icons\services\us1.png"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5" color="white">
                  Lorem ipsum placeholder text
                </Typography>
                <Typography variant="h6" padding="5px 0" color="white">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box sx={{ margin: "20px", paddingTop: "40px" }}>
                <Box
                  component="img"
                  className={classes.staff}
                  src="\assets\icons\services\us2.png"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5" color="white">
                  Lorem ipsum placeholder text
                </Typography>
                <Typography variant="h6" padding="5px 0" color="white">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box sx={{ margin: "20px", paddingTop: "80px" }}>
                <Box
                  component="img"
                  className={classes.staff}
                  src="\assets\icons\services\us3.png"
                  alt="Descriptive Alt Text"
                />
                <Typography variant="h5" color="white">
                  Lorem ipsum placeholder text
                </Typography>
                <Typography variant="h6" padding="5px 0" color="white">
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.conatiner6}>
        <Typography variant="h4" align="center">
          <span style={{ color: pallete.primaryPurple }}>
            Amazing Business{" "}
          </span>
          Services
        </Typography>
        <Typography variant="h6" align="center" padding="5px 0">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual form of a document or a typeface without <br /> relying on
          meaningful content.
        </Typography>
        <Grid container sx={{...styles.flexDRC}}>
          <Grid container md={11}>
            {[...Array(4)].map((x) => (
              <Grid item md={3} >
                <Box position="relative" sx={{ height: "450px", margin: '20px 10px' }}>
                  <Box
                    component="img"
                    className={classes.serviceImg0}
                    src="\assets\icons\services\s1.png"
                    alt="Descriptive Alt Text"
                  />
                  <Box
                    component="img"
                    className={classes.serviceImg1}
                    src="\assets\icons\services\hide.png"
                    alt="Descriptive Alt Text"
                  />
                  <Box
                    position="relative"
                    sx={{ ...styles.flexDC, top: "320px", padding: "0px 20px" }}
                  >
                    <Typography variant="h5" color="white">
                      Lorem ipsum
                    </Typography>
                    <Typography variant="body1" color="white">
                      Lorem ipsum is a placeholder text commonly used to
                      demonstrate the visual form of a document.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;

const useStyles = makeStyles()((theme) => {
  return {
    serviceImg0: {
      ...styles.imagesBox,
      position: "absolute",
      height: "417px",
      // width: "347px",
    },
    serviceImg1: {
      ...styles.imagesBox,
      position: "absolute",
      height: "417px",
      // width: "347px",
    },
    chooseIspara: {
      padding: "20px 200px",
    },
    conatiner6: {
      padding: "50px 0",
    },
    transparentText: {
      fontFamily: "Montserrat",
      fontSize: "80px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      textTransform: "uppercase",
      color: "#FFF",
      opacity: "0.2",
    },
    conatiner4: {
      padding: "50px 0",
    },
    conatiner5: {
      padding: "50px 0",
      backgroundColor: pallete.primaryPurple,
    },
    products: {
      ...styles.imagesBox,
      width: "100px",
      height: "100px",
    },
    staff: {
      ...styles.imagesBox,
      // width: "100px",
      // height: "100px",
    },
    productsBGImg: {
      ...styles.imagesBox,
      position: "absolute",
      width: "82%",
      top: "6px",
      left: "70px",
      // height: "100px",
    },
    conatiner3: {
      backgroundColor: "#F0E6FB",
      padding: "50px 0",
    },
    serv2grid: {
      padding: "10px 20px",
      ...styles.flexDCC,
      alignItems: "center",
    },
    serv2gridCard: {
      padding: "40px 30px",
      margin: "20px 40px",
      ...styles.flexDCC,
      alignItems: "center",
      borderRadius: "12px",
    },
    icons2: {
      fontSize: "70px",
      color: "#EF2A82",
    },
    conatiner2: {
      padding: "50px 0px",
    },
    cube: {
      position: "absolute",
      right: "60px",
    },
    plantSmall: {
      position: "absolute",
      left: "210px",
    },
    pantBig: {
      position: "absolute",
      bottom: "0",
      right: "20px",
    },
    homemenBox: {
      position: "relative",
    },
    pinIconBtn: {
      ...styles.imagesBox,
      height: "550px",
      width: "500px",
    },
    pinIconBgL: {
      // ...styles.imagesBox,
      position: "absolute",
      left: "0px",
      bottom: "-50px",
    },
    pinIconBgR: {
      // ...styles.imagesBox,
      position: "absolute",
      right: "0px",
      top: "60px",
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
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        // padding:'20px'
      },
    },
    columnsGrid: {
      margin: "100px 0px",
      paddingLeft: "60px",
      [theme.breakpoints.down("sm")]: {
        margin: "auto 0",
        padding: "0",
      },
    },
    columnsGridRight: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      position: "relative",
    },
    mainGrid: {
      height: "100%",
      backgroundImage: "url(assets/images/GSDNewImages/GSD.png)",
      backgroundRepeat: "no-repeat",
    },
    mainContainer: {
      paddingTop: "110px",
      backgroundColor: "#F0E6FB",
      position: "relative",
    },
  };
});