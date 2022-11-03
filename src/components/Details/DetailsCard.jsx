/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  useToast, VStack, Divider, Box, Center, Button
} from 'native-base';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getImageDetails, getWeatherDetails } from '../../requests';
import Loader from '../Loader';
import { black, blue } from '../../config/theme';
import TableRow from '../TableRow';

const DetailsCard = ({ route }) => {
  const [showLoader, setShowLoader] = useState(false);
  const toast = useToast();
  const navigation = useNavigation();
  const [resp, setResp] = useState({});
  const form = useSelector((state) => state.formReducer);

  useEffect(() => {
    (async function fetch() {
      setShowLoader(true);
      try {
        let response;
        if (route !== null && route.params.itemId !== undefined) {
          response = await getImageDetails(JSON.stringify(route.params.itemId));
        } else {
          const data = {
            zipCode: form.zipCode,
            floorArea: form.floorArea,
            buildingType: form.buildingType,
            energyCost: form.energyCost
          };
          response = await getWeatherDetails(data);
          if (response.status === 200) {
            setResp(response.data);
          }
        }
      } catch (err) {
        toast.show({
          title: 'Something went wrong',
          type: 'danger',
          placement: 'bottom'
        });
      } finally {
        setShowLoader(false);
      }
    }());
  }, []);

  return showLoader ? <Loader /> : (
    <Center w="100%">
      <VStack
        w="100%"
        px={10}
        my={5}
        divider={<Divider bgColor={black} my="2" />}
        alignSelf="stretch"
      >
        <Box />
        {Object.keys(resp).map((key) => (
          <TableRow
            key={key}
            title={key}
            value={resp[key]}
          />
        ))}
        <Box />

      </VStack>
      <Center marginY={3}>
        <Button
          colorScheme={blue}
          onPress={() => navigation.popToTop()}
        >
          Go To Home
        </Button>
      </Center>
    </Center>
  );
};

export default DetailsCard;
