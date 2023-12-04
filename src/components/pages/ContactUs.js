import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { pallete } from "../css/Theme";
import { styles } from "../css/CommonCSS";

const ContactUs = () => {
  const { classes } = useStyles();
  return (
    <Container maxWidth={false} className={classes.mainContainer}>
      <Box className={classes.topBox}>
        <Typography align="center" variant="h4">
          Contact
          <span style={{ color: pallete.primaryPurple }}> Us</span>
        </Typography>
        <Typography align="center" variant="h6">
          Lorem ipsum is a placeholder text commonly used to demonstrate the
          visual
          <br /> form of a document.
        </Typography>
      </Box>
      <Box className={classes.salesSection}>
        {/* <Grid container> */}
        <Grid container md={8}>
          <Card className={classes.salesCard}>
            <Grid container>
              <Grid item md={4} className={classes.purpleBgCard}>
                <Typography
                  align="center"
                  variant="h4"
                  sx={{ color: "#FFFFFF" }}
                >
                  Get in Touch
                </Typography>
                <Box className={classes.phnAddressBox}>
                  <Box
                    component="img"
                    sx={{
                      ...styles.imagesBox,
                      height: "25px",
                      width: "25px",
                    }}
                    src="assets/icons/call2.svg"
                    alt="Descriptive Alt Text"
                  />
                  <Typography
                    variant="h6"
                    sx={{ color: "#FFFFFF", padding: "0 20px" }}
                  >
                    +123-456-7890
                  </Typography>
                </Box>
                <Box className={classes.phnAddressBox}>
                  <Box
                    component="img"
                    sx={{
                      ...styles.imagesBox,
                      height: "25px",
                      width: "25px",
                    }}
                    src="assets/icons/location2.svg"
                    alt="Descriptive Alt Text"
                  />
                  <Typography
                    variant="h6"
                    sx={{ color: "#FFFFFF", padding: "0 10px" }}
                  >
                    123 Main Street, Anytown
                  </Typography>
                </Box>
                <Box className={classes.callImageBox}>
                  <Box
                    component="img"
                    className={classes.callIMG}
                    src="assets/images/call.png"
                    alt="Descriptive Alt Text"
                  />
                  <Box
                    component="img"
                    className={classes.callIMG2}
                    src="assets/images/headphone.svg"
                    alt="Descriptive Alt Text"
                  />
                </Box>
                <Box sx={{ display: "flex", padding: "20px" }}>
                  <Typography sx={{ color: "#FFFFFF" }}> FOLLOW :</Typography>
                  <Box
                    component="img"
                    sx={{
                      ...styles.imagesBox,
                      height: "25px",
                      width: "25px",
                      paddingLeft: "5px",
                    }}
                    src="assets/icons/insta2.svg"
                    alt="Descriptive Alt Text"
                  />
                  <Box
                    component="img"
                    sx={{
                      ...styles.imagesBox,
                      height: "25px",
                      width: "25px",
                      paddingLeft: "5px",
                    }}
                    src="assets/icons/fb2.svg"
                    alt="Descriptive Alt Text"
                  />
                </Box>
              </Grid>
              <Grid
                item
                md={8}
                sx={{
                  padding: "40px 20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h4" align="center">
                  Sales Inquiry
                </Typography>
                <Typography variant="h6" align="center">
                  Interested in our services? Drop us a message and we’ll get
                  back to you!
                </Typography>
                <Typography>Name</Typography>
                <TextField label="Full Name" className={classes.inputFields} />
                <Typography>Email</Typography>
                <TextField
                  label="example@mail.com"
                  className={classes.inputFields}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Box
                          component="img"
                          sx={{
                            ...styles.imagesBox,
                            height: "25px",
                            width: "25px",
                          }}
                          src="assets/icons/email.svg"
                          alt="Descriptive Alt Text"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box sx={{ display: "flex", padding: "20px 0" }}>
                  <IconButton>
                    <Box
                      component="img"
                      sx={{
                        ...styles.imagesBox,
                        height: "25px",
                        width: "25px",
                      }}
                      src="assets/icons/activeCheck.svg"
                      alt="Descriptive Alt Text"
                    />
                  </IconButton>
                  <Typography variant="h5" sx={{ margin: "auto 0" }}>
                    I Agree to the Terms and Conditions
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      ...styles.buttonMain,
                      padding: "10px 40px",
                      borderRadius: "24px",
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        {/* </Grid> */}
      </Box>
      <Box sx={{padding: '40px 50px'}}>
        <Box
          component="img"
          sx={{
            ...styles.imagesBox,
            // height: "25px",
            maxWidth:'100%'
          }}
          src="assets/images/map.png"
          alt="Descriptive Alt Text"
        />
      </Box>
    </Container>
  );
};

export default ContactUs;

const useStyles = makeStyles()((theme) => {
  return {
    inputFields: {
      margin: "10px 0",
      width: "90%",
      "& .MuiOutlinedInput-root": {
        borderRadius: "12px", // Adjust as needed
      },
    },
    callIMG: {
      ...styles.imagesBox,
      height: "100%",
      width: "100%",
    },
    callIMG2: {
      height: "auto",
      position: "absolute",
      top: "25px",
      left: "52px",
      //   height: "100%",
      //   width: "100%",
    },
    callImageBox: {
      padding: "50px 0",
      position: "relative",
    },
    phnAddressBox: {
      display: "flex",
      flexDirection: "row",
      padding: "20px 25px 0 25px",
    },
    purpleBgCard: {
      borderRadius: "8px",
      padding: "20px",
      backgroundImage: "url(assets/images/demoPurple.png)", // Add your image path here
      backgroundSize: "cover", // Optional: for covering the entire element
      backgroundPosition: "center", // Optional: to center the image
      backgroundRepeat: "no-repeat",
    },
    salesCard: {
      width: "100%",
      //   height: "647px",
      borderRadius: "8px",
    },
    salesSection: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "50px 0",
    },
    topBox: {
      padding: "150px 0",
      background:
        "linear-gradient(0deg, rgba(223, 205, 242, 0.96) 0%, rgba(223, 205, 242, 0.96) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat",
    },
  };
});
