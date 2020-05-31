import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import styled from "styled-components"
import Axios from 'axios';
import About from './components/About';

const StyledContainer = styled.div`
    background-color : #121212;
    color : white;
`;

function App() {
  
  const [profileData,setProfileData] = useState(undefined);

    useEffect(() => {
      async function getData(){
        try {
          
          // const {data} = await Axios.get("https://us-central1-testingfunctions-6f247.cloudfunctions.net/testing");
          // setProfileData(data);
          const {localData} = require("./data/data.json")
          setProfileData(localData);
          
        } catch (error) {
          console.log(error);
          const {localData} = require("./data/data.json")
          setProfileData(localData);
        }
      };
      getData();
    },[]);


  if(!profileData)
  return ( <div className='wrapper'> Loading ... </div>);

  return (
    <StyledContainer>
      <Header />
      <About />
    </StyledContainer>
  );
}

export default App;
