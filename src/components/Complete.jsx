import { Text, Button, VStack, Row, Center, HStack, Divider } from "native-base";

const content = [
    'ZipCode',
    'Floor-Area',
    'Building-Type'
]
const Complete = (props) => {
    return <VStack mx={3} my={5} space={3} divider={<Divider/>} >
        {content.map((key,index)=>
        <HStack justifyContent="space-between"> 
        <Text>{key}:</Text> 
        <Text>{props.values[index]}</Text>
        </HStack>
        )}
      <Row justifyContent="spaceAround" space={3} mt="8">
      <Button flex={1} variant="ghost" onPress={props.onPrev}>
        Prev
      </Button>
      <Button flex={1} colorScheme="rgb(198,40,40)">
        Submit
      </Button>
    </Row>
    </VStack>

}

export default Complete;