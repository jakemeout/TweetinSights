import React from "react";
import styled from "styled-components";
import { AIResponseProps } from "../types/index";

const AIResponse = ({ tweetResponse }: AIResponseProps): JSX.Element => {
  console.log(tweetResponse);
  return (
    <ResponseStyling>
      <HeaderStyle>GPT-3 Davinci Tweet Sentiment Analysis</HeaderStyle>
      <ResponseContainer>
        <h3>Tweet:</h3>
        <p>{tweetResponse?.tweet}</p>
        <h3>GPT-3 Sentiment Response:</h3>
        <p>{tweetResponse?.ai_response?.choices[0].text}</p>
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

export default AIResponse;
