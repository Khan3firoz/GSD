import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";

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
          <Typography variant="h4">
            <span style={{ color: pallete.primaryPurple }}>The future </span>
            of work
          </Typography>
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
                  sx={{ backgroundColor: "#F35F5F", margin: "0 7px" }}
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
                  <Typography variant="h5" sx={{ margin: "auto 0" }}>
                    Chat
                  </Typography>
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
                <Box sx={{ display: "flex", margin: "10px 0" }}>
                  <Box
                    component="img"
                    className={classes.chatBoxDP}
                    src="assets/icons/chatBoximg.png"
                    alt="Descriptive Alt Text"
                  />
                  <Typography className={classes.chaterName}>
                    Helen Mentari
                  </Typography>
                  <Typography className={classes.chaterTime}>
                    10:12 AM
                  </Typography>
                </Box>
                <Typography className={classes.chaterFirstMsg}>
                  Guys, what do you want?
                </Typography>
                <Typography
                  sx={{ borderRadius: "8.667px !importent" }}
                  className={classes.chaterFirstMsg}
                >
                  Can I help you?
                </Typography>
                <Box className={classes.chatInput}>
                  <input
                    placeholder="Message..."
                    className={classes.chatInputHtmlTag}
                    style={{ border: "none", outline: "none" }}
                  />
                  <IconButton sx={{ backgroundColor: "#AD9FFF" }}>
                    <Box
                      component="img"
                      className={classes.chatBoxSendIcons}
                      src="assets/icons/send.svg"
                      alt="Descriptive Alt Text"
                    />
                  </IconButton>
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
            <Box sx={{ margin: "20px 0 0 10px", display: "flex" }}>
              <Box
                component="img"
                className={classes.pinIconBtn}
                src="assets/icons/tickpurple.svg"
                alt="Descriptive Alt Text"
              />
              <Typography
                variant="h6"
                className={classes.whiteText}
                sx={{ margin: "auto 10px" }}
              >
                Security & Privacy
              </Typography>
            </Box>
            <Box sx={{ margin: "20px 0 0 10px", display: "flex" }}>
              <Box
                component="img"
                className={classes.pinIconBtn}
                src="assets/icons/tickpurple.svg"
                alt="Descriptive Alt Text"
              />
              <Typography
                variant="h6"
                className={classes.whiteText}
                sx={{ margin: "auto 10px" }}
              >
                Audience Q&A
              </Typography>
            </Box>
            <Box sx={{ margin: "20px 0 0 10px", display: "flex" }}>
              <Box
                component="img"
                className={classes.pinIconBtn}
                src="assets/icons/tickpurple.svg"
                alt="Descriptive Alt Text"
              />
              <Typography
                variant="h6"
                className={classes.whiteText}
                sx={{ margin: "auto 10px" }}
              >
                Engagement
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography align="center" variant="h4">
          <span style={{ color: pallete.primaryPurple }}>Newest Jobs </span>
          for You
        </Typography>
        <Box className={classes.jobSearchBox}>
          <Box sx={{ width: "100%" }}>
            <Typography variant="h5" sx={{ fontWeight: 500, color: "#110229" }}>
              Location
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography variant="h6" sx={{ color: "#8F90A6" }}>
                Select Your City
              </Typography>
              <Box
                component="img"
                className={classes.chatBoxSendIcons}
                src="assets/icons/location.svg"
                alt="Descriptive Alt Text"
              />
            </Box>
          </Box>
          <Divider className={classes.jobsDivider} orientation="vertical" />
          <Box sx={{ width: "100%" }}>
            <Typography variant="h5" sx={{ fontWeight: 500, color: "#110229" }}>
              Title
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography variant="h6" sx={{ color: "#8F90A6" }}>
                Choose job role
              </Typography>
              <Box
                component="img"
                className={classes.chatBoxSendIcons}
                src="assets/icons/downArrow.svg"
                alt="Descriptive Alt Text"
              />
            </Box>
          </Box>
          <Divider className={classes.jobsDivider} orientation="vertical" />
          <Box>
            <Button
              variant="contained"
              endIcon={
                <Box
                  component="img"
                  className={classes.chatBoxSendIcons}
                  src="assets/icons/search.svg"
                  alt="Descriptive Alt Text"
                />
              }
              className={classes.searchBtn}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={classes.openPositionsBox}>
        <Typography variant="h4" fontFamily={"Roboto"} align="center">
          Open Positions
        </Typography>
        {[...Array(2)].map((x) => (
          <Grid key={x} container sx={{ margin: "20px 0" }}>
            <Grid item md={3.6}>
              <Typography
                variant="h6"
                sx={{ color: "#232323", margin: "0 20px" }}
              >
                Department
              </Typography>
              <Typography className={classes.jobsTExt}>
                Customer Success
              </Typography>
            </Grid>
            <Grid item md={3.6}>
              <Typography
                variant="h6"
                sx={{ color: "#232323", margin: "0 20px" }}
              >
                Job titile
              </Typography>
              <Typography className={classes.jobsTExt}>
                Performance Marketing Manager
              </Typography>
            </Grid>
            <Grid item md={3.6}>
              <Typography
                variant="h6"
                sx={{ color: "#232323", margin: "0 20px" }}
              >
                Location
              </Typography>
              <Typography className={classes.jobsTExt}>Remote</Typography>
            </Grid>
            <Grid item md={1.19}>
              <Button variant="contained" className={classes.applyBtn}>
                Apply
              </Button>
            </Grid>
          </Grid>
        ))}
      </Box>

      <Box className={classes.excitingBox}>
        <Typography align="center" variant="h4">
          <span style={{ color: pallete.primaryPurple }}>
            Work with exciting{" "}
          </span>
          10+ companies
        </Typography>
        <Grid container md={8}>
          <Grid item md={2.4} sm={6}>
            <Box
              component="img"
              className={classes.compsImg}
              src="assets/icons/comp1.svg"
              alt="Descriptive Alt Text"
            />
          </Grid>
          <Grid item md={2.4} sm={6}>
            <Box
              component="img"
              className={classes.compsImg}
              src="assets/icons/comp1.svg"
              alt="Descriptive Alt Text"
            />
          </Grid>
          <Grid item md={2.4} sm={6}>
            <Box
              component="img"
              className={classes.compsImg}
              src="assets/icons/comp1.svg"
              alt="Descriptive Alt Text"
            />
          </Grid>
          <Grid item md={2.4} sm={6}>
            <Box
              component="img"
              className={classes.compsImg}
              src="assets/icons/comp1.svg"
              alt="Descriptive Alt Text"
            />
          </Grid>
          <Grid item md={2.4} sm={6}>
            <Box
              component="img"
              className={classes.compsImg}
              src="assets/icons/comp1.svg"
              alt="Descriptive Alt Text"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Career;

const useStyles = makeStyles()((theme) => {
  return {
    excitingBox: {
      backgroundColor: "#F0E6FBF5",
      padding: "20px 0",
      margin: "80px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: 'center'
    },

    applyBtn: {
      ...styles.buttonMain,
      marginTop: "39px",
      width: "100%",
    },
    jobsTExt: {
      borderRadius: "8px",
      border: "1px solid #E0E0E0",
      background: "#FFF",
      padding: "16px 20px",
      margin: "10px 15px",
    },
    openPositionsBox: {
      borderRadius: "16px",
      backgroundColor: "#F4F5F9",
      margin: "50px",
      padding: " 20px",
    },
    searchBtn: {
      ...styles.buttonMain,
      padding: "10px 40px",
    },
    jobsDivider: {
      height: "auto",
      alignSelf: "stretch",
      border: "2px solid #DCDCEB",
      margin: "0 15px",
    },
    jobSearchBox: {
      borderRadius: "15px 20px 20px 20px",
      background: "rgba(255, 255, 255, 0.80)",
      boxShadow: "0px 30px 60px -15px rgba(143, 144, 188, 0.15)",
      //   backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: "50px auto",
      width: "fit-content",
      padding: "20px 50px",
      minWidth: "747px",
    },
    chatInputHtmlTag: {
      fontFamily: "Roboto",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "16.9px",
    },
    chatInput: {
      borderRadius: "108px",
      padding: "8px 13px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      border: "0.542px solid #CFCFD1",
      marginTop: "20px",
    },
    chaterFirstMsg: {
      borderRadius: "0px 8.667px 8.667px 8.667px",
      background: "#AD9FFF",
      padding: "8.667px 13px",
      color: "#FFF",
      fontFamily: "Roboto",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "6.9px",
      width: "fit-content",
      margin: "10px 0",
    },
    chaterName: {
      color: "#0F1017",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "16.9px",
      margin: "auto 5px",
    },
    chaterTime: {
      color: "#8A8B96",
      fontFamily: "Poppins",
      margin: "auto 5px",
      fontSize: "8.667px",
      fontStyle: "normal",
      fontWeight: 300,
      lineHeight: "10.4px", //
      letterSpacing: "0.173px",
    },
    chatBoxTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    chatBox: {
      padding: "17px",
      backgroundColor: "#FFF",
      position: "absolute",
      top: "75px",
      right: "70px",
      borderRadius: "16px",
      width: "257px",
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
    chatBoxSendIcons: {
      ...styles.imagesBox,
      height: "17px",
      width: "17px",
    },
    compsImg: {
      ...styles.imagesBox,
      height: "130px",
      width: "130px",
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