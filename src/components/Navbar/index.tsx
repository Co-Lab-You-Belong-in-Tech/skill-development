import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import React from "react";

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
      color:"green"
    },
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "20px",
      marginLeft: theme.spacing(10),
      "&:hover": {
        color: "blue",
        borderBottom: "1px solid white",
      },
    },
  }),
);

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5">
          
          <Link to="/" className={classes.logo}>SKILL MATCHA</Link>
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/feedback" className={classes.link}>
            Feedback
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
