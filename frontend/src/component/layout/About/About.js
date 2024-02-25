import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import myPic from '../../../images/Warish.png'
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/warish-khan-a577b9220/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={myPic}
              alt="Founder"
            />
            <Typography>Warish Khan</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by @warishkhan. Only with the
              purpose to learn MERN STACK.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://warish.netlify.app/"
              target="blank"
            >
              <AccountCircleIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/warishkhan" target="blank">
              <GitHubIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
