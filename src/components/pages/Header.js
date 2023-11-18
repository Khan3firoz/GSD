import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import { styles } from "../css/CommonCSS";
import { pallete } from "../css/Theme";
import {
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ButtonAppBar() {
  const { classes } = useStyles();
  const [anchorElServices, setAnchorElServices] = React.useState(null);
  const [anchorElCompany, setAnchorElCompany] = React.useState(null);

  const handleClickS = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseS = () => {
    setAnchorElServices(null);
  };
  const handleClickC = (event) => {
    setAnchorElCompany(event.currentTarget);
  };

  const handleCloseC = () => {
    setAnchorElCompany(null);
  };

  const openServices = Boolean(anchorElServices);
  const openCompany = Boolean(anchorElCompany);
  const idServices = openCompany ? "simple-popover" : undefined;
  const idCompany = openCompany ? "simple-popover" : undefined;
  console.log({ anchorElServices, anchorElCompany });
  const customPaperStyle = {
    borderRadius: "10px",
    width: "300px",
    top: "40px !importent",
    right: "120px",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ boxShadow: "none" }}
      >
        <Toolbar className={classes.toolbar}>
          <Box className={classes.mainBox}>
            <Box>
              <img
                className={classes.mainLogoSize}
                alt="logo"
                src="assets/logos/mainlogoGSD.png"
              />
              <Typography align="center" className={classes.logoTExt}>
                GET. STUFF. DONE.
              </Typography>
            </Box>
            <Box className={classes.menuBoxParent}>
              <Box className={classes.menuBoxPopver}>
                <Box
                  className={classes.menuBoxPopver}
                  aria-describedby={idServices}
                  variant="contained"
                  onClick={handleClickS}
                >
                  <Typography
                    className={
                      anchorElServices
                        ? classes.menuTextActive
                        : classes.menuText
                    }
                  >
                    Services
                  </Typography>
                  {anchorElServices ? (
                    <KeyboardArrowUpIcon
                      className={
                        anchorElServices
                          ? classes.downarrowActive
                          : classes.downarrow
                      }
                    />
                  ) : (
                    <KeyboardArrowDownIcon
                      className={
                        anchorElServices
                          ? classes.downarrowActive
                          : classes.downarrow
                      }
                    />
                  )}
                </Box>
              </Box>
              <Popover
                id={idServices}
                open={openServices}
                anchorEl={anchorElServices}
                onClose={handleCloseS}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: customPaperStyle,
                }}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Service 1" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Service 2" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Explor All" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>
              <Box className={classes.menuBoxPopver}>
                <Box
                  className={classes.menuBoxPopver}
                  aria-describedby={idCompany}
                  variant="contained"
                  onClick={handleClickC}
                >
                  <Typography
                    className={
                      anchorElCompany
                        ? classes.menuTextActive
                        : classes.menuText
                    }
                  >
                    Company
                  </Typography>
                  {anchorElCompany ? (
                    <KeyboardArrowUpIcon
                      className={
                        anchorElCompany
                          ? classes.downarrowActive
                          : classes.downarrow
                      }
                    />
                  ) : (
                    <KeyboardArrowDownIcon
                      className={
                        anchorElCompany
                          ? classes.downarrowActive
                          : classes.downarrow
                      }
                    />
                  )}
                </Box>
              </Box>
              <Popover
                id={idCompany}
                open={openCompany}
                anchorEl={anchorElCompany}
                onClose={handleCloseC}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: customPaperStyle,
                }}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="About US" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Career" />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Meet The Team" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>

              <Box className={classes.menuBox}>
                <Typography className={classes.menuText}>Blog</Typography>
              </Box>
              <Box className={classes.menuBox}>
                <Typography className={classes.menuText}>Contact us</Typography>
              </Box>
            </Box>
            <Box className={classes.btnBox}>
              <Button className={classes.mainBtn} variant="contained">
                Get Started
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const useStyles = makeStyles()((theme) => {
  return {
    btnBox:{
      margin: 'auto 2px'
    },
    mainBtn: {
      backgroundColor: pallete.parimayBlue,
      color: pallete.primaryWhite,
      textTransform: "none",
      padding: "10px 30px",
      fontSize: "16px",
      fontWeight: "600",
    },
    popoverBox: {
      top: "100px !importent",
      left: "255px !importent",
    },
    downarrow: {
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
    },
    downarrowActive: {
      color: pallete.primaryPink,
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
    },
    mainLogoSize: {
      width: "183px",
      height: "76px",
      flexShrink: 0,
    },
    logoTExt: {
      color: pallete.primaryBlack,
      //   fontFamily: "Roboto",
      fontSize: "9px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    menuText: {
      margin: "auto",
      padding: "0 5px",
      color: pallete.primaryBlack,
      //   fontFamily: 'Roboto',
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
    },
    menuTextActive: {
      margin: "auto",
      padding: "0 5px",
      color: pallete.primaryPink,
      //   fontFamily: 'Roboto',
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
    },
    menuBoxParent: {
      ...styles.flexDRS,
    },
    menuBoxPopver: {
      ...styles.flexDRS,
      margin: "auto 10px",
      padding: "5px",
      color: pallete.black,
      ".MuiPopover-root": {
        top: "40px !importent",
        right: "120px",
      },
      "&:hover": {
        cursor: "pointer",
        color: pallete.primaryPink,
      },
    },
    menuBox: {
      ...styles.flexDRS,
      margin: "auto 20px",
      padding: "10px",
      color: pallete.black,
      "&:hover": {},
    },
    mainBox: {
      ...styles.flexDRS,
      width: "100%",
    },
    appBar: {
      background: "transparent",
      padding: "10px",
      height: "100px", // Set the desired height
      zIndex: 0,
      [theme.breakpoints.up("md")]: {
        padding: "10px 30px",
      },
    },
    toolBar: {
      display: "flex",
      flexDirection: "row",
      cursor: "pointer",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});
