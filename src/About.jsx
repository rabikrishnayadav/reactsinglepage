import React from 'react';
import Common from './Common';
import web from "../src/images/weather.png";

const About = () => {
  return (
    <>
        <Common name='Welcome to About Page' imgsrc={web} visit='/contact' btnname='Contact Now' />
    </>
  );
}

export default About;