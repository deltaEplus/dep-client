import React from 'react';
import {
  Text, Image, Row, StatusBar
} from 'native-base';
import PropTypes from 'prop-types';
import { bgColor } from '../config/theme';

const logo = require('../../assets/logo.png');

const AppHeader = ({ route }) => (
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
      {route.name}
    </Text>
  </Row>
);

AppHeader.propTypes = {
  route: PropTypes.node.isRequired
};

export default AppHeader;
