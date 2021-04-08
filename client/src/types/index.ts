export type TweetResponseState = {
  tweet?: string;
  ai_response?: {
    choices: { text: string }[];
  };
};

export type AIResponseProps = {
  tweetResponse?: TweetResponseState;
};


