import React from 'react';
import ScrollHOC from '../HOC/ScrollHOC';
import ImageCard from '../components/Processor/ImageCard';

const Processor = () => {
  const ProcessorPage = ScrollHOC(ImageCard);
  return (
    <ProcessorPage p={10} bw={1} />
  );
};

export default Processor;
