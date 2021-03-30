import React from "react";
import styled from "styled-components";
import TwitterIcon from "../assets/images/twittericon.png";

const Navbar = () => {
  return (
    <NavStyle>
      <TwitterLogo src={TwitterIcon} alt="Twitter logo" />
      <h1>TweetInsights AI</h1>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-bottom: 2px solid grey;
`;

const TwitterLogo = styled.img`
  height: 50px;
  width: 50px;
`;

export default Navbar;
