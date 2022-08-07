import React from 'react';
import { ScrollView, Center, KeyboardAvoidingView } from 'native-base';
import { ImageBackground } from 'react-native';
import { bgColor, blue } from '../config/theme';

const bg = require('../../assets/bg.jpg');

const ScrollHOC = (ChildComponent) => {
  const WrappedComponent = () => (
    <ImageBackground
      style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
      source={bg}
    >
      <ScrollView
        flex={1}
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
            borderColor={blue}
            borderWidth={1.5}
            bgColor={bgColor}
            w={['90%', '75%', '55%']}
            m="auto"
            my={20}
            elevation={10}
          >
            <ChildComponent />
          </Center>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );

  return WrappedComponent;
};

export default ScrollHOC;
