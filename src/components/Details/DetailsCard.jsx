import React, { useEffect, useState } from 'react';
import {
  useToast, VStack, Divider, Box, Center
} from 'native-base';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getWeatherDetails } from '../../requests';
import Loader from '../Loader';
import { black } from '../../config/theme';
import TableRow from '../TableRow';

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
        if (err.response.status === 400) {
          toast.show({
            title: err.response.data,
            type: 'danger',
            placement: 'bottom'
          });
          navigation.popToTop();
        } else {
          toast.show({
            title: 'Something went wrong',
            type: 'danger',
            placement: 'bottom'
          });
          navigation.popToTop();
        }
      } finally {
        setShowLoader(false);
      }
    }());
  }, []);

  return showLoader ? <Loader /> : (
    <Center w="100%">
      <VStack w="100%" divider={<Divider bgColor={black} my="2" />} alignSelf="stretch">
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
    </Center>
  );
};

export default DetailsCard;
