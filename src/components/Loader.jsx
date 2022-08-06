import React from 'react';
import { HStack, Spinner, Heading } from 'native-base';

function Loader() {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
}

export default Loader;
