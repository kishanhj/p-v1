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
  const [mountData,setMountData] = useState(false);

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
      <About data={profileData} setMountData={setMountData}/>
      <AboutMe AboutMe={profileData.AboutMe} MountData= {mountData}/>
      <Experience experience={profileData.Experience} MountData= {mountData}/>
      <Project projects={profileData.Projects} MountData= {mountData}/>
      <Contact contact={profileData.Contact} MountData= {mountData}/>
      <Footer social={profileData.Social} MountData= {mountData}/>
    </StyledContainer>
  );
}

export default Index;
