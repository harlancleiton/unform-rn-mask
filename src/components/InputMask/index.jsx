import React, { useState, useCallback, forwardRef } from 'react';
import { TextInputMask } from 'react-native-masked-text';

import Input from '../Input';

const InputMask = ({ type, ...rest }, ref) => {
  const [value, setValue] = useState('');
  const [rawValue, setRawValue] = useState('');

  const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
    setValue(maskedValue);
    setRawValue(unmaskedValue);
  }, []);

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref,
        rawValue,
      }}
      {...rest}
    />
  );
};

export default forwardRef(InputMask);
