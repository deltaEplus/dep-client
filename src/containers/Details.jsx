import React from 'react';
import DetailsCard from '../components/Details/DetailsCard';
import ScrollHOC from '../HOC/ScrollHOC';

const Details = () => {
  const DetailsPage = ScrollHOC(DetailsCard);
  return (
    <DetailsPage />
  );
};

export default Details;
