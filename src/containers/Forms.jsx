import React, { useState } from 'react';
import ProgressSteps, {
  Title,
  Content
} from '@joaosousa/react-native-progress-steps';
import { Center } from 'native-base';
import BuildingType from '../components/BuildingType';
import Complete from '../components/Complete';
import FloorSize from '../components/FloorSize';
import ZipCode from '../components/ZipCode';

const colors = {
  title: {
    text: {
      normal: 'rgba(0,0,0,255)',
      active: '#005f73',
      completed: '#005f73'
    }
  },
  marker: {
    text: {
      normal: 'rgba(133,153,180,255)',
      active: 'rgba(13,71,161,255)',
      completed: 'white'
    },
    line: {
      normal: 'rgba(133,153,180,255)',
      active: 'rgba(13,71,161,255)',
      completed: 'rgba(13,71,161,255)'
    }
  }
};

function Forms() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(['', '', '']);
  const handleNextStep = (val) => {
    const arr = [...values];
    arr[step] = val;
    setValues(arr);
    setStep(step + 1);
  };

  const handlePrevStep = () => setStep(step - 1);

  return (
    <Center
      py={10}
      px={5}
      borderRadius={15}
      bgColor="warmGray.50"
      w={['90%', '75%', '40%']}
      mx="auto"
      my={20}
      elevation={10}
    >
      <ProgressSteps
        colors={colors}
        currentStep={step}
        steps={
          [
            {
              id: 1,
              title: <Title>ZipCode</Title>,
              content: (
                <Content style={{ width: '100%' }}>
                  <ZipCode onNext={handleNextStep} />
                </Content>
              )
            },
            {
              id: 2,
              title: <Title>Floor Area</Title>,
              content: (
                <Content style={{ width: '100%' }}>
                  <FloorSize onPrev={handlePrevStep} onNext={handleNextStep} />
                </Content>
              )
            },
            {
              id: 3,
              title: <Title>BuildingType</Title>,
              content: (
                <Content>
                  <BuildingType onPrev={handlePrevStep} onNext={handleNextStep} />
                </Content>
              )
            },
            {
              id: 4,
              title: <Title>Complete</Title>,
              content: (
                <Content>
                  <Complete onPrev={handlePrevStep} values={values} />
                </Content>
              )
            }
          ]
        }
      />
    </Center>
  );
}

export default Forms;
