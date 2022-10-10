import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const About: FunctionComponent = () => {
  return (
    <Grid container justifyContent="center" >
      <h1>About</h1>
      <p style={{padding: "20px"}}>
        Skill Matcha was created to help reduce the confusion that career
        transitioners experience while considering changing career paths. As
        part of the Co.Lab internship program, we hope you enjoy using this tool
        as much as we did creating it. Don’t forget to let us know what else you
        would like to see by leaving us a review.
      </p>
      <div>
        <h3>Product Management</h3>
        <p>Wesley Nderi</p>
        <h3>Product Design</h3>
        <p>Adaku Nwakanma</p>
        <h3>Development</h3>
        <p>Atilla Taha Kördüğüm</p>
        <p>Somdotta Sarkar</p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
      
    </Grid>
  );
};

export default About;
