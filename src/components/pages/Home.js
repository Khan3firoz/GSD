import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const Home = () => {
  const { classes } = useStyles();

  const whyGsdArr = [
    {
      id: 1,
      title: "Quick Results",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "rocket.png", // public\assets\images\rocket.png
      elips: "elips1.svg",
      borderColor: "4px solid #ECDAFF",
    },
    {
      id: 2,
      title: "Satisfaction Guarantee",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "yoyo.png",
      elips: "elips2.svg",
      borderColor: "4px solid #B8B9FD",
    },
    {
      id: 3,
      title: "Experienced Support Staff",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      img: "ig.png",
      elips: "elips3.svg",
      borderColor: "4px solid #FFA3CA",
    },
  ];
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
            <img
              alt="boy"
              src="assets/images/homemen.png"
              className={classes.homemenImg}
            />
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
              style={{ color: pallete.primaryPurple }}
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
            <span style={{ color: pallete.primaryPurple }}>Trusted by</span>{" "}
            thousands of <br />
            businesses
          </Typography>
          <Grid
            container
            md={8}
            xs={10}
            sx={{ display: "flex", justifyContent: "center" }}
          >
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
                <span style={{ color: pallete.primaryPurple }}>
                  Simplify your{" "}
                </span>{" "}
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
                <span style={{ color: pallete.primaryPurple }}>
                  Streamlined solutions{" "}
                </span>{" "}
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
          <Grid item md={6} className={classes.serviceLftGrid1}>
            <img
              alt="dots"
              src="assets/images/coolboys.png"
              className={classes.coolbuysImg}
            />
          </Grid>
          <Grid item md={6} className={classes.serviceRightTextBox}>
            <Box>
              <Typography className={classes.serviceText}>
                Tailored solutions for every business
              </Typography>
              <Typography className={classes.serveceBelo}>
                <span style={{ color: pallete.primaryPurple }}>
                  We cater to{" "}
                </span>{" "}
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
      <Container maxWidth={false}>
        <Box>
          <Typography align="center" className={classes.serveceBelo}>
            <span style={{ color: pallete.primaryPurple }}>Read our</span> blog
            for insights
          </Typography>
          <Typography
            sx={{ margin: "20px 0" }}
            align="center"
            className={classes.serviceText}
          >
            Stay Updated with our latest articles.
          </Typography>
        </Box>
        <Grid container className={classes.blogsGrid}>
          <Grid container md={10}>
            <Grid item md={4} lg={3} sm={6} xs={12}>
              <Box className={classes.blogsBox}>
                <img
                  alt=""
                  src="assets/images/blog1.png"
                  className={classes.blogimg}
                />
                <Box className={classes.bolgNameTagBox}>
                  <Typography className={classes.blogtagH}>
                    John Smith
                  </Typography>
                  <Typography className={classes.blogTagp}>
                    Content Writer
                  </Typography>
                </Box>
                <Typography className={classes.blogHeading}>
                  How to optimize your business operations?
                </Typography>
                <Typography>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} lg={3} sm={6} xs={12}>
              <Box className={classes.blogsBox}>
                <img
                  alt=""
                  src="assets/images/blog2.png"
                  className={classes.blogimg}
                />
                <Box className={classes.bolgNameTagBox}>
                  <Typography className={classes.blogtagH}>
                    John Smith
                  </Typography>
                  <Typography className={classes.blogTagp}>
                    Content Writer
                  </Typography>
                </Box>
                <Typography className={classes.blogHeading}>
                  How to optimize your business operations?
                </Typography>
                <Typography>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} lg={3} sm={6} xs={12}>
              <Box className={classes.blogsBox}>
                <img
                  alt=""
                  src="assets/images/blog3.png"
                  className={classes.blogimg}
                />
                <Box className={classes.bolgNameTagBox}>
                  <Typography className={classes.blogtagH}>
                    John Smith
                  </Typography>
                  <Typography className={classes.blogTagp}>
                    Content Writer
                  </Typography>
                </Box>
                <Typography className={classes.blogHeading}>
                  How to optimize your business operations?
                </Typography>
                <Typography>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4} lg={3} sm={6} xs={12}>
              <Box className={classes.blogsBox}>
                <img
                  alt=""
                  src="assets/images/blog2.png"
                  className={classes.blogimg}
                />
                <Box className={classes.bolgNameTagBox}>
                  <Typography className={classes.blogtagH}>
                    John Smith
                  </Typography>
                  <Typography className={classes.blogTagp}>
                    Content Writer
                  </Typography>
                </Box>
                <Typography className={classes.blogHeading}>
                  How to optimize your business operations?
                </Typography>
                <Typography>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.expertContainer}>
        <Grid container className={classes.blogsGrid}>
          <Grid
            container
            md={8}
            sx={{
              backgroundColor: pallete.primaryPurple,
              borderRadius: "12px",
            }}
            className={classes.takeYourBusiness}
          >
            <Grid item md={9.5}>
              <Box className={classes.expertLeftBox}>
                <Typography className={classes.expetText}>
                  Take your business to new heights
                </Typography>
                <Divider variant="inset" className={classes.dividerMain} />
                <Typography className={classes.expectPara}>
                  Meet our experts and elevate your business.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={2.5} className={classes.experBtnGrod}>
              <Button variant="contained" className={classes.expertBtns}>
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.welcomCOntainer}>
        <Box>
          <Typography align="center" className={classes.serveceBelo}>
            <span style={{ color: pallete.primaryPurple }}>Welcome to</span> GSD
          </Typography>
          <Typography
            sx={{ margin: "20px 0" }}
            align="center"
            className={classes.serviceText}
          >
            Your Virtual Assistant Solution
          </Typography>
        </Box>
        <Grid container>
          <Grid item md={6}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box className={classes.corosalClientCOntrols}>
                <IconButton sx={{ backgroundColor: "#fff", margin: "4px 0" }}>
                  <KeyboardArrowUpRoundedIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#fff", margin: "4px 0" }}>
                  <KeyboardArrowDownRoundedIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {[...Array(3)].map((x) => (
                  <Box key={x} className={classes.carosalBox}>
                    <img
                      alt=""
                      src="assets/icons/Quotes.svg"
                      className={classes.quotIcon}
                    />
                    <Card className={classes.caroselCards}>
                      <Typography>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries.
                      </Typography>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Box className={classes.happyClientBox}>
              <img
                src="assets/images/client.png"
                alt=""
                className={classes.clintImg}
              />
              <Typography className={classes.cName}>John Smith</Typography>
              <Typography className={classes.cTitle}>Happy Client</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.whyGsdContainer}>
        <Grid
          container
          md={10}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item md={5}>
            <Typography className={classes.serveceBelo}>
              <span style={{ color: pallete.primaryPurple }}>Why</span> GSD
            </Typography>
            <Typography className={classes.whyGsdPARA}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries,It has survived not only five
              centuries.when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Box>
              {whyGsdArr.map((x) => (
                <Grid
                  container
                  key={x.id}
                  className={classes.gsdArrCard}
                  sx={{ border: `${x.borderColor}` }}
                >
                  <Grid item xs={8}>
                    <Typography className={classes.gsdArrTitle}>
                      {x.title}
                    </Typography>
                    <Typography>{x.description}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box className={classes.rocketBox}>
                      <img
                        src={`/assets/images/${x.img}`}
                        alt=""
                        className={classes.rocketImg}
                      />
                      <img
                        src={`/assets/images/${x.elips}`}
                        alt=""
                        className={classes.rocketElips}
                      />
                    </Box>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={false} className={classes.appCOntainder}>
        <img
          alt=""
          src="assets/icons/appbg.png"
          className={classes.appbgleft}
        />
        <Grid
          container
          md={12}
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid item md={4} sx={{ margin: "auto 0" }}>
            <Typography className={classes.serveceBelo}>
              <span style={{ color: pallete.primaryPurple }}>
                Connect With Your
              </span>
              <br /> Favorite Apps
            </Typography>
            <Button variant="contained" className={classes.contactUsBtn}>
              Contact Us
            </Button>
          </Grid>
          <Grid item md={6}>
            <Box className={classes.allPppsGrdBox}>
              <Grid container>
                <Grid item={4}>
                  <Box className={classes.amazonBox}>
                    <Typography className={classes.amzonText}>
                      amazon
                    </Typography>
                    <img
                      alt=""
                      src="assets/icons/amazn.svg"
                      className={classes.amzonIcs}
                    />
                  </Box>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "end",
                    }}
                  >
                    <Box className={classes.otherAppsBox}>
                      <Typography align="center" className={classes.uberText}>
                        uber
                      </Typography>
                    </Box>
                  </div>
                </Grid>
                <Grid item={4}>
                  <Box className={classes.otherAppsBox}>
                    <img
                      alt=""
                      src="assets/icons/nbc.png"
                      className={classes.otherappsicons}
                    />
                  </Box>
                  <Box className={classes.otherAppsBox}>
                    <img
                      alt=""
                      src="assets/icons/app.svg"
                      className={classes.otherappsicons125}
                    />
                  </Box>
                  <Box className={classes.otherAppsBox}>
                    <img
                      alt=""
                      src="assets/icons/app2.svg"
                      className={classes.otherappsicons125}
                    />
                  </Box>
                  <Box className={classes.otherAppsBox}>
                    <img
                      alt=""
                      src="assets/icons/app5.svg"
                      className={classes.otherappsicons125}
                    />
                  </Box>
                </Grid>
                <Grid item={4}>
                  <Box className={classes.otherAppsBoxYtube}>
                    <img
                      alt=""
                      src="assets/icons/ytube.svg"
                      className={classes.otherappsicons125}
                    />
                    <Typography
                      sx={{ position: "absolute", top: "75px", right: "50px" }}
                    >
                      YouTube
                    </Typography>
                  </Box>
                  <Box className={classes.otherAppsBox}>
                    <img
                      alt=""
                      src="assets/icons/app3.svg"
                      className={classes.otherappsicons125}
                    />
                    <img
                      alt=""
                      src="assets/icons/app4.svg"
                      className={classes.otherappsicons4}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <img
          alt=""
          src="assets/icons/appbg2.png"
          className={classes.appbgright}
        />
      </Container>
      <Container maxWidth={false} className={classes.expertContainer}>
        <Grid container className={classes.blogsGrid}>
          <Grid
            container
            md={8}
            sx={{
              backgroundColor: pallete.primaryPurple,
              borderRadius: "12px",
            }}
            className={classes.takeYourBusiness}
          >
            <Grid item md={6}>
              <Box className={classes.expertLeftBox}>
                <Typography className={classes.expetText}>
                  Try GSD For Free
                </Typography>
                <Divider variant="inset" className={classes.dividerMain} />
                <Typography className={classes.expectPara}>
                  No Credit Card Required. Start Your 14-Day Free Trial Today.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} className={classes.experBtnGrodBottom}>
              <Button variant="contained" className={classes.expertBtns}>
                Start Free Trial
              </Button>
              <Button variant="contained" className={classes.expertBtns}>
                Contact Us
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

const useStyles = makeStyles()((theme) => {
  return {
    otherappsicons125: {
      // width: "84.18px",
      // height: "101.378px",
    },
    otherappsicons4: {
      position: "absolute",
    },
    otherappsicons: {
      width: "84.18px",
      height: "101.378px",
    },
    uberText: {
      color: "#000",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    amzonIcs: {
      width: "75.334px",
      height: "15.924px",
      position: "absolute",
      bottom: "90px",
      left: "90px",
    },
    amzonText: {
      color: "#000",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "20px",
      position: "absolute",
      left: "35px",
    },
    allPppsGrdBox: {
      padding: "40px",
    },
    amazonBox: {
      borderRadius: "35px",
      backgroundColor: "#FFFFFF",
      width: "269.1px",
      height: " 260.115px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      margin: "15px 0 0 0",
    },
    otherAppsBox: {
      borderRadius: "35px",
      backgroundColor: "#FFFFFF",
      width: "131.1px",
      height: "130.725px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "15px 0 15px 15px",
      alignItems: "center",
    },
    otherAppsBoxYtube: {
      borderRadius: "35px",
      backgroundColor: "#FFFFFF",
      width: "131.1px",
      height: "130.725px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "15px",
      alignItems: "center",
      position: "relative",
    },
    appbgleft: {
      position: "absolute",
      left: 0,
      top: "25px",
    },
    appbgright: {
      position: "absolute",
      right: 0,
      top: "50px",
    },
    appCOntainder: {
      backgroundColor: "#F4F5F9",
      position: "relative",
    },
    whyGsdPARA: {
      color: "#2E2E2E",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
    },
    gsdArrCard: {
      borderRadius: "12px",
      // border: '4px solid #ECDAFF',
      background: "rgba(255, 255, 255, 0.32)",
      backdropFilter: "blur(12px)",
      padding: "40px 20px",
      marginBottom: "20px",
    },
    gsdArrTitle: {
      color: "#1A2128",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      letterSpacing: "0.2px",
    },
    gsdArrPara: {
      color: "#434D56",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "28px",
    },
    takeYourBusiness: {
      [theme.breakpoints.down("sm")]: {
        padding: "50px 0",
      },
    },
    coolbuysImg: {
      width: "350px",
      height: "250px",
    },
    homemenImg: {
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
    },
    rocketElips: {
      // position:'absolute',
    },
    rocketImg: {
      position: "absolute",
      bottom: "31px",
      left: "23px",
      width: "93.73px",
      height: "93.73px",
    },
    rocketBox: {
      position: "relative",
    },
    whyGsdContainer: {
      margin: "100px 0",
      display: "flex",
      justifyContent: "center",
    },
    corosalClientCOntrols: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    quotIcon: {
      top: "-3px",
      left: "60px",
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        padding: "0",
        top: "-3px",
        left: "30px",
      },
    },
    carosalBox: {
      position: "relative",
      padding: "0 20px",
      [theme.breakpoints.down("sm")]: {
        padding: "0",
      },
    },
    caroselCards: {
      padding: "40px",
      margin: "20px",
      [theme.breakpoints.down("sm")]: {
        padding: "30px",
        margin: "10px",
      },
    },
    cTitle: {
      color: "#2E2E2E",
      textAlign: "center",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      padding: "0px 0 20px 0",
    },
    cName: {
      padding: "10px 0",
      color: "#2E2E2E",
      fontSize: "22px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    clintImg: {
      width: "575px",
      height: "446.25px",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        height: "250px",
      },
    },
    happyClientBox: {
      width: "595px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#FFF",
      alignContent: "center",
      alignItems: "center",
      // margin: "10px 70px",
      // paddingTop: "10px",
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
    },
    welcomCOntainer: {
      backgroundColor: "#F0E6FB",
      padding: "40px 60px",
    },
    expertBtns: {
      ...styles.buttonMain,
      backgroundColor: "#fff",
      color: "#737373",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#737373",
      },
    },
    experBtnGrod: {
      margin: "auto ",
    },
    experBtnGrodBottom: {
      margin: "auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    dividerMain: {
      width: "48px",
      height: "4px",
      backgroundColor: "#fff", // Replace with your desired color
      margin: theme.spacing(1, 0),
      borderRadius: "2px",
    },
    expectPara: {
      color: "#FFFFFF",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    expetText: {
      color: "#FFFFFF",
      fontSize: "26px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
    },
    expertLeftBox: {
      padding: "40px 40px",
    },
    expertGrid: {
      padding: "200px 50px",
      height: "300px",
    },
    expertContainer: {
      margin: "50px 0",
    },
    blogsGrid: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
    blogimg: {
      // width: "332px",
      // height: "281px",
    },
    blogTagp: {
      color: "#6A6A6A",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    blogtagH: {
      color: "#000",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    bolgNameTagBox: {
      backgroundColor: "#FFFFFF",
      position: "absolute",
      padding: "10px 20px",
      borderRadius: "8px 0px 0px 8px",
      right: "14.5px",
      top: "180px",
    },
    blogPara: {
      color: "#2E2E2E",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    blogHeading: {
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      padding: "15px 0",
    },
    blogsBox: {
      display: "flex",
      flexDirection: "column",
      padding: "10px 15px",
      position: "relative",
    },
    efficiencyBoxLeft: {
      padding: "100px 20px",
    },
    teamImg01: {
      padding: "0 10px",
      [theme.breakpoints.down("sm")]: {
        width: "350px",
        height: "250px",
      },
    },
    teamImg02: {
      padding: "0 10px",
      [theme.breakpoints.down("sm")]: {
        width: "350px",
        height: "250px",
      },
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
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    serviceLftGrid1: {
      position: "relative",
      padding: "30px 15px",
    },
    service2Conatiner: {
      backgroundColor: "#F0E6FB",
      height: "590px",
      margin: "50px 0",
      [theme.breakpoints.down("sm")]: {
        padding: "50px 0",
        height: "800px",
      },
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
      [theme.breakpoints.down("sm")]: {
        height: "200px",
        width: "250px",
      },
    },
    serviceBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
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
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        // padding:'20px'
      },
    },
    mainContainer: {
      marginTop: "110px",
      height: "100vh",
    },
  };
});
