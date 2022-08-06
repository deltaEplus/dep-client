import React from 'react';
import ScrollHOC from '../hoc/ScrollHOC';
import FormsCard from '../components/Forms/FormsCard';

function Forms() {
  const FormsPage = ScrollHOC(FormsCard);
  return (
    <FormsPage />
  );
}

export default Forms;
