import React from 'react';
import {
  HStack, Divider, Text
} from 'native-base';
import PropTypes from 'prop-types';
import { black, rowFontSize } from '../config/theme';

const TableRow = ({ title, value }) => (
  <HStack
    h={49}
    alignSelf="stretch"
    space={1}
    alignItems="center"
  >
    <Divider bgColor={black} orientation="vertical" />
    <Text textAlign="center" flex={1} fontSize={rowFontSize} fontWeight={700} py={4}>{title}</Text>
    <Divider bgColor={black} orientation="vertical" />
    <Text textAlign="center" flex={1} fontSize={rowFontSize} py={4}>{value}</Text>
    <Divider bgColor={black} orientation="vertical" />
  </HStack>
);

TableRow.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default TableRow;
