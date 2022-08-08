import React from 'react';
import ScrollHOC from '../HOC/ScrollHOC';
import FormsCard from '../components/Forms/FormsCard';

const Forms = () => {
  const FormsPage = ScrollHOC(FormsCard);
  return (
    <FormsPage p={10} bw={1} />
  );
};

export default Forms;
