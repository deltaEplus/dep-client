import React, { useRef } from 'react';
import { VStack, Button, HStack } from 'native-base';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { steps } from '../constants/steps';
import { goNext, goPrev } from '../redux/actions/formActions';
import { blue } from '../config/theme';

const FormsHOC = (FormComponent) => {
  const NewComponent = ({ id }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const errorRef = useRef();

    const onPrev = () => dispatch(goPrev());

    const onNext = () => {
      if (id === steps.length - 1) {
        navigation.push('Details');
      } else if (!errorRef.current.getValidation()) dispatch(goNext());
    };

    return (
      <VStack px={5} my={5}>
        <FormComponent ref={errorRef} />
        <HStack justifyContent="space-around" space={3} mt="8">
          {id > 0 ? (
            <Button flex={1} onPress={onPrev} variant="ghost">
              Prev
            </Button>
          ) : null}
          <Button flex={1} onPress={onNext} colorScheme={blue}>
            {id < steps.length - 1 ? 'Next' : 'Submit'}
          </Button>
        </HStack>
      </VStack>
    );
  };
  NewComponent.propTypes = {
    id: PropTypes.number.isRequired
  };
  return NewComponent;
};

FormsHOC.propTypes = {
  FormComponent: PropTypes.element
};

export default FormsHOC;
