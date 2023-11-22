import React from "react";
import { Container, Grid, Box, Typography, IconButton } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { pallete } from "../css/Theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const { classes } = useStyles();
  return (
    <Container maxWidth={false} className={classes.mainContainer}>
      <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Grid item md={3} xs={12} >
          <Box className={classes.logoBox}>
            <img
              className={classes.mainLogoSize}
              alt="logo"
              src="assets/logos/gsdnewLogo.png"
            />
            <Typography className={classes.mainLogoText}>
              GSD Associates
            </Typography>
            <Typography className={classes.mainLogoPara}>
              GET.STUFF.DONE
            </Typography>
          </Box>
        </Grid>
        <Grid item md={9} xs={12}>
          <Grid container>
            <Grid item md={3} xs={12} className={classes.fotterLinksGrid}>
              <Typography className={classes.mainTextLinks}>Home</Typography>
              <Typography className={classes.mainTextLinks}>Pricing</Typography>
              <Typography className={classes.mainTextLinks}>About</Typography>
              <Typography className={classes.mainTextLinks}>Contact</Typography>
            </Grid>
            <Grid item md={3} xs={12} className={classes.fotterLinksGrid}>
              <Typography className={classes.mainTextLinks}>
                Facebook
              </Typography>
              <Typography className={classes.mainTextLinks}>
                Instagram
              </Typography>
              <Typography className={classes.mainTextLinks}>Twitter</Typography>
              <Typography className={classes.mainTextLinks}>
                Linkedin
              </Typography>
            </Grid>
            <Grid item md={3} xs={12} className={classes.fotterLinksGrid}>
              <Typography className={classes.mainTextLinks}>
                Privacy Policy
              </Typography>
              <Typography className={classes.mainTextLinks}>
                Team of Service
              </Typography>
            </Grid>
            <Grid item md={3} xs={12} className={classes.fotterLinksGrid}>
              <Box className={classes.socialIconsBox}>
                <IconButton className={classes.iconsBtn}>
                  <FacebookOutlinedIcon className={classes.socialIcons} />
                </IconButton>
                <IconButton className={classes.iconsBtn}>
                  <InstagramIcon className={classes.socialIcons} />
                </IconButton>
                <IconButton className={classes.iconsBtn}>
                  <TwitterIcon className={classes.socialIcons} />
                </IconButton>
                <IconButton className={classes.iconsBtn}>
                  <LinkedInIcon className={classes.socialIcons} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;

const useStyles = makeStyles()((theme) => {
  return {
    socialIconsBox:{
      [theme.breakpoints.down("sm")]: {
      marginTop: '20px'
      }
    },
    mainTextLinks: {
      color: "#2E2E2E",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      padding: '5px 10px'
    },
    fotterLinksGrid: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    iconsBtn: {
      backgroundColor: "#FFF",
      margin: "0 5px",
      boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
    },
    logoBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    socialIcons: {
      height: "32px",
      width: "32px",
      color: pallete.primaryPurple,
    },
    mainContainer: {
      backgroundColor: "#F0E6FB",
      padding: "50px 0",
    },
    mainLogoText: {
      fontSize: "28px",
      fontWeight: "600",
      lineHeight: "20px",
    },
    mainLogoPara: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "22px",
    },
    mainLogoSize: {
      width: "80px",
      height: "60px",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "20px",
        width: "100px",
        height: "80px",
      },
    },
  };
});
