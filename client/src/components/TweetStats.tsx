import React from "react";
import styled from "styled-components";
// import {  } from "../types/index";
import { ResponsiveBar } from "@nivo/bar";
// import { generateCountriesData } from "@nivo/generators";

const mockData = [
  {
    tweet: 234,
    like_count: 2,
    quote_count: 5,
  },
  {
    tweet: 244,
    like_count: 10,
    quote_count: 10,
  },
  {
    tweet: 823,
    like_count: 33,
    quote_count: 39,
  },
];

// like_count: 2,
// quote_count: 5,
// reply_count: 3,
// retweet_count: 10,
const TweetStats = () => {
  return (
    <ResponseStyling>
      {/* <HeaderStyle>Hello World, I'm TweetStats</HeaderStyle> */}
      {/* <ResponseContainer> */}
      <h1>7-Day Recent Tweet Stats</h1>
      <div style={{ height: "600px", width: "400px" }}>
        <ResponsiveBar
          data={mockData}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          keys={["like_count", "quote_count"]}
          indexBy="tweet"
        />
      </div>
    </ResponseStyling>
  );
};

const ResponseStyling = styled.div`
  margin-top: 5%;
`;

// const HeaderStyle = styled.h1`
//   text-align: center;
//   border-bottom: 1px solid black;
// `;

// const ResponseContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `;

export default TweetStats;
