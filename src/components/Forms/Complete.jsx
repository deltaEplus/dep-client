import React, { forwardRef } from 'react';
import {
  Text,
  HStack,
  Divider,
  VStack,
  Heading,
  Box
} from 'native-base';
import { useSelector } from 'react-redux';
import { rowFontSize } from '../../config/theme';

const Complete = forwardRef(() => {
  const form = useSelector((state) => state.formReducer);

  return (
    <VStack divider={<Divider my="2" />} alignItems="center">
      <Heading mb={5} mx="auto">Review</Heading>
      {Object.keys(form).map((key) => (
        <HStack key={key} alignSelf="stretch" h="39">
          <Divider orientation="vertical" mr="3" />
          <Text fontSize={rowFontSize} fontWeight={700} flex={1} py="2">{key}</Text>
          <Divider orientation="vertical" mx="3" />
          <Text fontSize={rowFontSize} flex={1} py="2">{form[key]}</Text>
          <Divider orientation="vertical" ml="3" />
        </HStack>
      ))}
      <Box />
    </VStack>
  );
});

export default Complete;
