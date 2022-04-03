import React from 'react';
import Common from './Common';
import web from "../src/images/profile.png";


const Home = () => {
  return (
    <>
      <Common name='Grow your business with' imgsrc={web} visit='/service' btnname='Get Started' />  
    </>
  );
}

export default Home;