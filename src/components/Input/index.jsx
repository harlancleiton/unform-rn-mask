import React, { useRef, useEffect, useCallback } from 'react';
import { TextInput } from 'react-native';
import { useField } from '@unform/core';

function Input({ name, onChangeText, rawValue, ...rest }) {
  const inputRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  const handleOnChange = useCallback(
    (text) => {
      if (inputRef.current) inputRef.current.value = text;

      if (onChangeText) onChangeText(text);
    },
    [onChangeText]
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return rawValue || ref.value;
      },
    });
  }, [fieldName, rawValue, registerField]);

  return (
    <TextInput
      style={{ borderColor: 'gray', borderWidth: 1, margin: 8 }}
      ref={inputRef}
      defaultValue={defaultValue}
      onChangeText={handleOnChange}
      {...rest}
    />
  );
}

export default Input;
