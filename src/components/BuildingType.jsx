import { useState } from "react";
import { Center, Row, Button, Select, CheckIcon, VStack } from "native-base";

const buildingTypes = [
  'Hospital',
  'Hotel',
  'University/College',
  'Office',
  'Data Center',
  'Factory',
  'Other',
];

const BuildingType = (props) => {
  const [buildingType, setBuildingType] = useState("");
  const onNext = () => {
    if (buildingType !== "") props.onNext(buildingType);
  };
  const onPrev = () => props.onPrev();
  return <VStack mx="3" my="5">
    <Select
      isFullWidth size={["sm", "md", "lg"]}
      selectedValue={buildingType}
      accessibilityLabel="Building Type"
      placeholder="Building Type" 
      _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} 
      mt={1} 
      onValueChange={itemValue => setBuildingType(itemValue)}>
      {buildingTypes.map((type) =>
        <Select.Item label={type} value={type} />
      )}
    </Select>
    <Row justifyContent="space-around" space={3} mt="8">
      <Button flex={1} onPress={onPrev} variant="ghost">
        Prev
      </Button>
      <Button flex={1} onPress={onNext} colorScheme="rgb(198,40,40)">
        Next
      </Button>
    </Row>
  </VStack>
}

export default BuildingType;