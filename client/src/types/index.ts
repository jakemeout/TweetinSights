export type TweetAIResponseState = {
  tweet?: string;
  ai_response?: {
    choices: { text: string }[];
  };
};

export type AIResponseProps = {
  tweetAIResponse?: TweetAIResponseState;
};


