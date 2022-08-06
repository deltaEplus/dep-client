import React, { forwardRef, useState, useImperativeHandle } from 'react';
import {
  FormControl, Input
} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { setZipCode } from '../../redux/actions/formActions';

const ZipCode = forwardRef((props, _ref) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { zipCode } = useSelector((form) => form.formReducer);

  const validate = (value) => {
    if (/^\d{5}(-\d{4})?$/.test(value)) {
      setError(false);
      dispatch(setZipCode(value));
    } else {
      setError(true);
    }
  };

  useImperativeHandle(_ref, () => ({
    getValidation: () => error
  }));

  return (
    <FormControl isRequired isInvalid={error}>
      <Input
        isFullWidth
        size={['sm', 'md', 'lg']}
        placeholder="Enter Zip-Code"
        onChangeText={(value) => validate(value)}
        defaultValue={zipCode}
      />
      {error ? (
        <FormControl.ErrorMessage>
          Entered Zip code is InValid
        </FormControl.ErrorMessage>
      ) : (
        <FormControl.HelperText>
          Only US zip-codes Are Accepted.
        </FormControl.HelperText>
      )}
    </FormControl>
  );
});

export default ZipCode;
