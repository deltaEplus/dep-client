import {
  Select, CheckIcon
} from 'native-base';
import React, { forwardRef, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blue, green } from '../../config/theme';
import { BUILDING_TYPES } from '../../constants/buildings';
import { setBuildingType } from '../../redux/actions/formActions';

const BuildingType = forwardRef((_, _ref) => {
  const dispatch = useDispatch();
  const { buildingType } = useSelector((form) => form.formReducer);

  useImperativeHandle(_ref, () => ({
    getValidation: () => buildingType === ''
  }));

  return (
    <Select
      isFullWidth
      size={['sm', 'md', 'lg']}
      borderWidth={1}
      borderColor={blue}
      p={3}
      selectedValue={buildingType}
      accessibilityLabel="Building Type"
      placeholder="Building Type"
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size="5" />,
        borderColor: green
      }}
      mt={1}
      onValueChange={(itemValue) => dispatch(setBuildingType(itemValue))}
    >
      {BUILDING_TYPES.map((type) => (
        <Select.Item label={type} value={type} key={type} />
      ))}
    </Select>
  );
});

export default BuildingType;
