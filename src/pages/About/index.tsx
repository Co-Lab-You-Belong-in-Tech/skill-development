import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const About: FunctionComponent = () => {
  return (
    <Grid container justifyContent="center"  className="about-bg">
      <h1>About</h1>
      <p  className="about_p">
        Skill Matcha was created to help reduce the confusion that career
        transitioners experience while considering changing career paths. As
        part of the Co.Lab internship program. <br />
        We hope you enjoy using this tool
        as much as we did creating it. <br />
        <br />
        Don’t forget to let us know what else you
        would like to see by leaving us a review.
      </p>
      <div>
        <h3>Product Management</h3>
        <h4>Wesley Nderi</h4>
        <h3>Product Design</h3>
        <h4>Adaku Nwakanma</h4>
        <h3>Development</h3>
        <h4>Atilla Taha Kördüğüm</h4>
        <h4>Somdotta Sarkar</h4>
        <button className="home-btn">
          <Link to="/">Home</Link>
        </button>
      </div>
      
    </Grid>
  );
};

export default About;
