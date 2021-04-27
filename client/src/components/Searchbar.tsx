import React, { useState, ChangeEvent, FC } from "react";
import AIResponse from "./AIResponse";
import styled from "styled-components";
import { TweetsResponse } from "../types/index";
// import { TypeAheadResponse } from "../types/index";
import TweetStats from "./TweetStats";
import MagnifyingGlass from "../assets/images/MagnifyingGlass.svg";

const Searchbar: FC = () => {
  const [input, setInput] = useState<string>("");
  const [tweetAIResponse, setTweetAIResponse] = useState<
    TweetsResponse | undefined
  >(undefined);
  const [typeAheadData, setTypeAheadResponse] = useState([]);

  const onSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    sendTypeAhead(event.target.value);
    setInput(event.target.value);
  };

  const search = () => {
    sendSearchQuery();
  };

  const sendTypeAhead = async (text: string): Promise<void> => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search_criteria: text }),
    };
    const response = await fetch("http://localhost:5000/api/typeahead", config);

    const data = await response.json();
    console.log(data);
    setTypeAheadResponse(data);
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
    setTweetAIResponse(data);
    console.log(data);
  };

  const suggestionSelected = (value: string) => {
    setInput(value);
  };

  const renderSuggestions = () => {
    if (typeAheadData.length === 0) return null;
    console.log(typeAheadData);
    return (
      <ul>
        {typeAheadData?.map((username) => (
          <li key={username} onClick={(e) => suggestionSelected(username)}>
            {username}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <SearchbarMainStyle>
      <label>Search most recent Tweet by handle</label>
      <br />
      <InputContainerStyle>
        <MagGlass src={MagnifyingGlass} alt="Search Input" />
        <Input
          onChange={onSearchInput}
          value={input}
          placeholder="Search Twitter"
          name="search"
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") return search();
          }}
        />
      </InputContainerStyle>
      {renderSuggestions()}
      {!!tweetAIResponse && <AIResponse data={tweetAIResponse} />}
      {!!tweetAIResponse && <TweetStats data={tweetAIResponse} />}
      {/* {console.log(typeAheadResponse)} */}
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
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border: 0.5px solid;
  border-radius: 100px;
  width: 200px;
`;
const Input = styled.input`
  padding-left: 20px;
  outline: blue;
  border: 0;
`;
const MagGlass = styled.img`
  height: 20px;
`;
export default Searchbar;
