import {
  FormControl, Input, InputGroup, InputRightAddon, Text
} from 'native-base';
import React, {
  forwardRef, useState, useEffect, useImperativeHandle
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blue, green } from '../../config/theme';
import { setFloorArea } from '../../redux/actions/formActions';

const FloorArea = forwardRef((props, _ref) => {
  const [error, setError] = useState(-1);
  const dispatch = useDispatch();
  const { floorArea } = useSelector((form) => form.formReducer);

  const validate = (value) => {
    if (/^[0-9]*.?[0-9]+$/.test(value)) {
      setError(0);
      dispatch(setFloorArea(value));
    } else {
      setError(1);
    }
  };
  useEffect(() => {
    if (floorArea === '') { setError(-1); } else setError(0);
  }, []);

  useImperativeHandle(_ref, () => ({
    getValidation: () => error
  }));

  return (
    <FormControl isRequired isInvalid={error === 1}>
      <InputGroup isFullWidth>
        <Input
          flex={1}
          placeholder="Enter Floor Area"
          onChangeText={(value) => validate(value)}
          defaultValue={floorArea}
          p={3}
          borderColor={blue}
          _focus={{
            borderColor: green,
            borderWidth: '0.5'
          }}
        />
        <InputRightAddon
          borderColor={blue}
          bg="black"
          p={3}
        >
          <Text color="white">
            m^2
          </Text>
        </InputRightAddon>
      </InputGroup>
      {error === 1 ? (
        <FormControl.ErrorMessage>Invalid Area</FormControl.ErrorMessage>
      ) : null}
    </FormControl>
  );
});

export default FloorArea;
