import {
  FormControl, Input, InputGroup, Box
} from 'native-base';
import React, {
  forwardRef, useState, useImperativeHandle
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blue, green } from '../../config/theme';
import { setCompany, setMail, setTitle } from '../../redux/actions/formActions';

const UserDetails = forwardRef((_, _ref) => {
  const [error, setError] = useState(-1);
  const dispatch = useDispatch();
  const users = useSelector((user) => user.userReducer);
  const fields = [
    {
      name: 'Email-ID',
      key: 'mail',
      onChanged: (value) => {
        const lastAtPos = value.lastIndexOf('@');
        const lastDotPos = value.lastIndexOf('.');
        if (lastAtPos < lastDotPos && lastAtPos > 0 && value.indexOf('@@') === -1 && lastDotPos > 2 && (value.length - lastDotPos) > 2) {
          setError(0);
          dispatch(setMail(value));
        } else {
          setError(1);
        }
      }
    },
    {
      name: 'Title',
      key: 'title',
      onChanged: (value) => {
        dispatch(setTitle(value));
      }
    },
    {
      name: 'Company',
      key: 'company',
      onChanged: (value) => {
        dispatch(setCompany(value));
      }
    }
  ];

  useImperativeHandle(_ref, () => ({
    getValidation: () => error
  }));

  return (
    fields.map((field, index) => (
      <FormControl key={field.name} isRequired isInvalid={error === 1}>
        <InputGroup isFullWidth>
          <Input
            flex={1}
            size={['sm', 'md', 'lg']}
            placeholder={`Enter ${field.name}`}
            onChangeText={field.onChanged}
            defaultValue={users[field.key]}
            p={3}
            borderColor={blue}
            _focus={{
              borderColor: green,
              borderWidth: '0.5'
            }}
          />
        </InputGroup>
        {error === 1 && index === 0 ? (
          <FormControl.ErrorMessage>Invalid EmailID</FormControl.ErrorMessage>
        )
          : null}
        <Box h={4} />

      </FormControl>
    )));
});

export default UserDetails;
