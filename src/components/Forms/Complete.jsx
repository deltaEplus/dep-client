import React, { forwardRef } from 'react';
import {
  Divider,
  VStack,
  View,
  Box
} from 'native-base';
import { useSelector } from 'react-redux';
import { black } from '../../config/theme';
import TableRow from '../TableRow';

const Complete = forwardRef(() => {
  const form = useSelector((state) => state.formReducer);

  return (
    <VStack divider={<Divider bgColor={black} />} alignSelf="stretch">
      <View />
      {Object.keys(form).map((key) => (
        <Box key={key}>
          <TableRow
            title={key === 'energyCost' ? 'Annual Energy Cost' : key.charAt(0).toUpperCase() + key.slice(1)}
            // eslint-disable-next-line no-nested-ternary
            value={key === 'floorArea' ? `${new Intl.NumberFormat('en-US').format(form[key])} sq.ft` : key === 'energyCost' ? `$ ${new Intl.NumberFormat('en-US').format(form[key])}` : form[key]}
          />
        </Box>
      ))}
      <View />
    </VStack>
  );
});

export default Complete;
