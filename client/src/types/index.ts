export interface Tweet {
  text: string;
  public_metrics: PublicMetrics;
  id: string;
  created_at: string;
}

export interface PublicMetrics {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
}

export interface TweetsResponse {
  tweets: Tweet[];
  ai_response: AISays;
}
export interface AISays {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choices[];
}

export interface Choices {
  text: string;
  index: number;
  logprobs: number | null | undefined;
  finish_reason: string;
}
