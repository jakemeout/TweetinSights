export interface Tweet {
  text: string,
  publicMetrcis: PublicMetric,
  id: string,
  created_at: string,
}

export interface PublicMetric {
  retweet_count: number,
}

export interface TweetsResponse {
  tweets: Tweet[],
}

export interface AISays {
  id: string,

}