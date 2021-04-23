import React from "react";
import styled from "styled-components";
// import { TweetData } from "../types/index";
import { ResponsiveBar } from "@nivo/bar";

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

// ({ tweetResponse }: TweetData): JSX.Element
// like_count: 2,
// quote_count: 5,
// reply_count: 3,
// retweet_count: 10,
const TweetStats = () => {
  // const data = tweetResponse?.tweet_details?.tweet_data?.map();

  return (
    <ContainerStyling>
      {/* <HeaderStyle>Hello World, I'm TweetStats</HeaderStyle> */}
      {/* <ResponseContainer> */}
      <h1>7-Day Recent Tweet Stats</h1>
      <BarStyling>
        <ResponsiveBar
          data={mockData}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          keys={["like_count", "quote_count"]}
          indexBy="tweet"
        />
      </BarStyling>
    </ContainerStyling>
  );
};

const ContainerStyling = styled.div`
  margin-top: 5%;
`;

const BarStyling = styled.div`
  height: 600px;
  width: 400px;
`;

export default TweetStats;
