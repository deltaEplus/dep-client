import React, { useState } from 'react';
import {
  Text,
  Button,
  VStack,
  Row,
  HStack,
  Divider,
  Modal,
  useToast
} from 'native-base';
import PropTypes from 'prop-types';

import { getWeatherDetails } from '../requests';

const content = ['ZipCode', 'Floor-Area', 'Building-Type'];

function Complete({ values, onPrev }) {
  const [showModal, setShowModal] = useState(false);
  const toast = useToast();
  const [resp, setResp] = useState({});
  const submitDetails = async () => {
    const data = {
      zipCode: values[0],
      floorArea: values[1],
      buildingType: values[2]
    };
    try {
      const response = await getWeatherDetails(data);
      if (response.status === 200) {
        setResp(response.data);
        setShowModal(true);
      }
    } catch (err) {
      toast.show({
        title: err.response.data,
        type: 'danger',
        placement: 'bottom'
      });
    }
  };
  return (
    <>
      <VStack mx={3} my={5} space={3} divider={<Divider />}>
        {content.map((key, index) => (
          <HStack justifyContent="space-between" key={key}>
            <Text>
              {key}
              :
            </Text>
            <Text>{values[index]}</Text>
          </HStack>
        ))}
        <Row justifyContent="space-around" space={3} mt="8">
          <Button flex={1} variant="ghost" onPress={onPrev}>
            Prev
          </Button>
          <Button flex={1} colorScheme="rgb(198,40,40)" onPress={submitDetails}>
            Submit
          </Button>
        </Row>
      </VStack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Details Required for Calculation</Modal.Header>
          <Modal.Body>

            {
              Object.keys(resp).map((item) => (
                <HStack justifyContent="space-between" key={item}>
                  <Text>
                    {item}
                    :
                  </Text>
                  <Text>{resp[item]}</Text>
                </HStack>
              ))
            }
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}

Complete.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  onPrev: PropTypes.func.isRequired
};

export default Complete;
