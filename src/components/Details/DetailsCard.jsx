import React, { useEffect, useState } from 'react';
import {
  useToast, VStack, HStack, Divider, Box, Text, Heading
} from 'native-base';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getWeatherDetails } from '../../requests';
import Loader from '../Loader';
import { blue, rowFontSize } from '../../config/theme';

const DetailsCard = () => {
  const [showLoader, setShowLoader] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();
  const [resp, setResp] = useState({});
  const form = useSelector((state) => state.formReducer);

  useEffect(() => {
    (async function fetch() {
      setShowLoader(true);
      const data = {
        zipCode: form.zipCode,
        floorArea: form.floorArea,
        buildingType: form.buildingType
      };
      try {
        const response = await getWeatherDetails(data);
        if (response.status === 200) {
          setResp(response.data);
        }
      } catch (err) {
        toast.show({
          title: err.response.data,
          type: 'danger',
          placement: 'bottom'
        });
        navigation.goBack();
      } finally {
        setShowLoader(false);
      }
    }());
  }, []);

  return (
    <Box>
      {showLoader ? <Loader /> : (
        <VStack divider={<Divider my="2" />} alignItems="center">
          <Heading mb={5} mx="auto">Report</Heading>
          {Object.keys(resp).map((key) => (
            <HStack key={key} flex={1} w="100%">
              <Divider color={blue} orientation="vertical" mr="3" />
              <Text flex={3} fontSize={rowFontSize} fontWeight={700} px={4} py={4}>{key}</Text>
              <Box flex={1}>
                <Divider
                  color={blue}
                  orientation="vertical"
                  mx={8}
                />
              </Box>
              <Text flex={3} fontSize={rowFontSize} px={4} py={4}>{resp[key]}</Text>
              <Divider color={blue} orientation="vertical" ml="3" />
            </HStack>
          ))}
          <Box />
        </VStack>
      )}
    </Box>
  );
};

export default DetailsCard;
