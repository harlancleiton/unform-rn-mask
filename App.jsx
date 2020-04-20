import React, { useRef } from 'react';
import { View, Button } from 'react-native';
import { Form } from '@unform/mobile';

import Input from './src/components/Input';
import InputMask from './src/components/InputMask';

const App = () => {
  const formRef = useRef(null);

  function handleSubmit(data) {
    /**
      Out: { first_name: 'Lorem Ipsum', cpf: '11111111111' }
      On screen: { first_name: 'Lorem Ipsum', cpf: '111.111.111-11' }
    */
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="first_name" />
        <InputMask type="cpf" name="cpf" keyboardType="numeric" />
        <Button
          onPress={() => formRef.current.submitForm()}
          title="console.log"
        />
      </Form>
    </View>
  );
};

export default App;
