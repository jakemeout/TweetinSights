import React, { useState, ChangeEvent, FC } from "react";
import AIResponse from "./AIResponse";
import styled from "styled-components";
import { TweetResponseState } from "../types/index";
import TweetStats from "./TweetStats";

const Searchbar: FC = () => {
  const [input, setInput] = useState<string>("");
  const [tweetResponse, setTweetResponse] = useState<
    TweetResponseState | undefined
  >(undefined);

  const onSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const search = () => {
    sendSearchQuery();
  };

  const sendSearchQuery = async (): Promise<void> => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: input }),
    };
    const response = await fetch("http://localhost:5000/api/tweets", config);
    const data = await response.json();
    setTweetResponse(data);
  };

  return (
    <SearchbarMainStyle>
      <label>Search most recent Tweet by handle</label>
      <br />
      <InputContainerStyle>
        <Input
          onChange={onSearchInput}
          value={input}
          placeholder="jakeme0ut"
          name="search"
          type="text"
        />
        <Button onClick={search}> Search</Button>
      </InputContainerStyle>
      {!!tweetResponse && <AIResponse tweetResponse={tweetResponse} />}
      {!!tweetResponse && <TweetStats />}
    </SearchbarMainStyle>
  );
};

const SearchbarMainStyle = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
`;
const Input = styled.input`
  padding-left: 10px;
  border-radius: 100px;
`;
const Button = styled.button`
  border-radius: 100px;
`;
export default Searchbar;
