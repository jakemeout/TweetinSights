import React from "react";
import styled from "styled-components";
import TwitterIcon from "../assets/images/twittericon.png";

const Navbar = () => {
  return (
    <NavStyle>
      <TwitterLogo src={TwitterIcon} alt="Twitter logo" />
      <h1>Tweet Insights AI</h1>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: warp;
  h1 {
    
  }
`;

const TwitterLogo = styled.img`
  height: 50px;
  width: 50px;
  align-self: flex-end;
`;

export default Navbar;

