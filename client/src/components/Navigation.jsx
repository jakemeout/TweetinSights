import React from "react";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavStyle>
      <h1>TweetinSights</h1>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  display: "flex",
  justifyContent: "flex-start",
  borderBottom: "1px solid",
  paddingBottom: "5px",
  font-family: "Helvetica"
`;

export default Navigation;
