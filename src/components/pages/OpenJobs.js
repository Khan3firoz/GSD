import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";
import { useNavigate } from "react-router-dom";

const OpenJobs = () => {
  const { classes } = useStyles();
  return (
    <Box>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </Box>
  );
};

export default OpenJobs;

const useStyles = makeStyles()((theme) => {
  return {
    jobsContainer: {
      backgroundColor: "#F4F5F9",
      padding: "50px",
    },
  };
});
