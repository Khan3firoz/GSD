import { Container, Grid, Typography, Box, IconButton, Divider } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";

const Career = () => {
  const { classes } = useStyles();
  //   React.useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
  return (
    <Container maxWidth={false}>
      <Grid container className={classes.topContaineer}>
        <Grid item md={6}>
          <Box
            component="img"
            sx={{ ...styles.imagesBox }}
            src="assets/images/careerTopImg.png"
            alt="Descriptive Alt Text"
          />
        </Grid>
        <Grid item md={6} sx={{ margin: "auto" }}>
          <Typography variant="h4">The future of work</Typography>
          <Typography variant="h6">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.In publishing
            and graphic design, Lorem ipsum is a placeholder text commonly used
            to demonstrate the visual form of a document or a typeface without
            relying on meaningful content. Lorem ipsum may be used as a
            placeholder before final copy is available.
          </Typography>
        </Grid>
      </Grid>
      <Box className={classes.benifitsBox}>
        <Grid container>
          <Grid item md={6}>
            <Box className={classes.videoCallBox}>
              <Box className={classes.headerNameBox}>
                <Box
                  component="img"
                  sx={{
                    ...styles.imagesBox,
                    height: "25px",
                    width: "25px",
                    borderRadius: "50%",
                  }}
                  src="assets/images/vcdp.png"
                  alt="Descriptive Alt Text"
                />
                <Typography className={classes.vcName}>
                  Syarifah Hinata
                </Typography>
              </Box>
              <IconButton className={classes.pinIconBtnMain}>
                <Box
                  component="img"
                  className={classes.pinIconBtn}
                  src="assets/icons/pin.svg"
                  alt="Descriptive Alt Text"
                />
              </IconButton>
              <Box className={classes.videoCOntrolsBox}>
                <IconButton
                  sx={{ backgroundColor: "#B7B7B9", margin: "0 7px" }}
                >
                  <Box
                    component="img"
                    className={classes.pinIconBtnBottom}
                    src="assets/icons/mic.svg"
                    alt="Descriptive Alt Text"
                  />
                </IconButton>
                <IconButton
                  sx={{ backgroundColor: "#B7B7B9", margin: "0 7px" }}
                >
                  <Box
                    component="img"
                    className={classes.pinIconBtnBottom}
                    src="assets/icons/video.svg"
                    alt="Descriptive Alt Text"
                  />
                </IconButton>
                <IconButton
                  sx={{ backgroundColor: "#B7B7B9", margin: "0 7px" }}
                >
                  <Box
                    component="img"
                    className={classes.pinIconBtnBottom}
                    src="assets/icons/call.svg"
                    alt="Descriptive Alt Text"
                  />
                </IconButton>
                <IconButton
                  sx={{ backgroundColor: "#B7B7B9", margin: "0 7px" }}
                >
                  <Box
                    component="img"
                    className={classes.pinIconBtnBottom}
                    src="assets/icons/msg.svg"
                    alt="Descriptive Alt Text"
                  />
                </IconButton>
                <IconButton sx={{ backgroundColor: "#B7B7B9" }}>
                  <Box
                    component="img"
                    className={classes.pinIconBtnBottom}
                    src="assets/icons/filter.svg"
                    alt="Descriptive Alt Text"
                  />
                </IconButton>
              </Box>
              <Box
                component="img"
                sx={{
                  ...styles.imagesBox,
                  height: "400px",
                  maxWidth: "400px",
                  borderRadius: "12px",
                }}
                src="assets/images/careerMidImg.png"
                alt="Descriptive Alt Text"
              />
              <Box className={classes.chatBox}>
                <Box className={classes.chatBoxTop}>
                    <Typography variant="h5" sx={{margin: 'auto 0'}}>Chat</Typography>
                    <IconButton>
                    <Box
                    component="img"
                    className={classes.chatBoxIcons}
                    src="assets/icons/uparrowWhite.svg"
                    alt="Descriptive Alt Text"
                  />
                    </IconButton>
                </Box>
                <Divider />
                <Box>
                <Box
                    component="img"
                    className={classes.chatBoxDP}
                    src="assets/icons/chatBoximg.png"
                    alt="Descriptive Alt Text"
                  /> 
                  <Typography>Helen Mentari</Typography>
                  <Typography>10:12 AM</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h5" className={classes.whiteText}>
              Benefits of you
            </Typography>
            <Typography variant="h4" className={classes.whiteText}>
              Fast, reliable and secure for your conferences
            </Typography>
            <Typography variant="h6" className={classes.whiteText}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content. Lorem ipsum may be used as a placeholder
              before final copy is availableLorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a documents.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Career;

const useStyles = makeStyles()((theme) => {
  return {
    chatBoxTop:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    chatBox: {
      padding: "17px",
      backgroundColor: '#FFF',
      position: 'absolute',
      top: '50px',
      right: '50px',
      borderRadius:'16px',
      width: '257px',
    },
    videoCOntrolsBox: {
      borderRadius: "100px",
      background: "rgba(255, 255, 255, 0.30)",
      backdropFilter: "blur(6.596895217895508px)",
      position: "absolute",
      padding: "10px",
      left: "75px",
      right: 0,
      bottom: "20px",
      display: "flex",
      width: "fit-content",
    },
    pinIconBtnMain: {
      position: "absolute",
      backgroundColor: "#6673ea",
      top: "20px",
      right: "260px",
    },
    pinIconBtn: {
      ...styles.imagesBox,
      height: "25px",
      width: "25px",
    },
    pinIconBtnBottom: {
      ...styles.imagesBox,
      height: "20px",
      width: "20px",
    },
    chatBoxIcons: {
      ...styles.imagesBox,
      height: "26px",
      width: "26px",
    },
    chatBoxDP: {
      ...styles.imagesBox,
      height: "30px",
      width: "30px",
    },
    vcName: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "24px",
      color: "#FFF",
      paddingLeft: "5px",
    },
    headerNameBox: {
      backgroundColor: "rgba(255, 255, 255, 0.30)",
      borderRadius: "50px",
      backdropFilter: "blur(19.83297348022461px)",
      display: "flex",
      flexDirection: "row",
      //   width: "25%",
      padding: "10px",
      position: "absolute",
      top: "20px",
      left: "20px",
    },
    videoCallBox: {
      position: "relative",
    },
    whiteText: {
      color: "#FFF",
    },
    benifitsBox: {
      backgroundColor: "#2E2E2E",
      margin: "50px 70px",
      padding: "50px",
    },
    topContaineer: {
      backgroundColor: "#F0E6FB",
      // margin: "50px 0",
      padding: "150px 100px",
    },
  };
});
