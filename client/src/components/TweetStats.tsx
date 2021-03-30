import React from "react";
import styled from "styled-components";
// import {  } from "../types/index";

const TweetStats = () => {
  return (
    <ResponseStyling>
      <HeaderStyle>Hello World, I'm TweetStats</HeaderStyle>
      <ResponseContainer>
        {/* <h3></h3> */}
      </ResponseContainer>
    </ResponseStyling>
  );
};

const ResponseStyling = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderStyle = styled.h1`
  text-align: center;
  border-bottom: 1px solid black;
`;

const ResponseContainer = styled.div`
  width: 500px;
`;

export default TweetStats;
