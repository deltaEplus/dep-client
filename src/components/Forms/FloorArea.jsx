import {
  FormControl, Input
} from 'native-base';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFloorArea } from '../../redux/actions/formActions';

const FloorArea = forwardRef((props, _ref) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { floorArea } = useSelector((form) => form.formReducer);

  const validate = (value) => {
    if (/^[0-9]*.?[0-9]+$/.test(value)) {
      setError(false);
      dispatch(setFloorArea(value));
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
        placeholder="Enter FloorSize"
        onChangeText={(value) => validate(value)}
        defaultValue={floorArea}
      />
      {error ? (
        <FormControl.ErrorMessage>Invalid Area</FormControl.ErrorMessage>
      ) : (
        <FormControl.HelperText>Area in Meter Square</FormControl.HelperText>
      )}
    </FormControl>
  );
});

export default FloorArea;
