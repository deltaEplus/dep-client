import React, { forwardRef } from 'react';
import {
  Text,
  HStack,
  Divider,
  VStack,
  Box
} from 'native-base';
import { useSelector } from 'react-redux';
import { rowFontSize, blue } from '../../config/theme';

const Complete = forwardRef(() => {
  const form = useSelector((state) => state.formReducer);

  return (
    <VStack divider={<Divider color={blue} my="2" />} alignItems="center">
      <Box />
      {Object.keys(form).map((key) => (
        <HStack key={key} alignSelf="stretch" h="39">
          <Divider color={blue} orientation="vertical" mr="3" />
          <Text textAlign="center" fontSize={rowFontSize} fontWeight={700} flex={3} py="2">{key}</Text>
          <Box flex={1}>
            <Divider color={blue} orientation="vertical" mx="3" />
          </Box>
          <Text fontSize={rowFontSize} flex={3} py="2">{form[key]}</Text>
          <Divider color={blue} orientation="vertical" ml="3" />
        </HStack>
      ))}
      <Box />
    </VStack>
  );
});

export default Complete;
