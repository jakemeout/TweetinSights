import React, { useState, ChangeEvent, FC } from "react";
import AIResponse from "./AIResponse";
import styled from "styled-components";
import { TweetsResponse } from "../types/index";
import { TypeAheadResults } from "../types/index";
import TweetStats from "./TweetStats";
import MagnifyingGlass from "../assets/images/MagnifyingGlass.svg";

const Searchbar: FC = () => {
  const [input, setInput] = useState<string>("");
  const [tweetAIResponse, setTweetAIResponse] = useState<
    TweetsResponse | undefined
  >(undefined);
  const [typeAheadData, setTypeAheadResponse] = useState<TypeAheadResults[]>(
    []
  );

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
    setTypeAheadResponse(data?.typeahead_results);
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
    console.log("suggested value", value);
    setInput(value);
    search();
    setTypeAheadResponse([])
  };

  const renderSuggestions = () => {
    console.log(typeAheadData);
    if (typeAheadData.length === 0 || typeAheadData === []) return null;
    return (
      <ul>
        {typeAheadData.map((typeaheadObj, idx) => (
          <li
            key={idx}
            onClick={(e) => suggestionSelected(typeaheadObj?.screen_name)}
          >
            {typeaheadObj?.screen_name}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <SearchbarMainStyle>
      <label>
        Search a user's most recent Tweet and Tweet stats by Twitter handle
      </label>
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
      {typeAheadData.length !== 0 && (
        <TypeAheadDropDownStyle>{renderSuggestions()}</TypeAheadDropDownStyle>
      )}
      {!!tweetAIResponse && <AIResponse data={tweetAIResponse} />}
      {!!tweetAIResponse && <TweetStats data={tweetAIResponse} />}
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
const TypeAheadDropDownStyle = styled.div`
  border: 0.5px solid;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  width: 200px;
  ul {
    list-style-type: none;
    text-align: left;
    margin: 0;
    padding: 0;
    border-top: 1px solid gray;
  }

  li {
    padding: 10px 5px;
    cursor: pointer;
  }

  li:hover {
    background: lightgray;
    text-decoration: underline;
  }
`;
export default Searchbar;
