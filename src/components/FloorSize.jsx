import {
  FormControl, Input, VStack, Button, Row
} from 'native-base';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FloorSize({ onNext, onPrev }) {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState(false);
  const validate = () => {
    if (/^[0-9]*.?[0-9]+$/.test(formData.name)) {
      setErrors(false);
      return true;
    }
    setErrors(true);
    return false;
  };

  const clickNext = () => (
    validate()
      ? onNext(formData.name) : null
  );

  return (
    <VStack mx="3" my="5">
      <FormControl isRequired isInvalid={errors}>
        <Input
          isFullWidth
          size={['sm', 'md', 'lg']}
          placeholder="Enter FloorSize"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        {errors ? (
          <FormControl.ErrorMessage>Invalid Area</FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>Area in Meter Square</FormControl.HelperText>
        )}
      </FormControl>
      <Row justifyContent="space-around" space={3} mt="8">
        <Button flex={1} variant="ghost" onPress={onPrev}>
          Prev
        </Button>
        <Button flex={1} onPress={clickNext} colorScheme="rgb(198,40,40)">
          Next
        </Button>
      </Row>
    </VStack>
  );
}

FloorSize.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
};

export default FloorSize;
