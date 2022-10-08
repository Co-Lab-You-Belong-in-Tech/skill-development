import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"; 

const useStyles = makeStyles((theme: Theme) => createStyles({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
      },
    anglings: {
        marginLeft: theme.spacing(10),
        display: "flex",
      },
     logo: {
        cursor: "pointer",
      },
      link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        },
      },

}));

function Navbar() {
    const classes = useStyles();
  
    return (
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Navbar
          </Typography>
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/about" className={classes.link}>
                About
              </Link>
              <Link to="/feedback" className={classes.link}>
                Contact
              </Link>
            </div>
        </Toolbar>
      </AppBar>
    );
  }
export default Navbar;