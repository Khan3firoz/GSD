import { Container, Grid, Typography, Box, Button, Divider } from "@mui/material";

import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";

const BlogPage = () => {
  const placeholderImages = [
    "assets/images/blogPage/blog1.jpg",
    "assets/images/blogPage/blog2.jpg",
    "assets/images/blogPage/blog3.jpg",
    "assets/images/blogPage/blog4.jpg"];
  const placeholderImages2 = [
    "assets/images/blogPage/section5img1.jpg",
    "assets/images/blogPage/section5img2.jpg",
    "assets/images/blogPage/section5img3.jpg",
    "assets/images/blogPage/section5img4.jpg"];


  const { classes } = useStyles();
  const category = 'Category name';

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  return (
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

      {/*section-2*/}
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
        {[...Array(2)].map((_, repeatIndex) => (
          <Grid container justifyContent="center" className={classes.addPadding} spacing={2} key={repeatIndex}>
            {placeholderImages.slice(0, 4).map((placeholder, index) => (
              <Grid item key={index}>
                <Grid item className={classes.repeatImage}>

                  <img
                    src={placeholder}
                    alt={`Placeholder ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Grid >
                < Box className={classes.boxImg}>
                  <Typography className={classes.dateStyle}>
                    10.22.2023
                  </Typography>
                  <Typography className={classes.section2heading}>
                    Lorem ipsum is a placeholder text commonly used to visual form
                  </Typography>
                  <Typography className={classes.section2subheading}>
                    Lorem ipsum is a placeholder text commonly used to monstrate the visual form of a document or a typeface without relying on meaningful content.
                  </Typography>
                </Box>

              </Grid>
            ))}
          </Grid>
        ))}
      </Container>

      {/*section-3*/}
      <Container maxWidth={false} className={classes.container3}>
        <img
          alt="water"
          src="assets/images/blogPage/section3img.jpg"
          className={classes.waterImg}
          style={{
            marginLeft: "0",
            marginRight: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundColor: "#343A40"
          }} />
        <div className={classes.overlay}></div>
        <Typography className={classes.textOverlay}>
          "Unlock Productivity and Efficiency with Virtual Private Assistant Services!""
        </Typography>
      </Container>

      {/*section-4*/}
      <Container maxWidth={false} className={classes.container4}>
        <Grid container spacing={2} className={classes.section4}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={2} key={index}>
              <Typography variant="h6" className={classes.categoryRow}>
                {category}
              </Typography>

            </Grid>
          ))}
        </Grid>
        <Divider className={classes.horizontalLine} />

        <Box className={classes.rectangleBox}>



          <Grid container justifyContent="space-between" className={classes.leftSection}>
            <Grid item>
              <img
                src="assets/images/blogPage/section4img.jpg"
                alt='Placeholder'
                className={classes.section4img}
              />
            </Grid>
            <Grid item>
              <Typography className={classes.dateStyle}>
                1 Month Ago
              </Typography>
              <Typography className={classes.section2heading}>
                Lorem Ipsum Generator Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate!
              </Typography>
              <Typography className={classes.section2subheading}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Typography className={classes.viewPost}>
                View Post
              </Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent="flex-end" spacing={2} direction="column" className={classes.rightSection}>
            {/* {imagePaths.map((imagePath, index) => (
          <Grid item key={index}>
            <img
              className={classes.image}
              src={imagePath}
              alt={`Image ${index + 1}`}
            />
            <Typography variant="h6" className={classes.content}>
              Akame Ga Kill: Season finale
            </Typography>
          </Grid>
        ))} */}
          </Grid>

        </Box>





      </Container>
      {/*section-5 */}
      <Typography className={classes.section5typo}>
        Related Posts
      </Typography>
      <Container maxWidth={false} className={classes.container5}>

        <Grid container justifyContent="center" className={classes.addPadding} spacing={2}>
          {placeholderImages2.slice(0, 4).map((placeholder, index) => (
            <Grid item key={index}>
              <Grid item className={classes.repeatImage}>

                <img
                  src={placeholder}
                  alt={`Placeholder ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Grid >
              < Box className={classes.boxImg}>
                <Typography className={classes.dateStyle}>
                  10.22.2023
                </Typography>
                <Typography className={classes.section2heading}>
                  Lorem ipsum is a placeholder text commonly used to visual form
                </Typography>
                <Typography className={classes.section2subheading}>
                  Lorem ipsum is a placeholder text commonly used to monstrate the visual form of a document or a typeface without relying on meaningful content.
                </Typography>
              </Box>

            </Grid>
          ))}
        </Grid>

      </Container>
    </div>
  );
};
export default BlogPage;

const useStyles = makeStyles()((theme) => {
  return {
    section5typo: {
      color: "#495057",
      marginLeft:"20px",
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "25px"
    },
    container5: {
      marginTop: "100px",
      height: "100vh"

    },
    image: {
      width: '10%',
      height: 'auto',
      marginBottom: theme.spacing(2),
    },
    content: {
      marginLeft: theme.spacing(2),
    },
    viewPost: {

      color: "#2E2E2E",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "200",
      lineHeight: "20px",
      textDecoration: 'underline',
      marginTop: "10px"
    },
    rightSection: {
      width: "30%",
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    leftSection: {
      width: "700px",
      margin: "20px",
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    section4img: {
      marginTop: "20px",
      width: "700px",
      height: "340px"
    },
    rectangleBox: {
      width: '1480px',
      height: '620px',
      flexShrink: 0,
      border: '1px solid rgba(18, 20, 22, 0.20)',
      background: '#FFF',
      marginTop: theme.spacing(2), // Adjust margin as needed
    },
    horizontalLine: {
      width: '1480px',
      height: '0px',
      flexShrink: 0,
      borderWidth: '1px',
      borderColor: '#D6D6D6',
      borderStyle: 'solid',
      margin: `${theme.spacing(2)}px 0`, // Adjust margin as needed
    },
    section4: {
      width: "50%"
    },
    categoryRow: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      //backgroundColor: theme.palette.primary.main, // Adjust the background color as needed
      color: 'black', // Text color
      textAlign: 'left',
      fontSize: "10px",
      fontWeight: "700"
    },
    container4: {
      marginTop: "100px",
      height: "140vh"
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      objectFit: "cover",
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the darkness by changing the last value (0.5 in this case)
    },
    textOverlay: {

      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white', // Text color
      //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color with transparency
      padding: theme.spacing(2), // Add padding for better visibility
      color: "#FFF",

      fontFamily: "Montserrat",
      fontSize: "2.1667rem",
      fontStyle: "normal",
      fontWeight: "800",
      lineHeight: "normal"


    },
    container3: {
      marginTop: "30px",
      height: "80vh",
      position: "relative"
    },
    addPadding: {
      paddingTop: "20px",
      paddingBottom: "20px"
    },
    boxImg: {
      width: "270px"

    },
    section2subheading: {
      color: "#2E2E2E",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "20px",
      marginTop: "10px"
    },
    section2heading: {
      color: "#030303",
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "24px",
      marginTop: "10px"
    },
    dateStyle: {
      color: "#2E2E2E",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      marginTop: "10px"
    },
    repeatImage: {
      width: "270px",
      height: "230px",

      overflow: "hidden",
      position: "relative",
      border: "2px solid #fff",
    },
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
    container2: {
      marginTop: "110px",
      height: "180vh"
    },
    mainContainer: {
      marginTop: "110px",
      height: "81vh",
      background: "linear-Gradient(180deg,#DECAF4 0%,#EDC9DB 100%)",

      backgroundColor: "linear-gradint(180deg,#DECAF4 0%,#EDC9DB 100%)"
    },
    mainGrid: {
      height: "100%",
      paddingLeft: "121px"
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