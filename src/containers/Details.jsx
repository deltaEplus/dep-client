import React, { lazy, Suspense } from 'react';
import Loader from '../components/Loader';
import ScrollHOC from '../HOC/ScrollHOC';

const DetailsCard = lazy(() => import('../components/Details/DetailsCard'));

const Details = () => {
  const DetailsPage = ScrollHOC(DetailsCard);
  return (
    <Suspense fallback={<Loader />}>
      <DetailsPage />
    </Suspense>
  );
};

export default Details;
