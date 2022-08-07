import React from 'react';
import {
  Text, Image, Row, StatusBar
} from 'native-base';
import { bgColor } from '../config/theme';

const logo = require('../../assets/logo.png');

const AppHeader = () => (
  <Row
    bg={bgColor}
    px="1"
    py="3"
    justifyContent="space-between"
    alignItems="center"
    w="100%"
    elevation={10}
  >
    <StatusBar />
    <Image position="absolute" source={logo} h={50} w={50} alt="logo" m={5} />
    <Text flex={1} textAlign="center" fontSize="20" fontWeight="bold">
      DeltaE+
    </Text>
  </Row>
);

export default AppHeader;
