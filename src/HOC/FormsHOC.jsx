import { VStack, Button } from "native-base";

const FormsHOC = (FormComponent) => {

    function NewComponent(props) {

        function onPrev() {
          
        }
        function onNext() {
          
        }

        return (
          <VStack width="90%" mx="3" maxW="300px" margin={5}>   
          <FormComponent {...props} />
          <Row>
          <Button onPress={onPrev} mt="8" colorScheme="cyan">
            Prev
          </Button>
          <Button onPress={onNext} mt="8" colorScheme="cyan">
            Next
          </Button>
          </Row>
          </VStack>
        );
      }
      return NewComponent;
}

export default FormsHOC;