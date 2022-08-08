import React, {
  forwardRef, useState, useImperativeHandle, useEffect
} from 'react';
import {
  FormControl, Input
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { setZipCode } from '../../redux/actions/formActions';
import { blue, green } from '../../config/theme';

const ZipCode = forwardRef((_, _ref) => {
  const [error, setError] = useState(-1);
  const dispatch = useDispatch();
  const { zipCode } = useSelector((form) => form.formReducer);

  useEffect(() => {
    if (zipCode === '') { setError(-1); } else setError(0);
  }, []);

  const validate = (value) => {
    if (/^\d{5}(-\d{4})?$/.test(value)) {
      setError(0);
      dispatch(setZipCode(value));
    } else {
      setError(1);
    }
  };

  useImperativeHandle(_ref, () => ({
    getValidation: () => error
  }));

  return (
    <FormControl isFullWidth isRequired isInvalid={error === 1}>
      <Input
        w="100%"
        size={['sm', 'md', 'lg']}
        placeholder="Enter Zip-Code"
        onChangeText={(value) => validate(value)}
        defaultValue={zipCode}
        p={3}
        borderColor={blue}
        _focus={{
          borderColor: green
        }}
      />
      {error === 1 ? (
        <FormControl.ErrorMessage>
          Enter a Valid Zip-Code
        </FormControl.ErrorMessage>
      ) : (
        <FormControl.HelperText mt={2} ml={1}>
          Only US zip-codes are accepted.
        </FormControl.HelperText>
      )}
    </FormControl>
  );
});

export default ZipCode;
