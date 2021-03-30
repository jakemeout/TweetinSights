import React from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import styled from "styled-components";

const App = (): JSX.Element => {
  return (
    <AppStyle>
      <Navbar />
      <Searchbar />
    </AppStyle>
  );
};

const AppStyle = styled.div`
  
`;

export default App;
