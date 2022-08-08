import React from 'react';
import {
  HStack, Spinner, Heading, Center
} from 'native-base';

const Loader = () => (
  <Center h="100%" p={10}>
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  </Center>
);

export default Loader;
