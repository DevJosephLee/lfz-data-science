import React from 'react';
import Hero from '../components/hero';
import Essentials from '../components/essentials';
import Technologies from '../components/technologies';
import FirstChoice from '../components/first-choice';

export default function DataSciencePage(props) {
  return (
    <>
      <Hero />
      <Essentials />
      <Technologies />
      <FirstChoice />
    </>
  );
}
