import React from "react";
import styled from "styled-components";
import { TweetsResponse } from "../types/index";

import { ResponsiveBar } from "@nivo/bar";

const TweetStats = ({ data }: { data: TweetsResponse }): JSX.Element => {
  const { tweets } = data || {};
  const tweetMetrics = tweets.map((d, idx) => {
    // const date = new Date(d.created_at);
    // const formattedDate = date.toLocaleDateString();
    return {
      tweet_index: `tweet ${idx}`,
      id: d.id,
      retweet_count: d.public_metrics.retweet_count,
      reply_count: d.public_metrics.reply_count,
      like_count: d.public_metrics.like_count,
      quote_count: d.public_metrics.quote_count,
    };
  });

  console.log(tweetMetrics);
  return (
    <ContainerStyling>
      <BarStyling>
        <h1>7-Day Recent Tweet Stats</h1>
        <ResponsiveBar
          data={tweetMetrics}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          keys={["like_count", "quote_count", "retweet_count", "reply_count"]}
          indexBy="tweet_index"
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Tweets from most recent to least",
            legendPosition: "middle",
            legendOffset: 40,
          }}
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
  width: 1000px;
`;

export default TweetStats;
