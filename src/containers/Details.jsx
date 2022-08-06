import React from 'react';
import DetailsCard from '../components/Details/DetailsCard';
import ScrollHOC from '../hoc/ScrollHOC';

function Details() {
  const DetailsPage = ScrollHOC(DetailsCard);
  return (
    <DetailsPage />
  );
}

export default Details;
