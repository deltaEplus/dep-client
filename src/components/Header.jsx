/* eslint-disable global-require */
import React from 'react';
import {
  Text, Image, Row, StatusBar
} from 'native-base';

function AppHeader() {
  return (
    <Row
      bg="rgb(249, 250, 250)"
      px="1"
      py="3"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      elevation={10}
    >
      <StatusBar />
      <Image position="absolute" source={require('../../assets/logo.png')} h={50} w={50} alt="logo" m={5} />
      <Text flex={1} textAlign="center" fontSize="20" fontWeight="bold">
        DeltaE+
      </Text>
    </Row>
  );
}

export default AppHeader;
