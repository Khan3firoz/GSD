import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Divider,
  Button,
  
} from "@mui/material";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import React from 'react';
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";

const MeetTheTeam = () => {
  const { classes } = useStyles();
  const placeholderImages = [
    '',
    '',
    '',
    '',
    '',
  ];
  
  return (

    <div>
       <Container maxWidth={false} className={classes.mainContainer}>
       <Grid container className={classes.mainGrid}>
          <Grid item md={6} >
            <Typography className={classes.mainText} >
            Meet Our Dedicated Virtual Assistant Team
            </Typography>
            <Typography className={classes.secondHeading} >
            Experienced Professionals at Your Service.
            </Typography>
            
          </Grid>
          <Grid item md={6} className={classes.columnsGridRight}>
            <Box className={classes.homemenBox}>
              <img
                alt="1stBG"
                src="assets/images/meetTheTeam/1.png"
                className={classes.firstImg}
              />
              <img
                alt="boy"
                src="assets/images/meetTheTeam/2.png"
                className={classes.secondImg}
              />
              <img
                alt="boy"
                src="assets/images/meetTheTeam/3.png"
                className={classes.thirdImg}
              />
              <img
                alt="boy"
                src="assets/images/meetTheTeam/4.png"
                className={classes.fourthImg}
              />
              <img
                alt="boy"
                src="assets/images/meetTheTeam/5.png"
                className={classes.fifthImg}
              />
              <img
                alt="boy"
                src="assets/images/meetTheTeam/6.png"
                className={classes.sixthImg}
              />
            </Box>
          </Grid>
          </Grid>
       </Container>
       <Container maxWidth={false} >
       <Grid container sx={{ height: "100%" }}>
       <Grid item md={6} className={classes.serviceLftGrid}>
            <img
              alt="dots"
              
            />
            <img
              alt="mens"
              
            />
            
            
          </Grid>
          <Grid item md={6} className={classes.serviceRightTextBox}>
            <Box>
              <Typography className={classes.serveceBelo}>
                <span style={{ color: pallete.primaryPurple }}>
                Lorem ipsum{" "}
                </span>{" "}
                placeholder text
              </Typography>
              <Typography className={classes.paraText}>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.In publishing and graphic design.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.In publishing and graphic design.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.In publishing and graphic design.In publishing and graphic design, Lorem ipsum is a placeholder.
              </Typography>
              </Box>
              </Grid>
              </Grid>

        </Container>
       <Container maxWidth={false}>
       <Box>
       <Typography align="center" className={classes.serveceBelo}>
                <span style={{ color: pallete.primaryPurple }}>
                Meet{" "}
                </span>{" "}
                our Team
              </Typography>
              </Box>
              <Grid container justifyContent="center" spacing={2}>
        
        {placeholderImages.slice(0, 5).map((placeholder, index) => (
          <Grid item key={index}>
            <div
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                border: '2px solid #fff', // Add border if needed
              }}
            >
              <img
                src={placeholder}
                alt={`Placeholder ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </Grid>
        ))}
      </Grid>

      <Grid container justifyContent="center" mt={2}>
        <Grid item>
          <Button startIcon={<ArrowBackIosRoundedIcon />} >
           
          </Button>
        </Grid>
        <Grid item>
          <Button endIcon={<ArrowForwardIosRoundedIcon/>} >
         
          </Button>
        </Grid>
      </Grid>
        
       </Container>
           </div>
  )
}

export default MeetTheTeam;
const useStyles = makeStyles()((theme) => {
  return {
    ytubeTextApps: {
      position: "absolute",
      top: "75px",
      right: "50px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    rocketBoxouter: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "40px",
      },
    },
    otherappsicons125: {
      // width: "84.18px",
      // height: "101.378px",
      [theme.breakpoints.down("sm")]: {
        width: "40.18px",
        height: "50.378px",
      },
    },
    otherappsicons125Middle: {
      // width: "84.18px",
      // height: "101.378px",
      [theme.breakpoints.down("sm")]: {
        width: "60.18px",
        height: "80.378px",
      },
    },
    otherappsicons4: {
      position: "absolute",
      [theme.breakpoints.down("sm")]: {
        width: "40.18px",
        height: "50.378px",
      },
    },
    otherappsicons: {
      width: "84.18px",
      height: "101.378px",
      [theme.breakpoints.down("sm")]: {
        width: "40.18px",
        height: "50.378px",
      },
    },
    uberText: {
      color: "#000",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
    amzonIcs: {
      width: "75.334px",
      height: "15.924px",
      position: "absolute",
      bottom: "90px",
      left: "90px",
      [theme.breakpoints.down("sm")]: {
        width: "37.334px",
        height: "7.924px",
      },
    },
    amzonText: {
      color: "#000",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "20px",
      position: "absolute",
      left: "35px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    allPppsGrdBox: {
      padding: "40px",
      [theme.breakpoints.down("sm")]: {
        padding: "20px 0",
      },
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
      [theme.breakpoints.down("sm")]: {
        width: "130.1px",
        height: "120.115px",
      },
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
      [theme.breakpoints.down("sm")]: {
        width: "65.1px",
        height: "65.725px",
        borderRadius: "15px",
      },
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
      [theme.breakpoints.down("sm")]: {
        width: "65.1px",
        height: "65.725px",
        borderRadius: "15px",
      },
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
    homemenBox: {
      position: "relative",
    },
    appCOntainder: {
      backgroundColor: "#F4F5F9",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        padding: "40px 0",
      },
    },
    articalsPara: {
      color: "#2E2E2E",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
      fontFamily: "Roboto",
    },
    carosalPara:{

    },
    whyGsdPARA: {
      color: "#2E2E2E",
      fontFamily:'Roboto',
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
      [theme.breakpoints.down("sm")]: {
        padding: "20px",
      },
    },
    gsdArrouterBox: {
      [theme.breakpoints.down("sm")]: {
        padding: "20px",
      },
    },
    gsdArrCard: {
      borderRadius: "12px",
      // border: '4px solid #ECDAFF',
      background: "rgba(255, 255, 255, 0.32)",
      // backdropFilter: "blur(12px)",
      padding: "40px 20px",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        padding: "20px",
      },
    },
    gsdArrTitle: {
      color: "#1A2128",
      fontSize: "20px",
      fontFamily:'Roboto',
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      letterSpacing: "0.2px",
    },
    gsdArrPara: {
      paddingTop: "10px",
      color: "#434D56",
      fontFamily:'Roboto',
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "22px",
    },
    takeYourBusiness: {
      [theme.breakpoints.down("sm")]: {
        padding: "50px 0",
      },
    },
    coolbuysImg: {
      [theme.breakpoints.down("sm")]: {
        width: "350px",
        height: "250px",
      },
    },
    firstImg:{
      width: "219.167px",
      height: "158.716px",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
      border: '1px solid white', // 1px solid white border
    },
    secondImg:{
      width: "125.751px",
      height: "57.082px",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
      border: '1px solid white', // 1px solid white border
    },
    thirdImg:{
      width: "219.167px",
      height: "158.716px",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
      border: '1px solid white', // 1px solid white border
    },
    fourthImg:{
      width: "143.45px",
      height: "79.324px",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
      border: '1px solid white', // 1px solid white border
    },
    fifthImg:{
      width: "219.167px",
height: "158.716px",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },
      border: '1px solid white', // 1px solid white border
    },
    sixthImg:{
      width: "219.167px",
      height: "158.716px",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        height: "00px",
        width: "300px",
      },border: '1px solid white', // 1px solid white border
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
      [theme.breakpoints.down("sm")]: {
        padding: "5px 15px",
        fontSize: "12px",
        fontWeight: "400",
        margin: "0 5px",
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
      fontFamily:'Roboto'
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
      [theme.breakpoints.down("sm")]: {
        // width :'80%'
      },
    },
    blogTagp: {
      fontFamily: "Roboto",
      color: "#6A6A6A",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
    },
    blogtagH: {
      color: "#000",
      fontFamily: "Roboto",
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
      fontFamily: "Roboto",
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
      fontFamily: "Roboto",
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
        height: "300px",
        width: "300px",
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
      letterSpacing: "-1px",
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    serveceBelo2:{
      fontSize: "40px",
      textAlign:"center",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      letterSpacing: "-1px",
      textTransform: "capitalize",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      }
    },
    serviceText: {
      fontFamily: "Roboto",
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
    },
    exploreLink: {
      fontFamily: "Roboto",
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
      fontFamily: "Roboto",
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
      backgroundColor: "#DECAF4;#EDC9DB"
    },
  };
});