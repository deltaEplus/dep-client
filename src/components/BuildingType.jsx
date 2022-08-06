import React, { useState } from 'react';
import {
  Row, Button, Select, CheckIcon, VStack
} from 'native-base';
import PropTypes from 'prop-types';

import { BUILDING_TYPES } from '../constants';

function BuildingType({ onNext, onPrev }) {
  const [buildingType, setBuildingType] = useState('');
  const clickNext = () => {
    if (buildingType !== '') onNext(buildingType);
  };
  const clickPrev = () => onPrev();
  return (
    <VStack mx="3" my="5">
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
        onValueChange={(itemValue) => setBuildingType(itemValue)}
      >
        {BUILDING_TYPES.map((type) => (
          <Select.Item label={type} value={type} key={type} />
        ))}
      </Select>
      <Row justifyContent="space-around" space={3} mt="8">
        <Button flex={1} onPress={clickPrev} variant="ghost">
          Prev
        </Button>
        <Button flex={1} onPress={clickNext} colorScheme="rgb(198,40,40)">
          Next
        </Button>
      </Row>
    </VStack>
  );
}

BuildingType.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
};

export default BuildingType;
