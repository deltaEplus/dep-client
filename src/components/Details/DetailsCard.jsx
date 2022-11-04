/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  useToast, VStack, Divider, Box, Center, Button
} from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setIMG } from '../../redux/actions/imageActions';
import { getImageDetails, getWeatherDetails } from '../../requests';
import Loader from '../Loader';
import { black, blue } from '../../config/theme';
import TableRow from '../TableRow';

const DetailsCard = () => {
  const [showLoader, setShowLoader] = useState(false);
  const toast = useToast();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [resp, setResp] = useState({});
  const form = useSelector((state) => state.formReducer);
  const image = useSelector((state) => state.imageReducer);

  useEffect(() => {
    (async function fetch() {
      setShowLoader(true);
      try {
        let response;
        const { img } = image;
        if (img !== '') {
          const base64url = JSON.stringify(img.split('base64,')[1]);
          response = await getImageDetails({ imageUrl: base64url });
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
          title: err,
          type: 'danger',
          placement: 'bottom'
        });
      } finally {
        setShowLoader(false);
      }
    }());
    return () => dispatch(setIMG(''));
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
          onPress={() => {
            navigation.popToTop();
          }}
        >
          Go To Home
        </Button>
      </Center>
    </Center>
  );
};

export default DetailsCard;
