import {
  Card,
  Container,
  Grid,
  Typography,
  TextField,
  Box,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../css/demo.css";

const Demo = () => {
  const { classes } = useStyles();
  const [value, onChange] = useState(new Date());

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container maxWidth={false} className={classes.demoComtainer}>
      <Card className={classes.demoCard}>
        <Typography align="center" variant="h4" className={classes.heading}>
          Book a Demo
        </Typography>
        <Grid container>
          <Grid item md={6}>
            <Grid container className={classes.innerCOntainer}>
              <Grid item md={6}>
                <Typography>Your First Name</Typography>
                <TextField
                  label="Your First Name"
                  className={classes.inputFields}
                />
              </Grid>
              <Grid item md={6}>
                <Typography>Your Last Name</Typography>
                <TextField
                  label="Your Last Name"
                  className={classes.inputFields}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.innerCOntainer}>
              <Grid item md={6}>
                <Typography>Work Email</Typography>
                <TextField
                  label="Yourmail@example.com"
                  className={classes.inputFields}
                />
              </Grid>
              <Grid item md={6}>
                <Typography>Company</Typography>
                <TextField label="Company" className={classes.inputFields} />
              </Grid>
            </Grid>
            <Grid container className={classes.innerCOntainer}>
              <Grid item xl={12}>
                <Typography>
                  What personalization/content creation challenges does your
                  organization face today?
                </Typography>
                <TextField
                  fullWidth={true}
                  label="It takes too much time for my reps to personalize emails."
                  className={classes.inputFieldsFillWidth}
                />
              </Grid>
            </Grid>
            <Box sx={{ ...styles.flexDCC, alignItems: "center" }}>
              <Button className={classes.submitBtn}>Submit</Button>
              <Typography>
                By submitting this form you agree to our <b>privacy policy.</b>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} className={classes.calendarGrid}>
            <Box>
              <Calendar onChange={onChange} value={value}/>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Demo;

const useStyles = makeStyles()((theme) => {
  return {
    calendarGrid: {
      display: 'flex',
      marginTop: '10px',
      justifyContent: 'center'
    },
    
  submitBtn: {
  ...styles.buttonMain,
  borderRadius: "24px",
  alignContent: "center",
  padding: "10px 50px",
  marginBottom: "10px",
},
  heading: {
  color: "#6800D7",
  textShadow: "0px 4px 4px rgba(104, 0, 215, 0.30)",
},
  innerCOntainer: {
  margin: "10px 0",
},
  inputFields: {
  margin: "10px 0",
  width: "90%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px", // Adjust as needed
  },
},
  inputFieldsFillWidth: {
  margin: "10px 0",
  width: "95%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px", // Adjust as needed
  },
},
  demoComtainer: {
  width: "100%",
  height: "100vh",
  paddingTop: '100px',
  backgroundColor: "#e3dde5",
  display: "flex",
},
  demoCard: {
  //   width: "1000px",
  margin: "auto",
  padding: "20px",
  background: "transparent",
  borderRadius: "3.283px",
  //   opacity: "0.5",
  //   background: "rgba(173, 159, 255, 0.30)",
  //   filter: "blur(2px)",
},
  };
});
