import {
  FormControl, Input, InputGroup, InputRightAddon, Text
} from 'native-base';
import React, {
  forwardRef, useState, useEffect, useImperativeHandle
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blue, green } from '../../config/theme';
import { setEnergyCost } from '../../redux/actions/formActions';

const EnergyCost = forwardRef((_, _ref) => {
  const [error, setError] = useState(-1);
  const dispatch = useDispatch();
  const { energyCost } = useSelector((form) => form.formReducer);

  const validate = (value) => {
    if (/^[0-9]*.?[0-9]+$/.test(value)) {
      setError(0);
      dispatch(setEnergyCost(value));
    } else {
      setError(1);
    }
  };
  useEffect(() => {
    if (energyCost === '') { setError(-1); } else setError(0);
  }, []);

  useImperativeHandle(_ref, () => ({
    getValidation: () => error
  }));

  return (
    <FormControl isRequired isInvalid={error === 1}>
      <InputGroup isFullWidth>
        <Input
          flex={1}
          size={['sm', 'md', 'lg']}
          placeholder="Enter Energy Cost"
          onChangeText={(value) => validate(value)}
          defaultValue={energyCost}
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
            $
          </Text>
        </InputRightAddon>
      </InputGroup>
      {error === 1 ? (
        <FormControl.ErrorMessage>Invalid Currency</FormControl.ErrorMessage>
      )
        : (
          <FormControl.HelperText mt={2} ml={1}>
            Only Numerics are allowed.
          </FormControl.HelperText>
        )}

    </FormControl>
  );
});

export default EnergyCost;
