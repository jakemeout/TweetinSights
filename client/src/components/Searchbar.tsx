import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";

const SearchBar = (): JSX.Element => {
  const [value, setValue] = useState("");

  const onType = (text: React.SetStateAction<string>) => setValue(text);
  // const handleSubmit = () => 

  return (
    <SearchbarStyle>
      <div>
        Search Tweets:
        <input
          type="text"
          name="filter"
          value={value}
          onChange={(e) => onType(e.target.value)}
          // onSubmit={handleSubmit}
        />
      </div>
    </SearchbarStyle>
  );
};

const SearchbarStyle = styled.div`
  display: "flex",
  justifyContent: "flex-start",
  borderBottom: "1px solid",
  paddingBottom: "5px",
  font-family: "Helvetica"
`;

export default SearchBar;
