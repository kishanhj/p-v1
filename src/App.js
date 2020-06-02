import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import styled from "styled-components"
import Axios from 'axios';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const StyledContainer = styled.div`
    background-color : #121212;
    color : white;
    font-family: 'Montserrat', sans-serif;
`;

function App() {
  
  const [profileData,setProfileData] = useState(undefined);

    useEffect(() => {
      async function getData(){
        try {
          
          // const {data} = await Axios.get("https://us-central1-testingfunctions-6f247.cloudfunctions.net/testing");
          // setProfileData(data);
          const {data} = require("./data/data.json")
          setProfileData(data);
          
        } catch (error) {
          console.log(error);
          const {data} = require("./data/data.json")
          setProfileData(data);
        }
      };
      getData();
    },[]);


  if(!profileData)
  return ( <div className='wrapper'> Loading ... </div>);

  return (
    <StyledContainer>
      <Header />
      <About data={profileData}/>
      <Experience experience={profileData.Experience} />
      <Project projects={profileData.Projects} />
      <Contact contact={profileData.Contact} />
      <Footer social={profileData.Social}/>
    </StyledContainer>
  );
}

export default App;
