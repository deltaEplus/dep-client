import { Box, FormControl, Input, VStack, Button, Center } from "native-base";
import { useState } from "react";

const ZipCode = (props) => {
    const [formData, setData] = useState({});
    const [errors, setErrors] = useState(false);
    const validate = () => {
       if(/^\d{5}(-\d{4})?$/.test(formData.name)){ 
          setErrors(false);
          return true;
       }
       setErrors(true);
       return false;
      
    }
    
      const onSubmit = () => {
        validate() ? props.onNext(formData.name) : console.log('Validation Failed');
      };
    
      return <VStack my={5} mx={3}>
          <FormControl isRequired isInvalid={errors}>
            <Input isFullWidth size={["sm","md","lg"]} placeholder="Enter Zip-Code" onChangeText={value => setData({ ...formData,
            name: value
          })} />
            {errors ? <FormControl.ErrorMessage>Entered Zip code is InValid</FormControl.ErrorMessage> : <FormControl.HelperText>
                Only US zip-codes Are Accepted.
              </FormControl.HelperText>}
          </FormControl>
          <Button onPress={onSubmit} mt="8" colorScheme="rgb(198,40,40)">
            Next
          </Button>
        </VStack>

}

export default ZipCode;