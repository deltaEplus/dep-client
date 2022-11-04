/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Center, KeyboardAvoidingView } from 'native-base';
import { bgColor, black } from '../config/theme';

const ScrollHOC = (ChildComponent) => {
  const WrappedComponent = ({ p, bw }) => (
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
          p={p}
          borderRadius={10}
          borderColor={black}
          borderWidth={bw}
          bgColor={bgColor}
          w={['90%', '75%', '55%']}
          m="auto"
          elevation={10}
        >
          <ChildComponent />
        </Center>
      </KeyboardAvoidingView>
    </ScrollView>
  );
  WrappedComponent.propTypes = {
    p: PropTypes.number.isRequired,
    bw: PropTypes.number.isRequired
  };
  return WrappedComponent;
};

export default ScrollHOC;
