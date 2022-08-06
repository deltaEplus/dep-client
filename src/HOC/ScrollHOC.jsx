import React from 'react';
import { ScrollView, Center, KeyboardAvoidingView } from 'native-base';
import { bgColor } from '../config/theme';

const ScrollHOC = (ChildComponent) => {
  function WrappedComponent() {
    return (
      <ScrollView
        _contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <KeyboardAvoidingView>
          <Center
            py={10}
            px={10}
            borderRadius={15}
            bgColor={bgColor}
            w={['90%', '75%', '40%']}
            m="auto"
            my={20}
            elevation={10}
          >
            <ChildComponent />
          </Center>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
  return WrappedComponent;
};

export default ScrollHOC;
