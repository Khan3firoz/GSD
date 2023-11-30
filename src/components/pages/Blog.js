import { Container, Grid, Typography, Box, Button } from "@mui/material";

import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";

const BlogPage = () => {
    const { classes } = useStyles();
    return(
      <div>
        {/*!section-1*/}
        <Container maxWidth={false} className={classes.mainContainer}>
        <Grid container className={classes.mainGrid}>
          <Grid item md={6} className={classes.columnsGrid}>
            <Typography className={classes.mainText}>
              How Virtual Private Assistants Transformed Businesses
            </Typography>
            <Typography className={classes.secondHeading}>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </Typography>
           
          </Grid>
          <Grid item md={6} className={classes.columnsGridRight}>
            <Box className={classes.homemenBox}>
              
              <img
                alt="boy"
                src="assets/images/blogPage/image2girl1boy.png"
                className={classes.homemenImg}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/*section-2*/ }
      <Container maxWidth={false} className={classes.container2}>
      <Box>
            <Typography align="center" className={classes.serveceBelo}>
              <span style={{ color: pallete.primaryPurple }}>Popular </span>
              topics
            </Typography>
            <Typography
              align="center"
              fontSize="14px"
              className={classes.section2paraText}
            >
              Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
            </Typography>
          </Box>
      </Container>
      </div>
    );
};
export default BlogPage;

const useStyles = makeStyles()((theme) => {
    return{
      section2paraText: {
        color: "#030303",
        fontSize: "14px",
        marginLeft: "18.125rem",
        marginTop: "10px",
        marginBottom: "10px",
        width: "692px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
  
        fontfamily: "Roboto",
  
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "20px" /* 133.333% */,
        [theme.breakpoints.down("sm")]: {
          height: "00px",
          width: "300px",
          margin: "0",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        },
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
      container2:{
        marginTop: "110px",
        height: "100vh"
      },
    mainContainer: {
        marginTop: "110px",
        height: "81vh",
        background: "linear-Gradient(180deg,#DECAF4 0%,#EDC9DB 100%)",

      backgroundColor: "linear-gradint(180deg,#DECAF4 0%,#EDC9DB 100%)"
      },
      mainGrid: {
        height: "100%",
        paddingLeft:"121px"
      },
      columnsGrid: {
        margin: "auto 0px",
      },
      mainText: {
        background: "linear-gradient(93deg, #6800D7 0.68%, #DC0155 65.41%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontSize: "48px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
        [theme.breakpoints.down("sm")]: {
          fontSize: "25px",
          // padding:'20px'
        }
    },
    secondHeading: {
        fontSize: "16px",
        fontStyle: "normal",
        fontFamily: "Roboto",
        fontWeight: 500,
        lineHeight: "25px",
        color: "#333333",
        margin: "20px 0px",
      },
      columnsGridRight: {
        display: "flex",
        flexDirection: "center",
      },
      homemenImgBG: {
        // width: "839.763px",
        height: "560.465px",
        position: "absolute",
        [theme.breakpoints.down("sm")]: {
          height: "00px",
          width: "300px",
        }
    },
    homemenImg: {
        // width: "839.763px",
        height: "500px",
        position: "absolute",
        [theme.breakpoints.down("sm")]: {
          height: "00px",
          width: "300px",
        },
    }

    };
});