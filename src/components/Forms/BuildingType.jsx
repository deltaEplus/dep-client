import {
  Select, CheckIcon
} from 'native-base';
import React, { forwardRef, useImperativeHandle } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BUILDING_TYPES } from '../../constants/buildings';
import { setBuildingType } from '../../redux/actions/formActions';

const BuildingType = forwardRef((props, _ref) => {
  const dispatch = useDispatch();
  const { buildingType } = useSelector((form) => form.formReducer);

  useImperativeHandle(_ref, () => ({
    getValidation: () => buildingType === ''
  }));

  return (
    <Select
      isFullWidth
      size={['sm', 'md', 'lg']}
      selectedValue={buildingType}
      accessibilityLabel="Building Type"
      placeholder="Building Type"
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size="5" />
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
