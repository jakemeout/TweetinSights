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

export interface TypeAheadResponse {
  typeahead_results: TypeAheadResults[];
}

export interface TypeAheadResults {
  connecting_user_count: number;
  connecting_user_ids: number[];
  id: number;
  id_str: string;
  inline: boolean;
  is_blocked: boolean;
  is_dm_able: boolean;
  is_protected: boolean;
  location: string;
  name: string;
  profile_image_url: string;
  profile_image_url_https: string;
  rounded_score: number;
  screen_name: string;
  social_proof: number;
  social_proofs_ordered: number[];
  length: number;
  __proto__: number[];
  tokens: number[];
  verified: boolean;
}
