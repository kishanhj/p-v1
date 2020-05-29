import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import Axios from 'axios';

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
    <div className='wrapper'>
      <Header />
    </div>
  );
}

export default App;
