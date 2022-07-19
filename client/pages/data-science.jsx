import React from 'react';
import Hero from '../components/hero';
import Essentials from '../components/essentials';
import Technologies from '../components/technologies';

export default function DataSciencePage(props) {
  return (
    <div>
      <Hero />
      <Essentials />
      <Technologies />
    </div>
  );
}
