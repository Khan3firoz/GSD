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
import { Gradient } from "@mui/icons-material";

const MeetTheTeam = () => {
  const { classes } = useStyles();
  const placeholderImages = [
    'assets/images/meetTheTeam/9.png',
    'assets/images/meetTheTeam/10.png',
    'assets/images/meetTheTeam/11.png',
    'assets/images/meetTheTeam/12.png',
    'assets/images/meetTheTeam/13.png',
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
       {/* section-2*/}
       <Container maxWidth={false} className={classes.container2} >
       <Grid container sx={{ height: "100%" }}>
       <Grid item md={6} className={classes.serviceLftGrid}>
            <img
              alt="group"
              src = "assets/images/meetTheTeam/7.png"
              className={classes.groupImg}
            />
            <img
              alt="girl"
              src = "assets/images/meetTheTeam/8.png"
              className={classes.onewomenImg}
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
        {/* meet our team section-3*/}
       {<Container maxWidth={false} className={classes.container3}>
      
       <Box>
       <Typography align="center" className={classes.serveceBelo}>
                <span style={{ color: pallete.primaryPurple }}>
                Meet{" "}
                </span>{" "}
                our Team
              </Typography>
        <Typography align="center" fontSize="14px" className={classes.section3paraText}>
        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.In publishing and graphic design.
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
                border: '2px solid #fff',
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
        
       </Container>}
       {/*section-4*/ }
       <Container maxWidth={false} className={classes.container4}>
       <Grid container sx={{ height: "100%" }} spacing={2} >
        <Grid item md={6} className={classes.serviceLftGridSection3}>
        
         <Typography className={classes.section3heading}>
         Dedicated Team
          </Typography>
         
        </Grid>
        <Grid item md={6} className={classes.serviceRghtGrid}>
      
        <img
              alt="group-2"
              src = "assets/images/meetTheTeam/14.png"
              className={classes.groupImg}
            />
           
        </Grid>
        </Grid>
       
       </Container>
           </div>
  )
}

export default MeetTheTeam;
const useStyles = makeStyles()((theme) => {
  return {
    efficiencyCon: {},
    serviceRightTextBox: {
      margin: "auto",
      //padding: "20px 60px",
    },
    boxStyle : {
      height: "100px",
      textAlign: 'center',
      padding: "20px",
      border: '1px solid #ccc', // Optional: Add border for visibility
    },
    allPppsGrdBox: {
      padding: "40px",
      [theme.breakpoints.down("sm")]: {
        padding: "20px 0",
      },
    },
    section3paraText:{
      color: "#030303",
      fontSize: "14px",
      marginLeft:"18.125rem",
      marginTop:"10px",
      marginBottom:"10px",
      width: "692px",

      textAlign: "center",

      fontfamily: "Roboto",

      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "20px"/* 133.333% */
    },
    section3heading:{
      color: "#FFF",
      fontFamily: "Roboto",
      fontsize: "18px",
      fontstyle: "normal",
      fontWeight: "500",
      lineHeight: "normal"
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
    
    articalsPara: {
      color: "#2E2E2E",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
      fontFamily: "Roboto",
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
  
 
    efficiencyBoxLeft: {
      padding: "100px 20px",
    },
    
    
    
    paraText: {
      fontFamily: "Roboto",
      color: "#030303",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "30px",
      marginTop:"20px"
    },
    onewomenImg: {
      position: "absolute",
      width: "244px",
      height: "232px",
      marginLeft:"380px",
      marginTop:"90px",
      border:"20px solid white"
    },
    groupImg:{
      position: "absolute",
      width: "571px",
      height: "332px",
      marginTop:"-70px",
      marginLeft:"30px"
      

    },
    
    serviceLftGrid: {
      position: "relative",
      padding: "30px 15px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    serviceLftGridSection3: {
      position: "relative",
      //padding: "30px 15px",
      background:"#2E2E2E",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    serviceRghtGrid: {
      position: "relative",
      //padding: "30px 15px",
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
    serviceText: {
      fontFamily: "Roboto",
      color: "#2E2E2E",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
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
      height: "80vh",
      background:"linear-Gradient(180deg,#DECAF4 0%,#EDC9DB 100%)",
      
      backgroundColor: "linear-gradint(180deg,#DECAF4 0%,#EDC9DB 100%)"
    },
    container2:{
      marginTop: "110px",
      height: "60vh",
    },
    container3:{
      marginTop: "110px",
      height: "60vh",
      background: "#F0E6FB"

    },
    container4:{
      marginTop: "110px",
      height: "60vh",
    }
  };
});