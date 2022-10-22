import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import DrawerComponent from "../Drawer";
import skillMatcha from "../../assets/logo.png";
import chatIcon from "../../assets/chat.png"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navlinks: {
      marginLeft: theme.spacing(90),
      display: "flex",
    },
    anglings: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
    logo: {
      cursor: "pointer",
      textDecoration: "none",
    },
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "20px",
      marginLeft: theme.spacing(5),
      "&:hover": {
        color: "#C9E265",
        borderBottom: "1px solid #C9E265",
      },
    },
  }),
);

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar elevation={0} position="static" color="transparent">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <Link to="/" className={classes.link}>
              <img src={skillMatcha} alt="logo" />
            </Link>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/feedback" className={classes.link}>
                <img src={chatIcon} alt="chatIcon" />
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
