import React, { useState, useEffect } from 'react';
import Header from "./Header"
import styled from "styled-components"
import Axios from 'axios';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import AboutMe from './AboutMe';

const StyledContainer = styled.div`
    background-color : #121212;
    color : white;
    font-family: 'Montserrat', sans-serif;
`;

const Index = () => {
  
  
  const {data} = require("../data/data.json")
  const [profileData,setProfileData] = useState(data);

    useEffect(() => {
      async function getData(){
        try {
          const {data} = await Axios.get("https://us-central1-portfolio-61223.cloudfunctions.net/getPortFolioData");
          setProfileData(data.data);
          // console.log(data.data)
        } catch (error) {
          console.log(error);
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
      <AboutMe AboutMe={profileData.AboutMe} />
      <Experience experience={profileData.Experience} />
      <Project projects={profileData.Projects} />
      <Contact contact={profileData.Contact} />
      <Footer social={profileData.Social}/>
    </StyledContainer>
  );
}

export default Index;
