import React from "react";
import styled from "styled-components";
// import {  } from "../types/index";
import { ResponsiveBar } from "@nivo/bar";
// import { generateCountriesData } from "@nivo/generators";

const mockData = [
  {
    public_metrics: {
      like_count: 2,
      quote_count: 5,
      reply_count: 3,
      retweet_count: 10,
    },
  },
];

const TweetStats = () => {
  return (
    <ResponseStyling>
      {/* <HeaderStyle>Hello World, I'm TweetStats</HeaderStyle> */}
      {/* <ResponseContainer> */}
        <ResponsiveBar
          data={mockData} 
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          keys={["likes", "quotes", "replies", "retweets"]}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          indexBy="public_metrics"
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      {/* </ResponseContainer> */}
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

// const ResponseContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `;

export default TweetStats;
